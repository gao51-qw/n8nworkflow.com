# Web scraping & screenshot automation with GPT 4.1 mini and Firecrawl

> ## 🔍 Overview

This template uses Firecrawl’s `/search` API to perform AI-powered web scraping and screenshots — no code required. Just type natural language prompts, and an AI Agent will convert them into precise Firecrawl queries.

## ⚙️ Setup

1. Get your Firecrawl API Key from [https://firecrawl.dev](https://firecrawl.dev)
2. Add it to n8n using `HTTP Header Auth`:
   - Key: `Authorization`
   - Value: `Bearer YOUR_API_KEY`

## 🚀 What It Does

- Turns natural language into smart search queries
- Scrapes web data and captures full-page screenshots
- Returns titles, links, content, and images

## 💡 Example

Input:
&gt; Find AI automation pages on YouTube (exclude Shorts)

Result:
```json
{
  "query": "intitle:AI automation site:youtube.com -shorts",
  "limit": 5
}

## 📊 Basic Information

- **Workflow ID:** 6343
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1236
- **Downloads:** 123
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6343)

## 👤 Author

- **Name:** Luan Correia
- **Username:** @luanstartflow

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** (×4)
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
