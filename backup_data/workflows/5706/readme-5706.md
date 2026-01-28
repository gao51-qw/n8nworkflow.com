# Automated BTC & ETH market analysis alerts for Discord & Telegram with Gemini AI

> # Purpose & Audience
This n8n workflow template is crafted for cryptocurrency traders, analysts, and enthusiasts who want to automate professional-grade market update alerts for BTCUSD and ETHUSD pairs. By integrating multiple trusted news sources with advanced AI-driven sentiment analysis, the agent delivers concise, actionable, and richly formatted updates directly to your Discord or chat platform. Stay informed on price action, market drivers, technical setups, and sentiment shifts—without spending hours sifting through data.

## What It Does
1. Aggregates real-time news and analysis from leading crypto and financial platforms focused on BTCUSD and ETHUSD.
2. Filters and processes the latest headlines to ensure relevance and timeliness.
3. Uses a powerful language model (Google Gemini or OpenAI) to generate sentiment scores (bullish, bearish, neutral) and contextual summaries.
4. Produces structured, easy-to-digest market update alerts with key trading insights and technical levels.
5. Sends formatted alerts to your preferred Discord channel or chat group on your chosen schedule.

## Who Is It For?
1. Crypto traders seeking timely, AI-powered market intelligence to inform entry and exit decisions.
2. Analysts and portfolio managers needing automated sentiment summaries and trade ideas.
3. Crypto communities, prop firms, and brokers wanting to enrich their channels with professional market commentary.
4. Anyone looking for a hands-off, plug-and-play solution to monitor BTCUSD and ETHUSD market dynamics.

## Setup Once, Use Forever
Deploy the workflow once and reuse it indefinitely. Easily duplicate and customize for additional pairs or channels. No coding needed, no recurring fees, and full control over update frequency and delivery.

## How to Set Up
1. Configure the currency pair filters for BTCUSD and ETHUSD within the workflow.
2. Connect your AI model credentials (Google Gemini or OpenAI) and Discord webhook or chat API.
3. Set your preferred alert schedule (daily, multiple times per day, or weekly).
4. Activate the workflow and start receiving professional crypto market alerts automatically.

## Output Alert Format & Key Sections
Each alert is carefully structured with clear visually appealing sections to enhance readability and quick decision-making:

**Topline Snapshot – 📈📊💡**
Concise summary of recent price action and overall sentiment.
**Market Drivers – 🌍⚖️📉📈**
Key macroeconomic, regulatory, and ETF flow updates impacting BTC or ETH.
**Technical Setup – 📏🔍📐🧭**
Critical support/resistance levels, chart patterns, and technical bias.
**Sentiment Scoreboard – 🟢🔴🟡⚖️**
AI-derived sentiment on themes such as ETF flows, network activity, and market positioning.
**Trade Ideas – 💰🎯📌📉📈**
Actionable scenarios for breakouts, reversals, and range plays with entry/stop targets.
**Key Headlines – 📰🗞️📆🧠**
Selected impactful news headlines relevant to the current market context.
**Summary & Watchpoints – 🧠🔎⏳📅📍**
Final analysis, critical price levels to monitor, and upcoming events.

## 📊 Basic Information

- **Workflow ID:** 5706
- **Complexity:** advanced
- **Node Count:** 56
- **Views:** 231
- **Downloads:** 23
- **Created:** 2025/7/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5706)

## 👤 Author

- **Name:** Malik Hashir
- **Username:** @malikx

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×19)
- **merge** (×2)
- **rssFeedRead** (×20)
- **filter** (×4)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **discord** (×2)
- **telegram** (×2)
- **code** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 56 nodes with 34 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
