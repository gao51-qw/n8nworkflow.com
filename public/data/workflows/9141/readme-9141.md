# Automated error handling with email alerts & smart workflow deactivation

> ## How it works

This workflow **automatically handles errors** in your n8n workflows by:

1. Detecting when an error occurs and capturing the error details
2. Sending an email notification with the error message and affected node
3. Allowing you to deactivate the workflow or ignore the error via email response
4. Optionally rerouting the error notification to another user for approval

The workflow includes two templates: a **basic version** with simple deactivate/ignore options, and an **advanced version** that allows error rerouting to a second user.

## Set up steps

**Estimated time: 5-10 minutes**

You'll need to configure **SMTP credentials** for sending emails, set up **n8n API** access for workflow management, and update email addresses and workflow URLs throughout the nodes. Choose which template (basic or reroute logic) fits your needs, then activate the workflow to start monitoring for errors.

## 📊 Basic Information

- **Workflow ID:** 9141
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 656
- **Downloads:** 65
- **Created:** 2025/10/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9141)

## 👤 Author

- **Name:** Meelioo
- **Username:** @mookielian

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **errorTrigger** 
- **set** (×2)
- **emailSend** (×6)
- **n8n** (×3)
- **if** (×3)
- **noOp** (×2)
- **stickyNote** (×12)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
