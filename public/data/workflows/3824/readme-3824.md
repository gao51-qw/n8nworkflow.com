# Auto-generate MVP startup ideas from Reddit with AI & Excel storage

> 🧠 Reddit MVP Generator – Auto-Generate Startup Ideas from Real User Pain Points
The Reddit MVP Generator is a fully automated business idea mining system built in n8n. It scans trending posts and user comments on Reddit to identify real-world pain points and uses an AI-powered chain to generate detailed, structured MVP business ideas—including industry, business type, revenue potential, and startup cost estimates.

🚀 Key Features
Live Reddit Scraper: Select from a curated list of entrepreneur and business subreddits (e.g., r/smallbusiness, r/entrepreneur, r/marketing) to fetch top trending posts.

Comment Analysis: Pulls Reddit comments and flattens threads to extract community pain points.

AI Business Generator: Uses OpenRouter-compatible LLMs (like GPT-4o-mini or Gemini Flash) to analyze post content and comments. Outputs are structured JSON objects with MVP ideas.

Zero Duplicate Analysis: Automatically deduplicates previously analyzed Reddit posts using a dynamic blocklist.

Excel Integration: Saves each MVP idea directly into your Microsoft Excel 365 sheet, organized by MVP, Industry, Pain Point, Startup Costs, and Revenue potential.

Easy Subreddit Selection: User-friendly form trigger lets you choose your target subreddit without editing the workflow.

Offline-Friendly: All results are stored in Excel for later review or distribution—ideal for content creators, market researchers, or startup founders.

🛠️ Requirements
Free n8n account (self-hosted or cloud)

Reddit developer credentials

OpenRouter API key (supports Qwen, GPT-4o-mini, Gemini)

Microsoft Excel 365 with Azure OAuth2 app setup

📦 What You Get
Complete n8n workflow file

Setup notes inside the workflow (via Sticky Notes)

Instructions for Excel table formatting and OAuth2 setup

Output schema designed for downstream automation or AI agents

## 📊 Basic Information

- **Workflow ID:** 3824
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 1185
- **Downloads:** 118
- **Created:** 2025/5/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3824)

## 👤 Author

- **Name:** Jesse White
- **Username:** @creativeaitools

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **reddit** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×7)
- **formTrigger** 
- **microsoftExcel** (×3)
- **aggregate** (×2)
- **code** (×5)
- **merge** (×3)
- **removeDuplicates** 
- **splitOut** (×2)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
