# Automatic workflow error notifications via Gmail

> ## What this template does
Sends you an email (via Gmail) whenever any workflow that references this one **fails**. The message includes the workflow name/ID, execution URL, last node executed, and the error message.

## Why it’s useful
Centralizes error notifications so you notice failures immediately and can jump straight to the failed execution.

## Prerequisites
- A Gmail account connected through n8n’s **Gmail** node credentials.
- This workflow set as the **Error Workflow** inside the workflows you want to monitor.

## How it works
1. **Error Trigger** starts this workflow whenever a linked workflow fails.  
2. **Gmail (Send → Message)** composes and sends an email using details from the Error Trigger.

## Notes
- Error workflows **don’t need to be activated** to work.  
- You can’t test them by running manually—errors must occur in an **automatically** run workflow (cron, webhook, etc.).  


## 📊 Basic Information

- **Workflow ID:** 6920
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 437
- **Downloads:** 43
- **Created:** 2025/8/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6920)

## 👤 Author

- **Name:** Calistus Christian
- **Username:** @ca7ai

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **stickyNote** (×2)
- **errorTrigger** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
