# Indonesian stock market research agent with Sectors App, Gemini & Tavily

> ### This n8n workflow demonstrate how to configure AI Agent for financial research purposes especially for IDX data through Sectors App API.
use cases: 
* research stock market in Indonesia.
* analyze the performance of companies belonging to certain subsectors or company
* comparing financial metrics between BBCA and BBRI
* providing technical analysis for certain ticker stock movement
* *and many more*

all from conversational agent UI chat.

### Main components 
* **Input-n8nChatNative**: handling and process input from native n8n chat ui
* **Input-TelegramBot**: handling and process input from Telegram Bot
* **Input-WebUI(Webhook)**: handling and process input from hosted Web UI through webhook
* **Main Agent**: processing raw user queries and delegate task to specialized agent if needed.
* **Spec Agent - Sectors App**: make request to Sectors App API to get real time financial data listed in IDX from available endpoint
* **Spec Agent - Web Search**: make web search from Google Grounding (Gemini API) and Tavily Search.
* **Vector Document Processing**: process document upload from user into embedding and vector store.

### How it works
* user queries may received from multiple platform (we use three here: Telegram, hosted Web UI, and native n8n chat UI)
* if user also uploading document, it will process the document and store it in vector store
* the request send to the Main Agent to process the queries
* the Main Agent decide the task to delegate to Specialized Agent if nedded.
* the result then sent back to user based on the platform

### How to use
You need this API:
* Gemini API: get it free from https://aistudio.google.com/
* Tavily API: get it free from https://www.tavily.com/
* Sectors App API: get it from https://sectors.app/api/

*you can optionally change the model or adding fallback model to handle token request, cause it may use quite many tokens.*


## 📊 Basic Information

- **Workflow ID:** 9551
- **Complexity:** advanced
- **Node Count:** 44
- **Views:** 220
- **Downloads:** 22
- **Created:** 2025/10/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9551)

## 👤 Author

- **Name:** Dzaky Jaya
- **Username:** @hoorahyeah

## 🏷️ Categories

- Market Research
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **if** (×3)
- **executeWorkflow** (×6)
- **@n8n/n8n-nodes-langchain.chat** 
- **telegramTrigger** 
- **telegram** 
- **webhook** 
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **@n8n/n8n-nodes-langchain.embeddingsGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **executeWorkflowTrigger** 
- **httpRequestTool** (×7)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 44 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
