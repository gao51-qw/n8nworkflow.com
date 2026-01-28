# Collect & summarize multilingual news with NewsAPI, OpenAI & Google Sheets

> How it works
This workflow automatically collects the latest news articles from both English and Japanese sources using NewsAPI, summarizes them with OpenAI, and appends the results into a Google Sheet. The summaries are concise (about 50 characters) in Japanese, making it easy to review news highlights at a glance.

Set up steps
1. Create a Google Sheet with two tabs:
   - 01_Input (columns: Keyword, SearchRequired)
   - 02_Output (columns: Date, Keyword, Summary, URL)
2. Enter your own Google Sheet ID and tab names in the workflow.
3. Add your NewsAPI key in the HTTP Request nodes.
4. Connect your OpenAI account (or deactivate the summarization node if not needed).
5. Run the workflow manually or use the daily schedule trigger at 13:00.

This template is ready to use with minimal changes. Sticky notes inside the workflow provide extra guidance.


## 📊 Basic Information

- **Workflow ID:** 7996
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 371
- **Downloads:** 37
- **Created:** 2025/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7996)

## 👤 Author

- **Name:** Supira Inc.
- **Username:** @supira

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×2)
- **if** 
- **httpRequest** (×2)
- **stickyNote** (×8)
- **merge** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** (×2)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
