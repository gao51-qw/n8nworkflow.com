# Discover business ideas from HackerNews posts with GPT-4.1 analysis and Google Sheets

> # What it is

This n8n workflow monitors top Hacker News posts (in the Front Page) and identifies business-related pain points using AI.

## How It Works

It filters posts by engagement (comments &gt; 80, points &gt; 200, and recent date), extracts key metadata, fetches the article content, and uses a GPT-4.1-based agent to detect and summarize pain points. 

Results are appended to a Google Sheet for further analysis.

## Setup

To run this workflow, you need to set up credentials for:


1. OpenRouter: Uses an API Key. Generate this key directly from your OpenRouter account settings. (YT Tutorial : https://youtu.be/Cq5Y3zpEhlc)
2. Google Sheets: Uses OAuth 2.0. Requires setup in Google Cloud Console (enable Sheets API, create OAuth Client ID with n8n redirect URI) to get a Client ID & Secret.

Ensure these credentials are created and selected in the respective n8n nodes (Get Posts, OpenRouter Chat Model nodes, Output The Results).




## 📊 Basic Information

- **Workflow ID:** 3877
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 1368
- **Downloads:** 136
- **Created:** 2025/5/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3877)

## 👤 Author

- **Name:** Ari Nakos
- **Username:** @just-aristides

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** 
- **if** (×2)
- **set** (×2)
- **stickyNote** (×3)
- **hackerNews** 
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **httpRequestTool** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
