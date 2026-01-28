# Export WordPress posts to CSV and upload to Google Drive

> ## Overview  
This n8n workflow automates the process of extracting published WordPress posts, converting them into a CSV file, and uploading it to Google Drive. It’s perfect for content backups, SEO audits, and data migration.  

## Features  
- Fetches all published posts from a WordPress website  
- Extracts key post details (ID, Title, Link)  
- Converts the extracted data into a CSV file  
- Uploads the CSV file to Google Drive for easy access and storage  

## Use Cases  
- **SEO Optimization**: Export post data for keyword analysis and performance tracking  
- **Automated Content Backup**: Store WordPress post details in Google Drive. You can add more fields to the Csv file if needed  

## Workflow Steps  

### 1. **Trigger Workflow Manually**  
The workflow starts when triggered manually in n8n.  

### 2. **Retrieve WordPress Posts**  
The workflow fetches all published posts using the WordPress API. It extracts:  
- Post ID  
- Title  
- Link  
- Rendered Content

### 3. **Format Data**  
The retrieved data is structured to ensure correct CSV formatting.  

### 4. **Convert to CSV File**  
The formatted data is transformed into a downloadable CSV file.  

### 5. **Upload to Google Drive**  
The CSV file is automatically uploaded to a specified Google Drive folder for easy access and storage.  

## How to Use  
1. Connect your WordPress and Google Drive accounts to n8n.  
2. Run the workflow manually or set up a scheduled trigger.  
3. Access the CSV file from your Google Drive folder.  


## 📊 Basic Information

- **Workflow ID:** 2889
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1755
- **Downloads:** 175
- **Created:** 2025/2/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2889)

## 👤 Author

- **Name:** Codez & AI
- **Username:** @codez

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **manualTrigger** 
- **wordpress** 
- **set** 
- **convertToFile** 
- **googleDrive** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
