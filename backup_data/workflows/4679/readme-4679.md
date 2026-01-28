# Daily auto-archive for Gmail messages

> ## Who is this for?

Professionals, solopreneurs, or productivity enthusiasts who want to keep their Gmail inbox clean and organized without manual effort.

## What problem does this solve?

Manually archiving emails clutters your time and slows you down. This workflow automates inbox cleanup by removing the **"INBOX"** label from messages received over 24 hours ago. A perfect companion to AI-based labeling workflows, this keeps your inbox light and relevant.

## What this workflow does

- Triggers every day at **4 AM**
- Fetches Gmail messages from the **INBOX** that are **older than 24 hours**
- Processes them one by one using the **Split Out** node
- Removes the **INBOX** label, effectively archiving the messages

## Setup

1. Connect your Gmail account using OAuth2 credentials.
2. Customize the **Schedule Trigger** node to adjust the run time.
3. Modify the Gmail filter if you want to archive unread or labeled emails instead.



## How to customize this workflow to your needs

- Schedule different frequencies (e.g. twice a day or weekly).

## 🔄 Pairs Well With

This complements the [Intelligent Email Organization with AI-Powered Content Classification](https://n8n.io/workflows/4557-intelligent-email-organization-with-ai-powered-content-classification-for-gmail/) workflow.

Use that to **label emails smartly using AI**, and this one to **auto-archive** them for a clean, clutter-free inbox.

## 📊 Basic Information

- **Workflow ID:** 4679
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 2674
- **Downloads:** 267
- **Created:** 2025/6/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4679)

## 👤 Author

- **Name:** Niranjan G
- **Username:** @niranjan

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **gmail** (×2)
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
