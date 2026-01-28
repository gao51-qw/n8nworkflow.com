# Bulk JSON file downloader from Google Sheet to local folders

> **Description:**

Easily extract, download, and organize multiple JSON files from Google Drive using this no-code automation template for n8n. Ideal for operations, analysts, or data engineers managing bulk document processing, this workflow reads a Google Sheet containing file names and Google Drive URLs, converts those links into downloadable JSONs, and automatically writes each file to a local disk folder—sorted by name.

No more manual downloading or copy-pasting. Everything is processed in a structured loop, ensuring reliable and scalable folder-based separation of your JSON data files.

**What This Template Does (Step-by-Step)**

🟢 Trigger: Manual Execution: Initiates the flow when you click “Execute Workflow” in n8n.

📄 Google Sheet Reader: Connects to your Google Sheet to fetch rows with columns like Name and Google Drive URL.

🧹 Clean & Filter Data (Python Code Node): Filters out rows missing name or URL. Keeps only valid entries to prevent failure in downstream steps.

🔗 Convert Drive URL to Download Link (JavaScript Code): Extracts the Google Drive File ID and transforms it into a direct download link for each JSON file.

🔁 Batch Looping for Controlled Processing: Uses SplitInBatches to handle each file sequentially to avoid system overload.

📥 Download JSON File via HTTP Request: Makes a GET request to each file’s download URL and loads it as binary data into memory.

🗂️ Generate Local Path for Each File: Prepares the path C:/Users/YourName/Desktop/Healthcare/{filename}.json using the name from the sheet.

💾 Write File to Disk:Saves each JSON file to the local disk at the generated path, effectively separating each entry into its own file.

**Required Integrations**

✅ Google Sheets OAuth2 API (for reading file metadata)
✅ Local write permissions (for saving files to disk)

**Perfect For**

📦 Bulk JSON Extraction Pipelines
🏥 Healthcare or Data Ops Teams managing case records or medical file links
🧾 Invoice or Document Download Automations
📁 Content Management or Archival Processes

**Why Use This Template?**

- No manual downloads or folder sorting
- Safe and batch-based processing prevents overload
- Easily customizable folder paths and formats
- Great for non-technical users managing large file repositories

## 📊 Basic Information

- **Workflow ID:** 6366
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 73
- **Downloads:** 7
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6366)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** 
- **httpRequest** 
- **splitInBatches** 
- **readWriteFile** 
- **code** (×3)
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
