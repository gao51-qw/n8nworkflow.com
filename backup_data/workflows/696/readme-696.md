# Send email via Gmail on workflow error

> ![workflow-screenshot](fileId:261)

Send an email via Gmail when a workflow error occurs.

The email subject line will contain the workflow name; the message body will contain the following information:

- Workflow name
- Error message
- Last node executed
- Execution URL
- Stacktrace

Error workflows do not need to be activated in order to be used, but they do need to be selected in the Settings menu of whatever workflows you want to use it.

To use this workflow, you'll need to:
- Create and select credentials in the Gmail node
- Choose the email recipient(s) in the Gmail node
- Save and select the created workflow as the "Error Workflow" in the Settings menu of whatever workflows you want to email on error

## 📊 Basic Information

- **Workflow ID:** 696
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 8700
- **Downloads:** 870
- **Created:** 2020/10/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/696)

## 👤 Author

- **Name:** Trey
- **Username:** @trey

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **errorTrigger** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 2 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
