# Facebook ads reporting automation with Facebook Graph API and Google Sheets

> ## Facebook Ads Reporting Automation — Automatically Fetch & Sync Campaign Statistics

This automation enables you to automatically fetch daily campaign data from Facebook Ads without manual exports. It requires connection to the Facebook Graph API and a Google Sheets account where all data is stored and updated in real time.

## How does it work?
The workflow connects to your Facebook Ads account via the Facebook Graph API to retrieve the latest campaign data, including campaign status, spend, results, reach, and other key performance metrics.

Retrieved data is automatically synced to a Google Sheets spreadsheet, making it easy to analyze, report, and share with your team or clients.

The automation runs daily at a scheduled time, ensuring your campaign stats are always up-to-date.

## What can you use it for?
Efficiently track Facebook Ads performance without manual data handling.

Generate real-time reports for marketing teams or clients.

Quickly identify trends and optimize ad spend based on fresh data.

Centralize data from multiple campaigns for better decision-making.

## Requirements:
Active Facebook Ads account with access to Facebook Graph API credentials.
Facebook App with ads_read permissions and a valid access token

Google account with permission to use Google Sheets.

Basic setup of API credentials and Google Sheets integration.

Create a new spreadsheet and name it (e.g., Facebook Campaign Stats). In the first row, create the following column headers (exact order required):

| Id Campaign | Campaign name | Campaign status | Statistic | Impressions | Clicks | CPC | CTR | Conversions | Cost per conversion | Spend money | From | To |

Make sure the sheet is editable by the automation and accessible via Google Sheets API (OAuth2 or service account).

contact: contact@streamlinemakers.com

## 📊 Basic Information

- **Workflow ID:** 6328
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 476
- **Downloads:** 47
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6328)

## 👤 Author

- **Name:** Jacob
- **Username:** @jacobgad

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **code** (×2)
- **merge** 
- **aggregate** 
- **stickyNote** (×2)
- **googleSheets** (×4)
- **if** (×2)
- **httpRequest** (×2)
- **facebookGraphApi** 
- **scheduleTrigger** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
