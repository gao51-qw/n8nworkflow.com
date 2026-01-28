# Auto-personalized first touch for new leads using GPT-4o-mini & Google Sheets

> ## Description
Generate personalized first-touch messages for every new lead — automatically. This workflow researches each company using AI, crafts a natural opener referencing their mission or focus, and writes the result back to your Google Sheet. Perfect for SDRs, founders, and marketers who want outreach personalization without the manual work. ✨

## What This Template Does
- Fetches lead data from Google Sheets (e.g., company, geography, category). 📄
- Uses Azure OpenAI GPT-4o-mini to research each company’s mission, focus, and audience. 🧠
- Generates a 2-sentence personalized message tailored for outreach. 💬
- Parses AI output into structured fields (company info + message). 🧩
- Writes the personalized message back to the original sheet for tracking. 💾
- Runs in batches to process leads one by one efficiently. 🔁

## Key Benefits
- Create authentic, tailored messages for every lead — instantly. 🚀
- Save hours of manual research and copywriting. ⏱️
- Keep all personalization data centralized in Google Sheets. 📊
- Scalable and repeatable for any lead list. ♻️
- Uses cost-efficient GPT-4o-mini for fast responses. ⚡

## Features
- Manual or scheduled trigger to process new leads. ▶️
- Google Sheets integration for lead data input/output. 🔗
- AI research and personalization via Azure OpenAI GPT-4o-mini. 🤖
- Structured JSON parsing for clean, usable output. ✨
- Automatic update to the “Personalised message” column in your sheet. 💬
- Visual documentation with sticky notes for clarity. 🗒️

## Requirements
- n8n instance (cloud or self-hosted). 🧰
- Google Sheet with columns: Account, Geography, Category, Personalised message. 📑
- Azure OpenAI API connection (GPT-4o-mini). ☁️
- Google Sheets OAuth credentials linked to n8n. 🔐

## Target Audience
- SDRs and sales teams scaling personalized outreach. 🎯
- B2B marketers automating LinkedIn or email personalization. 💌
- Founders or agencies building warm first-touch messages for prospects. 🤝

## Step-by-Step Setup Instructions (Concise)
- Prepare a Google Sheet with required columns. 📋
- Connect Google Sheets credentials in n8n. 🔑
- Add your Azure OpenAI connection and set model to GPT-4o-mini. 🧠
- Import and test the workflow with a few sample leads. 🧪
- Adjust message tone or structure in the system prompt if needed. 🧩
- Run manually or schedule the workflow for automation. ⏰

## Security Best Practices
- Share your Google Sheet only with the n8n service account (Editor access). 🔒
- Keep API keys and credentials stored securely in n8n. 🛡️
- Validate AI outputs before using them in outreach tools. ✅
- Regularly back up your sheet and clean old data. 🧹


## 📊 Basic Information

- **Workflow ID:** 9407
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 33
- **Downloads:** 3
- **Created:** 2025/10/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9407)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **splitInBatches** 
- **code** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
