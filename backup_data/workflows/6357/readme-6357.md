# Automated blog generation with Gemini AI, GitHub & Jekyll publishing

> 

## 📝 Use Case

This n8n workflow automates the creation and publication of technical blog posts based on a list of topics stored in Google Sheets. It fetches context using **Tavily** and **Wikipedia**, generates Markdown-formatted content with **Gemini AI**, commits it to a **GitHub repository**, and updates a **Jekyll-powered blog** — all without manual intervention.

Ideal for developers, bloggers, or content teams who want to streamline technical content creation and publishing.

---

## ⚙️ Setup Instructions

### 🔑 Prerequisites

- n8n (cloud or self-hosted)
- Tavily API key
- Google Sheets with blog topics
- Gemini (Google Palm) API key
- GitHub repository (Jekyll enabled)
- GitHub OAuth2 credentials
- Google OAuth2 credentials

### 🧩 Setup Steps

1. **Import** the workflow JSON into your n8n instance.
2. Set up the following credentials in n8n:
   - `Tavily API`
   - `Google Sheets OAuth2`
   - `Google Palm/Gemini AI`
   - `GitHub OAuth2`
3. Prepare your **Google Sheet**:
   - Columns: `Title`, `status`, `row_number`
   - Set `status` to blank for topics to be picked up.
4. Configure:
   - GitHub repo and `_posts/` path
   - Jekyll setup (front matter, `_config.yml`, GitHub Pages)
5. Adjust prompt/custom parameters if needed.
6. Enable and deploy the workflow. Schedule it daily or trigger manually.

---

## 🔄 Workflow Details

| Node | Function |
|------|----------|
| **Schedule Trigger** | Triggers the flow at a set interval |
| **Google Sheets (Get Topic)** | Fetches the next incomplete blog topic |
| **Extract Topic** | Parses topic text from the sheet |
| **Tavily Search** | Gathers up-to-date content related to the topic |
| **Wikipedia Tool** | Optionally adds more context or images |
| **Summarize Results** | Formats the context for the AI |
| **Gemini AI Agent (LangChain)** | Generates a Markdown blog post with YAML front matter |
| **Set File Parameters** | Prepares the filename, content, and commit message |
| **GitHub Commit** | Uploads the `.md` file to the `_posts/` directory |
| **Update Google Sheet** | Marks topic as `done` after successful commit |

---

## 🛠️ Customization Options

- Change LLM prompt (e.g. tone, depth, format).
- Use OpenAI instead of Gemini by switching nodes.
- Modify filename pattern or GitHub repo path.
- Add Slack/Discord notifications after publish.
- Extend flow to upload images or embed YouTube links.

---

## ⚠️ Community Nodes Used

This workflow uses the following **community nodes**:

- `@tavily/n8n-nodes-tavily.tavily` – for deep search

&gt; ⚠️ Ensure these are installed and enabled in your n8n instance.

---


## 💡 Pro Tips

- Use GitHub Actions to trigger an automatic Jekyll build post-commit.
- Structure blog posts with front matter, headings, and table of contents for SEO.
- Set `Schedule Trigger` to daily at a fixed time to keep content flowing.
- Enhance formatting in AI output using code blocks, images, and lists.

---

## ✅ Example Output

```markdown
---
title: "How LLMs Are Changing Web Development"
date: "2025-07-25"
categories: [webdev, AI]
tags: [LLM, Gemini, n8n, automation]
excerpt: "Learn how LLMs like Gemini are transforming how we generate and deploy developer content."
author: "Saswat Saubhagya"
---

## Table of Contents
- [Introduction](#introduction)
- [Understanding LLMs](#understanding-llms)
- [Use Cases in Web Development](#use-cases-in-web-development)
- [Challenges](#challenges)
- [Conclusion](#conclusion)

...



## 📊 Basic Information

- **Workflow ID:** 6357
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 582
- **Downloads:** 58
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6357)

## 👤 Author

- **Name:** Saswat Saubhagya Rout
- **Username:** @saswatsaubhagya

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolWikipedia** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **code** 
- **github** 
- **@tavily/n8n-nodes-tavily.tavily** 
- **scheduleTrigger** 
- **googleSheets** (×2)
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
