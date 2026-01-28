# Send Webflow form submissions to Slack dynamically

> **What it does:**
This automation will dynamically create Slack channels for your Webflow forms and send formatted messages to those channels for every form submission you receive. When a new form is dedected, a message is sent in the #general Slack channel with a hyperlink to the new channel.

**This is useful for:**
Webflow form submissions can only notify a single user email as standard, but by using this workflow you can notify team members of new submissions instead of having to login into Webflow to go download form submissions.

**Usage guide**
[Full written and video guide](https://blog.kreonovo.co.za/send-webflow-form-submissions-to-slack-automatically/)

The main steps are to create credentials for Webflow and Slack, connect them, and start using the workflow. The video guide illustrates a realword usecase using a Webflow template. The video also breaks down each node in detail to explain what it does in case you want to make modifications.

## 📊 Basic Information

- **Workflow ID:** 2055
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1063
- **Downloads:** 106
- **Created:** 2024/1/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2055)

## 👤 Author

- **Name:** kreonovo
- **Username:** @kreonovo

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **if** 
- **slack** (×4)
- **set** 
- **webflowTrigger** 
- **code** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
