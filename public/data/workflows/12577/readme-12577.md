# Monitor HubSpot deal risk with OpenAI scoring and Slack alerts

> ## How it works  
This workflow runs on a daily schedule to analyze all active HubSpot deals and their latest engagement activity. It applies AI-driven behavioral scoring to predict conversion probability and deal health. High-risk or stalled deals automatically trigger Slack alerts. All insights are logged in Google Sheets for forecasting and performance tracking.

## Step-by-step  

- **Step 1 – Trigger and collect active deals**  
  - **Schedule Trigger** – Runs the workflow automatically at a fixed time each day.  
  - **Get Active Deals from HubSpot** – Retrieves all non-closed deals with key properties like value, stage, and activity dates.  
  - **Formatting Data** – Cleans and normalizes deal data while calculating metrics such as deal age and inactivity duration.  

- **Step 2 – Enrich deals with engagement data**  
  - **If** – Filters only active deals to ensure closed deals are excluded.  
  - **Loop Over Items** – Processes each deal individually to handle enrichment safely.  
  - **HTTP Request** – Fetches engagement associations linked to each deal.  
  - **Get an engagement** – Retrieves detailed engagement records from HubSpot.  
  - **Extracts Data** – Structures engagement content, timestamps, and internal notes for AI analysis.  

- **Step 3 – Analyze risk and notify the team**  
  - **AI Agent** – Analyzes behavioral signals and predicts conversion probability, risk level, and next actions.  
  - **Format Data** – Parses the AI output into structured fields and risk indicators.  
  - **Filter Alerts Needed** – Identifies deals that require immediate attention.  
  - **Send Slack Alert** – Sends a detailed alert with risks, signals, and recommended actions.  
  - **Append or update row in sheet** – Stores analysis results in Google Sheets for tracking and forecasting.  

## Why use this?  

- Detect deal risk early using consistent, AI-based analysis  
- Reduce manual pipeline reviews for sales managers  
- Provide clear, actionable next steps to sales reps  
- Keep a historical log of deal health and forecasts  
- Improve close rates through timely, data-driven intervention  


## 📊 Basic Information

- **Workflow ID:** 12577
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 18
- **Downloads:** 1
- **Created:** 2026/1/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12577)

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
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleSheets** 
- **code** (×3)
- **stickyNote** (×4)
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
