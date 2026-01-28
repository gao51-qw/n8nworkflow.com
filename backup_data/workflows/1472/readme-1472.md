# Standup bot (1/4): initialize

> This is the first of 4 workflows for a Mattermost Standup Bot. This workflow will create a default configuration file.

You can set the default configuration in the Set node (Use Default Config) the values are:

**config.slashCmdToken** - The token Mattermost provides when you make a new Slash Command
**config.mattermostBaseUrl** - The base URL for your Mattermost instance
**config.botUserToken** - The User token for your Mattermost bot
**config.n8nWebhookUrl** - The URL for your "Action from MM" webhook in the "Standup Bot - Worker" workflow
**config.botUserId** - The UserID for your Mattermost Bot user

The config file is saved under `/home/node/.n8n/standup-bot-config.json`

This workflow only needs to be run once manually as part of the setup .

## 📊 Basic Information

- **Workflow ID:** 1472
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 1671
- **Downloads:** 167
- **Created:** 2022/2/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1472)

## 👤 Author

- **Name:** Jonathan
- **Username:** @jon-n8n

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **manualTrigger** 
- **writeBinaryFile** 
- **moveBinaryData** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
