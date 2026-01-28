# Standup bot (4/4): worker

> This is the fourth workflow for the Mattermost Standup Bot. This workflow sends the team a message every morning to ask them three standup questions.

1. What have you accomplished since your last report?
2. What do you want to accomplish until your next report?
3. Is anything blocking your progress?

Once answered, the answers are sent to a Mattermost channel.

The "Read Config" nodes will need to be updated to point to the ID of the "Standup Bot - Read Config" workflow and the "Override Config" node will need to point to "Standup Bot - Override Config"

## 📊 Basic Information

- **Workflow ID:** 1475
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 5736
- **Downloads:** 573
- **Created:** 2022/2/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1475)

## 👤 Author

- **Name:** Jonathan
- **Username:** @jon-n8n

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **mattermost** (×3)
- **httpRequest** (×7)
- **if** (×2)
- **webhook** (×2)
- **function** (×7)
- **switch** 
- **noOp** (×2)
- **executeWorkflow** (×4)
- **cron** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
