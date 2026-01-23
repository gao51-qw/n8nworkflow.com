# Monitor Japan Flight Prices & Generate Booking Alerts with GPT-4o & Multi-Source Analysis

> ## How It Works
Scheduled triggers run automated price checks across multiple travel data sources. The collected data is aggregated, validated, and processed through an AI analysis layer that compares trends, detects anomalies, and evaluates multi-criteria factors such as price movement, seasonality, and route demand. The system then routes results into booking preparation, report generation, and notification modules. When target price conditions are met, alerts are sent and records are updated accordingly.

## Setup Steps
1. Connect Google Flights and Skyscanner APIs using authenticated tokens.
2. Configure the OpenAI API for enhanced analysis and multi-factor evaluation.
3. Link Google Sheets for storing historical price data.
4. Add WordPress site credentials to enable automated report publishing.
5. Enable email notifications for price alerts and updates.
6. Adjust the scheduler frequency within the **Schedule Price Check** node to control how often the workflow runs.

## Prerequisites
Google Flights API, Skyscanner API, flight booking service credentials, OpenAI API key, Google Sheets access, WordPress admin account, email service configured.


## Use Cases
Travel agencies automating client alerts for price drops. Corporate travel managers monitoring bulk bookings.  

## Customization
Modify price thresholds in Multi-Criteria Decision node. Add airline or destination filters in search parameters. 

## Benefits
Eliminates manual price monitoring. Reduces booking delays through automation.

## 📊 Basic Information

- **Workflow ID:** 10886
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 91
- **Downloads:** 9
- **Created:** 2025/11/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10886)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Miscellaneous
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **httpRequest** (×3)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** (×2)
- **if** (×2)
- **slack** (×4)
- **wordpress** (×2)
- **code** 
- **switch** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
