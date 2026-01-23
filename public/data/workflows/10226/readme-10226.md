# Generate Weekly Workflow Analytics Reports with n8n API & Email Delivery

> Generate Weekly n8n Execution Report and Email Summary
```

**Description:**
```
## How it works
- Automatically runs every 7 days to pull all n8n workflow executions from the past week
- Merges execution data with workflow information to provide context
- Generates a professional HTML report with execution statistics (errors, successes, waiting status)
- Sends the formatted report with Outlook or Gmail

## Set up steps

### 1. Configure n8n API Credential
- Go to your n8n instance → Settings → API
- Create a new API token with read access to workflows and executions
- In this workflow, add a new "n8n" credential and paste your API token
- This credential is used by two nodes: "Get all Workflows" and "Get all previous executions"

### 2. Connect Email Services
- Configure your Outlook credential in the "Send a message outlook" node
- Configure your Gmail credential in the "Send a message gmail" node
- Set your preferred email recipients in both nodes

### 3. Adjust Schedule (Optional)
- By default, the workflow runs every 7 days
- Edit the "Schedule Trigger" node to change the interval if needed

## Key features
- Tracks workflow execution status and runtime metrics
- Calculates average and total runtime for each status type
- Provides visual HTML report with color-coded status indicators
- Dual email delivery (Outlook + Gmail options)
- Requires only n8n API credentials (no external API keys needed)
- 
- ## Need Help
🔗 [LinkedIn – Wessel Bulte](https://www.linkedin.com/in/wessel-bulte/)

## 📊 Basic Information

- **Workflow ID:** 10226
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 194
- **Downloads:** 19
- **Created:** 2025/10/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10226)

## 👤 Author

- **Name:** Wessel Bulte
- **Username:** @uuessel

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **scheduleTrigger** 
- **n8n** (×2)
- **merge** 
- **set** 
- **filter** 
- **code** 
- **gmail** 
- **microsoftOutlook** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
