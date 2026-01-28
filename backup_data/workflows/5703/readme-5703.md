# Real-time forex sentiment analysis & alerts with Gemini AI to Discord

> # Purpose & Audience
Forex Market AI Analyst is an advanced n8n workflow template designed for Forex traders, analysts, prop firms, brokers, and trading communities who need real-time, actionable market intelligence. By combining multi-source news aggregation and AI-powered sentiment analysis, this workflow delivers both quick alerts and comprehensive sentiment reports for any currency pair—directly to your Discord or chat platform. Stay ahead of market shifts and reduce manual research with automated, context-rich updates.

## What It Does
1. Aggregates breaking news and analysis from top Forex and macroeconomic sources for your selected currency pair.
2. Filters news by recency and relevance, ensuring only the most current and impactful headlines are included.
3. Analyzes market sentiment (bullish, bearish, or neutral) using a state-of-the-art language model (LLM).
4. Summarizes key themes, technical levels, and economic drivers in a clear, structured format with visual cues.
5. Delivers updates to your chosen Discord channel or chat group, with two distinct modes:
**Quick Alerts:** Fast, headline-focused updates for daily trading.
**Full Reports:** Detailed, multi-section sentiment breakdowns for weekly or in-depth review.

Customizable date filters let you control how recent news must be for inclusion in sentiment analysis.

## Who Is It For?
- Forex traders seeking an edge with instant, unbiased market sentiment.
- Analysts and prop firms needing reliable, automated news curation and structured reporting.
- Brokers and trading communities looking to enrich their channels with high-quality, automated market insights.
- Anyone who wants a “set it and forget it” solution for monitoring any FX pair—no coding required.

## Setup Once, Use Forever
- Deploy the workflow once and use it for a lifetime. 
- Duplicate for as many currency pairs as you need—customize the news sources or filters as you wish. 
- No recurring fees, no complex setup, and you control the update frequency and delivery channels.

## How to Set Up
1. Select your currency pair and adjust the news filter settings as desired.
2. Connect your AI model (Google Gemini or OpenAI) and Discord (or other chat) credentials.
3. Choose your alert mode: quick daily alerts, full weekly reports, or both.
4. Set your preferred schedule for updates.
5. Go live: Receive real-time, actionable FX news and sentiment in your Discord or chat, automatically.

Forex Market AI Analyst—the all-in-one workflow for automated Forex news, sentiment, and technical updates. Perfect for traders, analysts, teams, and anyone who values timely, structured market intelligence.

## 📊 Basic Information

- **Workflow ID:** 5703
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 341
- **Downloads:** 34
- **Created:** 2025/7/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5703)

## 👤 Author

- **Name:** Malik Hashir
- **Username:** @malikx

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×7)
- **merge** 
- **rssFeedRead** (×10)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **scheduleTrigger** 
- **code** 
- **filter** (×2)
- **discord** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
