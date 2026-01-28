# Google Sheets duplication & enrichment automation

> ## How it Works ##

This workflow reads sheet details from a source Google Spreadsheet, creates a new spreadsheet, replicates the sheet structure, enriches the content by reading data, and writes it into the corresponding sheets in the new spreadsheet. The process is looped for every sheet, providing an automated way to duplicate and transform structured data.

## 🎯 Use Case ##

- Automate duplication and data enrichment for multi-sheet Google Spreadsheets
- Replicate templates across new documents with consistent formatting
- Data team workflows requiring repetitive structured Google Sheets setup

## Setup Instructions ##

### 1. Required Google Sheets
- You must have a source spreadsheet with multiple sheets.
- The destination spreadsheet will be created automatically.
### 2. API Credentials
- **Google Sheets OAuth2** – connect to both read and write spreadsheets.
- **HTTP Request Auth** – if external API headers are needed.
### 3. Configure Fields in Write Sheet
- Ensure you define appropriate columns and mapping for the destination sheet.

## 🔁 Workflow Logic ##

1. **Manual Trigger**: Starts the flow on user demand.
2. **Create New Spreadsheet**: Generates a blank spreadsheet.
3. **HTTP Request**: Retrieves all sheet names from the source spreadsheet.
4. **JavaScript Code**: Extracts titles and metadata from the HTTP response.
5. **Loop Over Sheets**: Iterates through each sheet retrieved.
6. **Delete Default Sheet**: Removes the placeholder 'Sheet1'.
7. **Create Sheets**: Replicates each original sheet in the new document.
8. **Read Spreadsheet1**: Pulls data from the matching original sheet.
9. **Write Sheet**: Appends the data to the newly created sheets.

## 🧩 Node Descriptions ##

| Node Name | Description |
|-----------|-------------|
| Manual Trigger | Starts the workflow manually by user test. |
| Create New Spreadsheet | Creates a new Google Spreadsheet for output. |
| HTTP Request | Fetches metadata from the source spreadsheet including sheet names. |
| Code | Processes sheet metadata into a list for iteration. |
| Loop Over Items | Loops over each sheet to replicate and populate. |
| Google Sheets2 | Deletes the default 'Sheet1' from the new spreadsheet. |
| Create Sheets | Creates a new sheet matching each source sheet. |
| Read Spreadsheet1 | Reads data from the source sheet. |
| Write sheet | Writes the data into the corresponding new sheet. |

## 🛠️ Customization Tips ##

- Adjust the Google Sheet title to be dynamic or user-input driven
- Add filtering logic before writing data
- Append custom audit columns like 'Timestamp' or 'Processed By'
- Enable logging or Slack alerts after each sheet is created

## 📎 Required Files ##

| File Name | Purpose |
|-----------|---------|
| My_workflow_4.json | Main workflow JSON file for sheet duplication and enrichment |

## 🧪 Testing Tips ##

- Test with a spreadsheet containing 2–3 simple sheets
- Validate whether all sheets are duplicated
- Check if columns and data structure remain intact
- Watch for authentication issues in Google Sheets nodes

## 🏷 Suggested Tags & Categories ##

#GoogleSheets #Automation #DataEnrichment #Workflow #Spreadsheet


## 📊 Basic Information

- **Workflow ID:** 4865
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 844
- **Downloads:** 84
- **Created:** 2025/6/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4865)

## 👤 Author

- **Name:** Amit Mehta
- **Username:** @amitswba

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **stickyNote** (×6)
- **manualTrigger** 
- **httpRequest** 
- **code** 
- **splitInBatches** 
- **googleSheets** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
