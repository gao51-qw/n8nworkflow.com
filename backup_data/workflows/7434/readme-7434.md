# Analyze YouTube comments sentiment & keywords with Gemini AI and Telegram reporting

> # YouTube Comment Sentiment & Keyword Extractor

**Template Google Sheets:** [Click here to open](https://docs.google.com/spreadsheets/d/1LBlCLH8L-eooAlfGq66_cLTbxyCse83c1VZaea0tjMg/edit?usp=sharing)

This workflow automatically retrieves comments from YouTube videos listed in Google Sheets, analyzes sentiment and keywords using an LLM, stores the results, then generates an aggregate summary and sends a report to Telegram.

---

## ✨ Key Features
- **Automated Scheduling** – Runs the process at regular intervals.
- **Google Sheets Integration** – Fetches a list of videos and stores analysis results directly in Google Sheets.
- **YouTube Comment Retrieval** – Retrieves top-level comments (up to 100 per video; can be extended with pagination).
- **Comment Parsing** – Flattens the API response into one item per comment.
- **AI Sentiment & Keyword Analysis** – Powered by an LLM model to extract:
  - Sentiment (`positive`, `neutral`, `negative`)
  - Sentiment score (-1 to 1)
  - Keywords (cleaned from stopwords, emojis, hashtags)
  - Language (ISO 639-1, 2-letter code)
- **Data Normalization** – Ensures LLM output is consistent and safe to write to the sheet.
- **Telegram Reporting** – Sends a concise report for each video directly to a Telegram chat.

---

## 🔐 Required Credentials
- **Google Sheets OAuth2 API** – Read & write access to the spreadsheet.
- **YouTube Data API Key** – To fetch comments via `commentThreads`.
- **OpenRouter API Key** – To access the LLM model.
- **Telegram Bot API** – To send reports via a Telegram bot.

---

## 🎁 Benefits
- **End-to-End Automation** – From comment retrieval to reporting, no manual steps required.
- **No Duplication** – Each comment is uniquely tracked by `comment_id`.
- **Data Transparency** – Raw and analyzed data stored neatly in Google Sheets.
- **Actionable Insights** – Sentiment and keyword summaries ready for content strategy decisions.
- **Scalable** – Can be extended for pagination, reply comment analysis, or additional metrics.
- **Cross-Platform** – Direct Telegram integration for easy monitoring on any device.


## 📊 Basic Information

- **Workflow ID:** 7434
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 378
- **Downloads:** 37
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7434)

## 👤 Author

- **Name:** Budi SJ
- **Username:** @budisj

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×2)
- **splitInBatches** 
- **httpRequest** 
- **set** 
- **code** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **aggregate** 
- **telegram** 
- **noOp** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
