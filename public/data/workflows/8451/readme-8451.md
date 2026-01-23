# Auto-backup n8n workflows to OneDrive with cleanup & email notifications

> ## Automatically BackUp Your n8n Workflows to OneDrive

This workflow automates the backup of your self-hosted n8n instance by exporting all workflows and saving them as individual `.json` files to a designated OneDrive folder. Each file is timestamped for easy versioning and audit tracking.

After a successful backup, the workflow optionally cleans up old backup files and sends a confirmation email to notify you that the process completed.

## How it works

1. Uses the **HTTP Request** node to fetch all workflows via the `/rest/workflows` API.
2. Iterates through each workflow using **SplitInBatches**.
3. Converts each workflow to a `.json` file using **Set** and **Function** nodes.
4. Uploads each file to a target **Microsoft OneDrive** folder using OAuth2.
5. Deletes old backup files from OneDrive after upload, with the option to keep backups for a configurable number of time.
6. Sends an email notification once all backups have completed successfully.

## Setup instructions

- Enter your **n8n Base URL** and authentication details in the HTTP Request node.
- Set up **Microsoft OneDrive OAuth2** credentials for cloud upload.
- Configure the **Email node** with SMTP credentials to receive backup confirmation.
- (Optional) Adjust the file retention logic to keep backups for a set duration.
- A **Cron** trigger to schedule the workflow automatically (e.g., daily or weekly).

👉 Sticky notes inside the workflow explain each step for easy setup.

## Need Help

- ## Need Help
🔗 [LinkedIn – Wessel Bulte](https://www.linkedin.com/in/wessel-bulte/)

## 📊 Basic Information

- **Workflow ID:** 8451
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 725
- **Downloads:** 72
- **Created:** 2025/9/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8451)

## 👤 Author

- **Name:** Wessel Bulte
- **Username:** @uuessel

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **n8n** 
- **microsoftOneDrive** (×5)
- **code** (×2)
- **scheduleTrigger** 
- **microsoftOutlook** 
- **switch** 
- **splitInBatches** 
- **merge** 
- **convertToFile** 
- **stickyNote** (×15)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
