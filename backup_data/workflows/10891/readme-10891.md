# Predict and Forecast HDB Flat Prices with GPT-4o and Google Sheets Analytics

> ## How It Works
The workflow runs on a monthly trigger to collect both current-year and multi-year historical HDB data. Once fetched, all datasets are merged with aligned fields to produce a unified table. The system then applies cleaning and normalization rules to ensure consistent scales and comparable values. After preprocessing, it performs pattern mining, anomaly checks, and time-series analysis to extract trends and forecast signals. An AI agent, integrating OpenAI GPT-4, statistical tools, and calculator nodes, synthesizes these results into coherent insights. The final predictions are formatted and automatically written to Google Sheets for reporting and downstream use.

## Setup Steps
1) Configure fetch nodes to pull current-year HDB data and three years of historical records.
2) Align and map column names across all datasets.
3) Set normalization and standardization parameters in the cleaning node.
4) Add your OpenAI API key (GPT-4) and link the model, forecasting tool, and calculator nodes.
5) Authorize Google Sheets and configure sheet and cell mappings for automated export.
 


## Prerequisites
- Historical data source with API access (3+ years of records)
- OpenAI API key for GPT-4 model
- Google Sheets account with API credentials
- Basic understanding of time series data

## Use Cases
**Real Estate:** Forecast property prices using multi-year historical HDB/market data with confidence intervals
**Finance:** Predict market trends by aggregating years of transaction or pricing records

## Customization
**Data Source:** Replace HDB/fetch nodes with stock prices, sensor data, sales records, or any historical dataset
**Analysis Window:** Adjust years fetched (2-5 years) based on data availability and prediction horizon


## Benefits
**Automation:** Monthly scheduling eliminates manual data gathering and analysis
**Consolidation:** Merges fragmented year-by-year data into unified historical view



## 📊 Basic Information

- **Workflow ID:** 10891
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 62
- **Downloads:** 6
- **Created:** 2025/11/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10891)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **httpRequest** (×4)
- **merge** 
- **code** (×3)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolCode** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
