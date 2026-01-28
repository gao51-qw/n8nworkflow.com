# Multilingual email auto-replies with DeepL, GPT-4o and Slack human approval

> ## Who's it for

Customer support teams, sales representatives, and international business professionals who need to handle multilingual email communication efficiently while maintaining quality control through human approval.

## How it works

This workflow automates email responses by:
1. **Monitoring Gmail** for emails with a specific label (e.g., "To_Process")
2. **Translating** the email content using DeepL to your preferred language
3. **Generating** an AI-powered summary and draft reply using OpenAI
4. **Requesting approval** via Slack with a summary and one-click approval link
5. **Sending the reply** only after human approval is received
6. **Removing the label** to prevent reprocessing

## Set up steps

Setup takes approximately 15-20 minutes:
1. Configure credentials for Gmail, DeepL, OpenAI, and Slack
2. Create a Gmail label for emails to process
3. Update the Slack channel ID in the configuration node
4. Ensure n8n is accessible via webhook (tunnel or production mode required)

## Requirements

- Gmail account with OAuth2 authentication
- DeepL API key (free tier available)
- OpenAI API key
- Slack workspace with OAuth2 app configured
- n8n instance accessible via webhook URL

## How to customize the workflow

- **Change translation language**: Modify the DeepL node's target language
- **Adjust AI model**: Switch between GPT-4 or GPT-3.5 in the OpenAI node
- **Customize approval message**: Edit the Slack message format
- **Add multiple languages**: Duplicate the translation node for multi-language support
- **Filter specific senders**: Add conditions to process only certain email addresses

## 📊 Basic Information

- **Workflow ID:** 10907
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 36
- **Downloads:** 3
- **Created:** 2025/11/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10907)

## 👤 Author

- **Name:** Asuka
- **Username:** @asuka-ai

## 🏷️ Categories

- Ticket Management
- Multimodal AI

## 🔗 Nodes Used

- **gmailTrigger** 
- **set** 
- **deepL** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **slack** 
- **wait** 
- **gmail** (×2)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
