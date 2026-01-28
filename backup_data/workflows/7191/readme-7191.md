# Automating WhatsApp replies using Go High Level with Redis and Anthropic

> # Automating WhatsApp replies in Go High Level with Redis and Anthropic
## Description
* Integrates GHL + Wazzap with Redis and an AI Agent using ClientInfo to process messages, generate accurate replies, and send them via a custom field trigger.
---
## Who’s it for
* This workflow is for businesses using **GoHighLevel (GHL)**, including the **Wazzap** plugin for WhatsApp, who want to automate inbound SMS/WhatsApp replies with AI. It’s ideal for teams that need accurate, data-driven responses from a predefined **ClientInfo** source and want to send them back to customers without paying for extra inbound automations.
---
## How it works / What it does
1. **Receive message** in n8n via Webhook from GHL (**Customer Replied (SMS)** automation). WhatsApp messages arrive the same way using the **Wazzap** plugin.
2. **Filter message type**:
   * If audio → skip processing and send fallback asking for text.
   * If text → sanitize by fixing escaped quotes, escaping line breaks/carriage returns/tabs, and removing invalid fields.
3. **Buffer messages** in Redis to group multiple messages sent in a short window.
4. **Run AI Agent** using the **ClientInfo** tool to answer only with accurate service/branch data.
5. **Sanitize AI output** before sending back.
6. **Update GHL contact** custom field (**IA_answer**) with the AI’s response.
7. **Send SMS reply** automatically via GHL’s outbound automation triggered by the updated custom field.
---
## How to set up
1. In **GHL**, create:
   * **Inbound automation**: Trigger on *Customer Replied (SMS)* → Send to your n8n Webhook.
   * **Outbound automation**: Trigger when **IA_answer** is updated → Send SMS to the contact.
   * Create a custom field named **IA_answer**.
2. Connect **Wazzap** in GHL to handle WhatsApp messages.
3. Configure **Redis** in n8n (host, port, DB index, password).
4. Add your **AI model** credentials (Anthropic, OpenAI, etc.) in n8n.
5. (Optional) Set up the **Google Drive Excel Merge** sub-workflow to enrich ClientInfo with external data.
---
## Requirements
* **GoHighLevel sub-account API key**.
* **Anthropic (Claude)** API key or another supported LLM provider.
* **Redis database** for temporary message storage.
* **GHL automations**: one for inbound messages to n8n, one for outbound replies when **IA\_answer** is updated.
* **GHL custom field**: **IA\_answer** to store and trigger replies.
* **Wazzap plugin** in GHL for WhatsApp message handling.
---
## How to customize the workflow
* Add more context or business-specific data to the **AI Agent prompt** so replies match your brand tone and policies.
* Expand the **ClientInfo** dataset with additional services, branches, or product details.
* Adjust the **Redis wait time** to control how long the workflow buffers messages before replying.

## 📊 Basic Information

- **Workflow ID:** 7191
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 578
- **Downloads:** 57
- **Created:** 2025/8/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7191)

## 👤 Author

- **Name:** Jorge Martínez
- **Username:** @jorgemartinezjam

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **switch** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **httpRequest** (×4)
- **wait** 
- **if** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **redis** (×3)
- **code** (×2)
- **set** (×2)
- **executeWorkflowTrigger** 
- **googleDrive** 
- **merge** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **extractFromFile** (×2)
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
