import { BOT_KNOWLEDGE_BASE } from './data';

/**
 * Matches user input against the knowledge base using keyword scoring.
 * Longer keyword matches score higher (e.g. "micro frontend" > "frontend").
 *
 * @param {string} input - Raw user input string
 * @returns {{ response: string, isFallback: boolean }}
 */
export function getBotResponse(input) {
  const query = input.toLowerCase().trim();

  let bestCategory = null;
  let bestScore = 0;

  for (const [key, data] of Object.entries(BOT_KNOWLEDGE_BASE)) {
    if (key === 'fallback') continue;

    let score = 0;
    for (const keyword of (data.keywords ?? [])) {
      if (query.includes(keyword)) {
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
