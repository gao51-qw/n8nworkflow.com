# Schedule AI-formatted Google News digests with Gmail approval workflow

> # Automate Google News Digests with AI & Gmail Approval Workflow in n8n
<img src="https://massimobensi.com/shared/main-img.png">

## Overview

This n8n automation template shows how to automatically collect and format daily Google News digests on your chosen topics, send them to your Gmail inbox for quick approval, and—if declined—generate the next set of curated news articles until you approve.

==⚠️ Disclaimer: This workflow template uses community nodes and works only on n8n self-hosted instances. ==

## Use case 

Streamline content curation for social media, newsletters, or blog posts by scheduling an AI-formatted Google News workflow that saves time in finding trending stories.

## How to use

⏰ Schedule the automation to run at your preferred time.

🔎 Fetch the latest trending Google News on your selected topic with SerpApi integration.

🤖 Send articles in batches of 10 to an AI content formatter that generates clean HTML output.

📧 Receive an approval email in your Gmail inbox with the AI-formatted news digest.

❌ Decline the digest to trigger the next batch of 10 curated news articles until you approve.

📊 Workflow logic uses AirTable counters and a custom Code node to manage batching.

## Setup instructions

- Connect your SerpApi, AirTable, OpenAI, and Gmail accounts. In the Gmail node, set the variable $env.EMAIL_ADDRESS_ME or replace the “To” field with your email.

- In AirTable, create a free-tier base with two columns: WorkflowID and Counter. The workflow will manage row creation and deletion automatically.

- Define your news topic or keyword in the SerpApi “Search Query (q)” field.

- Run the workflow and check your Gmail inbox for your curated AI-powered news digest.

## Requirements

- AirTable account
- Gmail account
- SerpApi account
- OpenAI account

## Customising this workflow

⏱ Adjust the schedule in the “Schedule Trigger” node for daily, weekly, or custom timing.

🔑 Enter your niche news keyword in the “Search Query (q)” field of the SerpApi node.

📦 Change the batch size (default 10) inside the Code node “Extract Details.”

🎨 Personalize the Gmail approval email template inside the AI Agent node “Prepare Content Review Email” for branding or formatting preferences.

## 📊 Basic Information

- **Workflow ID:** 8464
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 45
- **Downloads:** 4
- **Created:** 2025/9/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8464)

## 👤 Author

- **Name:** Massimo Bensi
- **Username:** @noisefree

## 🏷️ Categories

- Market Research
- AI Chatbot

## 🔗 Nodes Used

- **scheduleTrigger** 
- **n8n-nodes-serpapi.serpApi** 
- **stickyNote** (×20)
- **@n8n/n8n-nodes-langchain.agent** 
- **airtable** (×4)
- **if** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
