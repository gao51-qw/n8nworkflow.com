# Automatically upload scanned documents to Nextcloud via ScanservJS

> This workflow connects a USB scanner to Nextcloud via ScanservJS and the integrated API. It checks for new scans at a scheduled time (e.g., every 5 minutes). If there are any, they are automatically retrieved via HTTP request and then saved to a desired Nextcloud folder.

Ideal for home offices, offices, or maker projects with Raspberry Pi and network scanners.

![Bildschirmfoto 20250504 um 16.18.42.png](fileId:1264)

Nodes used:

- Schedule Trigger – starts the flow cyclically

- HTTP Request – retrieves document data from ScanservJS

- Nextcloud Node – uploads the file directly to your Nextcloud account

Requirements:

- Local installation of ScanservJS (e.g., on a Raspberry Pi)

- Configured USB scanner

![Bildschirmfoto 20250504 um 16.20.46.png](fileId:1265)

- Nextcloud access with write permissions in the target folder

## 📊 Basic Information

- **Workflow ID:** 3861
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 608
- **Downloads:** 60
- **Created:** 2025/5/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3861)

## 👤 Author

- **Name:** Joachim Hummel
- **Username:** @jhummel

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **httpRequest** (×2)
- **nextCloud** 
- **scheduleTrigger** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
