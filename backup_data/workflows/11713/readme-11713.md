# Automate vendor analysis & contract management with GPT-4o, Gmail, and Google Sheets

>  

## How It Works
Schedules automated vendor pricing analysis across multiple sources. Fetches delivery reliability and contract data, analyzes vendor performance using Claude AI, then distributes consolidated reports via Gmail and creates Google Sheets summaries. Target audience: procurement teams and business analysts managing multi-vendor relationships. Solves vendor evaluation bottlenecks by automating data collection, AI-driven analysis, and report distribution.

## Workflow Steps
**What:** Trigger → Scrapes vendor data (pricing, reliability, contracts) → Sends to vendor analysis agent → Branches to multiple outputs (Gmail notification, Google Sheets archive, Data parser).  

## Setup Steps
1. Configure Schedule Trigger timing. 2. Add scraper credentials (Vendor Pricing, Delivery Reliability, Contract Data nodes). 3. Connect Claude/OpenAI API key in Vendor Analysis Agent. 4. Authenticate Gmail account for notifications. 5. Link Google Sheets API for data storage.

## Prerequisites
OpenAI/Claude API key, Gmail credentials, Google Sheets API access, Vendor data sources (web scrapers or direct APIs).

## Use Cases
Automate weekly vendor performance reviews, generate compliance reports for procurement teams 

## Customization
Modify trigger schedule, add/remove scraper nodes for new vendors, adjust Claude prompt for different analysis criteria 

## Benefits
Eliminates manual data gathering (hours to minutes), ensures consistent vendor evaluation criteria 




## 📊 Basic Information

- **Workflow ID:** 11713
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 87
- **Downloads:** 8
- **Created:** 2025/12/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11713)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **httpRequest** (×2)
- **airtable** (×2)
- **merge** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.toolCode** 
- **gmailTool** 
- **googleSheetsTool** 
- **airtableTool** 
- **@n8n/n8n-nodes-langchain.agent** 
- **if** 
- **gmail** 
- **googleSheets** (×2)
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
