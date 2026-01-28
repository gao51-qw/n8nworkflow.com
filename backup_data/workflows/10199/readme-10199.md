# Predict customer churn with AI analysis of HubSpot and Google Sheets data

> ## Who it’s for
Built for Customer Success and Account Management teams focused on proactive retention. This workflow helps you automatically identify at-risk customers – before they churn – by combining CRM, usage, and sentiment data into one actionable alert.

## What it does
This end-to-end workflow continuously monitors customer health by consolidating data from HubSpot and Google Sheets.
Here’s how it works:
* Fetch deals from HubSpot.
* Collect context — linked support tickets and feature usage from a Google Sheet.
* Run sentiment analysis on the tickets to generate a customer health score.
* Evaluate risk — an AI agent reviews deal age, sentiment score, and usage trends against predefined thresholds.
* Send alerts — if churn risk is detected, it automatically sends a clear, data-driven email to the responsible team member with next-step recommendations.

## How to set it up
To get started, configure your credentials and parameters in the following nodes:

1.  **Credentials:**
    * **HubSpot:** Connect your account (`HubSpot: Get All Deals`).
    * **LLM Model:** Add credentials for your preferred provider (`Config: Set LLM for Agent & Chains`).
    * **Google Sheets:** Connect your account (`Tool: Get Feature Usage from Sheets`).
    * **Email:** Set up your SMTP credentials (`Email: Send Churn Alert`).
2.  **Tool URLs:**
    * In **Tool: Calculate Sentiment Score**, enter the **Webhook URL** from the `Trigger: Receive Tickets for Scoring` node within this same workflow.
    * In **Tool: Get HubSpot Data**, enter the **Endpoint URL** for your MCP HubSpot data workflow. *(Note: This tool *does* call an external workflow)*.
3.  **Google Sheet:**
    * In **Tool: Get Feature Usage from Sheets**, enter the Document ID for your own Google Sheet.
4.  **Email Details:**
    * In **Email: Send Churn Alert**, change the `From` and `To` email addresses.

## Requirements
* HubSpot account with Deals API access
* LLM provider account (e.g. OpenAI)
* Google Sheets tracking customer feature usage
* n8n with LangChain community nodes enabled
* A separate n8n workflow set up to act as an MCP endpoint for fetching HubSpot data (called by `Tool: Get HubSpot Data`).

## How to customize it
Tailor this workflow to match your business logic:
* **Scoring logic:** Adjust the JavaScript in the `Code: Convert Sentiment to Score` node to redefine how customer scores are calculated.
* **Alert thresholds:** Update the prompt in the `AI Chain: Analyze for Churn Risk` node to fine-tune when alerts trigger (e.g. deal age, score cutoff, or usage drop).
* **Data sources:** Swap HubSpot or Google Sheets for your CRM or database of choice — like Salesforce or Airtable.

✅ **Outcome:** A proactive customer health monitoring system that surfaces risks before it’s too late — keeping your team focused on prevention, not firefighting.

## 📊 Basic Information

- **Workflow ID:** 10199
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 1077
- **Downloads:** 107
- **Created:** 2025/10/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10199)

## 👤 Author

- **Name:** PollupAI
- **Username:** @Pollup

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×4)
- **manualTrigger** 
- **hubspot** 
- **splitInBatches** 
- **set** 
- **webhook** 
- **code** (×4)
- **splitOut** 
- **@n8n/n8n-nodes-langchain.sentimentAnalysis** 
- **merge** 
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **httpRequestTool** 
- **googleSheetsTool** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **markdown** 
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
