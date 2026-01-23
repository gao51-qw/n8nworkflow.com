# Create an intelligent Facebook Messenger chatbot with GPT-4o-mini & message memory

>   ## Who is this for?

  Businesses and developers who want to automate customer support or engagement on Facebook Messenger using AI-powered responses.

  ## What does it do?

  Creates an intelligent Facebook Messenger chatbot that:
  - Responds to messages using OpenAI (gpt-4o-mini)
  - Batches rapid-fire messages into a single AI request
  - Maintains conversation history (50 messages per user)
  - Shows professional UX feedback (seen indicators, typing bubbles)

  ## How it works

  1. **Webhook Verification** - Handles Facebook's GET verification request
  2. **Message Reception** - Receives incoming messages via POST webhook
  3. **Message Batching** - Waits 3 seconds to collect multiple quick messages
  4. **AI Processing** - Sends combined message to OpenAI with conversation context
  5. **Response Delivery** - Formats and sends the AI response back to Messenger

  ## Setup

  1. Configure **Facebook Graph API** credential with your Page Access Token
  2. Configure **OpenAI API** credential with your API key
  3. Set your verify token in the "Is Token Valid?" node
  4. Register the webhook URL in Facebook Developer Console

  ## Key Features

  - **Message Batching**: Combines "Hey" + "Can you help" + "with my order?" into one request
  - **Conversation Memory**: Remembers context from previous messages
  - **Echo Filtering**: Prevents responding to your own messages
  - **Response Formatting**: Cleans markdown for Messenger's 2000-char limit


## 📊 Basic Information

- **Workflow ID:** 11993
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 291
- **Downloads:** 29
- **Created:** 2025/12/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11993)

## 👤 Author

- **Name:** Tristan V
- **Username:** @tristanv

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×8)
- **webhook** (×2)
- **if** (×3)
- **respondToWebhook** (×3)
- **code** (×3)
- **httpRequest** (×3)
- **wait** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
