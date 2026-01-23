# Generate intraday AAPL trade signals using live data, OpenAI, Telegram and Notion

> ## 📘 Description
 This workflow automates short-interval market signal evaluation for intraday trading using live technical indicators and deterministic decision logic. It is designed for traders, analysts, and automation teams who want fast, auditable trade signals without manual chart monitoring or subjective interpretation.
On a fixed 5-minute schedule, the workflow fetches live price, volume, RSI, and EMA data for AAPL and combines them into a unified market snapshot. A deterministic computation layer derives clear trend and momentum signals, ensuring indicator logic remains transparent and non-AI. These signals are then evaluated by a strict, rule-based AI decision engine that returns a structured verdict—APPROVE, WAIT, or REJECT—along with confidence and a concise reason.
Trade decisions are routed instantly to Telegram for real-time visibility and logged to Notion for historical analysis and auditability. Built-in error handling ensures any workflow failure is reported immediately.
## ⚠️ Deployment Disclaimer
 This workflow is intended for self-hosted n8n instances only.
 It relies on frequent polling, external market data APIs, and advanced AI agent orchestration not suitable for n8n Cloud.
⚙️ What This Workflow Does (Step-by-Step)
 ⏰ Scheduled Market Data Polling
 Runs automatically every 5 minutes to capture fresh market data.
 📡 Fetch Live Market Indicators
 Pulls AAPL price, volume, RSI, and EMA from the market data provider.
 🔗 Merge Indicator Streams
 Combines all indicators into a synchronized market snapshot.
 🧮 Compute Trend & Momentum (Deterministic)
 Derives bullish, bearish, or neutral signals using fixed logic—no AI.
 🧠 Evaluate Trade Decision (AI)
 Applies strict rule-based logic to return verdict, confidence, and reason.
 🔀 Route Trade by Verdict
 Separates approved vs non-approved signals automatically.
 📣 Send Telegram Trade Alerts
 Delivers real-time trade decisions directly to Telegram.
 🗂 Log Decisions to Notion
 Stores every verdict for tracking, analysis, and audit.
 🚨 Workflow Error Handler → Email Alert
 Sends immediate notifications if any step fails.
## 🧩 Prerequisites
 • Self-hosted n8n instance
 • Market data API (e.g., Twelve Data)
 • OpenAI API credentials
 • Telegram Bot API
 • Notion API access
## 💡 Key Benefits
 ✔ Fully automated intraday signal monitoring
 ✔ Transparent, auditable indicator calculations
 ✔ Strict, deterministic AI decision logic
 ✔ Real-time Telegram alerts without opening n8n
 ✔ Centralized trade history in Notion
 ✔ Reliable error detection and reporting
## 👥 Perfect For
 Active traders and market analysts
 Quant and rule-based trading teams
 Automation engineers building trading assistants
 Founders prototyping decision-support trading systems

## 📊 Basic Information

- **Workflow ID:** 12553
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 0
- **Downloads:** 0
- **Created:** 2026/1/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12553)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×3)
- **merge** 
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** 
- **telegram** (×2)
- **notion** 
- **errorTrigger** 
- **gmail** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
