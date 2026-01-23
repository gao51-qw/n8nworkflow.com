# Sync data between Google Drive and AWS S3

> This workflow [synchronizes files one-way](https://n8n.io/blog/how-to-sync-data-between-two-systems/) from Google Drive to AWS S3.

![workflow-screenshot](fileId:587)

- **Google Drive Trigger node** triggers the workflow when a new file is added to the drive.
- **AWS S3 node** gets all files stored in an S3 bucket.
- **Merge node** merges the files from Google Drive and AWS S3 by key (file name) and keeps only the new file.
- **AWS S3 node** uploads the new file in the S3 bucket.

## 📊 Basic Information

- **Workflow ID:** 1396
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 3424
- **Downloads:** 342
- **Created:** 2022/1/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1396)

## 👤 Author

- **Name:** Lorena
- **Username:** @lorenanda

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **merge** 
- **awsS3** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
