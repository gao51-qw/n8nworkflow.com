# Summarize private equity & M&A news from RSS feeds to Gmail with GPT-4

> ## Who’s it for
This template is for professionals, students, and investors who want a simple daily finance briefing. It is useful for anyone who follows private equity, mergers & acquisitions, and general market news but prefers short summaries instead of reading long articles.

## How it works
The workflow runs twice a day using a schedule trigger (default 09:00 and 15:00). It pulls articles from three RSS feeds: NYT Private Equity, DealLawyers M&A, and Yahoo Finance. The items are merged and limited to the five most recent stories. A code node formats them into a clean block of text. An AI Agent rewrites each article into a short, engaging 5–6 sentence summary. The results are delivered directly to your inbox via Gmail.

## How to set up
1. Add your Gmail credential and replace `{{RECIPIENT_EMAIL}}` with your email.  
2. Insert your OpenAI API key.  
3. (Optional) Replace the RSS feed URLs with your preferred sources.  
4. Adjust the schedule times if needed.

## Requirements
- n8n v1.112+  
- Gmail credential  
- OpenAI API key  

## How to customize
You can add more feeds, increase the number of articles, or translate summaries into another language. You can also deliver the summaries to Slack, Notion, or Google Sheets instead of email.

## 📊 Basic Information

- **Workflow ID:** 8933
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 398
- **Downloads:** 39
- **Created:** 2025/9/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8933)

## 👤 Author

- **Name:** Ali Muthana
- **Username:** @mont

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **merge** 
- **rssFeedRead** (×3)
- **limit** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **code** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
