# Get CSV from URL and convert to Excel

> This workflow demonstrates the conversion of a CSV file to Excel format.

First, an example CSV file is downloaded via a direct link. The source file is taken from the European Open Data Portal:
[https://data.europa.eu/data/datasets/veranstaltungsplaetze-potsdam-potsdam?locale=en](https://data.europa.eu/data/datasets/veranstaltungsplaetze-potsdam-potsdam?locale=en)

The binary data is then imported via the Spreadsheet File node and converted to Excel format.

N.B. Note that as of version 1.23.0 n8n, the Spreadsheet File node has been redesigned and is now called Convert to File node. Learn more on the release notes page: [https://docs.n8n.io/release-notes/#n8n1230](https://docs.n8n.io/release-notes/#n8n1230)

## 📊 Basic Information

- **Workflow ID:** 2041
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 10439
- **Downloads:** 1043
- **Created:** 2024/1/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2041)

## 👤 Author

- **Name:** Yulia
- **Username:** @yulia

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **manualTrigger** 
- **spreadsheetFile** (×2)
- **httpRequest** 
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
