# CYBERPULSE AI RedOps: internal phishing simulation for security training

> ## Description:

Simulate phishing awareness campaigns using OpenAI-generated emails. Send to target lists, log clicks with a webhook, and store results in Google Sheets. Built for internal testing and cyber awareness training.

## Who’s it for:

- Security teams conducting internal simulations
- GRC teams doing phishing awareness
- Red Teams wanting modular test setups

## How it works / What it does:

- Loads targets from Google Sheets
- Uses OpenAI to write realistic phishing emails
- Sends them via Gmail
- Tracks who clicked via webhook
- Logs actions in Sheets

## Requirements:

- Gmail or SMTP credentials
- Google Sheets OAuth2
- OpenAI API Key
- Self-hosted webhook or tunnel for /phishlink tracking

## How to customize:

- Replace email template with your own LLM prompt
- Swap Gmail for SendGrid, SES, etc.
- Edit domain in tracking link
- Use Cron or manual start

## 📊 Basic Information

- **Workflow ID:** 6506
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 107
- **Downloads:** 10
- **Created:** 2025/7/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6506)

## 👤 Author

- **Name:** Adnan Tariq
- **Username:** @adnantariq

## 🏷️ Categories

- SecOps
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** (×2)
- **gmail** 
- **googleSheets** (×3)
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
