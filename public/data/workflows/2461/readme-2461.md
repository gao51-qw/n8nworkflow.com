# Telegram payment, invoicing and refund workflow for Stars

> This workflow provides a complete solution for handling **Telegram Stars payments, invoicing and refunds** using n8n. It automates the process of sending invoices, managing pre-checkout approvals, recording transactions, and processing refunds for stars, making it ideal for businesses using **Telegram Stars** for digital payments.

[What are Telegram Stars? Learn more here](https://telegram.org/blog/telegram-stars?ln=r).

## Key Features

- **Payment Handling**: Automate invoice creation and sending via Telegram, with pre-checkout approval for smooth payment processing.
- **Refund Management**: Simplify the refund process using user IDs and payment charge IDs from successful **Telegram Stars** transactions.
- **Transaction Recording**: Record all payment details, such as user information and payment charge IDs, in Google Sheets for transparent financial tracking.


## Who Can Use This Workflow?

- **Developers and Businesses**: Looking to implement **Telegram Stars** as a payment system within Telegram.
- **Service Providers**: Managing subscriptions, donations, or digital sales through Telegram automation.
## Use Cases

- **Subscription Sales Automation**: Use the workflow to issue invoices and automatically process payments for recurring subscriptions.
- **Infopreneurs and Marketers**: Use the workflow for delivering lead magnets, tripwires, and further automating sales via **Telegram Stars**.
- **Course Sales Automation**: Automate invoicing and refunds for educational platforms selling online courses.
- **Developers and Businesses**: Looking to implement **Telegram Stars** as a payment system within Telegram.
- **Service Providers**: Managing subscriptions, donations, or digital sales through Telegram automation.
- **Online Educational Platforms**: Automate billing for courses and handle refunds easily.


## Setup Instructions

1. Replace the Telegram API credentials with your bot API token from **BotFather**.
2. Customize invoice details, including product name, description, and payment amount.
3. Connect your **Google Sheets** for storing transaction logs.
4. Configure refund steps for easy processing of star refunds when needed.

**Note**: The setup is very simple—just follow the instructions provided on the yellow sticky notes within the workflow and insert your data. All other nodes are pre-configured and require no additional customization. The entire setup process takes just **1 minute**. I provided a short Loom record with an explanation.

## Extensibility

This workflow can be further customized to include user profile management, payment analytics, or integration with external services like **CRMs** or **accounting tools**. Additional modules can be easily connected to manage advanced features like [Telegram User Registration](https://n8n.io/workflows/2406-telegram-user-registration-workflow/).



## Available Templates

- [Telegram Bot Starter Template](https://n8n.io/workflows/2402-telegram-bot-starter-template-setup/): A foundational setup for creating custom Telegram bots.
- [Telegram User Registration Workflow](https://n8n.io/workflows/2406-telegram-user-registration-workflow/): Automate user registration and data collection via Telegram.
- **Telegram Payment and Refund Workflow for Stars**: Streamline your Telegram payment processing with stars, invoices, and refunds.

## Support and Updates

This workflow is supported and regularly updated to stay compatible with the latest Telegram features and n8n improvements. If you encounter any issues, technical support is available to ensure smooth integration and setup.



Key terms: **Telegram Stars payment workflow**, **Telegram refund automation**, **n8n payment template**, **Google Sheets transaction logging**, **Telegram bot for payments**, **automated refunds on Telegram**, **Telegram Stars invoice workflow**.

Please reach out to [Victor](https://www.linkedin.com/in/gubanovvictor/) if you need further assistance with your n8n workflows and automation!

## 📊 Basic Information

- **Workflow ID:** 2461
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 2290
- **Downloads:** 229
- **Created:** 2024/10/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2461)

## 👤 Author

- **Name:** Victor Gold
- **Username:** @victorlucky

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **httpRequest** (×3)
- **stickyNote** (×13)
- **set** (×7)
- **executeWorkflowTrigger** 
- **manualTrigger** 
- **googleSheets** 
- **telegram** 
- **noOp** (×3)
- **switch** (×2)
- **telegramTrigger** 
- **executeWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
