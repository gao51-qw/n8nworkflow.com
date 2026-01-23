# Automated multi-agent trading analysis with GPT-5, Telegram, Coinbase & Notion

> ## 🚀 Overview  
This modern n8n workflow implements a **multi-agent trading engine** that orchestrates valuation, sentiment, fundamentals, technicals, and macro analyses to generate a single portfolio action with built-in risk controls. It integrates Telegram for live commands, fetches market data, fans out to expert LLM agents, applies position limits via a Risk Manager, executes orders, logs to Notion, and sends a summary back to Telegram.  

## 🔧 What It Does  
- **Telegram Trigger** listens for ticker commands and context inputs 📲  
- **Market Data Node** fetches live prices and exchange rates from an API (no hardcoded keys) 🔗  
- **LLM Agents** run parallel analyses: valuation, sentiment, macro, fundamentals, technicals 🌐  
- **Risk Manager** enforces max position sizes, stop-loss limits, and confidence thresholds ⚖️  
- **Portfolio Manager** aggregates signals into a final BUY/SELL/HOLD decision with allocation % 📊  
- **Execute Order** sends trade requests via HTTP Request 🔒  
- **Log to Notion** writes a full audit trail for compliance 📓  
- **Telegram Output** posts a concise report with signals, risk notes, and final decision 📤  

## 💡 Why It’s Useful  
This template illustrates a **modular “investment committee”** architecture that is easy to extend, swap agents, and maintain. It follows n8n’s best practices for template submissions: sticky-note documentation, placeholder credentials, markdown descriptions, and clear H2 headings.  

## 🔑 Prerequisites  
- Telegram Bot credentials configured in n8n  
- Exchange or data API credentials stored as n8n Credentials (no inline keys)  
- OpenAI (or other LLM) API credential  
- Notion integration credentials  

## 🛠️ How to Use  
1. Import the JSON into n8n and open the canvas.  
2. Read each **Sticky Note** for node-by-node setup tips and rate-limit guidance 🗒️  
3. Configure credentials via the n8n Credentials Manager 🔐  
4. Test each branch (data fetch, agents, risk logic) in isolation before enabling order execution ✅  

## 📐 Architecture Layers  
- **Trigger**: Telegram Trigger →  
- **Data**: HTTP Request →  
- **Analysis**: Parallel LLM Agents →  
- **Risk**: Risk Manager →  
- **Decision**: Portfolio Manager →  
- **Action**: Execute Order, Log to Notion, Send Telegram summary  

## 🔒 Security & Maintenance  
All API keys are stored securely as credentials. Sticky Notes document required scopes, retry strategies, and error-handling paths to ensure observability and safe testing.  

Enjoy building and customizing your own AI-powered hedge-fund workflow!

## 📊 Basic Information

- **Workflow ID:** 8569
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 2179
- **Downloads:** 217
- **Created:** 2025/9/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8569)

## 👤 Author

- **Name:** Tegar karunia ilham
- **Username:** @tegarkaruniailham

## 🏷️ Categories

- Crypto Trading
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **openAi** (×18)
- **httpRequest** (×2)
- **notion** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
