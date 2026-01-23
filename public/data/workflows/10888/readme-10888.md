# Predict F1 Race Winners with OpenAI GPT-4o, Historical Data & Slack Alerts

> ## How It Works
Every day at 8 AM, the workflow automatically retrieves the latest F1 data—including driver standings, qualifying results, race schedules, and circuit information. All sources are merged into a unified dataset, and driver performance metrics are computed using historical trends. An AI agent, enhanced with vectorized race history, evaluates patterns and generates race-winner predictions. When the confidence score exceeds the defined threshold, the system pushes an automated Slack alert and records the full analysis in the database and Google Sheets.

## Setup Steps
1. Update the workflow configuration with: `newsApiUrl`, `weatherApiUrl`, `historicalYears`, and `confidenceThreshold`.
2. Connect PostgreSQL using the schema:
   **prediction_date, predicted_winner, confidence_score, prediction_source, data_version, full_analysis**.
3. Provide the Slack channel ID for sending high-confidence alerts.
4. Specify the Google Sheets document ID and sheet name for prediction logging.
5. Test connectivity to the Ergast API (no authentication required).

## Prerequisites
OpenAI account (GPT-4o access), Slack workspace admin access, PostgreSQL instance, Google Sheets account, n8n instance with LangChain community nodes enabled.

## Customization
Extend by adding constructor predictions (modify AI prompt). Integrate Discord or Teams instead of Slack.

## Benefits
Saves time by automating data collection, improves accuracy using multiple performance metrics and historical patterns.



## 📊 Basic Information

- **Workflow ID:** 10888
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 91
- **Downloads:** 9
- **Created:** 2025/11/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10888)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Miscellaneous
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **httpRequest** (×6)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequestTool** (×2)
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **if** 
- **postgres** 
- **slack** 
- **googleSheets** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.toolCode** 
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
