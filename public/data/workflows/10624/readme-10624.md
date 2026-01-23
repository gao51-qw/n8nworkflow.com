# Automate Singapore COE price analysis & purchase timing with GLM-4.5 AI predictions

> 
## Introduction
Automates Singapore COE price tracking, predicts trends using AI, and recommends optimal car purchase timing. Scrapes LTA data biweekly, analyzes historical trends, forecasts next 6 bidding rounds, and sends alerts when buying windows appear—saving time and identifying cost-saving opportunities.

## How it Works
Biweekly trigger scrapes LTA COE data → processes historical trends → AI predicts 6-month prices → compares current vs forecast → generates buy/wait recommendations → alerts sent via Gmail or Telegram.

## Setup Steps
1. Add NVIDIA/OpenAI API credentials in n8n
2. Connect Google Sheets for data storage
3. Authenticate Gmail/Telegram for notifications
4. Schedule trigger for Wednesdays 8PM SGT
5. Configure alert thresholds in conditional nodes

## Workflow
Schedule Trigger → HTTP Request (Scrape LTA) → Data Processing → Google Sheets (Store) → AI Prediction → Analysis Engine → Conditional Logic → Gmail/Telegram Notification

## Workflow Steps
1. Scraping: Extract COE prices from OneMotoring
2. Processing: Calculate moving averages, volatility, seasonal trends
3. Storage: Save to Google Sheets with timestamps
4. Prediction: AI forecasts next 6 bidding rounds
5. Analysis: Compare current vs predicted prices, generate recommendation
6. Notification: Alerts via email/Telegram

## Prerequisites
NVIDIA/OpenAI API key, Google account (Sheets), Gmail/Telegram for notifications, basic COE category knowledge

## Use Cases
First-time buyers monitoring price dips, fleet managers timing bulk purchases

## Customization
Add economic indicators, integrate car loan calculators, track parallel imported car prices

## Benefits
Saves hours of manual monitoring, captures 10–15% price dips, provides data-driven purchase timing (potential $5K–$15K savings)



## 📊 Basic Information

- **Workflow ID:** 10624
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 99
- **Downloads:** 9
- **Created:** 2025/11/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10624)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** 
- **code** (×4)
- **googleSheets** (×2)
- **set** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **emailSend** 
- **if** 
- **telegram** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
