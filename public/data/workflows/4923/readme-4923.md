# Automatic backup of workflows to GitHub with email/telegram notifications

> # Why?

Have you ever updated your n8n instance, or moved from one instance to the other and lost all your workflows? I suggest NOT DOING THAT! Especially if you have very complex workflows that would take days to recreate.

Make sure you have a backup process in place!

# How it works

1. Get all workflows from an n8n instance using your n8n API
2. Formats the workflows cleanly
3. Creates a backup package
4. Checks if target GitHub repository exists, if not creates it
5. Uploads a manifest
6. Uploads a readme
7. Uploads your workflows as separate JSON files
8. Sends a summary to your choice (Telegram or GMAIL)

# What it does
- Backs up all your workflows
- Splits them out into separate JSON files for each workflow
- Sends a notification

# What it doesn't do

- Does not back up credentials (not smart for security reasons)
- Does not delete old backups

# Requirements
- n8n
- n8n API setup with credentials stored in instance you are running this from
- GitHub user & API (with repository rights) setup (API key in Github, Credentials in n8n)
# Future Updates

If I get requests for these features I would build them:

- Rolling backups (delete further back than 3 days)
- Logic to skip the backup if nothing changed

## 📊 Basic Information

- **Workflow ID:** 4923
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 272
- **Downloads:** 27
- **Created:** 2025/6/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4923)

## 👤 Author

- **Name:** Builds.Cool
- **Username:** @buildscool

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **code** (×5)
- **httpRequest** (×6)
- **if** 
- **splitInBatches** 
- **telegram** 
- **stickyNote** (×4)
- **scheduleTrigger** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
