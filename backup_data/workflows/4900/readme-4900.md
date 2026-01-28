# Scheduled YouTube video uploads with Google Sheets & Drive integration

> **Description:**

Effortlessly automate YouTube video uploads with this ready-to-use n8n workflow. Integrated with Google Sheets, Google Drive, and YouTube API, this template streamlines your video publishing process based on scheduled metadata entries.

**Key Features:**

- 🗓️ Scheduled Uploads (Mon–Fri at 9 AM, 12 PM, 3 PM)
- 📋 Reads video metadata (title, description, filename) from Google Sheets
- 🔍 Locates video files in Google Drive by filename
- ⬇️ Downloads and uploads videos to YouTube with the correct metadata
- ✅ Updates the status in the sheet to avoid duplicates
- 📂 Moves uploaded files to a specified archive folder for organization

**Requirements:**

- Google Sheets with metadata (Title, Description, File Name, Status)
- Google Drive with video files
- YouTube API access and OAuth credentials
- A pre-set folder structure for organization

**Perfect For:**

Content creators, YouTube channel managers, marketers, and editors who want to automate repetitive upload tasks, maintain consistent publishing schedules, and organize video assets—without manual effort.

## 📊 Basic Information

- **Workflow ID:** 4900
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 706
- **Downloads:** 70
- **Created:** 2025/6/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4900)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **googleSheets** (×2)
- **googleDrive** (×4)
- **youTube** 
- **scheduleTrigger** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
