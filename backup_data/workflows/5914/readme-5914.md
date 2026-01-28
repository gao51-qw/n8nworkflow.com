# TechCrunch AI article scraper & classifier with GPT-4.1-nano to sheets & Telegram

> ## How it works
This workflow scrapes the latest Artificial Intelligence articles from TechCrunch, then processes and classifies the content using OpenAI and LangChain nodes. The final result is saved to Google Sheets and sent as a summary to a Telegram group.

Workflow Logic:
Trigger: Schedules daily at 6AM Bangkok time.

Scraper: Extracts URLs and publish dates from TechCrunch's AI category.

Filter: Only continues if the article is from yesterday (to avoid duplication).

Content Fetch: Downloads and extracts article body text.

AI Agent:

Summarizes the article in Thai.

Scores it using strict journalism criteria (max 100).

Categorizes the news into one of 9 predefined categories.

Output:

Saves all structured data to Google Sheets.

Sends a summary to a Telegram group.

## Set up steps
🕒 Estimated setup time: 10–15 minutes

Connect your credentials:

Google Sheets (OAuth2)

Telegram

OpenAI account (via LangChain model)

Update the Telegram chatId and Google Sheets documentId/sheetName values.

Deploy and activate the workflow. It runs daily without manual intervention.


## 📊 Basic Information

- **Workflow ID:** 5914
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 1103
- **Downloads:** 110
- **Created:** 2025/7/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5914)

## 👤 Author

- **Name:** Mujahid Kabae
- **Username:** @myhit

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **html** (×2)
- **splitOut** 
- **set** (×2)
- **httpRequest** (×2)
- **stickyNote** 
- **splitInBatches** 
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **wait** 
- **switch** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
