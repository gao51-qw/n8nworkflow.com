# Real-time sales quote creation in Odoo via Telegram with Google Gemini AI

> Overview

This template connects Telegram with Odoo to let your sales team create sales quotes and check product availability in real-time — just by sending chat messages.

It’s designed for sales representatives, distributors, and small business owners who want to manage quotes and product information quickly without logging into Odoo.

⚙️ How It Works

Once configured, this workflow listens to your Telegram bot for incoming messages.
Based on the message text, it performs different actions in Odoo:

1. Product Queries
Sales reps can ask about products directly in Telegram:

“What’s the price of Product B?”
“How many units of Product A are available?”

The workflow fetches real-time data from Odoo and replies instantly.

2. Sales Quote Creation
Sales reps can also create new sales quotes by typing messages like:

“My customer Amazon, his email address is abc@amazon.com
 wants to buy 10 pcs of Product A and 15 pcs of Product B.”

The workflow extracts relevant details, creates a sales quote in Odoo, and sends confirmation back in Telegram.

🧰 Setup Instructions

Create a Telegram Bot

Go to @BotFather
 on Telegram.

Create a new bot and copy the API Token.

Prepare Odoo

Enable the Sales and Product modules.

Generate an API Key from your Odoo user account.

Note your Odoo URL (e.g., https://yourcompany.odoo.com).

Import Workflow

Open your n8n instance (self-hosted or cloud).

Click Import Workflow and upload the provided JSON file.

Add Credentials

Configure your Telegram credentials (Bot Token).

Configure your Odoo credentials (Base URL + API Key).

Activate the Workflow

Set the workflow to active to start listening for Telegram messages.

Send a sample message to your bot to test.

🧠 Use Cases
Sales reps capturing orders in the field
SMEs managing customer inquiries directly from Telegram
Real-time price and stock lookups without opening Odoo
Automation of repetitive sales quote tasks

🎛️ Customization Options

This workflow can be easily adapted to your business needs:

Change trigger platform: Replace Telegram with WhatsApp, Slack, or Discord using the respective n8n nodes.

Extend data fields: Add fields like delivery date, salesperson, or payment terms.

Auto-confirm orders: Add a node to automatically confirm a Sales Quote once approved.

✅ Requirements
Odoo v14 or later (with Sales module enabled)
Telegram Bot Token
n8n instance (Cloud or self-hosted)

💬 Example Prompts

Product Query:
“What’s the price of Product B?”
“How many units of Product A are available?”

Order Entry:
“My customer Amazon, his email address is abc@amazon.com
 wants to buy 10 pcs of Product A and 15 pcs of Product B.”

## 📊 Basic Information

- **Workflow ID:** 9148
- **Complexity:** advanced
- **Node Count:** 51
- **Views:** 234
- **Downloads:** 23
- **Created:** 2025/10/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9148)

## 👤 Author

- **Name:** Evozard
- **Username:** @evozardconsulting

## 🏷️ Categories

- CRM
- AI Chatbot

## 🔗 Nodes Used

- **code** (×8)
- **switch** (×4)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×5)
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **telegramTrigger** 
- **telegram** (×3)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×3)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×8)
- **set** (×2)
- **odoo** (×9)
- **splitOut** 
- **executeWorkflowTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 51 nodes with 38 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
