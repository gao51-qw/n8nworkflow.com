# Qualify replies from Pipedrive persons with AI

> ## About the workflow
The workflow reads every reply that is received from a cold email campaign and qualifies if the lead is interested in a meeting. If the lead is interested, a deal is made in pipedrive. You can add as many email inboxes as you need!

## Setup:
- Add credentials to the Gmail, OpenAI and Pipedrive Nodes.
- Add a in_campaign field in Pipedrive for persons. In Pipedrive click on your credentials at the top right, go to company settings &gt; Data fields &gt; Person and click on add custom field. Single option [TRUE/FALSE].
- If you have only one email inbox, you can delete one of the Gmail nodes.
- If you have more than two email inboxes, you can duplicate a Gmail node as many times as you like. Just connect it to the Get email node, and you are good to go!
- In the Gmail inbox nodes, select Inbox under label names and uncheck Simplify.

## 📊 Basic Information

- **Workflow ID:** 2039
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1949
- **Downloads:** 194
- **Created:** 2024/1/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2039)

## 👤 Author

- **Name:** Mark de Jonge
- **Username:** @mark-linkedup

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **pipedrive** (×3)
- **if** (×2)
- **openAi** 
- **set** 
- **code** 
- **gmailTrigger** (×2)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
