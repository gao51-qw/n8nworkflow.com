# Optimize multi-property rents and analytics with GPT-4o and Google Sheets

> ## How It Works
This workflow automates comprehensive real estate investment analysis by orchestrating specialized AI agents to evaluate property data, market trends, and financial metrics. Designed for real estate investors, portfolio managers, and property analysts managing multiple properties or evaluating acquisition opportunities, it eliminates the manual research and analysis that typically requires days of work across multiple data sources. The system aggregates data from real estate APIs, market databases, and local statistics, then deploys specialized agents: performance analysis evaluates ROI and cash flow, recommendation engines identify optimal properties, market analysis assesses location trends, sentiment analysis mines reviews and local feedback, and workflow tools calculate financial projections. An orchestrator coordinates these agents to generate consolidated investment reports with property rankings, risk assessments, and portfolio recommendations. Results populate Google Sheets dashboards and trigger email notifications, transforming weeks of analysis into automated insights delivered in hours.

## Setup Steps
1. Configure real estate API credentials (Zillow/Realtor.com) 
2. Add market data API keys for local statistics and demographics
3. Input NVIDIA API keys for all OpenAI Model nodes  
4. Set OpenAI API key in Team Collaboration Agent/Orchestrator
5. Configure Calculator Tool parameters for financial projections
6. Connect Google Sheets and specify portfolio tracking spreadsheet ID
7. Set up Gmail credentials and specify recipient addresses for reports

## Prerequisites
NVIDIA API access, OpenAI API key, real estate data API subscriptions 
## Use Cases
Multi-property portfolio analysis, acquisition opportunity screening.
## Customization
Adjust investment criteria thresholds, add custom financial metrics 
## Benefits
Reduces analysis time by 90%, evaluates unlimited properties simultaneously 

## 📊 Basic Information

- **Workflow ID:** 12496
- **Complexity:** advanced
- **Node Count:** 44
- **Views:** 3
- **Downloads:** 0
- **Created:** 2026/1/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12496)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×6)
- **httpRequest** (×6)
- **merge** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×4)
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.agentTool** (×3)
- **code** (×3)
- **summarize** (×2)
- **switch** 
- **splitOut** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **gmail** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 44 nodes with 35 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
