# Advanced market trends & competitor GPT-4o intelligence hub

> ## How It Works
Automated daily scraping of competitor websites, pricing pages, job postings, and press releases feeds into an AI analyzer powered by OpenAI or Claude to extract trends, insights, and key metrics. The analyzed results are stored in Google Sheets for historical tracking and longitudinal comparison, and are automatically shared with stakeholders via email or WhatsApp. This workflow eliminates manual competitive research, enabling product teams and executives to monitor market movements efficiently and make timely, data-driven decisions.

## Setup Steps
1. Configure the daily schedule trigger.
2. Define competitor URLs using workflow variables.
3. Add and configure the OpenAI or Claude API key.
4. Authenticate Google Sheets using the appropriate credentials.
5. Connect Gmail and WhatsApp Business API tokens.
6. Test each scraper individually before enabling full automation.

## Prerequisites
OpenAI/Claude API account, Google Sheets access, Gmail account, WhatsApp Business API, web scraping enabled

## Use Cases
Market share monitoring, pricing strategy updates, competitor talent movement tracking, industry trend reports

## Customization
Modify scrape targets, adjust AI prompt for different metrics, change alert frequency 

## Benefits
Real-time competitive visibility, reduced manual research 15+ hours/week, faster decision-making 


## 📊 Basic Information

- **Workflow ID:** 11783
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 168
- **Downloads:** 16
- **Created:** 2025/12/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11783)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×3)
- **httpRequest** (×4)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.toolCode** 
- **httpRequestTool** 
- **switch** 
- **code** 
- **googleSheets** (×2)
- **whatsApp** 
- **if** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
