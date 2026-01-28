# Manage Adobe Acrobat e-signatures with webhooks

> This workflow automatically manages Acrobat Sign signatures, respond with "intent" to Acrobat-Sign webhooks.

## Prerequisites

- [Adobe Acrobat Sign](https://www.adobe.com/sign.html) and [Sign webhook](https://helpx.adobe.com/sign/using/adobe-sign-webhooks-api.html)
- Basic knowledge of JavaScript

## Nodes

- [Webhook nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.webhook/) trigger the workflow on new sign intents on a document
- [Respond to Webhook node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.respondToWebhook/) sets the response headers.
- [Function node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.function/) processes data returned by the previous node.
- [Set node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.set/) sets the required values.

## 📊 Basic Information

- **Workflow ID:** 1588
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1029
- **Downloads:** 102
- **Created:** 2022/4/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1588)

## 👤 Author

- **Name:** Aaron Smusz
- **Username:** @atsmusz

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **function** 
- **webhook** (×2)
- **respondToWebhook** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
