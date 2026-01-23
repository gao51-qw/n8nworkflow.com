## About This Template
Turn every sales meeting into a coaching opportunity. This workflow automatically analyzes **tldv** meeting recordings using **OpenAI (GPT-4)** to provide instant, actionable feedback to your sales team.

It acts as a virtual sales coach, evaluating key performance metrics like listening skills, question quality, and customer engagement without requiring a manager to listen to every call.

## How It Works
1. **Trigger:** The workflow starts automatically when a meeting transcript is ready in tldv (via Webhook).
2. **Data Retrieval:** It fetches the full meeting details and transcript from the tldv API.
3. **AI Analysis:** GPT-4 analyzes the conversation to score the sales rep's performance (e.g., Speaking vs. Listening balance, Clarity, Next Steps).
4. **Delivery:**
    * **Slack:** Sends a summary notification and a detailed markdown report to the team channel.
    * **Google Sheets:** Archives the scores and meeting data for long-term tracking.

## Who It’s For
* **Sales Managers:** To monitor team performance and identify coaching needs at scale.
* **Account Executives:** To get immediate feedback on their calls and self-correct.
* **Sales Enablement:** To track KPI trends over time.

## Requirements
* **n8n** (Cloud or Self-hosted)
* **tldv (Business Plan)** for API/Webhook access
* **OpenAI API Key** (GPT-4 access recommended)
* **Slack** Workspace
* **Google Sheets**

## Setup Steps
1. **Credentials:** Configure "Header Auth" for tldv (`x-api-key`) and OpenAI (`Authorization`). Connect OAuth for Slack and Google Sheets.
2. **Webhook:** Copy the Production URL from the first node (Webhook) and add it to your tldv **Settings &gt; Integrations &gt; Webhooks** (select Event: `TranscriptReady`).
3. **Google Sheets:** Create a sheet (e.g., named `Sales Feedback`) with columns for `Meeting Name`, `Score`, `Summary`, etc.
   * *Note: Be sure to update the Google Sheets node in the workflow to match your specific Sheet Name and Column headers.*