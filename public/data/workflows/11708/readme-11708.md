# Generate strategic business recommendations with GPT-4 Mini and multi-channel distribution

> ## How It Works
Automates sales data analysis and strategic insight generation for sales managers and strategists needing actionable intelligence. Fetches multi-source data from sales, marketing, and financial systems, validates data quality to prevent errors, applies advanced AI analysis via OpenAI to identify market trends and patterns, calculates comprehensive KPIs for performance measurement, generates prioritized recommendations, and automatically distributes detailed insights via Gmail alerts and Google Sheets dashboards—eliminating time-consuming manual analysis overhead.

## Setup Instructions
1. **OpenAI API**: Add key via credentials
2. **Gmail**: Authorize account for email delivery
3. **Google Sheets**: Connect for dashboard logging
4. **Schedule**: Set monthly trigger timing
5. **Modify data sources**: Replace fetch nodes with your APIs

## Prerequisites
OpenAI API key, Gmail account with send permissions, Google Sheets access, n8n instance, source data APIs (sales, marketing, financial systems).

## Use Cases
E-commerce platforms analyzing sales trends; SaaS companies generating strategy reports; multi-channel retailers routing recommendations; 


## Customization
Add data sources via fetch nodes; swap OpenAI for Claude or Gemini; modify routing logic for different priority thresholds; 

## Benefits
Reduces analysis time from hours to minutes. Eliminates manual report crea

## 📊 Basic Information

- **Workflow ID:** 11708
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 91
- **Downloads:** 9
- **Created:** 2025/12/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11708)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×4)
- **httpRequest** (×5)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **code** (×2)
- **gmail** 
- **asana** 
- **switch** 
- **if** 
- **slack** (×2)
- **postgres** 
- **googleSheets** 
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
