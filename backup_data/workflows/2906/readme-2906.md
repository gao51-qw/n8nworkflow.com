# AI-powered crypto analysis using OpenRouter, Gemini, and SerpAPI

> This n8n automation is designed to analyze cryptocurrency trends by extracting, processing, and interpreting candlestick charts using AI-powered agents. The workflow enhances technical analysis by integrating real-time market data, ensuring traders receive accurate and actionable insights.

[![Video Thumbnail](https://ailistmaster.com/sites/default/files/2025-02/maxresdefault-min.png)](https://www.youtube.com/watch?v=XW03ztGgbg0)

## Workflow Breakdown:

🔹 1. **Chat Node – Provide Crypto Information**
Users enter a crypto symbol in the required format (EXCHANGE:SYMBOL), such as BINANCE:BTCUSDT. This ensures the workflow retrieves the correct market data.

🔹 **Retrieve Daily Candlestick Chart**
Once the input is received, the workflow fetches the full-day candlestick chart for the selected crypto, providing a macro-level market trend.

🔹 **AI Agent – Analyze Daily Chart**
The first AI agent, powered by Google Gemini 2.0 Flash via OpenRouter, analyzes the daily candlestick pattern to detect trends and potential market signals.

🔹 **Fetch 5-Minute Candlestick Chart**
To refine the analysis, the workflow retrieves a 5-minute interval candlestick chart, allowing for real-time market movement evaluation.

🔹 **AI Agent – Advanced Candlestick Analysis**
This AI agent combines the 5-minute chart with the daily analysis to provide an in-depth market prediction. Here’s where the real magic happens—AI interprets short-term trends in the context of long-term movements.

🔹 **Shared Windows Buffer – Store Intermediate Results**
The Windows Buffer temporarily stores analysis results, ensuring seamless data flow between AI agents for a more structured interpretation.

🔹 **Serp API – Retrieve Crypto News**
To add fundamental analysis, the Serp API tool fetches the latest crypto-related news from the web, providing additional market context.

🔹 **Chat Window – Deliver Final Insights**
Once all data points are processed, the final market analysis is displayed in the chat window, combining technical and fundamental analysis for a more comprehensive trading strategy.

## Use Case:

This automation simplifies crypto market analysis by integrating AI-driven technical and fundamental insights. It’s ideal for:

✅ Traders looking for automated market insights
✅ Analysts seeking structured candlestick interpretations
✅ Developers wanting to integrate AI-powered trading analysis into applications

By automating candlestick chart analysis, this workflow enhances decision-making and reduces manual effort, making it a valuable tool for anyone involved in cryptocurrency trading.

## Setup Instructions:

1️⃣ Import the workflow to your n8n instance

2️⃣ Prepare & add credentials:

1. OpenRouter (Google Gemini 2.0 Flash) Get a free API key from https://openrouter.ai/
2. Serp API (for news retrieval) Get a free API key from https://serpapi.com/
3. Chart Img (For candlestick chart) Get a free API key from https://chart-img.com/

3️⃣ Run the workflow and get AI-powered crypto insights!

## NOTE
**Remember:** Not all LLM models are capable of analyzing image data, so choose your model wisely.

**Limitations:** All free services come with usage limits. For example, OpenRouter has a daily limit, and once it's consumed, the workflow will stop processing further requests.

## Disclaimer
This workflow is designed purely for educational and research purposes. It does not provide financial advice. 🚀

## 📊 Basic Information

- **Workflow ID:** 2906
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 3765
- **Downloads:** 376
- **Created:** 2025/2/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2906)

## 👤 Author

- **Name:** Udit Rawat
- **Username:** @ailistmaster

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **set** 
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
