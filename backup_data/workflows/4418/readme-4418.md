# Auto-cleanup of Cloudflare R2 files older than 2 weeks (+ Telegram notifications)

> This workflow automatically connects to a Cloudflare R2 bucket (via S3-compatible API), filters out files older than 14 days, deletes them, and then sends a Telegram notification for each deletion. It runs on a daily schedule.

🕘 Schedule Trigger
Executes the workflow once a day at a specified hour (e.g., 9 AM).

📦 S3 Node – List Files
Retrieves all objects from a specific folder (prefix) in a Cloudflare R2 bucket using the S3 API.

🔎 Code Node – Filter Files Older Than 2 Weeks
Filters the retrieved files by comparing their LastModified timestamps to the current date. Files older than 14 days (2 weeks) are selected for deletion.

🗑️ S3 Node – Delete File
Deletes each filtered file from the R2 bucket.

📨 Telegram Node – Notify Deletion
Sends a Telegram message with the name of the deleted file to a specified chat ID. The message includes:

## 📊 Basic Information

- **Workflow ID:** 4418
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 506
- **Downloads:** 50
- **Created:** 2025/5/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4418)

## 👤 Author

- **Name:** Mobder
- **Username:** @mobder

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **s3** (×2)
- **code** 
- **telegram** 
- **scheduleTrigger** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
