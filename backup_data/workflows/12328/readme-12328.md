# Analyze lost HubSpot deals and generate revival strategies with OpenAI

> ## How it works
This workflow runs on a daily schedule to analyze all Closed–Lost deals from your CRM and uncover the true reason behind each loss. It uses AI to classify the primary loss category, generate a confidence-backed explanation, and then create a realistic re-engagement strategy for every deal. All insights are consolidated into leadership-ready email and Slack summaries. Every analyzed deal and revival plan is logged for long-term tracking and audits.

## Step-by-step
- **Trigger and fetch lost deals**
  - **Schedule Trigger** – Runs the workflow automatically at a defined time.
  - **Get many deals** – Fetches all deal records from the CRM.
  - **If** – Filters only deals marked as Closed–Lost.
  - **Edit Fields** – Standardizes key deal attributes like amount, industry, owner, and loss reason.

- **Analyze loss reasons and generate revival strategies**
  - **Brief Explanation Creator** – Uses AI to identify the primary loss category with confidence.
  - **Code in JavaScript** – Parses and normalizes AI loss analysis output.
  - **Merge** – Combines deal data with loss insights.
  - **Feedback Creator** – Generates a practical re-engagement strategy for each lost deal.
  - **Code in JavaScript7** – Parses and safeguards revival strategy outputs.
  - **Merge4** – Merges deal details, loss analysis, and revival strategy into one final dataset.

- **Report, notify, and store results**
  - **Code in JavaScript11** – Builds a consolidated HTML summary email.
  - **Send a message4** – Sends the summary to stakeholders via email.
  - **Code in JavaScript12** – Creates a structured Slack summary.
  - **Send a message1** – Delivers insights to a Slack channel.
  - **Code in JavaScript10** – Reconstructs final data with delivery status.
  - **Append or update row in sheet** – Logs all results into Google Sheets for audit and tracking.

## Why use this?
- Turns lost deals into actionable learning instead of static CRM records  
- Gives sales teams clear, realistic re-engagement plans without manual analysis  
- Provides leadership with concise, decision-ready summaries  
- Creates a historical database of loss reasons and revival outcomes  
- Improves pipeline recovery while enforcing consistent sales intelligence


## 📊 Basic Information

- **Workflow ID:** 12328
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 106
- **Downloads:** 10
- **Created:** 2025/12/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12328)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×4)
- **scheduleTrigger** 
- **hubspot** 
- **if** 
- **set** 
- **code** (×5)
- **slack** 
- **merge** (×2)
- **gmail** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
