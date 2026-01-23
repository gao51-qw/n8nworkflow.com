# AI-powered financial chart analyzer | OpenRouter, MarketStack, macOS Shortcuts

> The **AI-Powered Financial Chart Analyzer** is a cutting-edge automation tool that streamlines financial analysis using n8n workflows, AI agents, and **MacOS Shortcuts**. It enables users to capture, process, and analyze candlestick charts for both **stocks and cryptocurrencies**. By integrating powerful tools like **ChatGPT-4o-mini** (via **OpenRouter**), **MarketStack**, and **SerpAPI**, this automation provides real-time market insights, technical analysis, and AI-driven stock trend predictions.

[![Video Thumbnail](https://img.youtube.com/vi/CeEysWsV8RQ/maxresdefault.jpg)](https://youtu.be/CeEysWsV8RQ?si=EXxjmzF3ofXJa7Q9)

### Workflow

1. The Webhook node will receive image data from a macOS shortcut in Base64 format.  
2. The Convert to File node will convert the Base64 image into a binary file.  
3. The AI Agent node will process the binary image. It utilizes OpenRouter, Windows buffer memory, MarketStack, and the SerpAPI tool.  
4. Remember to use a model capable of processing images; otherwise, the workflow will throw an error.  
5. We use the MarketStack tool to fetch the latest stock data; however, it is rarely used.  
6. SerpAPI is used for market research, such as news and insights about stocks.  
7. Finally, the Markdown node converts Markdown to HTML.  
8. The response is then sent to the Webhook.

### Use Case

**Traders & Investors:** Quickly analyze candlestick charts and identify trading opportunities.

**Financial Analysts:** Automate chart interpretation and data aggregation for in-depth reports.

**AI & Automation Enthusiasts:** Experiment with AI-driven financial workflows using n8n.

**Business Owners:** Gain real-time stock insights to make informed investment decisions.


### Setup Instructions

**Install MacOS Shortcut**

- Download the MacOS Shortcut provided with this product and double-click on it to install.
- If you don’t have the Shortcuts app (parent app) installed, first download it from the App Store, then follow Step 1.

**Set Up Workflow**

- Import the n8n workflow provided with this product.

**Set Up Credentials**

🔹**Webhook Authentication**

- Create an API key (you can use a key generation tool or simply use a custom string).
- Add the API key to your n8n Webhook and MacOS Shortcut.
- If you prefer not to use authentication, remove it from both the n8n Webhook and the MacOS Shortcut.

🔹**OpenRouter API Setup**

- Get a free API key from OpenRouter and add it to your workflow.
- Free API keys have usage limits.
- OpenRouter provides multiple models—ensure that the selected model supports image processing.

🔹**MarketStack API Setup**

- Get a free API key from MarketStack and use it in your workflow.
- Free API keys have usage limits.

🔹**SerpAPI Setup**
- Get a free API key from SerpAPI and use it in your workflow.
- Free API keys have usage limits.


### Disclaimer

This tool is designed for educational and informational purposes only. The AI-generated insights should not be considered as financial advice. Users should conduct their own research before making investment decisions. AgentsOps is not responsible for any financial losses incurred from using this automation.


## 📊 Basic Information

- **Workflow ID:** 2970
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 2076
- **Downloads:** 207
- **Created:** 2025/2/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2970)

## 👤 Author

- **Name:** Udit Rawat
- **Username:** @ailistmaster

## 🏷️ Categories

- Crypto Trading
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **respondToWebhook** 
- **set** 
- **convertToFile** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **marketstackTool** 
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **markdown** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
