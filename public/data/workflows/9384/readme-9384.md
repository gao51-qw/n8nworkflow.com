# Daily AI news digest from Hacker News with GPT-5 summaries and email delivery

> # Daily AI News Digest from Hacker News with GPT Summaries and Email Delivery


Automate your daily AI news briefing: fetch AI-tagged stories from Hacker News, filter for the last 24 hours, scrape and summarize with GPT, then deliver a clean HTML email digest—no manual curation needed.

## What It Does
Runs on schedule to fetch up to 1000 Hacker News stories tagged "AI", filters for today's posts, loops through each to scrape content from source URLs, generates concise AI summaries via OpenAI GPT, aggregates into a styled HTML newsletter, and sends via email.

## Setup Requirements
**Credentials Needed:**
- **OpenAI API Key**: Get from platform.openai.com/api-keys, add as "OpenAI" credential in n8n
- **SMTP Server**: Configure email credentials (Gmail, Zoho, etc.) in n8n's SMTP settings

**Configuration Steps:**
1. Import workflow JSON into n8n
2. Add OpenAI credential to "GPT 5 pro" node
3. Add SMTP credential to "Send email" node
4. Update `fromEmail` and `toEmail` fields in "Send email" node
5. Set schedule in "start" trigger node (default: daily)
6. Activate workflow

## Key Features
- **Smart Filtering**: Fetches 1000 stories, filters last 24 hours using date expressions
- **AI Summarization**: GPT generates heading + 2-sentence summaries with links
- **Reliable Scraping**: HTTP requests with markdown conversion for clean LLM input
- **Batch Processing**: Loops through items, processes sequentially
- **Responsive Design**: Mobile-friendly HTML email template with inline CSS
- **Aggregation**: Combines all summaries into single digest

## Customization Options
- **Change Keywords**: Modify "AI" filter in "Get many items" node
- **Adjust Timeframe**: Edit date filter in "Today" node
- **Tweak Summaries**: Customize GPT prompt in "News Summary Agent" node
- **Email Styling**: Update HTML/CSS in "Send email" node
- **Schedule**: Change frequency in "start" trigger

## Use Cases
- Personal daily AI briefings for researchers/developers
- Team knowledge sharing via automated newsletters
- Content curation for blogs or social media
- Trend monitoring for marketers

## Troubleshooting
- **No stories returned**: Check HN API limits, verify keyword filter
- **Scraping failures**: Some sites block bots—proxy noted in workflow but may need updates
- **Email not sending**: Verify SMTP credentials and test connection
- **Poor summaries**: Adjust GPT prompt or switch model

**Execution Time**: 2-10 minutes depending on story count

## 📊 Basic Information

- **Workflow ID:** 9384
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 2225
- **Downloads:** 222
- **Created:** 2025/10/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9384)

## 👤 Author

- **Name:** Daniel Nkencho
- **Username:** @daniel-automates

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **hackerNews** 
- **filter** 
- **splitInBatches** 
- **httpRequest** 
- **markdown** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **set** 
- **aggregate** 
- **emailSend** 
- **scheduleTrigger** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
