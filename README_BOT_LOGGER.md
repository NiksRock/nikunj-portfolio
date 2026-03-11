# Bot Unanswered Question Logger — Setup Guide

Track every question your portfolio bot can't answer, for free, using Google Sheets + Apps Script.

---

## What this does

When a visitor asks the bot something it doesn't recognize, the question is automatically logged to a Google Sheet with:
- **Timestamp** — when it was asked
- **Question** — the exact message
- **Session ID** — groups questions from the same page visit

You can then review the sheet periodically and add new responses to `BOT_KNOWLEDGE_BASE` in `src/data/index.js`.

---

## Setup (5 minutes, 100% free)

### Step 1 — Create the Google Sheet

1. Go to [sheets.new](https://sheets.new)
2. Rename it to something like `Portfolio Bot Logs`
3. Add headers in Row 1:
   - A1: `Timestamp`
   - B1: `Question`
   - C1: `Session`

### Step 2 — Add the Apps Script

1. In your Sheet, click **Extensions → Apps Script**
2. Delete the default `myFunction()` code
3. Paste this:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data  = JSON.parse(e.postData.contents);
  sheet.appendRow([data.timestamp, data.question, data.session]);
  return ContentService.createTextOutput('OK');
}
```

4. Click **Save** (💾), name the project anything (e.g. `BotLogger`)

### Step 3 — Deploy as a Web App

1. Click **Deploy → New deployment**
2. Click the gear ⚙️ next to "Select type" → choose **Web app**
3. Set:
   - **Description**: `Portfolio bot logger`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
4. Click **Deploy**
5. Authorize when prompted (click "Review permissions" → your account → Allow)
6. **Copy the Web App URL** — it looks like:
   `https://script.google.com/macros/s/XXXXXXXX/exec`

### Step 4 — Add to your project

Create a `.env` file in your project root (if you don't have one):

```
VITE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_ID_HERE/exec
```

> ⚠️ Never commit your `.env` file. Add it to `.gitignore`.

For GitHub Pages deployment, add the secret in:
**Repo Settings → Secrets and variables → Actions → New repository secret**
- Name: `VITE_SHEETS_WEBHOOK_URL`
- Value: your web app URL

Then update your `package.json` build script or GitHub Actions workflow to include the env var.

---

## Checking your logs

Just open the Google Sheet. New rows appear within seconds of a visitor asking an unrecognized question.

**Sort by Column B** (Question) to spot patterns — multiple people asking similar things tells you what to add to the bot next.

---

## Adding responses

When you see a recurring question, add it to `BOT_KNOWLEDGE_BASE` in `src/data/index.js`:

```js
myNewTopic: {
  keywords: ['keyword1', 'keyword phrase'],
  responses: [
    "Your conversational answer here...",
  ],
},
```

---

## Notes

- The logger **fails silently** — if the webhook is down or misconfigured, nothing breaks for visitors
- The **toast notification** only shows when `VITE_SHEETS_WEBHOOK_URL` is set (dev/prod with env var configured)
- Each page load generates a new session ID, so you can track conversation flow
- Apps Script free tier supports ~10,000 requests/day — more than enough for a portfolio site
