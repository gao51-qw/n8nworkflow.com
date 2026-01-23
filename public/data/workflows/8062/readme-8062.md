# Multi-LLM customer support chatbot for WordPress & webhook integrations

> ## AI Chat Bot workflow for WordPress & Webhook Live Chats
### This workflow powers a versatile AI chatbot that can be integrated into any live chat interface, such as our free Forerunner™ AI Chat Bot for WordPress. It's designed to automate customer support and lead generation by handling a variety of user queries independently.

The setup process is straightforward and typically takes less than five minutes. This involves connecting your preferred Large Language Model (LLM) and a live chat platform to the workflow via webhooks.

How the Workflow Works
The core of this workflow is an AI Agent that acts as the brain of the chatbot. It processes user input and generates responses based on predefined rules and your chosen language model.

User Input: When a user sends a message through your live chat, it's sent to the workflow via a webhook. This message is then passed to the AI Agent for processing.

AI Response Generation: The AI Agent analyzes the message, retrieves relevant conversational history from the Simple Memory node to maintain context, and uses the selected Large Language Model (e.g., OpenAI, Gemini, or Claude) to formulate a response.

Conditional Logic: After the response is generated, the workflow uses an If node to check if the conversation should end. If the response contains the specific tag [END_OF_CONVERSATION], the workflow prepares to end the chat. Otherwise, the conversation continues.

Send to Client: The final response is then sent back to the live chat interface, where it is displayed to the user. This completes the loop, allowing the chatbot to engage in a continuous conversation until the task is complete.

## 📊 Basic Information

- **Workflow ID:** 8062
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1263
- **Downloads:** 126
- **Created:** 2025/8/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8062)

## 👤 Author

- **Name:** Design for Online
- **Username:** @designforonline

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** 
- **set** (×3)
- **webhook** 
- **if** 
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.lmChatXAiGrok** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
