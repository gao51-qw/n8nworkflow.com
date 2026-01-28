# Extract Clean Web Content with Anti-Bot Fallback for AI Agents & Workflows

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

# Clean Web Content Extraction with Anti-Bot Fallback
Extract clean and structured text from any webpage with optional fallback to an anti-bot scraping service. Ideal for AI tools and content workflows.

## 🧠 How it Works
This sub-workflow enables reliable and clean scraping of any public webpage by simply passing a **url** parameter. It is designed to be embedded into other workflows or used as a tool for AI agents.

It supports two output modes:
- **fulltext:** `true` — returns *{ title, text }* with full page content
- **fulltext:** `false` — returns *{ title, url, content }* with a short excerpt

💡 If the site is protected by anti-bot systems (like Cloudflare), it will automatically fallback to [Scrape.do](https://scrape.do/), a scraping API with a generous free plan.

🧩 This template requires the [n8n-nodes-webpage-content-extractor](https://www.npmjs.com/package/n8n-nodes-webpage-content-extractor) community node, so it only works in self-hosted n8n environments.

## 🚀 Use Cases
- As a reusable sub-workflow, via **Execute Sub-workflow** node.
-  As a tool for an AI Agent, compatible with **Call n8n Workflow Tool**.

Perfect for chatbots, summarization workflows, or RSS/feed enrichment. Empowers your AI Agent with the ability to browse and extract readable content from websites automatically.

## 🔖 Parameters
- `url` (string): the webpage URL to scrape
- `fulltext` (boolean): set `true` for full page content, `false` for summarized output

## ⚙️ Setup
- Install the community node [n8n-nodes-webpage-content-extractor](https://www.npmjs.com/package/n8n-nodes-webpage-content-extractor) in your self-hosted n8n instance.
- Create a free account at [Scrape.do](https://scrape.do/) and obtain your API Token.
- In the workflow, locate the **Scrape.do HTTP Request** node and configure the credentials using your API Token.
- Detailed step-by-step instructions are available in the workflow notes.

The Scrape.do API is only used as a fallback when conventional scraping fails, helping you preserve your API credits.

## 📊 Basic Information

- **Workflow ID:** 5392
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 502
- **Downloads:** 50
- **Created:** 2025/6/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5392)

## 👤 Author

- **Name:** Arthur Braghetto
- **Username:** @arthurmb

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **n8n-nodes-webpage-content-extractor.webpageContentExtractor** 
- **if** (×4)
- **httpRequest** (×2)
- **stopAndError** (×3)
- **set** (×2)
- **executeWorkflowTrigger** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
