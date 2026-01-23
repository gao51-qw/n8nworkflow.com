# Monitor and download changed files from Google Drive automatically

> ## Description

This workflow automates the download of new or updated files from a Google Drive folder, processing only files changed since the last run using a timestamp control file.

## How It Works

- Triggered on a schedule.
- Checks for a `n8n_last_run.txt` file in your Google Drive to read when the workflow last ran.
- If missing, defaults to processing changes in the last 24 hours.
- Searches for new or modified files in your specified folder.
- Downloads new/changed files.
- Replaces the timestamp file with the current time for future runs.

## Setup Steps

1. Set up your Google Drive credentials in n8n.
2. Find the Folder ID of the Google Drive folder you wish to monitor.
3. Edit all Google Drive nodes:
    - Select your credentials
    - Paste the Folder ID
4. Adjust the schedule trigger if needed.
5. Activate the workflow.

## Features

- No duplicate file processing (idempotent)
- Handles missing timestamp files
- Clear logical sticky notes in the editor
- Modular, extendable design

## Prerequisites

- Google Drive API credentials connected to n8n
- Target Google Drive folder accessible by the credentials



## 📊 Basic Information

- **Workflow ID:** 6193
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 713
- **Downloads:** 71
- **Created:** 2025/7/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6193)

## 👤 Author

- **Name:** Anurag
- **Username:** @aiautoeye

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **noOp** 
- **merge** 
- **code** 
- **scheduleTrigger** 
- **googleDrive** (×6)
- **if** 
- **set** (×2)
- **extractFromFile** 
- **dateTime** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
