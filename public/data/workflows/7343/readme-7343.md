# Automated lead capture, scoring & CRM integration with HubSpot, Clearbit & Slack

> How it works
This Lead Capture & Auto-Qualification workflow transforms raw leads into qualified prospects through intelligent automation. Here's the high-level flow:
Lead Intake → Data Validation → Enrichment → Scoring → Smart Routing → CRM Integration & Notifications
The system captures leads from any source, validates the data, enriches it with company intelligence, scores based on qualification criteria, and automatically routes high-value prospects to sales while nurturing lower-priority leads.
Set up steps
Time to set up: Approximately 30-45 minutes
Prerequisites: Active accounts with HubSpot, Clearbit, Apollo, and Slack
Step 1: Import Workflow (2 minutes)

Copy the workflow JSON and import into your n8n instance
The workflow will appear with all nodes and sticky note documentation

Step 2: Configure Environment Variables (5 minutes)
Set these in your n8n environment:

APOLLO_API_URL
SLACK_SALES_CHANNEL_ID
SLACK_MARKETING_CHANNEL_ID
CRM_ASSIGNMENT_URL

Step 3: Set Up API Credentials (15 minutes)
Create credential connections for:

Clearbit API (enrichment)
Apollo API (HTTP Header Auth)
HubSpot API (CRM integration)
Slack API (notifications)

Step 4: Customize Scoring Logic (10 minutes)

Review the qualification criteria in the Code node
Adjust scoring weights based on your ideal customer profile
Modify industry targeting and company size thresholds

Step 5: Test & Activate (8 minutes)

Send test webhook requests to validate the flow
Verify CRM contact creation and Slack notifications
Activate the workflow for live lead processing

## 📊 Basic Information

- **Workflow ID:** 7343
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 552
- **Downloads:** 55
- **Created:** 2025/8/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7343)

## 👤 Author

- **Name:** shae
- **Username:** @senshae

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×10)
- **webhook** 
- **if** (×2)
- **clearbit** 
- **httpRequest** 
- **merge** 
- **code** 
- **hubspot** (×2)
- **slack** (×2)
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
