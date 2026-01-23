# Auto-clean Gmail spam folder - monthly using Gmail API

> This automated n8n workflow uses the Gmail API to clean the spam folder by permanently deleting all emails on the first day of each month. The system ensures efficient email management and improves Gmail storage by removing unwanted spam emails.

## Good to Know
- Gmail API rate limits should be respected to ensure proper email fetching
- A short delay is introduced to avoid hitting API limits
- The workflow runs automatically on the first day of every month
- Improves Gmail hygiene by removing spam emails

## How It Works
- **Monthly Trigger (1st Day)** - Starts the workflow automatically on the first of every month to perform email cleanup
- **Fetch Gmail Emails** - Uses Gmail API to retrieve all emails in the spam folder for the Gmail account
- **Pause Before Deletion (5s)** - Introduces a short delay to avoid hitting Gmail's API rate limits and ensure all emails are fetched properly
- **Delete Fetched SPAM Emails** - Permanently deletes all retrieved emails from the spam folder to free up Gmail space and improve email hygiene

## How to Use
- Import the workflow into n8n
- Configure Gmail API credentials for access
- Test the workflow on a sample date to verify email fetching and deletion
- Adjust the pause duration if needed based on API limits
- Monitor the workflow to ensure proper spam cleanup

## Requirements
- Gmail API credentials

## Customizing This Workflow
- Adjust the pause duration in the Pause node to align with Gmail API rate limits
- Modify the trigger schedule if a different cleanup frequency is preferred

## 📊 Basic Information

- **Workflow ID:** 6122
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 521
- **Downloads:** 52
- **Created:** 2025/7/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6122)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **gmail** (×2)
- **wait** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
