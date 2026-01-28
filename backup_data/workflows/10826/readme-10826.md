# Analyze social media sentiment & trends from Twitter & Facebook using GPT-4o

> ## Description
 Gain real-time audience intelligence with this cross-platform AI Sentiment Analyzer for Twitter (X) and Facebook. 📊🧠
 This workflow consolidates mentions and comments, performs GPT-4o-powered sentiment and keyword analysis, summarizes audience mood, highlights dominant trends, and sends a polished HTML report via email — all automatically. Ideal for marketing and insights teams tracking brand conversations across social platforms. 🚀💬

## What This Template Does
 1️⃣ Starts manually to fetch the latest Twitter mentions and Facebook post comments. 🕹️
 2️⃣ Merges both datasets into a unified JSON structure for seamless cross-platform analysis. 🧩
 3️⃣ Validates incoming API data to ensure completeness before processing. ✅
 4️⃣ Runs a custom JavaScript transformation to normalize all messages and add sentiment placeholders. 🧠
 5️⃣ Uses GPT-4o to perform sentiment and keyword trend analysis, returning structured JSON insights. 📈
 6️⃣ Parses AI output to extract overall sentiment ratios and detailed post-level analysis. 🔍
 7️⃣ Generates a human-readable HTML summary using GPT-4o — featuring emojis, bullet insights, and trend sections. 🎨
 8️⃣ Emails the formatted sentiment report directly to the marketing team. ✉️
 9️⃣ Logs API or runtime errors automatically into Google Sheets for transparent monitoring. 🧾

## Key Benefits
 ✅ Provides an automated end-to-end pipeline for sentiment intelligence.
 ✅ Centralizes Twitter and Facebook audience data in one workflow.
 ✅ Delivers structured insights ready for dashboards or client reporting.
 ✅ Generates branded HTML summaries that are ready for emailing.
 ✅ Improves reliability with built-in error tracking and validation layers.

## Features
- Dual-platform integration (Twitter X API + Facebook Graph API).
- JavaScript logic for merging and normalizing social datasets.
- GPT-4o-based sentiment classification and keyword extraction.
- Structured JSON parsing and visualization pipeline.
- AI-generated HTML summary reports for presentation and sharing.
- Automated email dispatch via Gmail.
- Google Sheets logging for audit and debugging.
- Modular configuration — easily extendable to other social networks.

#3 Requirements
- Twitter OAuth2 credentials for fetching mentions.
- Facebook Graph API credentials for reading posts and comments.
- Azure OpenAI (GPT-4o) credentials for sentiment and summary generation.
- Gmail OAuth2 credentials for automated email delivery.
- Google Sheets OAuth2 credentials for error logging and tracking.

## Environment Variables
- TWITTER_API_KEY
- FACEBOOK_GRAPH_TOKEN
- AZURE_OPENAI_API_KEY
- GMAIL_REPORT_RECIPIENTS
- GOOGLE_SHEET_ERROR_LOG_ID

## Target Audience
 📈 Marketing and insights teams monitoring audience engagement.
 💬 Social media managers analyzing public sentiment.
 🧠 Data analysts exploring brand perception trends.
 💡 PR and communications teams managing online reputation.
 🧾 Operations or automation teams integrating AI analytics into dashboards.

## Step-by-Step Setup Instructions
 1️⃣ Connect all API credentials — Twitter, Facebook Graph, Azure OpenAI, Gmail, and Google Sheets.
 2️⃣ Update your Twitter user ID and Facebook Page ID in the respective nodes.
 3️⃣ Confirm the merge and validation logic in the Merge Platform Datasets and Validate API Response nodes.
 4️⃣ Check that your Azure OpenAI account has GPT-4o access enabled.
 5️⃣ Verify the Gmail recipient and test the “Send Email Summary” node for delivery.
 6️⃣ Link your Google Sheet with a tab named error log sheet to capture workflow exceptions.
 7️⃣ Run the workflow once manually to validate each layer — data, AI response, email delivery.
 8️⃣ Optionally, schedule it to run daily or weekly for automated sentiment insights. ✅


## 📊 Basic Information

- **Workflow ID:** 10826
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 135
- **Downloads:** 13
- **Created:** 2025/11/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10826)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** (×2)
- **httpRequest** 
- **facebookGraphApi** 
- **merge** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **gmail** 
- **googleSheets** 
- **if** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
