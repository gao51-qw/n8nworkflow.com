# Automated email marketing campaign workflow

> This n8n workflow demonstrates how to automate a large-scale personalized promotional email campaign, leveraging artificial intelligence to generate unique content for each recipient.

Save time and increase the effectiveness of your marketing campaigns by allowing AI to handle the creation of personalized content and email sending.

## How it works:
The workflow fetches recipient data from a Google Sheets document.
It validates email addresses and checks if recipients haven't been contacted before.
For each valid recipient, the AI agent (using GPT-3.5) generates a personalized email including the recipient's name, product introduction, exclusive offer, and a unique promotional link.
The personalized email is sent via SMTP to the recipient.
The workflow updates the Google Sheet to mark the recipient as contacted.
A random delay is introduced between emails to mimic natural sending patterns and avoid triggering spam filters.

## Requirements:
Google Sheets account for storing and managing recipient data.
OpenAI account for access to the GPT-3.5 model.
SMTP server for sending emails.

## Customizing the workflow:
This example focuses on sending personalized promotional emails, but it could be extended to include follow-up sequences, tracking email opens and clicks, or integrating with a CRM system for more comprehensive customer management.

## 📊 Basic Information

- **Workflow ID:** 2452
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 6335
- **Downloads:** 633
- **Created:** 2024/10/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2452)

## 👤 Author

- **Name:** Badr
- **Username:** @b4dr

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** 
- **manualTrigger** 
- **googleSheets** (×2)
- **splitInBatches** 
- **if** 
- **wait** 
- **code** 
- **emailSend** 
- **set** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
