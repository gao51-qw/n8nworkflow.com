# Remove duplicate entries & update Google Sheets based on profile URLs

> # **Remove Duplicates & Update Google Sheets**
**How it Works**

This workflow helps you keep your Google Sheets clean and up-to-date by automatically removing duplicate entries and re-uploading the cleaned data back to your sheet. It’s especially useful for large lead lists, email databases, or any dataset where duplicate rows can cause confusion and inefficiency.

**The flow:**

- Trigger the workflow manually.

- Fetch all rows from a specific Google Sheet.

- Identify and remove duplicate rows based on the profileUrl field.

- Convert the cleaned dataset into a file.

- Update the original Google Sheet with the new, deduplicated data.

**Setup Steps**

1. Connect your Google Sheets and Google Drive credentials in n8n.

2. Update the workflow with your desired spreadsheet and sheet ID.

3. Run the workflow by clicking “Execute Workflow” whenever you want to clean up your data.

4. The process only takes a few seconds and ensures your sheet stays organized without any manual effort.

**Use Cases**

- CRM lead management (avoiding duplicate prospects).

- Contact lists with scraped or imported data.

- Marketing databases with overlapping submissions.

## 📊 Basic Information

- **Workflow ID:** 8132
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 417
- **Downloads:** 41
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8132)

## 👤 Author

- **Name:** Paul Kobelke
- **Username:** @paulkobelke

## 🏷️ Categories

- Document Extraction
- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** 
- **removeDuplicates** 
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
