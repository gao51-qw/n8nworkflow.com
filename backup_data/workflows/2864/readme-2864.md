# 🐋🤖 DeepSeek AI agent + Telegram + LONG TERM memory 🧠

> This n8n workflow template is designed to integrate a DeepSeek AI agent with Telegram, incorporating long-term memory capabilities for personalized and context-aware responses. Here's a detailed breakdown:

---

## Core Features
**Telegram Integration**  
- Uses a webhook to receive messages from Telegram users.
- Validates user identity and message content before processing.

**AI-Powered Responses**  
- Employs DeepSeek's AI models for conversational interactions.
- Includes memory capabilities to personalize responses based on past interactions.

**Error Handling**  
- Sends an error message if the input cannot be processed.

---

## Model Options 🧠
- **DeepSeek-V3 Chat**: Handles general conversational tasks.
- **DeepSeek-R1 Reasoning**: Provides advanced reasoning capabilities for complex queries.
- **Memory Buffer Window**: Maintains session context for ongoing conversations.

---

## Quick Setup 🛠️
### Telegram Webhook Configuration
1. Set up a webhook using the Telegram Bot API:
   ```
   https://api.telegram.org/bot{my_bot_token}/setWebhook?url={url_to_send_updates_to}
   ```
   Replace `{my_bot_token}` with your bot's token and `{url_to_send_updates_to}` with your n8n webhook URL.
2. Verify the webhook setup using:
   ```
   https://api.telegram.org/bot{my_bot_token}/getWebhookInfo
   ```

### DeepSeek API Configuration
1. Base URL: `https://api.deepseek.com`
2. Obtain your API key from the DeepSeek platform.

---

## Implementation Details 🔧
### User Validation
- The workflow validates the user's first name, last name, and ID using data from incoming Telegram messages.
- Only authorized users proceed to the next steps.

### Message Routing
- Routes messages based on their type (text, audio, or image) using a switch node.
- Ensures appropriate handling for each message format.

### AI Agent Interaction
- Processes text input using DeepSeek-V3 or DeepSeek-R1 models.
- Customizable system prompts define the AI's behavior and rules, ensuring user-centric and context-aware responses.

### Memory Management
- Retrieves long-term memories stored in Google Docs to enhance personalization.
- Saves new memories based on user interactions, ensuring continuity across sessions.


## 📊 Basic Information

- **Workflow ID:** 2864
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 33124
- **Downloads:** 3312
- **Created:** 2025/2/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2864)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **if** 
- **telegram** (×3)
- **stickyNote** (×8)
- **webhook** 
- **set** 
- **switch** 
- **@n8n/n8n-nodes-langchain.agent** 
- **merge** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **googleDocsTool** 
- **googleDocs** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
