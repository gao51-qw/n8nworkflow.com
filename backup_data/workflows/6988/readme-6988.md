# WhatsApp to Chatwoot message forwarder with media support

> ## Description
Automates the forwarding of messages from WhatsApp (via Evolution API) to Chatwoot, enabling seamless integration between external WhatsApp users and internal Chatwoot agents. It supports both text and media messages, ensuring that customer conversations are centralized and accessible for support teams.

## What Problem Does This Solve?
Managing conversations across multiple platforms can lead to fragmented support and lost context. This subworkflow bridges the gap between WhatsApp and Chatwoot, automatically forwarding messages received via the Evolution API to a Chatwoot inbox. It simplifies communication flow, centralizes conversations, and enhances the support team's productivity.

### Features
 - Support for plain text messages
 - Support for media messages: images, videos, documents, and audio
 - Automatic media upload to Chatwoot with proper attachment rendering
 - Automatic contact association using WhatsApp number and Chatwoot API
 - Designed to work with Evolution API webhooks or any message source

## Prerequisites
Before using this automate, make sure you have:

 - Evolution API credentials with incoming message webhook configured
 - A Chatwoot instance with access token and API endpoint
 - An existing Chatwoot inbox (preferably API channel)
 - A configured HTTP Request node in n8n for Chatwoot API calls

## Suggested Usage
This subworkflow should be attached to a parent workflow that receives WhatsApp messages via the Evolution API webhook. Ideal for:

Centralized customer service operations

WhatsApp-to-CRM/chat routing

Hybrid automation workflows where human agents need to reply from Chatwoot

It ensures that all incoming WhatsApp messages are properly converted and forwarded to Chatwoot, preserving message content and structure.

## 📊 Basic Information

- **Workflow ID:** 6988
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 2485
- **Downloads:** 248
- **Created:** 2025/8/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6988)

## 👤 Author

- **Name:** Thiago Vazzoler Loureiro
- **Username:** @thiagovazzoler

## 🏷️ Categories

- Support Chatbot

## 🔗 Nodes Used

- **convertToFile** 
- **code** (×2)
- **stickyNote** (×5)
- **if** (×7)
- **executeWorkflowTrigger** 
- **redis** (×2)
- **wait** 
- **n8n-nodes-evolution-api.evolutionApi** 
- **postgres** 
- **switch** 
- **httpRequest** 
- **set** (×7)
- **@devlikeapro/n8n-nodes-chatwoot.chatWoot** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
