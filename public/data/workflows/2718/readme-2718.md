# AI agent for Instagram DM/inbox. Manychat + Open AI integration

> ## Automate Instagram DMs with OpenAI GPT and ManyChat

### How It Works:  
Once connected, GPT will automatically initiate conversations with messages from new recipients in Intagram.

## Who Is This For?
This workflow is ideal for
- marketers,
- business owners
- content creators

who want to automatically respond to Instagram direct messages using OpenAI GPT. 

By integrating ManyChat, you can manage conversations, nurture leads, and provide instant replies at scale.

## What This Workflow Does
- **Captures** incoming Instagram DMs through ManyChat’s integration.  
- **Processes** messages with GPT to generate a relevant response.  
- **Delivers** instant replies back to Instagram users, creating efficient, AI-driven communication.  

## Setup
1. **Import the Template**: Copy the n8n workflow into your workspace.  
2. **OpenAI Credentials**: Add your OpenAI API key in n8n so GPT can generate responses.  
3. **ManyChat Account**: Create (or log in to) your ManyChat account.  
4. **Connect Instagram**: Link your Instagram profile as a channel in ManyChat.  
5. **ManyChat Custom Field**: Create a custom field for storing user input or conversation context.  
6. **Configure Default Reply**: In ManyChat, set up the default Instagram reply flow to point to your n8n webhook.  
7. **Add External Request**: Create an external request step in ManyChat to send messages to n8n.  
8. **Test the Flow**: Send yourself a DM on Instagram to confirm the workflow triggers and GPT responds correctly.  

## Instructions and links:

[Notion instruction](https://shadowed-pound-d6e.notion.site/Instagram-GPT-light-version-Manychat-X-N8N-176293bddff880899a9ac255585d29f7?pvs=4)

[Register in ManyChat](https://manychat.partnerlinks.io/vm4wkw8j81tc)

## 📊 Basic Information

- **Workflow ID:** 2718
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 43570
- **Downloads:** 4357
- **Created:** 2025/1/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2718)

## 👤 Author

- **Name:** Alex Hi no code
- **Username:** @alex-nocode

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **set** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **respondToWebhook** 
- **stickyNote** (×5)
- **webhook** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
