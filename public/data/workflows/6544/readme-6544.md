# Forward Chatwoot Messages to WhatsApp via Evolution API with Media Support

> ## Description
This workflow automates forwarding messages received in Chatwoot to WhatsApp using the Evolution API. It provides full support for different types of messages, ensuring rich and seamless communication with the end user.

## What Problem Does This Solve?
Manually forwarding messages from Chatwoot to WhatsApp can be time-consuming and error-prone, especially when handling diverse message types like media files. This subworkflow streamlines the process, automating message delivery while maintaining message fidelity and media compatibility.

## Features

- Support for plain text messages;
- Support for media messages including images, videos, documents, and audio;
- Automatic detection of media type based on the content_type field;
- Automatic processing of incoming messages from Chatwoot via webhook or native integration

## Prerequisites
Before using this subworkflow, make sure you have:
1. Evolution API key and URL;
2. Incoming messages from Chatwoot via webhook or native integration;
3. Configured HTTP Request node in n8n

## Suggested Usage
This subworkflow should be attached to a main workflow that receives messages from Chatwoot. It is ideal for automated customer service, help desks, or hybrid bots (human + automated), enabling messages originating from Chatwoot to be faithfully redirected to WhatsApp.


![image.png](fileId:1895)



## 📊 Basic Information

- **Workflow ID:** 6544
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 1242
- **Downloads:** 124
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6544)

## 👤 Author

- **Name:** Thiago Vazzoler Loureiro
- **Username:** @thiagovazzoler

## 🏷️ Categories

- Support Chatbot

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **noOp** 
- **switch** (×3)
- **if** (×3)
- **stickyNote** (×5)
- **code** (×2)
- **n8n-nodes-evolution-api.evolutionApi** (×6)
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
