# Add MailPoet subscribers from WordPress forms via TWZ plugin and log to Google Sheets

> What Is TWZ n8n MailPoet Integration?

This workflow adds subscribers to MailPoet using n8n by bridging WordPress through a custom REST API and logging results in Google Sheets.

MailPoet is a popular WordPress email marketing plugin, but it does not provide a public REST API. Because of this limitation, n8n cannot connect to MailPoet directly using native nodes or standard integrations.

This workflow demonstrates a practical and production-ready solution for connecting n8n → WordPress → MailPoet using a custom WordPress REST API plugin called [TWZ N8N MailPoet](https://themewizz.com/product/twz-n8n-mailpoet-add-subscriber-api/).

🚧 Problem This Workflow Solves

❌ MailPoet has no public REST API
❌ n8n cannot add MailPoet subscribers natively
❌ External forms and automations cannot push data into MailPoet

✅ Solution Architecture

This workflow solves the problem by:

Creating a secure REST API endpoint inside WordPress

Using an n8n HTTP Request node to send subscriber data

Adding subscribers directly to MailPoet

Preventing duplicate subscribers

Logging subscribers in Google Sheets for visibility

This creates a reliable bridge between n8n and MailPoet, enabling automation workflows that were previously not possible.

🔌 How It Works (High Level)

📥 n8n receives form submission data
🔍 The workflow checks if the subscriber already exists
📧 The subscriber is added to MailPoet via the custom REST API
📊 Subscriber data is logged in Google Sheets
✅ The workflow returns a success or error response

🎯 Why This Workflow Is Useful

Works around MailPoet’s missing API

Enables full automation from external tools

Uses standard n8n nodes (HTTP Request, IF, Google Sheets)

Secure and reusable integration pattern

Ideal for WordPress-based businesses

🧩 About the TWZ n8n MailPoet Plugin

TWZ n8n MailPoet is a free, lightweight WordPress plugin designed to provide a simple and reliable integration between n8n (or any external service) and MailPoet.

It implements a single MailPoet API operation:
➡ Add Subscriber

This keeps the plugin lightweight, fast, and focused.

## 📊 Basic Information

- **Workflow ID:** 12422
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 0
- **Downloads:** 0
- **Created:** 2026/1/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12422)

## 👤 Author

- **Name:** Sergey Tulyaganov
- **Username:** @themewizz

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **stickyNote** (×5)
- **formTrigger** 
- **if** (×2)
- **httpRequest** (×2)
- **googleSheets** (×2)
- **form** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
