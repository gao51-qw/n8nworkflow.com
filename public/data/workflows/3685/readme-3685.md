# Backlink monitoring automation with Google Sheets + DataForSEO

> ## What This Workflow Does

This n8n workflow reads backlinks from a Google Sheet, sends each one to the DataForSEO On-Page API, and checks:

- Whether the backlink is still live on the target page
- Whether it's dofollow or nofollow
- Whether it's missing (i.e., lost)

The result is then written back to the same Google Sheet under a Status column.

## Your result will look like this:
![Screenshot 20250424 at 08.32.51.png](fileId:1162)

## Step-by-Step Setup Instructions

1. Add your DataForSEO and Google Sheets credentials in n8n
2. Make sure your Google Sheet has these columns: Backlink URL, Landing page, and Status
3. Click the Test Workflow button to check a batch of backlinks

## Workflow Breakdown
1. Trigger: Manual test start
2. Read Data: Pulls backlink URLs and target pages from Google Sheets
3. Format URLs: Extracts domain from URL
4. Send POST Request to DataForSEO: Triggers a crawl on the backlink URL
5. Wait 20 seconds: Allows crawl to finish
6. Fetch Link Results: Retrieves backlink data from DataForSEO
7. Validate Backlink: Checks if the backlink is live, and whether it’s dofollow
8. Update Google Sheets: Logs the status as Live, Lost, or Lost (Nofollow)

## 📊 Basic Information

- **Workflow ID:** 3685
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 2597
- **Downloads:** 259
- **Created:** 2025/4/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3685)

## 👤 Author

- **Name:** Mykolas Bartkus
- **Username:** @mykolas-saaslinkbuilder

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **splitInBatches** 
- **manualTrigger** 
- **googleSheets** (×2)
- **code** (×2)
- **httpRequest** (×2)
- **wait** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
