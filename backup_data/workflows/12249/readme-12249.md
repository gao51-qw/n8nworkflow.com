# Send crypto BUY/SELL alerts for top 5 coins with OpenAI, WhatsApp, Telegram, and email

> ## Overview

This workflow is designed to monitor the Top 5 cryptocurrencies in real-time, calculate trading signals (BUY, SELL, HOLD), and send human-readable alerts through multiple channels. It integrates data fetching, signal processing, AI-generated insights, and multi-channel notifications to provide a professional-grade crypto monitoring solution.

## Setup

1. Schedule the trigger
2. Fetch real-time coin data (CoinGecko, Binance API)
3. Filter only required fields
4. Check each data from loop
5. Add the logic for minimum percentage comparison
6. Use AI for analysis enhanced insights
8. Send the notification only if signal is 'SELL' or  'BUY'

## Key Features

- Real-Time Crypto Monitoring: Continuously evaluates the top 5 cryptocurrencies for trading signals.
- Dynamic Signal Calculation: Generates BUY, SELL, HOLD signals based on 24h price change.
- If price changed below or above 2% the dynamic signal will assign to dedicated coin.
- Signal Change Alerts: Sends notifications only when meaningful changes occur.
- Human-Readable Messaging: Converts numeric signals into readable alerts.
- AI Insights: Provides explanations or trading advice via OpenAI.
- Multi-Channel Delivery: Supports WhatsApp, Telegram, and Email.
- Looped Processing: Each coin is processed independently for accurate alerting.
- Wait / Delay Node: Prevents API rate limit issues and controls alert flow.
## Requirements

1. OpenAI API
2. WhatsApp API
3. Telegram API
4. SMTP Credentials or Gmail Credentials.


## 📊 Basic Information

- **Workflow ID:** 12249
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 220
- **Downloads:** 22
- **Created:** 2025/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12249)

## 👤 Author

- **Name:** Mohamed Abubakkar
- **Username:** @mohamed-abubakkar

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** 
- **splitInBatches** (×2)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **noOp** 
- **wait** 
- **whatsApp** 
- **telegram** 
- **emailSend** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **if** 
- **set** 
- **scheduleTrigger** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
