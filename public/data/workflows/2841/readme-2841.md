# Connect AI to any chats in Kommo

> Entrust customer service to AI using n8n and Kommo!
Using this workflow, you can make the AI agent answer customer questions for your managers.
See how it works in the [video](https://youtu.be/yFqkp-HrCeY).

## Advantages of integration
- Works with any message channel that is connected to Kommo (telegram, whatsapp, facebook)
- Understands voice and text messages
- You can stop for a specific transaction or contact if you need a person's help.
- It is possible to supplement the AI agent with additional tools to suit your needs

## Where it can be useful
- In customer support
- In the qualification of clients
- When invoicing

## How it works
1) Any incoming message to the Kommo chats is sent by the webhook to n8n
2) n8n processes the webhook according to the specified logic
3) n8n sends a reply message to the Kommo chat

## Installation Steps
1) Install workflow
2) Follow the instructions to connect the kommo to the n8n
3) Set up Credentials for OpenAI
4) Fill in the Credentials as shown in the workflow notes
5) Activate Workflow
6) Write your first message as client

## 📊 Basic Information

- **Workflow ID:** 2841
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 3311
- **Downloads:** 331
- **Created:** 2025/2/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2841)

## 👤 Author

- **Name:** yatolstoy
- **Username:** @yatolstoy

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **if** 
- **httpRequest** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **switch** 
- **stickyNote** (×13)
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
