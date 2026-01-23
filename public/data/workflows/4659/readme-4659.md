# Forex News & Sentiment Telegram Alerts

> # **Purpose & Audience**

This n8n workflow template is designed for Forex traders, analysts, and enthusiasts who want to automate the process of staying updated on the latest news and sentiment for any currency pair. By leveraging advanced news aggregation and sentiment analysis, the workflow delivers concise, actionable updates directly to your Telegram—helping you make more informed trading decisions without manual research on news for broader market sentiment.

## **What It Does?**
- Aggregates the latest news from major Forex platforms for your chosen currency pair.
- Analyzes the news to extract market sentiment (bullish, bearish, or neutral) using an LLM.
- Summarizes key headlines, technical levels (support/resistance), and highlights high-impact economic events.
- Sends a neatly formatted update to your selected Telegram chat or group at your preferred schedule.

### Who Is It For?
1. Forex traders seeking a competitive edge by staying ahead of market sentiment shifts.
2. Analysts who want automated, unbiased news curation and sentiment summaries.
3. Anyone looking for a hands-off, plug-and-play solution to monitor any currency pair.

Setup once, and you can use this workflow for a lifetime. Simply duplicate the workflow for as many currency pairs as you want—customize the inputs, and you’re set! No recurring fees, no coding required, and you control the update frequency and destinations.

## How to Set Up?
1. Choose your currency pair and set your preferred update schedule.
2. Connect your LLM and Telegram credentials (simple, guided steps included).
3. Specify where you want to receive the updates.
4. That’s it—receive real-time, actionable Forex news and sentiment updates automatically.

## 📊 Basic Information

- **Workflow ID:** 4659
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 1354
- **Downloads:** 135
- **Created:** 2025/6/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4659)

## 👤 Author

- **Name:** Malik Hashir
- **Username:** @malikx

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×5)
- **merge** 
- **rssFeedRead** (×10)
- **filter** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **code** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.agent** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
