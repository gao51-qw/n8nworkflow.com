# Extract business leads from Reddit using GPT-4.1-mini analysis and Google Sheets

> This n8n workflow automates lead generation by searching Reddit for relevant posts based on keywords, filtering them, using OpenRouter AI to analyze and summarize content, and logging the findings (link, summary, etc.) to Google Sheets.

Watch the full setup tutorial on how I setup this ETL pipeline using n8n: 
https://youtu.be/F3-fbU3UmYQ

Required Authentication:

To run this workflow, you need to set up credentials in n8n for:

1. Reddit: Uses OAuth 2.0. *Requires creating an app on Reddit* to get a Client ID & Secret. (YT Tutorial for Reddit App Creation: https://youtu.be/zlGXtW4LAK8) 
2. OpenRouter: Uses an API Key. Generate this key directly from your OpenRouter account settings. (YT Tutorial : https://youtu.be/Cq5Y3zpEhlc)
3. Google Sheets: Uses OAuth 2.0. Requires setup in Google Cloud Console (enable Sheets API, create OAuth Client ID with n8n redirect URI) to get a Client ID & Secret.

Ensure these credentials are created and selected in the respective n8n nodes (Get Posts, OpenRouter Chat Model nodes, Output The Results).

## 📊 Basic Information

- **Workflow ID:** 3849
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 2718
- **Downloads:** 271
- **Created:** 2025/5/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3849)

## 👤 Author

- **Name:** Ari Nakos
- **Username:** @just-aristides

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **merge** (×2)
- **googleSheets** 
- **if** (×2)
- **set** (×3)
- **reddit** 
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
