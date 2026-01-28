# Automatic FTP file backup to Google Drive with scheduled sync

> ## What this workflow does
This workflow automatically **downloads files from an FTP folder** and **uploads them to Google Drive**.  
It’s useful for backup, reporting, or syncing data between systems.

## How it works
1. **Cron Trigger** runs on a schedule (default: every hour).  
2. **FTP List node** checks the specified folder on your FTP server.  
3. **FTP Download node** fetches each file found.  
4. **Google Drive Upload node** saves the file into your chosen Google Drive folder.

## Pre-conditions / Requirements
- An active FTP server with accessible login credentials.  
- A Google account with access to the Drive folder you want to sync into.  
- Make sure the target Google Drive folder exists, and copy its Folder ID.  
- Ensure files in your FTP folder have unique names if you want to avoid overwriting in Google Drive.


## Setup
- **FTP:** Add your FTP credentials and replace `{{FTP_FOLDER}}` with the path of the folder you want to sync.  
- **Google Drive:** Connect your Google Drive account and replace `{{GDRIVE_FOLDER_ID}}` with the folder ID where files should be stored.  
- Adjust the Cron schedule (e.g. daily, weekly) depending on how often you need the sync.

## Customization Options
- **File filtering:** Add an *IF node* after the FTP List node to only download files matching certain extensions (e.g., `.csv`, `.pdf`).  
- **File renaming:** Use a *Set node* to rename files before uploading to Google Drive (helpful for timestamping or avoiding duplicates).  
- **Archiving:** Add a second Google Drive or FTP Upload node to store processed files in an archive folder.  
- **Error handling:** Connect an *Error Trigger* to notify you via Slack or email if a file transfer fails.

## Benefits & Use Cases — FTP to Google Drive File Sync

## Benefits
- **Hands-free backups:** Automatically transfers files from FTP to Google Drive.  
- **Data security:** Ensures files are stored in cloud storage with built-in redundancy.  
- **Reliability:** Reduces risk of missed uploads or manual errors.  
- **Scalable:** Works with any FTP folder and Google Drive directory.


## Use Cases
- Regularly back up reports or exports from legacy systems (ERP, CRM, POS).  
- Sync daily logs or CSVs into Google Drive for analytics and team access.  
- Automate delivery of partner or client files without manual uploads.  
- Centralize files from multiple FTP sources into one Drive folder.


## 📊 Basic Information

- **Workflow ID:** 7604
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 166
- **Downloads:** 16
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7604)

## 👤 Author

- **Name:** Ziad Adel
- **Username:** @ziadadel

## 🏷️ Categories

- File Management
- Multimodal AI

## 🔗 Nodes Used

- **cron** 
- **ftp** (×2)
- **googleDrive** 
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
