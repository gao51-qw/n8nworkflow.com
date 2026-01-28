# Auto-schedule Instagram & Facebook posts from Google Sheets

> **How it works**

This workflow automatically publishes Instagram and Facebook posts using Google Sheets as a content calendar. Users add post details to a sheet, and the workflow handles scheduling, image processing, posting, and status updates without manual intervention.

**Step-by-step**

**Scheduled Trigger**
The workflow runs automatically at a fixed interval (for example, every 15 minutes) to check for posts that are ready to be published.

**Configuration & Credentials**
A configuration step stores reusable values such as spreadsheet ID, sheet name, and platform settings, keeping the workflow easy to customize and secure.

**Data Retrieval & Filtering**
Posts are read from Google Sheets and filtered to include only rows marked as “Pending” and scheduled for the current time or earlier.

**Image Handling**
If an image link is provided, the workflow downloads the image from Google Drive. If no image is present, the post continues as text-only.

**Platform Routing**
Based on the selected platform (Instagram, Facebook, or both), the workflow routes the post to the appropriate publishing path.

**Social Media Publishing**
The post is published to Instagram and/or Facebook using the connected business account credentials.

**Status Update**
After publishing, the workflow updates the original Google Sheet with the post status (Success or Failed), published timestamp, and error message if applicable.

## 📊 Basic Information

- **Workflow ID:** 11930
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 213
- **Downloads:** 21
- **Created:** 2025/12/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11930)

## 👤 Author

- **Name:** Dinakar Selvakumar
- **Username:** @jamesdinakar

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×3)
- **googleSheets** (×2)
- **code** 
- **if** (×4)
- **googleDrive** 
- **switch** 
- **httpRequest** (×2)
- **facebookGraphApi** (×2)
- **merge** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
