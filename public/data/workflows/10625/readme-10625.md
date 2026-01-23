# Track Singapore COE prices with AI forecasting & smart buy recommendations via Telegram

> ## Introduction
Automates Singapore COE price tracking with AI forecasts and buy/wait recommendations. Weekly scraping collects LTA data, enriches with economic indicators, predicts 6-month trends, and alerts users via Telegram/email—helping car buyers and fleet managers make data-driven purchase decisions while avoiding manual tracking.

## How it Works
Weekly trigger scrapes LTA COE → validates → stores in Google Sheets → calculates indicators → AI forecasts trends → multi-scenario analysis → generates buy/wait signals → sends actionable alerts.

## Setup Steps
1. Add OpenAI/NVIDIA API credentials in n8n
2. Authenticate Google Sheets and create spreadsheet
3. Configure Telegram bot or Gmail SMTP
4. Set weekly trigger (Thursday 9AM SGT post-bidding)
5. Adjust alert thresholds in conditional nodes

## Workflow
Schedule Trigger → Scrape COE → Validate → Store Sheets → Fetch Historical → Calculate Indicators → AI Prediction → Merge Economics → Multi-Scenario Analysis → Compare Conditions → Generate Dashboard → Send Alerts

## Workflow Steps
1. Scraping: Fetch LTA COE results with retry logic
2. Validation: Check completeness, flag anomalies
3. Storage: Append timestamped records to Sheets
4. Enrichment: Calculate moving averages, volatility, seasonality
5. AI Analysis: Forecast next 6 months with confidence intervals
6. Decision Engine: Output buy/wait/monitor recommendation
7. Reporting: Create dashboard and send alerts via Telegram/email

## Prerequisites
OpenAI/NVIDIA API key, Google Sheets access, Telegram bot token or Gmail, basic COE category understanding

## Use Cases
First-time buyers timing purchases, fleet operators coordinating bulk acquisitions

## Customization
Add SMS alerts via Twilio, integrate loan calculators for total cost analysis

## Benefits
Saves 5+ hours monthly, captures 10–18% price dips, provides predictive insights (potential $10K–$25K savings)




## 📊 Basic Information

- **Workflow ID:** 10625
- **Complexity:** advanced
- **Node Count:** 44
- **Views:** 33
- **Downloads:** 3
- **Created:** 2025/11/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10625)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** (×2)
- **httpRequest** (×2)
- **code** (×10)
- **googleSheets** (×2)
- **set** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **emailSend** 
- **if** (×4)
- **telegram** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **airtable** 
- **noOp** 
- **merge** 
- **stickyNote** (×13)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 44 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
