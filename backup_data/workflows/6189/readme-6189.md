# Send standardized alert emails via Gmail with custom subject and content

> This is a basic helper workflow to abstract the process of sending an alert email through Gmail.

It takes in two parameters:
- Subject
- Lines (as an array of lines)

You'll also need to fill in your email.

Notably, all emails it sends have `❗ n8n Alert: ` prefixed to the subject line, which makes them easy to identify and highlight in an email inbox.

In Gmail, this can be done by starring all messages that come in with `❗ n8n Alert:` in the subject line, then using the Priority Inbox to push starreed messages to the top.

_It's important to star the message rather than Mark As Important, because Gmail refuses to mark emails sent by automation as important._


## 📊 Basic Information

- **Workflow ID:** 6189
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 101
- **Downloads:** 10
- **Created:** 2025/7/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6189)

## 👤 Author

- **Name:** Kevin
- **Username:** @mieubrisse

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **gmail** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
