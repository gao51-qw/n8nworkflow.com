# Build a comprehensive multimodal assistant on Telegram with OpenAI, SERP and Vector Store

> ## J.A.R.V.I.S.

## Multimodal AI assistant on Telegram with OpenAI

This workflow transforms your Telegram bot into J.A.R.V.I.S., a powerful, multimodal AI assistant. It can understand and process text, voice messages, images, and documents. The assistant can search the web, scrape websites, generate images, perform calculations, and reference uploaded documents to provide comprehensive and context-aware responses in either text or audio format.

### 🧑‍💻 Who’s it for

This workflow is for developers, AI enthusiasts, and businesses who want to create an advanced, interactive AI assistant on Telegram. It’s perfect for automating customer support, creating a personal AI helper, or exploring the capabilities of multimodal large language models (LLMs) in a practical application.

### ⚙️ How it works

The workflow begins when a message is received by your Telegram bot. A Switch node then directs the data based on the message type:

*   **Text:** The message is formatted and sent directly to the main AI agent.
*   **Voice:** The audio file is downloaded from Telegram and transcribed into text using the OpenAI API.
*   **Image:** The image is downloaded and analyzed by an OpenAI vision model to understand its content.
*   **Document:** The file is downloaded and its content is stored in a temporary vector store, making it searchable for the AI.

The processed input is then passed to the core "J.A.R.V.I.S." Agent node. This agent uses an OpenAI model, conversational memory, and a suite of tools (Google Search, Web Scraper, Image Generator, Calculator, and the document vector store) to formulate a response. Finally, the workflow checks if the initial message was a voice note; if so, it generates an audio response. Otherwise, it sends the answer as a text message back to the user.

### 🛠️ How to set up

1.  **Telegram:** 
  - Create a Telegram Bot - Use @BotFather to create a bot and obtain your bot token;
  - Add Telegram API credentials in n8n with your bot token to the `Receive Message` Trigger node and all other Telegram nodes. In the `Receive Message` node, enter the `chatId` of the user or group authorized to interact with the bot.
2.  **OpenAI:** Add your OpenAI API credentials to all OpenAI, AI Agent, and AI tool nodes.
3.  **SerpAPI:** Add your SerpAPI credentials to the `Basic Google Search` node to enable web search functionality.
4.  **Jina AI:** Add your Jina AI API key to the Setup Node - The API Key is used on the `Webpage Scraper` node.

### ✅ Requirements

*   Telegram Bot API credentials and Bot token.
*   OpenAI API credentials.
*   SerpAPI API credentials.
*   Jina.ai API credentials

### 🎨 How to customize the workflow

*   **Change the AI model:** You can select a different OpenAI model in the `OpenAI Chat Model` node (e.g., switch from `gpt-4.1` to `gpt-4o`) or in the `Analyze Image` and `Transcribe` nodes.
*   **Modify the AI's personality:** Edit the system prompt in the `J.A.R.V.I.S.` Agent node to change its name, tone, instructions, or default language.
*   **Expand its tools:** Connect more tools to the `J.A.R.V.I.S.` Agent node to extend its capabilities, such as connecting to a database or another third-party API.
*   **Adjust the response format:** Modify the `If Audio Response` node to change the conditions for sending text or audio messages. For example, you could configure it to always respond with text.

### 💬 Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)

## 📊 Basic Information

- **Workflow ID:** 6813
- **Complexity:** advanced
- **Node Count:** 48
- **Views:** 1034
- **Downloads:** 103
- **Created:** 2025/8/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6813)

## 👤 Author

- **Name:** FabioInTech
- **Username:** @fabiointech

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **switch** 
- **telegram** (×5)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **code** (×3)
- **stickyNote** (×15)
- **set** (×5)
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterTokenSplitter** 
- **@n8n/n8n-nodes-langchain.toolHttpRequest** (×2)
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.agent** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 48 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
