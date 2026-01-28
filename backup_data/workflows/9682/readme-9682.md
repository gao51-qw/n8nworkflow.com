# Route Jira tasks to experts using Google Sheets and GPT-4o-mini

> ## Description 
Automatically assigns new tasks from an Excel/Google Sheets source to the best-fit employee based on expertise, then creates issues in Jira. Gain fast, consistent routing that reduces manual triage and speeds delivery. 🧠📊➡️🗂️

## What This Template Does 
- Fetches new task rows and related areas from Google Sheets/Excel.
- Analyzes each item with an AI Agent using Azure OpenAI.
- Selects the best-fit employee by matching the area to expertise stored in the sheet.
- Returns structured outputs (task, assignee, expertise, ID, bug/task) and creates the Jira issue.
- Applies rule-based handling for bugs vs tasks via a Switch node.

## Key Benefits 
⏱ Save time by automating task assignment from new entries.
🎯 Improve accuracy with expertise-based matching.
📋 Keep clean, structured outputs for downstream systems.
🔁 Seamless handoff from Sheets to Jira with no manual steps.

## Features 
- Google Sheets Trigger: Reads new task name and related area from the sheet.
- AI Agent (Azure OpenAI): Evaluates expertise fit and decides the best assignee.
- Structured Output Parser: Returns exactly five fields: task_name, assignee_name, expertise, employee_id, item_type (bug/task).
- Jira Create Issue: Creates issues in Jira using selected assignee and item type.
- Switch (Rules): Routes logic for bugs vs tasks for consistent categorization.

## Requirements 
- n8n instance: Cloud or self-hosted.
- Google Sheets access: Sheet containing employee roster with columns for Name, Expertise, and ID; connect credentials in n8n.
- Azure OpenAI (GPT-4o-mini): Configure the Azure OpenAI Chat Model credentials for the AI Agent.
- Jira credentials: Authorized account with permissions to create issues.
- Output Parser setup: Structured Output Parser configured to the five-field schema: task_name, assignee_name, expertise, employee_id, item_type.

## Target Audience 
🧩 IT Support and Ops teams routing incoming work.
🧭 Project managers orchestrating assignments at scale.
🛠 Engineering managers seeking consistent triage.
📈 Business operations teams automating intake to delivery.

## Step-by-Step Setup Instructions 
- Connect Google Sheets credentials and map the task and area fields; ensure roster columns (Name, Expertise, ID) are present.
- Add Jira credentials and set the Create Issue node to your target project and issue type.
- Configure Azure OpenAI (GPT-4o-mini) for the AI Agent and provide credentials.
- Import the workflow, assign all credentials, and align the Structured Output Parser to the five-field schema.
- Run a test with sample rows; confirm assignee selection and Jira issue creation; then enable scheduling.

## Security Best Practices 
- Use least-privilege API tokens for Google Sheets and Jira.
- Restrict sheet access to only required users and service accounts.
- Validate and sanitize incoming task data before issue creation.
- Store credentials securely in n8n and rotate them regularly.
- Log only necessary fields; avoid sensitive data in workflow logs.
 

## 📊 Basic Information

- **Workflow ID:** 9682
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 50
- **Downloads:** 5
- **Created:** 2025/10/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9682)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- CRM
- AI Chatbot

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **googleSheetsTool** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **jira** (×2)
- **switch** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
