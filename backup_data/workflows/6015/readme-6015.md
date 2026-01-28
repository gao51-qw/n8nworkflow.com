# Generate & publish SEO blog posts to Blogger using OpenRouter AI & Mediastack News

> This n8n workflow automates the entire pipeline of generating, formatting, and publishing SEO-rich blog posts to a Blogger site—ideal for auto service businesses.

What it does:

⏱ Runs on a schedule via the Schedule Trigger

📰 Fetches trending news from Mediastack (technology category)

🖼 Generates relevant images using the Pexels API

🧠 Creates SEO-optimized content using AI agents (LangChain & OpenRouter)

📝 Formats content into Blogger-compatible HTML, including title, metadata, images, FAQs, and internal linking

🔄 Posts directly to Blogger via authenticated Google Blogger API

📢 Sends Telegram notifications with previews and publishing confirmations

🔐 Uses secure credentials (no hardcoded API keys)

Ideal For:

Bloggers and marketers looking to automate content creation

Auto repair, dealership, or detailing businesses maintaining a content strategy

Agencies managing multiple Blogger-based SEO campaigns

## 📊 Basic Information

- **Workflow ID:** 6015
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 3687
- **Downloads:** 368
- **Created:** 2025/7/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6015)

## 👤 Author

- **Name:** galelem
- **Username:** @hagtic

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **stickyNote** (×4)
- **telegram** (×2)
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **set** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
