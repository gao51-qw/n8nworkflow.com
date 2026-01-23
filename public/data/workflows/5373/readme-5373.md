# US stocks earnings calendar AI updates to Telegram (Finnhub + Gemini)

> ## Purpose & Audience
This n8n workflow is designed for investors, traders, financial analysts, and community managers who want real-time, structured US stocks upcoming earnings calendar updates directly to their Telegram channels or chats. It’s perfect for anyone running a financial community, managing a trading group, or tracking earnings for personal investment decisions.

## What It Does
1. Fetches upcoming earnings calendar for US-listed stocks using the Finnhub API (free-tier), with a default window of the next 3 days (customizable to any date range).
2. Uses Google Gemini AI to automatically format and structure the earnings data into a clean, grouped, and enhanced message, including company names, tickers, quarters, estimated EPS, and revenue (with intelligent scaling for billions/millions).
3. Sends the formatted earnings update directly to your chosen Telegram chat or channel via a Telegram bot.

## Who Is It For?
- Retail and professional investors
- Financial influencers and Telegram group admins
- Trading desk or community managers
- Anyone who wants hands-off, AI-powered earnings alerts for US stocks

## How to Set Up
1. **Get Finnhub API Key:**
Sign up at https://www.finnhub.io and copy your API key. 
2. **Connect Google Gemini (or OpenAI) Model:** 
Add your Gemini API credentials in n8n for advanced AI formatting and structuring of earnings updates. 
3. **Set Up Your Telegram Bot:** 
Create a bot with @BotFather, get your API token, and add it to n8n’s Telegram credentials. 
Obtain your Telegram chat or group ID (use @RawDataBot for this). 
4. **Customize Date Range (Optional):**
By default, the workflow fetches earnings for the next 3 days, but you can adjust it to any custom window (e.g., today to 7 days in the future).
5. **Activate the Workflow:** 
Schedule how often you want updates (default: every 3 days; can be as frequent as daily). 
The workflow will automatically fetch, format, and send the latest US earnings calendar to your Telegram.

## Key Features
- No coding required—fully automated and customizable.
- Handles Telegram’s message length limit by default.
- AI-enhanced formatting for maximum readability and engagement.
- Free to use with Finnhub’s free API tier.

## 📊 Basic Information

- **Workflow ID:** 5373
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1809
- **Downloads:** 180
- **Created:** 2025/6/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5373)

## 👤 Author

- **Name:** Malik Hashir
- **Username:** @malikx

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **stickyNote** (×6)
- **set** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **telegram** 
- **scheduleTrigger** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
