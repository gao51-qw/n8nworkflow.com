# Summarize emails and save them as notes on sales opportunity in Odoo

> ## Use Case:
This n8n workflow automates the process of extracting information from emails. It uses OpenAI to summarize sales emails and adds this information in Odoo.

## How it works:
* When an email is received with a certain label, it sends the email to OpenAI for summarization
* A sales opportunity is created in Odoo with the email subject as title and the email summary as internal note

## Set up steps:
* Configure Google Cloud credentials with Gmail access
* In the Gmail node, choose an email label in the filter section
* Configure OpenAI credentials
* Configure Odoo credentials

## 📊 Basic Information

- **Workflow ID:** 2336
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 10084
- **Downloads:** 1008
- **Created:** 2024/7/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2336)

## 👤 Author

- **Name:** Mihai Farcas
- **Username:** @mihailtd

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** 
- **odoo** 
- **@n8n/n8n-nodes-langchain.lmOpenAi** 
- **stickyNote** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
