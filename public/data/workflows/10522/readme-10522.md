# Automate conference travel approvals with Deepseek AI, Gmail and Google Sheets

> ## Introduction
Automates overseas conference approval requests to CEO. Generates emails with conference details, flight quotes, accommodation, expense breakdown, and admin procedures. Ensures consistency and saves time.

## How It Works
Manual trigger initiates: fetches exchange rates/conference details, parses flight quotes, uses AI to calculate expenses and generate draft, checks budget, formats messages, merges versions, creates PDF, sends to CEO, logs to tracker.


## Workflow Template
Manual Trigger → Configuration → [Exchange Rates + Conference Details + Flight Quotes] → AI Agent → [GPT-4 + Calculate + Extract + Generate Tools] → Total Expenses → Budget Check → [Format Approved + Warning] → Merge → PDF → Send CEO → Log Tracker
## Workflow Steps
1. **Initialization:** Manual trigger with conference parameters, sets variables (name, dates, location, funding)
2. **Data Collection:** Fetches/parses exchange rates, conference details via HTTP, aggregates 3 flight quotations
3. **AI Processing:** AI Agent orchestrates GPT-4 with Calculate, Extract, Generate tools for expense analysis and email drafting
4. **Validation:** Calculates total expenses, validates against budget threshold
5. **Formatting:** Customizes approval/warning messages by status, merges content versions
6. **Delivery:** Generates PDF breakdown, dispatches via Gmail to CEO, logs to Google Sheets tracker

## Setup Instructions
1. **APIs:** Configure currency/conference endpoints with credentials
2. **OpenAI:** Add GPT-4 API key in AI Agent
3. **AI Tools:** Set Calculate, Extract, Generate parameters
4. **Gmail:** Connect account, set CEO recipient
5. **Sheets:** Link tracker with write permissions
6. **Budget:** Set threshold (default: $5000)

## Prerequisites
n8n instance, Currency API, Conference API, OpenAI GPT-4 key, Gmail with OAuth, Google Sheets, PDF generator, Travel agent API

## Use Cases
**Academic:** Staff requests conference with grant, registration, 3 quotes, hotel, visa. AI generates email with PO/card procedures. **Sales:** Manager seeks client meeting approval with comparisons, per diem. **Training:** Employee requests certification with fees, accommodation, transport.

## Customization
Modify thresholds by department. Add categories (insurance, baggage). Customize AI prompts for tone/branding. Integrate flight sources. Extend approval chain. Add travel restrictions.  

## Benefits
**Time Efficient:** Reduces prep from 60+ to 5 minutes. **AI-Powered:** Intelligent analysis and generation. **Consistent:** Ensures completeness. **Accurate:** Eliminates errors. 

## 📊 Basic Information

- **Workflow ID:** 10522
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 106
- **Downloads:** 10
- **Created:** 2025/11/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10522)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×4)
- **httpRequest** (×2)
- **code** (×3)
- **if** 
- **merge** 
- **aggregate** 
- **gmail** 
- **googleSheets** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.toolCode** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
