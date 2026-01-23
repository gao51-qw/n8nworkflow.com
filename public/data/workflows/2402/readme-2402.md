# Telegram bot starter template setup & AI agent chatbot

> ## Telegram Bot Starter template workflow + n8n AI Agent Chatbot 
provides a foundational setup for creating powerful Telegram bots with n8n. It handles incoming messages, photos, files, and voice notes, making it an excellent starting point for developers looking to create bots for customer engagement, support, or interactive services.

[Sign up to n8n now →](https://n8n.partnerlinks.io/u4hgi2j8tqnr) and try it!

## Key Features:
- Dynamic Message Handling: Respond to text messages, photos, files, and more.
- Modular Design: Easily integrate additional workflows such as user registration, payment modules, or custom commands.
- Error Handling: Ensure the bot gracefully manages errors and user inputs.


## Extensibility:
This workflow is the base for building any Telegram bot. Additional modules, such as a user registration module, payment integration, and user profile management, are available for easy connection to expand the bot’s functionality.
- ✍🏻[Use the Telegram user registration workflow →](https://viktorgubanov.gumroad.com/l/n8n-telegram-payment-workflow-stars) 
- 💵[Use the Telegram Payment, Invoicing and Refund Workflow for Stars →](https://viktorgubanov.gumroad.com/l/n8n-telegram-payment-workflow-stars)

## Who Can Use This Workflow?
- Developers looking for a quick way to build and customize Telegram bots.
- Businesses and service providers who need customer interaction automation.

## Setup Instructions:
1. Replace Telegram credentials with your own API credentials.
2. Customize responses for different message types (text, photo, file).
3. If integrating with external services (like Google Sheets), update the necessary credentials and links.

 
## UPDATES:
[🔥 Get the most up-to-date and expanded version →](https://viktorgubanov.gumroad.com/l/telegram-bot-starter-template) 



**June 25**:
- New! AI Agent + Setup Instructions
- Simple setup instructions and examples are included inside the workflow as sticky notes.
 
**Sep 24**:
- Improved message handler: Updated logic to handle various types of messages using Switch (text, photo, file, voice, and callback).
- Payment processing: Added new nodes for sending invoices and handling payments via Telegram

**Aug 24**:
- Changed processing of system events: “new user” and ‘user who blocked bot’ events




Please reach out to [Victor](https://www.linkedin.com/in/gubanovvictor/) if you need further assistance with your n8n workflows and automations! [Sign up to n8n →](https://n8n.partnerlinks.io/u4hgi2j8tqnr), you have to try it!

## 📊 Basic Information

- **Workflow ID:** 2402
- **Complexity:** advanced
- **Node Count:** 48
- **Views:** 35034
- **Downloads:** 3503
- **Created:** 2024/9/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2402)

## 👤 Author

- **Name:** Victor Gold
- **Username:** @victorlucky

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **set** (×5)
- **telegram** (×6)
- **stickyNote** (×19)
- **switch** (×4)
- **if** (×2)
- **googleSheets** 
- **executeWorkflow** (×3)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 48 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
