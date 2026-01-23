# Get all members of a Discord server with a specific role

> # Use Case
This workflow retrieves all members of a Discord server or guild who have a specific role. 

Due to limitations in the Discord API, it only returns a limited number of users per call. To overcome this, the workflow uses Google Sheets to track which user we received last to return all Members (of a certain role) from a Discord server in batches of 100 members.

# Setup
1. Add your Google Sheets and Discord credentials.
2. Create a Google Sheets document that contains `ID` as a column. We're using this to remember which member we received last.
3. Edit the fields in the setup node `Setup: Edit this to get started`. *You can read up on how to get the Discord IDs via [this link](https://www.pythondiscord.com/pages/guides/pydis-guides/contributing/obtaining-discord-ids/).*
4. Link to your Discord server in the Discord nodes
5. Activate the workflow
6. Call the production webhook URL in your browser
# Requirements
- Admin rights in the Discord server and access to the developer portal of discord
- Google Sheets
- Minimum n8n version 1.28.0
# Potential Use cases
- Writing a direct message to all members of a certain role
- Analysing user growth on Discord regularly
- Analysing role distributions on Discord regularly
- Saving new members in a Discord 
- ...

# Keywords
`Discord API`, `Getting all members from Discord via API`, `Google Sheets and Discord automation`, `How to get all Discord members via API`


## 📊 Basic Information

- **Workflow ID:** 2105
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 3593
- **Downloads:** 359
- **Created:** 2024/2/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2105)

## 👤 Author

- **Name:** Niklas Hatje
- **Username:** @nik8n

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×3)
- **merge** 
- **if** (×2)
- **noOp** 
- **filter** 
- **discord** (×2)
- **stickyNote** (×2)
- **set** 
- **webhook** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
