# WhatsApp micro-CRM with Baserow & WasenderAPI

> ## WhatsApp Micro-CRM with Baserow & WasenderAPI

Struggling to manage WhatsApp client communications? This n8n workflow isn't just automation; it's your centralized CRM solution for small businesses and freelancers.


**How it works**

* **Capture Every Message:** Integrates WhatsApp messages directly via WasenderAPI.
* **Effortless Contact Management:** Automates contact data standardization and intelligently manages records (creating new or updating existing profiles).
* **Rich Client Profiles:** Retrieves profile pictures and decrypts image media, giving you full context.
* **Unified Data Hub:** Centralizes all conversations and media in Baserow, no more scattered interactions.


**Setup Steps**

Setup is incredibly fast; you can deploy this in under 15 minutes. Here's what you'll do:

* **Link WasenderAPI:** Connect your WasenderAPI webhooks directly to n8n.
* **Set up Baserow:** Duplicate our pre-built 'Contacts' ([link](https://baserow.io/public/grid/a5iWkAQpu8QljUlgwgm_pour_Au5BKd3mtkfu-B6N7Y)) and 'Messages' ([link](https://baserow.io/public/grid/0H22XZitFDWnrVNnKwBfiI7M6XX5CugHrXHEzdCY4xY)) Baserow table templates.
* **Secure Your Data:** Input your API credentials (WasenderAPI and Baserow) directly into n8n.
Every single step is fully detailed in the workflow's sticky notes – we've made it foolproof.


**Requirements**
What do you need to get started?
* An active n8n instance (self-hosted or cloud).
* A WasenderAPI.com subscription or trial.
* A Baserow account.


**Note:** Keep the flow layout as is! This will ensure that the flow is running in the correct order.

## 📊 Basic Information

- **Workflow ID:** 6584
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 418
- **Downloads:** 41
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6584)

## 👤 Author

- **Name:** Stephan Koning
- **Username:** @reklaim

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **stickyNote** (×6)
- **noOp** 
- **httpRequest** (×7)
- **switch** (×2)
- **baserow** (×7)
- **set** (×2)
- **if** (×2)
- **webhook** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
