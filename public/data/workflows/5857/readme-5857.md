# Multimodal chat assistant with GPT-4o for text, images, and PDFs

> ### Chat with thing

This n8n template lets you build a smart AI chat assistant that can handle text, images, and PDFs — using OpenAI's GPT-4o multimodal model. It supports dynamic conversations and file analysis, making it great for AI-driven support bots, personal assistants, or embedded chat widgets.

---

### 🔍 How it Works

- The chat trigger node kicks off a session using n8n's hosted chat UI.
- Users can send text or upload images or PDFs — the workflow checks if a file was included.
- If an image is uploaded, the file is converted to base64 and analyzed using GPT-4o's vision capabilities.
- GPT-4o generates a natural language description of the image and responds to the user's question in context.
- A memory buffer keeps track of the conversation thread, so follow-up questions are handled intelligently.
- OpenAI’s chat model handles both text-only and mixed media input seamlessly.

---

### 🧪 How to Use

- You can embed this in a website or use it with your own webhook/chat interface.
- The logic is modular — just swap out the `chatTrigger` node for another input (e.g. form or API).
- To use with documents, you can modify the logic to pass PDF content to GPT-4 directly.
- You can extend it with action nodes, e.g. saving results to Notion, Airtable, or sending replies via email or Slack.

---

### 🔐 Requirements

- Your OpenAI GPT-4o API key
- Set File Upload on the chat


### 🚀 Use Cases

- PDF explainer bot
- Internal knowledge chat with media support
- Personal assistant for mixed content

## 📊 Basic Information

- **Workflow ID:** 5857
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 9429
- **Downloads:** 942
- **Created:** 2025/7/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5857)

## 👤 Author

- **Name:** Cooper
- **Username:** @cooper

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **if** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×3)
- **@n8n/n8n-nodes-langchain.memoryManager** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
