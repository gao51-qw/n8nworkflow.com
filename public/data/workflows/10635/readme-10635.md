# Automated resume tailoring with Telegram Bot, LinkedIn & OpenRouter AI

> This n8n workflow lets you effortlessly tailor your resume for any job using Telegram and LinkedIn. Simply send a LinkedIn job URL or paste a job description to the Telegram bot, and the workflow will:

Extract the job information (using optional proxy if needed)

Fetch your resume in JSON Resume format (hosted on GitHub Gist or elsewhere)

Use an OpenRouter-powered LLM agent to automatically adapt your resume to match the job requirements

Generate both HTML and PDF versions of your tailored resume

Return the PDF file and shareable download links directly in Telegram

The workflow is open-source and designed with privacy in mind. You can host the backend yourself to keep your data entirely under your control. It requires a Telegram Bot, a public JSON Resume, and an OpenRouter account. Proxy support is available for LinkedIn scraping.

Perfect for anyone looking to quickly customize their resume for multiple roles with minimal manual effort!

## 📊 Basic Information

- **Workflow ID:** 10635
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 199
- **Downloads:** 19
- **Created:** 2025/11/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10635)

## 👤 Author

- **Name:** Daniel Iliesh
- **Username:** @rocket-champ

## 🏷️ Categories

- HR
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **set** (×4)
- **httpRequest** (×4)
- **if** 
- **code** 
- **html** 
- **telegramTrigger** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
