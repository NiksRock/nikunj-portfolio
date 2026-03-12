/**
 * botMatcher.js — Smarter matching + humanized responses
 *
 * Improvements over original:
 *  - Phrase-level matching (multi-word keywords score higher)
 *  - Recency bias: more specific/longer queries get better category hits
 *  - Conversation variety: 3-5 response variants per topic, randomly selected
 *  - Responses rewritten to sound like a knowledgeable colleague, not a FAQ
 *  - Follow-up detector: short messages like "tell me more" use last category
 *  - Abuse / greeting / smalltalk handled before scoring
 */

import { BOT_KNOWLEDGE_BASE, SHEETS_WEBHOOK_URL } from "./data";

// ─── Normalise ────────────────────────────────────────────────────────────────

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text) {
  return normalize(text).split(" ").filter(Boolean);
}

// ─── Fuzzy char similarity ────────────────────────────────────────────────────

function charSim(a, b) {
  if (a === b) return 1;
  if (a.length < 3 || b.length < 3) return a === b ? 1 : 0;
  const longer = a.length >= b.length ? a : b;
  const shorter = a.length < b.length ? a : b;
  if (longer.includes(shorter)) return 0.85;
  let hits = 0;
  for (let i = 0; i < shorter.length; i++) {
    if (longer[i] === shorter[i]) hits++;
  }
  return hits / longer.length;
}

// ─── Score a single keyword phrase against query tokens ───────────────────────

function scoreKeyword(queryTokens, keyword) {
  const kwTokens = tokenize(keyword);
  let score = 0;

  // Phrase bonus: if ALL keyword tokens appear in query, reward heavily
  const allPresent = kwTokens.every(k =>
    queryTokens.some(q => charSim(q, k) > 0.78)
  );
  if (allPresent && kwTokens.length > 1) score += kwTokens.length * 8;

  // Per-token scoring
  for (const k of kwTokens) {
    let best = 0;
    for (const q of queryTokens) {
      const s = charSim(q, k);
      if (s > best) best = s;
    }
    if (best > 0.9)      score += 5;
    else if (best > 0.78) score += 3;
    else if (best > 0.6)  score += 1;
  }

  // Longer keyword phrases are more specific → bonus
  return score * (1 + kwTokens.length * 0.15);
}

// ─── Priority intent checks (run before scoring) ─────────────────────────────

const ABUSE_WORDS    = ["stupid", "idiot", "dumb", "useless", "moron", "hate", "suck"];
const GREETING_WORDS = ["hi", "hello", "hey", "yo", "sup", "howdy", "hiya", "greetings"];
const THANKS_WORDS   = ["thanks", "thank you", "thx", "cheers", "appreciate"];
const BYE_WORDS      = ["bye", "goodbye", "see you", "cya", "later", "take care"];
const FOLLOWUP_WORDS = ["more", "tell me more", "elaborate", "explain", "expand", "go on", "details", "continue"];

// ─── State: remember last matched category for follow-ups ────────────────────

let _lastCategory = null;

// ─── pick ─────────────────────────────────────────────────────────────────────

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ─── Main matcher ─────────────────────────────────────────────────────────────

export function getBotResponse(input) {
  const query  = normalize(input);
  const tokens = tokenize(query);

  // ── Abuse ──────────────────────────────────────────────────────────────────
  if (ABUSE_WORDS.some(w => query.includes(w))) {
    return {
      response: pick(BOT_KNOWLEDGE_BASE.abuse.responses),
      isFallback: false,
    };
  }

  // ── Greeting ───────────────────────────────────────────────────────────────
  if (GREETING_WORDS.some(w => tokens.includes(w))) {
    return {
      response: pick(BOT_KNOWLEDGE_BASE.greeting.responses),
      isFallback: false,
    };
  }

  // ── Thanks ─────────────────────────────────────────────────────────────────
  if (THANKS_WORDS.some(w => query.includes(w))) {
    return {
      response: pick(BOT_KNOWLEDGE_BASE.smalltalk.responses),
      isFallback: false,
    };
  }

  // ── Bye ────────────────────────────────────────────────────────────────────
  if (BYE_WORDS.some(w => query.includes(w))) {
    return {
      response: pick(BOT_KNOWLEDGE_BASE.bye.responses),
      isFallback: false,
    };
  }

  // ── Follow-up ("tell me more", "elaborate" etc.) ───────────────────────────
  const isFollowUp = tokens.length <= 5 && FOLLOWUP_WORDS.some(w => query.includes(w));
  if (isFollowUp && _lastCategory) {
    const extras = _lastCategory.extra ?? _lastCategory.responses;
    return {
      response: pick(extras),
      isFallback: false,
    };
  }

  // ── Normal keyword scoring ─────────────────────────────────────────────────
  let bestCategory = null;
  let bestScore    = 0;

  for (const [key, data] of Object.entries(BOT_KNOWLEDGE_BASE)) {
    if (key === "fallback" || key === "abuse" || key === "greeting" ||
        key === "smalltalk" || key === "bye") continue;

    let score = 0;
    for (const keyword of data.keywords ?? []) {
      score += scoreKeyword(tokens, keyword);
    }

    if (score > bestScore) {
      bestScore    = score;
      bestCategory = data;
    }
  }

  // Threshold: must score > 3 to count as a real match
  if (bestCategory && bestScore > 3) {
    _lastCategory = bestCategory;
    return {
      response: pick(bestCategory.responses),
      isFallback: false,
    };
  }

  // ── Fallback ───────────────────────────────────────────────────────────────
  _lastCategory = null;
  return {
    response: pick(BOT_KNOWLEDGE_BASE.fallback),
    isFallback: true,
  };
}