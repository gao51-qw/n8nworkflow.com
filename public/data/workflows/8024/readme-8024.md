# Summarize RSS news with Gemini AI and store in Google Sheets

> This workflow pulls articles from multiple RSS feeds, filters them by date, fetches the full webpage content, and summarizes each article into a clean, structured Markdown format using **Google Gemini (via LangChain)**. Summaries are automatically saved into Google Sheets for long-term storage and into a daily sheet for fresh news.

👉 Example Google Sheet (pre-configured for this workflow):
[News Summaries Sheet](https://docs.google.com/spreadsheets/d/1SGYctcCWYHDxpuzv5o2Hp1uveRuOrnpRJ1DmaSUii7g/edit?gid=1944615086#gid=1944615086)

### Key Features

* **RSS Feeds from Google Sheets** – Flexible feed management.
* **Date Filtering** – Only process articles from the last X days.
* **Duplicate Checking** – Avoids re-processing links already stored.
* **Full Article Parsing** – Extracts clean body content, ignoring ads and images.
* **AI Summarization** – Uses a Gemini LLM to create concise, structured summaries with takeaways and insights.
* **Multi-Sheet Output** – Saves summaries to both a permanent “Articles” sheet and a “Today” sheet for daily highlights.
* **Scheduled or Manual Run** – Can run daily at a set time or on demand.

### Requirements

* Google Sheets account (for storing feeds, articles, and daily news).
* Google Gemini (PaLM) API credentials.

### Possible Use Cases

* Personal daily news digest.
* Team knowledge hub for curated, AI-summarized articles.
* Automated research assistant for niche topics.

## 📊 Basic Information

- **Workflow ID:** 8024
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 811
- **Downloads:** 81
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8024)

## 👤 Author

- **Name:** Jayesh Kaithwas
- **Username:** @j4t35h

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×5)
- **rssFeedRead** 
- **splitInBatches** (×2)
- **markdown** 
- **set** (×3)
- **if** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **scheduleTrigger** 
- **filter** 
- **stickyNote** 
- **noOp** 
- **httpRequest** 
- **html** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
