# Fetch property listings from 99Acres & MagicBricks with Apify and Google Sheets

> # Fetch Property Listings from 99Acres & MagicBricks with Apify and Google Sheets

## Who’s it for
Users who want to automatically fetch and organize property listings from 99Acres and MagicBricks into Google Sheets without manual copying.

## How it works / What it does
1. Users submit search URLs via a form.
2. The workflow uses Apify scrapers to fetch listings from 99Acres & MagicBricks.
3. Data is cleaned, standardized (ID, Title, Price, Price per Sqft, URL), and deduplicated.
4. Listings are automatically appended to their respective Google Sheets tabs.

## How to set up
1. Connect your Google Sheets account in all Google Sheets nodes.
2. Open the form trigger and submit valid search URLs.
3. Run the workflow or submit the form live.
4. A new spreadsheet is created and populated automatically.

## Requirements
1. Google Sheets account
2. Apify API key for 99Acres & MagicBricks scrapers
3. Valid property search URLs

## How to customize the workflow
1. Change sheet names or spreadsheet title in the “Create Master Spreadsheet” node.
2. Adjust API parameters in the HTTP Request nodes (like max retries or proxy settings).
3. Modify the Code nodes to include additional fields or filters.




## 📊 Basic Information

- **Workflow ID:** 11997
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 114
- **Downloads:** 11
- **Created:** 2025/12/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11997)

## 👤 Author

- **Name:** Parth Pansuriya
- **Username:** @parthpansuriya

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **googleSheets** (×3)
- **httpRequest** (×2)
- **code** (×2)
- **stickyNote** (×6)
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
