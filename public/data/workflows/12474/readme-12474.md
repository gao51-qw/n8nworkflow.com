# Score HubSpot deal conversion risk with OpenAI and Slack alerts

> ## How it works  
This workflow runs daily to review all active deals and evaluate their likelihood of closing successfully. It enriches deal data with recent engagement activity and applies AI-based behavioral scoring to predict conversion probability. High-risk or stalled deals are flagged automatically. Actionable alerts are sent to the sales team, and all analysis is logged for forecasting and tracking.

## Step-by-step  

- **Trigger and fetch deals**  
  - **Schedule Trigger** – Runs the workflow automatically at a fixed time each day.  
  - **Get Active Deals from HubSpot** – Retrieves all open, non-closed deals with key properties.  
  - **Formatting Data** – Normalizes deal fields such as value, stage, age, contacts, and activity dates.  

- **Enrich deals with engagement data**  
  - **If** – Filters only active deals for further processing.  
  - **Loop Over Items** – Processes each deal individually.  
  - **HTTP Request** – Fetches engagement associations for the current deal.  
  - **Get an engagement** – Retrieves detailed engagement records from HubSpot.  
  - **Extracts Data** – Structures engagement content, timestamps, and metadata for analysis.  

- **Analyze risk, alert, and store results**  
  - **OpenAI Chat Model** – Provides the language model used for analysis.  
    - **AI Agent** – Evaluates behavioral signals, predicts conversion probability, and recommends actions.  
  - **Format Data** – Parses AI output into structured, machine-readable fields.  
  - **Filter Alerts Needed** – Identifies deals that need immediate attention.  
  - **Send Slack Alert** – Sends detailed alerts for high-risk or stalled deals.  
  - **Append or update row in sheet** – Logs analysis results into Google Sheets for reporting.  

## Why use this?  

- Automatically identify high-risk deals before they stall or fail  
- Give sales teams clear, data-driven next actions instead of raw CRM data  
- Improve forecasting accuracy with AI-powered probability scoring  
- Maintain a historical deal health log for audits and performance reviews  
- Reduce manual pipeline reviews while increasing response speed  



## 📊 Basic Information

- **Workflow ID:** 12474
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 2
- **Downloads:** 0
- **Created:** 2026/1/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12474)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **hubspot** (×2)
- **if** (×2)
- **slack** 
- **splitInBatches** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleSheets** 
- **code** (×3)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
