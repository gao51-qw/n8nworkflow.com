# Generate stock market insights with technical analysis, AI, and Telegram publishing

> # 📈 AI Stock Analytics & BCS "Profit" Social Network Publishing Workflow  

This workflow automatically generates stock market insights for selected tickers (e.g. GAZP, SBER, LKOH) using historical data, technical indicators, and an AI model. The results are then sent to Telegram for quick moderation and publishing.  

## 🔑 What this workflow does
- **Runs twice a day** on a schedule with a predefined list of tickers.  
- **Fetches historical market data** from a broker API.  
- **Calculates key technical indicators** (RSI, EMA/SMA, MACD, Bollinger Bands, ADX).  
- **Generates an investment post** (title + summary) using an LLM.  
- **Stores results** in a PostgreSQL database.  
- **Sends a draft post to Telegram** with inline buttons *“Publish”* and *“Retry”*.  
- **Handles Telegram actions**: publishes the post to the final channel or re-runs the generation process.  

## 📌 Key features
- Multi-ticker support in a single run.  
- Automatic error handling (e.g. missing data or invalid AI JSON output).  
- Human-in-the-loop moderation through Telegram before publishing.  
- PostgreSQL integration for history and analytics storage.  
- Flexible structure: easy to extend with new tickers, indicators, or publishing channels.  

## 🛠️ Nodes used
- **Trigger:** Schedule (twice daily) + Telegram Trigger (button callbacks).  
- **Data:** HTTP Request (broker API), Function (technical analysis calculations).  
- **AI:** OpenAI / OpenRouter with structured JSON output.  
- **Storage:** PostgreSQL (analytics history).  
- **Messaging:** Telegram (drafts and publishing).  

## 🚀 Who is this for
- Fintech startups looking to automate market content.  
- Investment bloggers posting daily stock analysis.  
- Analysts experimenting with trading strategies on real market data.  


## 📊 Basic Information

- **Workflow ID:** 8094
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 1066
- **Downloads:** 106
- **Created:** 2025/9/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8094)

## 👤 Author

- **Name:** Sergey Skorobogatov
- **Username:** @cepreusa

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **scheduleTrigger** 
- **executeWorkflow** (×2)
- **telegramTrigger** 
- **telegram** (×6)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **set** 
- **if** 
- **postgres** (×2)
- **httpRequest** (×2)
- **code** (×3)
- **crypto** 
- **switch** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
