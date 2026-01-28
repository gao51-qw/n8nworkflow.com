# Analyze real estate submarket opportunities with GPT-4, MLS, Gmail and Slack

> ## How It Works
This workflow automates end-to-end real estate investment analysis by aggregating data from multiple sources and applying AI-driven evaluation. It is designed for real estate investors, analysts, and portfolio managers seeking data-backed decisions without manual research overhead. The solution addresses the time-consuming challenge of collecting and analyzing fragmented real estate data—such as MLS listings, public records, demographic trends, and macroeconomic indicators—and transforms it into actionable insights using AI. Data is collected in parallel across four streams: MLS property data, public records, demographic information, and macroeconomic signals. These streams are consolidated into a unified dataset and processed by OpenAI GPT-4, using calculator tools and structured output parsing for quantitative analysis.
 
## Setup Steps
1. Configure HTTP nodes with your MLS API, public records service 
2. Add OpenAI API key in Chat Model node credentials
3. Connect Gmail account for acquisition team notifications
4. Integrate Slack workspace and specify investor notification channel
5. Set schedule trigger frequency in Schedule node for desired analysis cadence

## Prerequisites
OpenAI API key, MLS data service access, public records API credentials

## Use Cases
Real estate investment firms screening multiple markets simultaneously

## Customization
Modify AI prompts to adjust investment criteria priorities, add custom financial metrics 

## Benefits
Reduces investment analysis time from hours to minutes, eliminates manual data aggregation errors


 





## 📊 Basic Information

- **Workflow ID:** 12273
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 31
- **Downloads:** 3
- **Created:** 2025/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12273)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **httpRequest** (×4)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **code** 
- **gmail** 
- **slack** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
