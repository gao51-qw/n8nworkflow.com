# Analyze crypto news sentiment for any token with GPT-4o and Telegram alerts

> A sentiment intelligence sub-agent for the **Binance Spot Market Quant AI Agent**. It aggregates crypto news from major sources, filters by token keyword (e.g., BTC, ETH), and produces a Telegram-ready summary including market sentiment and top headlines—powered by GPT-4o.

🎥 **Live Demo**:
[![Click to Watch](https://img.youtube.com/vi/k9VuU2h5wwI/hqdefault.jpg)](https://youtu.be/k9VuU2h5wwI)

---

## 🛠️ Workflow Function

This tool performs the following steps:

| 🔧 Step                  | 📌 Description                                                                |
| ------------------------ | ----------------------------------------------------------------------------- |
| Webhook Input            | Accepts `{ "message": "symbol" }` via HTTP POST                             |
| Crypto Keyword Extractor | GPT model extracts the valid crypto symbol (e.g., "SOL", "DOGE", "ETH")       |
| RSS News Aggregators     | Pulls latest headlines from 9+ crypto sources (CoinDesk, Cointelegraph, etc.) |
| Merge & Filter Articles  | Keeps only articles containing the specified token                            |
| Prompt Builder           | Creates prompt for GPT with filtered headlines                                |
| GPT-4o Summarizer        | Summarizes news into 3-part response: Summary, Sentiment, Headline Links      |
| Telegram Formatter       | Converts GPT output into a Telegram-friendly message                          |
| Response Handler         | Returns formatted message to the caller via webhook                           |

---

## 📥 Webhook Trigger Format

```json
{
  "message": "ETH"
}
```

This triggers a full execution of the workflow and returns output like:

```
📣 ETH Sentiment: Neutral

• BlackRock’s tokenized fund expands to Ethereum mainnet (CoinDesk)  
• Ethereum fees remain high, analysts call for L2 migration (NewsBTC)  
• Vitalik warns about centralized risks in staking (Cointelegraph)
```

---

## 📚 Installation Guide

### 1. Import & Enable

* Load the `.json` into your **n8n Editor**
* Enable webhook trigger in the top-right corner
* Ensure it's reachable via `POST /webhook/custom-path`

### 2. Required Credentials

* **OpenAI API Key** (GPT-4o capable)
* No API keys required for RSS feeds

### 3. Connect to Quant Agent

* Add an HTTP Request node in your main AI agent
* Point to this workflow's webhook with body `{ "message": "symbol" }`
* Capture the response to include in your Telegram output

---

## 🔍 Real Use Cases

| Scenario                           | Result                                                           |
| ---------------------------------- | ---------------------------------------------------------------- |
| BTC Sentiment before a key event   | Returns 8–12 filtered articles with bullish/neutral/bearish tone |
| Daily pulse for altcoins like DOGE | Shows relevant headlines, helpful for intraday trading setups    |
| Telegram chatbot integration       | Enables user to query sentiment via `/sentiment ETH`             |
| Macro context for Quant AI outputs | Adds emotional/news context to technical-based trade decisions   |

---

## 🧾 Licensing & Attribution

© 2025 **Treasurium Capital Limited Company**
Architecture, prompts, and trade report structure are IP-protected.
**No unauthorized rebranding or resale permitted.**

🔗 For support: [LinkedIn – Don Jayamaha](https://linkedin.com/in/donjayamahajr)

## 📊 Basic Information

- **Workflow ID:** 4740
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 11114
- **Downloads:** 1111
- **Created:** 2025/6/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4740)

## 👤 Author

- **Name:** Don Jayamaha Jr
- **Username:** @don-the-gem-dealer

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **rssFeedRead** (×9)
- **merge** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×9)
- **webhook** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
