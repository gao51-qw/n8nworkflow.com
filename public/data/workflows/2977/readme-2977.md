# Line chatbot handling AI responses with Groq and Llama3

> ## Workflow overview:
This workflow is designed for dynamic and intelligent conversational capabilities. It incorporates Meta's llama3.3-versatile model for personal assistant. There are no issues when sending simple text to the LINE reply API, so in this workflow you can see how to handle large and complex text sending from AI chat without any errors.

## Workflow description:
1. User uses Line Messaging API to send message to the chatbot, create line business ID from here: [Line Business](https://manager.line.biz/)
2. Set the message from Step 1 to the proper value
3. Send the message to process at Groq using API key that we have created from [Groq](groq.com)
4. Send the reply message from AI Agent back to Line Messaging API account

## Key Features:

* Utilizes Meta's llama 3.3 model for robust conversational capabilities
* Handles large and complex text interactions with ease, ensuring reliable connections to LINE Messaging API
* Demonstrates effective strategies for processing and responding to large and complex text inputs from AI chat

To use this template, you need to be on n8n version 1.79.0 or later.

## 📊 Basic Information

- **Workflow ID:** 2977
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1608
- **Downloads:** 160
- **Created:** 2025/2/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2977)

## 👤 Author

- **Name:** Sirisak Chantanate
- **Username:** @openmymai

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×5)
- **webhook** 
- **set** 
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
