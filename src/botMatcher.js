import { BOT_KNOWLEDGE_BASE, SHEETS_WEBHOOK_URL } from "./data";

/**
 * Normalize text
 */
function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Split into tokens
 */
function tokenize(text) {
  return normalize(text).split(" ");
}

/**
 * Simple fuzzy similarity
 */
function similarity(a, b) {
  if (a === b) return 1;

  const longer = a.length > b.length ? a : b;
  const shorter = a.length > b.length ? b : a;

  if (longer.includes(shorter)) return 0.8;

  let matches = 0;
  for (let i = 0; i < shorter.length; i++) {
    if (longer[i] === shorter[i]) matches++;
  }

  return matches / longer.length;
}

/**
 * Keyword match score
 */
function scoreKeyword(queryTokens, keyword) {
  const keywordTokens = tokenize(keyword);

  let score = 0;

  for (const k of keywordTokens) {
    for (const q of queryTokens) {
      const sim = similarity(q, k);

      if (sim > 0.8) score += 3;
      else if (sim > 0.6) score += 2;
      else if (q.includes(k)) score += 2;
    }
  }

  return score * keywordTokens.length;
}

/**
 * Detect question intent
 */
function detectIntent(query) {
  if (query.includes("how many")) return "count";
  if (query.includes("where")) return "location";
  if (query.includes("who")) return "identity";
  if (query.includes("skills") || query.includes("tech")) return "skills";
  return null;
}

/**
 * Optional unanswered logger
 */
async function logUnanswered(question) {
  if (!SHEETS_WEBHOOK_URL) return;

  try {
    await fetch(SHEETS_WEBHOOK_URL, {
      method: "POST",
      body: JSON.stringify({
        question,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch {}
}

/**
 * Main matcher
 */
export function getBotResponse(input) {
  const query = normalize(input);

  // ─── PRIORITY INTENTS (always checked first) ───

  const abuseWords = ["stupid", "idiot", "dumb", "useless", "moron"];
  const greetingWords = ["hi", "hello", "hey", "yo"];

  if (abuseWords.some(w => query.includes(w))) {
    const responses = BOT_KNOWLEDGE_BASE.abuse.responses;
    return {
      response: responses[Math.floor(Math.random() * responses.length)],
      isFallback: false,
    };
  }

  if (greetingWords.some(w => query.includes(w))) {
    const responses = BOT_KNOWLEDGE_BASE.greeting.responses;
    return {
      response: responses[Math.floor(Math.random() * responses.length)],
      isFallback: false,
    };
  }

  // ─── NORMAL MATCHING ───

  const tokens = tokenize(query);

  let bestCategory = null;
  let bestScore = 0;

  for (const [key, data] of Object.entries(BOT_KNOWLEDGE_BASE)) {
    if (key === "fallback") continue;

    let score = 0;

    for (const keyword of data.keywords ?? []) {
      score += scoreKeyword(tokens, keyword);
    }

    if (score > bestScore) {
      bestScore = score;
      bestCategory = data;
    }
  }

  if (bestCategory && bestScore > 0) {
    const { responses } = bestCategory;

    return {
      response: responses[Math.floor(Math.random() * responses.length)],
      isFallback: false,
    };
  }

  const fallbacks = BOT_KNOWLEDGE_BASE.fallback;

  return {
    response: fallbacks[Math.floor(Math.random() * fallbacks.length)],
    isFallback: true,
  };
}