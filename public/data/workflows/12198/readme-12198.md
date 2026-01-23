# Monitor IoT sustainability compliance and ESG reports with OpenAI, Airtable, Slack and Gmail

> ## How It Works

This workflow automates IoT device compliance monitoring and anomaly detection for industrial operations. Designed for facility managers, quality assurance teams, and regulatory compliance officers, it solves the challenge of continuously monitoring sensor networks while ensuring regulatory adherence and detecting operational issues in real-time.The system runs every 15 minutes, fetching IoT sensor data and structuring it for analysis. Dual AI agents evaluate compliance against regulatory standards and detect operational anomalies. Issues trigger immediate email and Slack alerts for rapid response. Daily data aggregates into comprehensive ESG reports with AI-generated insights, automatically emailed to stakeholders for transparency and audit trails.

## Setup Steps
1. Configure AirTable credentials and set 15-minute schedule interval
2. Add OpenAI API keys for compliance and anomaly detection agents, configure regulatory thresholds
3. Set Gmail/Slack credentials for alerts and ESG report distribution

## Prerequisites
IoT sensor platform API access, OpenAI API key, Gmail/Slack accounts

## Use Cases
Manufacturing quality control, environmental compliance monitoring

## Customization
Modify sensor polling frequency, adjust compliance rules, customize anomaly thresholds

## Benefits
Continuous compliance assurance, instant anomaly detection

## 📊 Basic Information

- **Workflow ID:** 12198
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 32
- **Downloads:** 3
- **Created:** 2025/12/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12198)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **if** 
- **slack** 
- **aggregate** 
- **stickyNote** (×5)
- **airtable** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
