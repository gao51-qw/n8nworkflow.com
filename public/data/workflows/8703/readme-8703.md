# Automatically transfer FTP files to Google Drive with batch processing

> ## How it works

This workflow automates the transfer of files from an FTP server to Google Drive.  
It runs on a schedule, lists files in a defined FTP directory, and processes them in batches.  
Each file is downloaded sequentially from the FTP server and uploaded to Google Drive.  
The workflow ensures filenames are preserved for consistency during the sync process.

## Step-by-step

**1. Trigger the workflow**  
- **Schedule Trigger** – Starts the workflow automatically at set intervals.  

**2. List files from FTP**  
- **FTP (List Files)** – Retrieves a list of files from the FTP server path.  

**3. Batch process files**  
- **Split in Batches** – Breaks the file list into smaller chunks for sequential handling.  

**4. Download file from FTP**  
- **FTP (Download File)** – Downloads each file from the FTP server.  

**5. Upload to Google Drive**  
- **Google Drive (Upload File)** – Uploads the file to Google Drive while keeping its original filename.  

## Why use this?

- Automates repetitive FTP-to-cloud transfer tasks with no manual intervention.  
- Reduces system overload by processing files in manageable batches.  
- Ensures data backup from FTP servers directly into cloud storage.  
- Maintains file structure and filenames for easy reference and retrieval.  
- Provides reliable, scheduled synchronization between FTP and Google Drive.  


## 📊 Basic Information

- **Workflow ID:** 8703
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 201
- **Downloads:** 20
- **Created:** 2025/9/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8703)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Content Creation
- File Management

## 🔗 Nodes Used

- **scheduleTrigger** 
- **ftp** (×2)
- **splitInBatches** 
- **googleDrive** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
