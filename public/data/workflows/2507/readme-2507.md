# 📂 Automatically update stock portfolio from OneDrive to Excel

> ## Seamlessly Sync and Update Data from a csv in OneDrive to Excel with n8n

This workflow is perfect for users who need a reliable, automated way to transfer and organize data from OneDrive into Excel—especially for tasks like portfolio tracking, inventory management, and record-keeping. By monitoring your OneDrive folder for new CSV files, it performs data cleaning, transformation, and real-time updates in an Excel sheet, ensuring only new or changed records are added.

---

## How it Works

1. **Automated Monitoring**: Every minute, the workflow scans a designated OneDrive folder for new files.
2. **File Verification**: It checks if the detected file is in CSV format; if not, the process stops with an error message.
3. **Data Extraction and Cleaning**: CSV data is loaded, and irrelevant headers are removed before mapping to specified columns in Excel.
4. **Excel Update**: The workflow maps data to your Excel sheet, updating only new or modified entries based on a unique identifier ("Ticker/ISIN").
5. **Cleanup**: To keep your OneDrive organized, processed files are deleted after updating Excel.

---

## Setup Steps

1. **Connect OneDrive and Excel Accounts**: Link your Microsoft OneDrive and Excel accounts in n8n.
2. **Designate Folder and Worksheet**: Specify the OneDrive folder for monitoring and the Excel sheet for data updates.
3. **Configure Sync Frequency and CSV Validation**: Set the monitoring frequency to every minute and ensure the workflow identifies CSV files accurately.

Once configured, this workflow offers a hands-free, efficient solution to keep your OneDrive and Excel data synchronized effortlessly.

## 📊 Basic Information

- **Workflow ID:** 2507
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 7587
- **Downloads:** 758
- **Created:** 2024/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2507)

## 👤 Author

- **Name:** Louis
- **Username:** @louisdl

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **microsoftOneDriveTrigger** 
- **stopAndError** 
- **extractFromFile** 
- **microsoftOneDrive** (×3)
- **stickyNote** (×3)
- **code** 
- **noOp** 
- **microsoftExcel** (×2)
- **if** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
