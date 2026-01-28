# Daily Competitor Tweet Summarizer with X API, GPT-5-Nano, and Gmail Delivery

> ## Automated Daily Competitor Tweet Summarizer with X API, GPT-5-Nano, and Gmail

Stay on top of your competition with this powerful n8n workflow that automatically fetches and summarizes your competitors’ latest tweets every day. Using the official X (formerly Twitter) API and OpenAI's GPT-5-Nano model, this template extracts insights from public tweets and sends concise summaries directly to your Gmail inbox.

Ideal for marketing teams, product managers, PR professionals, and competitive intelligence analysts, this solution turns noisy social feeds into clear, actionable summaries—automated and customized to your needs.

---

## Features

- Daily automation: Fetches competitor tweets every 24 hours using X API
- AI summarization: Uses GPT-5-Nano to highlight key insights and themes
- Smart filtering: Cleans and filters tweets for relevance before summarizing
- Email delivery: Sends summaries to Gmail (or your team’s inbox)
- Fully customizable: Modify schedules, accounts, and integrations as needed

---

## Setup Instructions

1. **Get API Keys:**
   - X API (Bearer Token) – from [developer.x.com](https://developer.x.com)
   - OpenAI API Key – from [platform.openai.com](https://platform.openai.com)
   - Gmail OAuth2 credentials (via Google Cloud Console)

2. **Configure in n8n:**
   - Import the workflow
   - Add credentials under the "Credentials" tab
   - Set target X usernames and schedule

3. **Customize Delivery (Optional):**
   - Set email subject, recipients
   - Add additional integrations (e.g., Slack, Notion, Sheets)

---

## How It Works

1. **Trigger:** A daily cron node initiates the workflow.
2. **Fetch User ID:** The workflow uses the X API to retrieve the user ID based on the provided username. This step is necessary because the tweet retrieval endpoint requires a user ID, not a username.
3. **Fetch Tweets:** Using the extracted user ID, the workflow queries the X API for recent tweets from the selected account.
4. **Clean Data:** Filters out replies, retweets, and any irrelevant content to ensure only meaningful tweets are summarized.
5. **Summarize:** GPT-4 processes the cleaned tweet content and generates a concise, insightful summary.
6. **Send Email:** The Gmail node sends the final summary to your inbox or chosen recipient.

---

## Use Cases

- Track competitor announcements and marketing messages
- Automate daily social media briefs for leadership
- Monitor trends in your industry effortlessly
- Keep your team aligned with market developments

---

## Requirements

- Valid X API credentials (Bearer token)
- OpenAI API key
- Gmail OAuth2 credentials
- Access to n8n (cloud or self-hosted)

---

## Delivery Options

While Gmail is the default, you can easily extend the workflow to integrate with:
- Slack
- Notion
- Google Sheets
- Webhooks
- Any supported n8n integration

---

Automate your competitive intelligence process and stay informed—without lifting a finger.


## 📊 Basic Information

- **Workflow ID:** 9355
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 360
- **Downloads:** 36
- **Created:** 2025/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9355)

## 👤 Author

- **Name:** ScoutNow
- **Username:** @scoutnow

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **twitter** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **gmail** 
- **scheduleTrigger** 
- **stickyNote** (×5)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
