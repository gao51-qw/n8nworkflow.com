# Track employee performance KPIs from ClickUp with GPT-4.1 and Google Sheets

> ## How it works  
This workflow runs on a schedule to collect task data from ClickUp and evaluate employee performance using AI. Tasks are analyzed to generate structured summaries, productivity metrics, and KPI scores. JavaScript logic refines and standardizes the results. The final performance data is stored in Google Sheets as a live KPI dashboard.

## Step-by-step  
- **Step 1: Collect ClickUp task data**  
  - **Schedule Trigger** – Starts the workflow automatically at defined intervals.  
  - **Get many folders** – Fetches all folders from the selected ClickUp space.  
  - **Loop Over Items** – Iterates through folders to process tasks sequentially.  
  - **Get many tasks** – Retrieves tasks associated with each folder or list.  

- **Step 2: Analyze tasks and compute KPIs**  
  - **Message a model** – Sends task details to an AI model to generate summaries and raw performance metrics.  
  - **Code in JavaScript** – Parses AI output, recalculates KPI scores, and assigns standardized ratings.  

- **Step 3: Update employee KPI dashboard**  
  - **Append or update row in sheet** – Writes or updates task and employee performance data in Google Sheets.  

## Why use this?  
- Automates employee performance tracking without manual reporting.  
- Produces consistent KPI scores across all ClickUp tasks.  
- Helps managers quickly identify overdue or high-priority work.  
- Keeps Google Sheets dashboards continuously up to date.  
- Improves visibility into productivity and task execution trends.  


## 📊 Basic Information

- **Workflow ID:** 12579
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 36
- **Downloads:** 3
- **Created:** 2026/1/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12579)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Project Management
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **clickUp** (×2)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** 
- **googleSheets** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
