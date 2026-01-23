# Fully automate blog creation with GPT & publish to WordPress via Google Sheets

> Creating high-quality, SEO-friendly blog posts consistently can be time-consuming. This template helps content creators, bloggers, SEO specialists, and agencies fully automate their blogging workflow. By combining AI content generation (GPT), Google Sheets for keyword management, and WordPress for direct publishing, this workflow saves hours of manual work and ensures professional results.

## ⚡ Use Cases

Automate content creation for niche blogs.

Generate SEO-optimized articles from keyword lists.

Keep a consistent publishing schedule without manual effort.

Scale content production for agencies or affiliate sites.

## ✅ Pre-requirements

Before using this template, you will need:

Google Sheets API credentials (for managing topics & keywords).

AI API key (e.g., OpenAI, LM Studio, Ollama, or any connected model).

WordPress credentials with API access.

Basic understanding of n8n workflow editor.

## 🔧 Step-by-Step Setup

- Connect Google Sheets:
- Add your API credentials.-
- Use the sheet to store keywords, titles, and categories.
- Integrate AI Model (GPT or others):
- Insert your API key into the AI node.
- Customize the SEO writing prompt for Rank Math 90+ score.

## Content Processing:

The workflow will fetch one keyword at a time.

AI will generate a 1200–1500+ word SEO blog post.

Output is cleaned into proper HTML.

## Publish to WordPress:

Configure the WordPress node with your site credentials.

Automatically post as Draft or Published.

## 📊 Basic Information

- **Workflow ID:** 8027
- **Complexity:** advanced
- **Node Count:** 56
- **Views:** 784
- **Downloads:** 78
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8027)

## 👤 Author

- **Name:** Zakwan
- **Username:** @zakwanzahid

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×9)
- **googleSheets** (×13)
- **code** (×18)
- **merge** 
- **stickyNote** (×14)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 56 nodes with 40 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
