/**
 * botLogger.js
 * Logs unanswered bot questions to a Google Sheet via a free Apps Script webhook.
 *
 * SETUP (one-time, fully free):
 * 1. Create a Google Sheet with columns: Timestamp | Question | Session
 * 2. In the Sheet, open Extensions → Apps Script
 * 3. Paste the script below into Code.gs and click Deploy → New deployment → Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the deployment URL into your .env as VITE_SHEETS_WEBHOOK_URL
 *
 * ── Apps Script code to paste ────────────────────────────────────────────────
 * function doPost(e) {
 *   const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   const data  = JSON.parse(e.postData.contents);
 *   sheet.appendRow([data.timestamp, data.question, data.session]);
 *   return ContentService.createTextOutput('OK');
 * }
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { SHEETS_WEBHOOK_URL } from './data';

// Simple session ID — new each page load, helps group conversations
const SESSION_ID = Math.random().toString(36).slice(2, 8).toUpperCase();

/**
 * Sends an unanswered question to Google Sheets.
 * Fails silently — never disrupts the user experience.
 *
 * @param {string} question - The user's original message
 */
export async function logUnansweredQuestion(question) {
  if (!SHEETS_WEBHOOK_URL || !question?.trim()) return;

  try {
    await fetch(SHEETS_WEBHOOK_URL, {
      method: 'POST',
      // Use text/plain to avoid CORS preflight — Apps Script handles it fine
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        question: question.trim(),
        session: SESSION_ID,
      }),
    });
  } catch {
    // Silently fail — logging should never break the portfolio
  }
}

/**
 * Logs a visitor's contact info alongside the question that triggered it.
 * @param {string} contact   - Email or phone the visitor provided
 * @param {string} question  - The original unanswered question
 */
export async function logContactInfo(contact, question) {
  if (!SHEETS_WEBHOOK_URL || !contact?.trim()) return;

  try {
    await fetch(SHEETS_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        question: `[CONTACT] Q: "${question?.trim() || 'N/A'}" → ${contact.trim()}`,
        session: SESSION_ID,
      }),
    });
  } catch {
    // Silently fail
  }
}
