# Exporting Tawk.to help center articles to Google Drive as markdown files

> ## 🧠 Export Tawk.to Help Center Articles to Google Drive as Markdown Files

Transform the way you manage your knowledge base with this **fully automated N8N workflow**!
This automation connects directly to your **Tawk.to Help Center**, reads all published categories and articles, converts them to Markdown (`.md`) format, and uploads each file to **Google Drive** 

---

### 🔹 Key Benefits

🚀 **Complete Extraction**
Automatically captures all categories and articles from your Tawk.to Help Center, even without direct API integration.

🧩 **Automatic Conversion**
Transforms HTML content into clean Markdown files — perfect for editing, version control, or migration to another CMS.

☁️ **Native Google Drive Integration**
Saves each article with a structured filename, avoids duplicates, and organizes them by category.

🔁 **Fully Customizable**
Easily adapt the workflow to export to Notion, GitHub, Dropbox, or any other platform supported by N8N.

💡 **Ideal Use Cases**

* Migrating your Tawk.to Help Center
* Creating automated content backups
* Integrating documentation across multiple systems

---

### ⚙️ Prerequisites

Before running this workflow, make sure you have:

* An active **Tawk.to** account with access to your Help Center.
* A **Google Drive** account (personal or workspace).
* Access to **N8N** (self-hosted or cloud).

---

### 🧰 Setup Instructions

1. **Import the Workflow**

   * Download the JSON file from the provided link or your N8N community instance.
   * In N8N, click **Import Workflow** and upload the file.

2. **Authenticate Google Drive**

   * Open the Google Drive node.
   * Click **Connect**, choose your Google account, and allow access.

3. **Configure Output Folder**

   * Choose or create a target folder in your Google Drive where articles will be saved.

4. **Run the Workflow**

   * Click **Execute Workflow**.
   * The automation will read all Help Center articles, convert them to Markdown, and save them to your Drive.

## 📊 Basic Information

- **Workflow ID:** 9785
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 89
- **Downloads:** 8
- **Created:** 2025/10/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9785)

## 👤 Author

- **Name:** Pedro Entringer
- **Username:** @pedroentringer

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **code** (×2)
- **httpRequest** (×3)
- **html** (×3)
- **splitInBatches** 
- **googleDrive** (×2)
- **if** 
- **stickyNote** (×4)
- **markdown** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
