# Automatic file renaming with timestamp format for Google Drive

> **Description:**

Streamline your cloud storage with this powerful Google Drive File Renamer automation built with n8n. The workflow watches a specific Google Drive folder and automatically renames new files using a standardized format based on their creation date and time—ideal for organizing images, backups, and uploads with consistent timestamp-based names.
Whether you're managing daily uploads, sorting Instagram-ready content, or organizing client submissions, this timestamp-based file naming system ensures consistent and searchable file structures—without manual intervention.

**What This Template Does (Step-by-Step)**

🔔 Google Drive Trigger – "Watch Folder" Setup
- Monitors a specific folder (e.g., “Instagram”)
- Detects new file creations every minute
- Captures file metadata like ID, createdTime, and extension

🧠 Set Formatted Name
- Extracts file creation time (e.g., 2025-07-22T14:45:10Z)
- Converts it into a structured name like IMG_20250722_1445.jpg
- Keeps original file extension (JPG, PNG, PDF, etc.)

✏️ Rename File (Google Drive)
- Renames the original file using Google Drive API
- Applies the new timestamped name
- Keeps file content, permissions, and location unchanged


**Required Integrations:** Google Drive API (OAuth2 credentials)

**Best For:**

📸 Content creators organizing uploads from mobile
🏷️ Branding teams enforcing uniform naming
🗄️ Admins managing scanned documents or backups
📂 Automated archives for media, reports, or daily snapshots

**Key Benefits:**

✅ Timestamped naming ensures chronological file tracking
✅ Reduces human error and messy file names
✅ Works in real-time (polls every minute)
✅ No-code: Deploy with drag-and-drop setup in n8n
✅ Fully customizable name patterns (e.g., change IMG_ prefix)


## 📊 Basic Information

- **Workflow ID:** 6610
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 314
- **Downloads:** 31
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6610)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **set** 
- **googleDrive** 
- **googleDriveTrigger** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
