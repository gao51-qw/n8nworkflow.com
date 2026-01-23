# Automated RSS monitoring with Gemini AI summaries and deduplication to Google Sheets

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Who's it for

Content creators, marketers, and researchers who need to monitor multiple RSS feeds and get AI-generated summaries without manual work.

## How it works

This workflow automatically monitors RSS feeds, filters new articles from the last X days, checks for duplicates, and generates structured AI summaries. It fetches full article content, converts HTML to markdown, and uses Gemini AI to create consistent summaries with quick takeaways, key points, and practical insights. All data is saved to Google Sheets for easy access and sharing.

The system processes RSS feeds in batches, ensuring no duplicate articles are processed twice by checking existing URLs in your Google Sheets. Each new article gets a comprehensive AI summary that includes the main message, key takeaways, important points, and practical applications.

## Requirements

- Google Sheets access
- OpenRouter API key for Gemini AI model or other language model
- RSS feed URLs to monitor

## How to set up

Copy the template Google Sheet, add your RSS feeds in the "RSS FEEDS" tab, configure Google Sheets and OpenRouter credentials in n8n, and adjust the time filter in the Settings node. The workflow can run manually or on schedule every hour.

## How to customize

Modify AI prompts for different summary styles, change the time filter duration, add more data fields to Google Sheets, or switch to a different AI model in the LLM Chat Model node.


## 📊 Basic Information

- **Workflow ID:** 5778
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 3395
- **Downloads:** 339
- **Created:** 2025/7/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5778)

## 👤 Author

- **Name:** Roman Rozenberger
- **Username:** @romek

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×3)
- **rssFeedRead** 
- **splitInBatches** (×2)
- **markdown** 
- **set** (×3)
- **if** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **scheduleTrigger** 
- **filter** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stickyNote** (×4)
- **noOp** 
- **httpRequest** 
- **html** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
