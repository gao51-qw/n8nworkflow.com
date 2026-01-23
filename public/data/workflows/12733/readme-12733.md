# Automate satellite data analysis and regulatory reporting with GPT-4 and Slack

> ## How It Works
This workflow automates satellite data processing by ingesting raw geospatial data, applying AI analysis, and submitting formatted reports to regulatory authorities. Designed for environmental agencies, research institutions, and compliance teams, it solves the challenge of manually processing large satellite datasets and preparing standardized submissions for government agencies. The system triggers on scheduled intervals or event webhooks, fetching satellite imagery and sensor data from ECC/climate APIs. Raw data flows through parsing and normalization stages, then routes to AI models for analysis—detecting environmental changes, calculating metrics, and identifying anomalies. Processed results are validated against agency specifications, formatted into SDQAR reports, and automatically stored in designated repositories. The workflow generates submission packages with required metadata, notifies stakeholders via Slack and email, and logs all activities to Google Sheets for audit trails. This eliminates hours of manual data processing, ensures compliance with submission standards, and accelerates environmental monitoring workflows.

## Setup Steps
1. Configure ECC/climate API credentials for satellite data access
2. Set up webhook endpoints for event-driven data ingestion triggers
3. Add OpenAI API key for geospatial analysis and anomaly detection
4. Configure NVIDIA NIM API for specialized environmental modeling
5. Set Google Sheets credentials for audit logging and tracking
6. Connect Slack workspace and specify notification channels for submission updates
7. Configure Gmail OAuth for automated stakeholder notifications

## Prerequisites
Active satellite data API access (ECC, NASA, ESA) with authentication credentials. 
## Use Cases
Automated climate monitoring with monthly regulatory submissions.
## Customization
Modify AI analysis prompts for specific environmental parameters. 
## Benefits
Reduces satellite data processing time by 85% through end-to-end automation.

## 📊 Basic Information

- **Workflow ID:** 12733
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 0
- **Downloads:** 0
- **Created:** 2026/1/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12733)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **webhook** 
- **set** (×2)
- **merge** 
- **httpRequest** 
- **code** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **switch** 
- **postgres** (×3)
- **slack** 
- **emailSend** 
- **if** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
