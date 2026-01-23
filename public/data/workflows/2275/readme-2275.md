# Automated web scraping: email a CSV, save to Google Sheets & Microsoft Excel

> How it works:
* The workflow starts by sending a request to a website to retrieve its HTML content.
* It then parses the HTML extracting the relevant information
* The extracted data is storted and converted into a CSV file.
* The CSV file is attached to an email and sent to your specified address.
* The data is simultaneously saved to both Google Sheets and Microsoft Excel for further analysis or use.

Set-up steps:
1. Change the website to scrape in the "Fetch website content" node
2. Configure Microsoft Azure credentials with Microsoft Graph permissions (required for the Save to Microsoft Excel 365 node)
3. Configure Google Cloud credentials with access to Google Drive, Google Sheets and Gmail APIs (the latter is required for the Send CSV via e-mail node).

## 📊 Basic Information

- **Workflow ID:** 2275
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 122036
- **Downloads:** 12203
- **Created:** 2024/5/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2275)

## 👤 Author

- **Name:** Mihai Farcas
- **Username:** @mihailtd

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **splitOut** 
- **convertToFile** 
- **stickyNote** (×4)
- **html** (×2)
- **sort** 
- **googleSheets** 
- **microsoftExcel** 
- **gmail** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
