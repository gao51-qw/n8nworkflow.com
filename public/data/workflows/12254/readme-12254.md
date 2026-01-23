# Monitor customer risk and AI feedback using PostgreSQL, Gmail and Discord

> ## How it works
This workflow monitors customer health by combining payment behavior, complaint signals, and AI-driven feedback analysis. It runs on daily and weekly schedules to evaluate risk levels, escalate high-risk customers, and generate structured product insights. High-risk cases are notified instantly, while detailed feedback and audit logs are stored for long-term analysis.

## Step-by-step
- **Step 1: Triggers & mode selection**
  - **Daily Risk Check Trigger** – Starts the workflow on a daily schedule.
  - **Weekly schedule1** – Triggers the workflow for weekly summary runs.
  - **Edit Fields3** – Sets flags for daily execution.
  - **Edit Fields2** – Sets flags for weekly execution.
  - **Switch1** – Routes execution based on daily or weekly mode.

- **Step 2: Risk evaluation & escalation**
  - **Fetch Customer Risk Data** – Pulls customer, payment, product, and complaint data from PostgreSQL.
  - **Is High Risk Customer?** – Evaluates payment status and complaint count.
  - **Prepare Escalation Summary For Low Risk User** – Assigns low-risk status and no-action details.
  - **Prepare Escalation Summary For High Risk User** – Assigns high-risk status and escalation actions.
  - **Merge Risk Result** – Combines low-risk and high-risk customer records.
  - **Send a message4** – Sends the customer risk summary via Gmail.
  - **Send a message5** – Sends the same risk summary to Discord.
  - **Code in JavaScript3** – Appends notification status and timestamps.
  - **Append or update row in sheet3** – Logs risk evaluations and notification status in Google Sheets.

- **Step 3: AI feedback & reporting**
  - **Get row(s) in sheet1** – Fetches customer records for feedback analysis.
  - **Loop Over Items1** – Processes customers one by one.
  - **Prompt For Model1** – Builds a structured prompt for product feedback analysis.
  - **HTTP Request1** – Sends data to the AI model for insight generation.
  - **Code in JavaScript** – Merges AI feedback with original customer data.
  - **Append or update row in sheet** – Stores AI-generated feedback in Google Sheets.
  - **Wait1** – Controls execution pacing between records.
  - **Merge1** – Prepares consolidated feedback data.
  - **Send a message1** – Emails the final AI-powered feedback report.

## Why use this?
- Detect customer churn risk early using payment and complaint signals  
- Automatically escalate high-risk customers without manual monitoring  
- Convert raw customer issues into executive-ready product insights  
- Keep a complete audit trail of risk, feedback, and notifications  
- Align support, product, and leadership teams with shared visibility  


## 📊 Basic Information

- **Workflow ID:** 12254
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 4
- **Downloads:** 0
- **Created:** 2025/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12254)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **googleSheets** (×3)
- **httpRequest** 
- **code** (×3)
- **gmail** (×2)
- **splitInBatches** 
- **merge** (×2)
- **wait** 
- **scheduleTrigger** (×2)
- **set** (×4)
- **switch** 
- **postgres** 
- **if** 
- **discord** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
