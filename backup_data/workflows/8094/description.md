# 📈 AI Stock Analytics & BCS "Profit" Social Network Publishing Workflow  

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
