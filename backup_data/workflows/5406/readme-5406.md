# Automated server log cleanup via email alerts with SSH - Nginx, Docker, System

> This n8n workflow monitors email alerts for disk utilization exceeding 80%, extracts the server IP, logs into the server, and purges logs from Nginx, PM2, Docker, and system files to clear disk space.

### Key Insights

- Ensure email alerts are consistently formatted with server IP details.  
- SSH access must be properly configured to avoid authentication failures.

### Workflow Process

1. Initiate the workflow with the `Check Disk Alert Emails` node when an email triggers on high disk usage.  
2. Parse the email to extract the server IP using the `Extract Server IP from Email` node.  
3. Set up SSH credentials and paths manually with the `Prepare SSH Variables` node.  
4. Execute cleanup commands to delete logs from Nginx, PM2, Docker, and system files using the `Run LogCleanup Commands via SSH` node.

### Usage Guide

- Import the workflow into n8n and configure email and SSH credentials.  
- Test with a sample email alert to verify IP extraction and log deletion.

### Prerequisites

- Email service (e.g., IMAP or API) for alert monitoring  
- SSH access with valid credentials  

### Customization Options

Modify the `Prepare SSH Variables` node to target specific log directories or adjust cleanup commands for different server setups.

## 📊 Basic Information

- **Workflow ID:** 5406
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1075
- **Downloads:** 107
- **Created:** 2025/6/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5406)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **emailReadImap** 
- **code** 
- **set** 
- **ssh** 
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
