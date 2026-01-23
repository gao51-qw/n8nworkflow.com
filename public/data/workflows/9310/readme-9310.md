# Automate lead qualification & routing with GPT-4o-mini, Google Sheets & HighLevel CRM

> ## Description
Automatically qualify and route new leads from a Google Sheet into your CRM with AI-powered scoring and instant sales notifications. Turn raw form submissions into prioritized opportunities—effortlessly. ⚡

## What This Template Does
- Monitors a Google Sheet for new form submissions. 📄
- Uses Azure OpenAI (GPT-4o-mini) to analyze lead details (value, stage, company) and generate action items. 🤖
- Parses the AI response into clean JSON for structured processing. 🗂️
- Saves qualified lead data and AI-generated action items into a Lead Status sheet for tracking. 💾
- Categorizes leads into Hot, Warm, or Cold based on AI scoring. 🔥❄️
- Creates/updates the contact in HighLevel CRM. 📇
- Sends an email notification to the assigned sales rep with lead details and priority. 📧

## Key Benefits
- Save time with automated lead qualification instead of manual checks. ⏱️
- Ensure consistent Hot/Warm/Cold scoring across all leads. ✅
- Centralize lead data in both Google Sheets and CRM for tracking. 📊
- Keep sales teams aligned with instant notifications. 🚀
- Fully no-code configurable and customizable for your business logic. 🧩

## Features
- Google Sheets Trigger for new form rows. 📥
- AI Agent with Azure OpenAI (GPT-4o-mini) for lead scoring. 🧠
- JSON parsing node to clean AI output. ✂️
- Lead logging to “Lead Status” sheet. 📊
- Function node to categorize leads by score. 🎯
- CRM sync with HighLevel to update/create contact records. 🔗
- SMTP email notification to sales reps. ✉️

## Requirements
- n8n instance (cloud or self-hosted). 🧰
- Google Sheet with headers: Lead Name, Lead Email, Lead Contact No., Company Name, Opportunity Value, Stage of Lead; shared with n8n Google account. 📑
- Azure OpenAI access with a GPT-4o-mini deployment. ☁️
- HighLevel CRM account connected via OAuth. 📇
- SMTP email account configured in n8n. 📧

## Target Audience
- Sales teams handling inbound leads. 📈
- Agencies managing multiple client pipelines. 🤝
- Founders/startups wanting quick qualification and CRM sync. 🚀
- Ops teams needing reliable reporting of lead qualification. 🗂️

## Step-by-Step Setup Instructions (Concise)
- Create a Google Sheet with required headers; share with n8n account. 📋
- Configure the Google Sheets Trigger with the sheet’s Document ID. 🔐
- Connect your Azure OpenAI credentials and link to the AI Agent node. 🧠
- Assign your HighLevel CRM account credentials. 📇
- Set up SMTP credentials for the email send node. ✉️
- Import the workflow, update node configs, and run a test submission. ▶️

## Security Best Practices
- Share Google Sheets only with the n8n Google account (Editor). 🔒
- Keep API keys and credentials encrypted in n8n, not hardcoded. 🛡️
- Validate AI outputs before saving to CRM (via the parse node). ✅
- Regularly back up your Lead Status sheet and CRM data. 📂

## 📊 Basic Information

- **Workflow ID:** 9310
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 258
- **Downloads:** 25
- **Created:** 2025/10/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9310)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×4)
- **function** 
- **googleSheetsTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **code** 
- **googleSheets** 
- **highLevel** 
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
