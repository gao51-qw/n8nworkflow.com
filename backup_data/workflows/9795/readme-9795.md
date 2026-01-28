# Extract and upload files from zip archives to Google Drive

> # Extract and Upload Files from Zip to Google Drive

## How it works

This workflow automatically extracts all files from an uploaded zip archive and uploads each file individually to Google Drive.

**Flow:**
1. User submits a zip file via form
2. Zip file is temporarily saved to disk (workaround for compression node limitation)
3. Zip file is read back and decompressed
4. Split Out node separates each file into individual items
5. Each file is uploaded to Google Drive with its original filename

**Key features:**
- Handles zip files with any number of files dynamically
- Preserves original filenames from inside the zip
- No hardcoded file counts - works with 1 or 100 files

## Set up steps

1. **Connect Google Drive**: Add your Google Drive OAuth2 credentials to the "Upload to Google Drive" node
2. **Select destination folder**: In the Google Drive node, choose which folder to upload files to (default is root)
3. **Update temp path** (optional): Change the temporary file path in "Read/Write Files from Disk" node if needed (default: `c:/temp_n8n.zip`)

## Requirements

- Google Drive account and OAuth2 credentials
- Write access to local filesystem for temporary zip storage

## Tags

automation, file processing, google drive, zip extraction, file upload

## 📊 Basic Information

- **Workflow ID:** 9795
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 194
- **Downloads:** 19
- **Created:** 2025/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9795)

## 👤 Author

- **Name:** David Soden
- **Username:** @davidsoden

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **formTrigger** 
- **readWriteFile** (×2)
- **compression** 
- **googleDrive** 
- **splitOut** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
