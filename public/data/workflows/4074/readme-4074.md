# Financial news digest with Google Gemini AI to Outlook email

> ## 🧠 Key Features

- Looping source scraping: Collects content from news sites you have selected (it might not work for all of them however)
- HTML extraction & cleaning: Parses, cleans, and filters messy website data to isolate only the most relevant content.
- AI-powered synthesis: Uses Google Gemini (via LangChain agent) to summarize and structure financial news into a clear, bullet-pointed format.
- Email-ready output: Generates styled HTML summaries with coral-colored headings, ideal for daily email reports.
- Fully automated delivery: Sends out beautifully formatted updates via Outlook — no manual work required.


## 🔧 Technologies Used

n8n workflow orchestration
LangChain agents for prompt logic and formatting
Google Gemini API for advanced NLP
Custom JS logic to manage dynamic inputs and cleanup
Microsoft Outlook API for final distribution

&gt; Feel free to reach out if needed ! 

## 📊 Basic Information

- **Workflow ID:** 4074
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 729
- **Downloads:** 72
- **Created:** 2025/5/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4074)

## 👤 Author

- **Name:** Louis
- **Username:** @louisdl

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** 
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **set** (×4)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **microsoftOutlook** 
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserItemList** 
- **aggregate** 
- **code** 
- **splitInBatches** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
