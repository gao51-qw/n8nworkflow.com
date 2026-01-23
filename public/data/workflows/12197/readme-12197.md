# Predict tenant default risk with GPT-4o, Gmail, Slack and collections APIs

> ## How It Works
This workflow automates tenant screening by analyzing payment history, credit, and employment data to predict rental risks. Designed for property managers, landlords, and real estate agencies, it solves the challenge of objectively evaluating tenant reliability and preventing payment defaults.The system runs daily assessments, fetching rent payment history, credit bureau reports, and employment records. An AI agent merges this data, calculates risk scores, and routes alerts based on severity. High-risk tenants trigger immediate email notifications for intervention, medium-risk cases post to Slack for monitoring, while low-risk updates save quietly to databases. Automated collection workflows initiate for high-risk cases.

## Setup Steps
1. Configure payment history, credit bureau, and employment credentials in fetch nodes
2. Add OpenAI API key for risk analysis and set Gmail/Slack credentials for alerts
3. Customize risk score thresholds and routing rules in workflow logic

## Prerequisites
Payment system API, credit bureau access, employment verification API

## Use Cases
Rental application screening, existing tenant monitoring 

## Customization
Modify risk scoring criteria, adjust alert thresholds

## Benefits
Reduces defaults through early detection, eliminates screening bias



## 📊 Basic Information

- **Workflow ID:** 12197
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 46
- **Downloads:** 4
- **Created:** 2025/12/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12197)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **switch** 
- **gmail** 
- **slack** 
- **stickyNote** (×5)
- **bambooHr** 
- **payPal** 
- **airtable** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
