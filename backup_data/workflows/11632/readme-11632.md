# Automated product review monitoring with sentiment analysis via Decodo, Gemini & Telegram

> 

## Decodo-powered review aggregation to Google Sheets with Gemini analysis and Telegram alerts

### Who’s it for

This template is designed for e-commerce owners, marketplace sellers, product teams, and CX/reputation managers who need an automated way to monitor product reviews. It’s ideal for anyone tracking Amazon listings or other URLs and wants AI-powered sentiment, summaries, and alerts without manual scraping.

### What it does

This workflow automatically retrieves product URLs from Google Sheets, scrapes reviews using Decodo (community node), formats the extracted data, and analyzes it using Gemini AI. It produces both sentiment classification and a concise review summary. Results are saved to a Google Sheets log, and the workflow sends a Telegram alert whenever new reviews are processed. The entire pipeline runs on a schedule, ensuring continuous and fully automated monitoring.

### How it works
- A scheduled trigger starts the workflow.
- Google Sheets provides the list of product URLs.
- Each URL is processed through Decodo to extract user reviews.
- A Code node formats the raw review data.
- Gemini performs sentiment analysis and summarization.
- Results are appended to a Google Sheets review log.
- A Telegram message delivers a real-time summary and sentiment snapshot.

[Sign up for Decodo — get better pricing here](https://visit.decodo.com/MA90zY)

### Requirements
- Decodo API credentials (self-hosted community node)
- Google Sheets API Key
- Gemini AI credentials
- Telegram Bot + Chat ID
- n8n self-hosted (required for Decodo community node)

### How to set up
- Add your Decodo credentials to the Decodo node.
- Update both Google Sheets nodes with your document ID and sheet names.
- Insert your Gemini API key.
- Provide your Telegram Bot token and Chat ID.
- Adjust the schedule interval to your preference.
- Run the workflow once to validate mappings and output fields.

## How to customize

- Modify the Code node to change how reviews are formatted.
- Extend Gemini prompts for deeper analysis (keywords, categories, toxicity).
- Add filters to trigger alerts only on negative sentiment.
- Append additional metadata (timestamps, product IDs) to the Sheets log.
- Add email, Slack, or other communication channels.

### Disclaimer (Community Node)

This workflow uses a community node (Decodo) and therefore works only on self-hosted n8n instances. Be sure to install and trust the package before using it.

## 📊 Basic Information

- **Workflow ID:** 11632
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 863
- **Downloads:** 86
- **Created:** 2025/12/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11632)

## 👤 Author

- **Name:** Rully Saputra
- **Username:** @rullysaputra15

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@decodo/n8n-nodes-decodo.decodo** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **code** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **telegram** 
- **splitInBatches** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.sentimentAnalysis** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
