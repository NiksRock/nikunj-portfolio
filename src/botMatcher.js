import { BOT_KNOWLEDGE_BASE } from './data';

/**
 * Matches user input against the knowledge base using keyword scoring.
 * Longer keyword matches score higher (e.g. "micro frontend" > "frontend").
 * Falls back to a random fallback response if no match is found.
 *
 * @param {string} input - Raw user input string
 * @returns {string} - Response text
 */
export function getBotResponse(input) {
  const query = input.toLowerCase().trim();

  let bestCategory = null;
  let bestScore = 0;

  for (const [key, data] of Object.entries(BOT_KNOWLEDGE_BASE)) {
    if (key === 'fallback') continue;

    const keywords = data.keywords ?? [];
    let score = 0;

    for (const keyword of keywords) {
      if (query.includes(keyword)) {
        // Weight multi-word keywords higher than single-word ones
        score += keyword.split(' ').length;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestCategory = data;
    }
  }

  if (bestCategory && bestScore > 0) {
    const { responses } = bestCategory;
    return responses[Math.floor(Math.random() * responses.length)];
  }

  const fallbacks = BOT_KNOWLEDGE_BASE.fallback;
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}
