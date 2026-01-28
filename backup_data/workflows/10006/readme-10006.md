# Extract web page data from Gmail links and save to Google Sheets

> How it works

This workflow automatically extracts specific data from received emails and saves it into a Google Sheets document for easy tracking and analysis.

It connects to a Gmail account, searches for emails received within a defined date range from a specific sender, opens links inside those emails, extracts data from the linked pages (such as case ID, patient name, birth date, complaint, and location), processes and cleans the information using custom JavaScript logic, and finally saves the structured results into a Google Sheet.

Setup steps

Connect Gmail using OAuth2 credentials.

Adjust the date filters and sender email in the “Search Emails” node.

Customize the CSS selectors in the HTML extraction nodes to match the desired elements from your email or linked page.

Open the Code node and modify the logic if you need to calculate or transform additional fields.

Link your Google Sheets account and specify the spreadsheet and sheet name where the results will be appended.

## 📊 Basic Information

- **Workflow ID:** 10006
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 118
- **Downloads:** 11
- **Created:** 2025/10/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10006)

## 👤 Author

- **Name:** Renan Miller
- **Username:** @renanmiller-br

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **gmail** 
- **html** (×2)
- **httpRequest** 
- **code** 
- **set** 
- **googleSheets** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
