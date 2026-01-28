# Get multiple attachments from Gmail and upload them to GDrive

> 
This is a simple template to show how to extract multiple email attachments and return them as an iterable output. 

## How it works: 
The **Gmail Trigger** node detects any new email that has attachments. The **Code** node will then extract them as binary files and attaches them to the item. They can then be uploaded via the **Google Drive** node. 

## Setup steps:
- add your Gmail Credentials
- add your Google Drive Credentials
- Follow the official [n8n Documentation](https://docs.n8n.io/integrations/builtin/credentials/google/) for help

## Feedback & Questions

If you have any questions or feedback about this workflow - Feel free to get in touch at [ria@n8n.io](mailto:ria@n8n.io)







## 📊 Basic Information

- **Workflow ID:** 2348
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 10715
- **Downloads:** 1071
- **Created:** 2024/7/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2348)

## 👤 Author

- **Name:** Ria
- **Username:** @riascho

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **gmailTrigger** 
- **function** 
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
