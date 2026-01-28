### This n8n workflow demonstrate how to configure AI Agent for financial research purposes especially for IDX data through Sectors App API.
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
