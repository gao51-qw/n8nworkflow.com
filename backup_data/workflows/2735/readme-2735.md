# Stock technical analysis with Google Gemini

> The purpose of this workflow, "Sell: Stock Vision," is to create an AI-powered technical analysis agent capable of analyzing financial charts for equity stocks and cryptocurrencies. This workflow provides users with actionable insights into market trends, price movements, candlestick patterns, and technical indicators to support informed trading decisions.

**How It Works**

- **Integration with TradingView:** The workflow uses the Chart-Img.com API to fetch detailed financial charts for the specified stock or cryptocurrency.
- **AI-Powered Analysis:** The workflow employs advanced AI models, including Google's Gemini Chat Model, to analyze the retrieved charts for candlestick patterns, support/resistance levels, and technical indicators like MACD and RSI.
- **News and Sentiment Analysis:** By integrating with SerpAPI, the workflow gathers relevant news about the stock or cryptocurrency to evaluate its potential impact on market movements.
- **Comprehensive Insights:** It provides detailed trading strategies, including buy/sell recommendations, stop-loss levels, and risk-reward evaluations.
- **Continuous Memory:** The AI agent uses buffer memory to retain context for enhanced analysis and continuity.

**Use Case**
This workflow is perfect for traders and analysts who need reliable and AI-powered market analysis to make informed trading decisions efficiently.

**Tutorial**

- Obtain API keys for Chart-Img.com and SerpAPI.
- Configure the workflow in your n8n instance by inputting the required API keys and connecting the nodes.
- Trigger the workflow by providing the stock or cryptocurrency symbol, and let the agent do the rest!

https://youtu.be/9fR4qNMT5LM


## 📊 Basic Information

- **Workflow ID:** 2735
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 5043
- **Downloads:** 504
- **Created:** 2025/1/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2735)

## 👤 Author

- **Name:** Udit Rawat
- **Username:** @ailistmaster

## 🏷️ Categories

- Crypto Trading
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.toolSerpApi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
