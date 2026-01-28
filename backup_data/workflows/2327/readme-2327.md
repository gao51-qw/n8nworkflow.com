# Host your own uptime monitoring with scheduled triggers

> This n8n workflow demonstrates how to build a simple uptime monitoring service using scheduled triggers.

Useful for webmasters with a handful of sites who want a cost-effective solution without the need for all the bells and whistles.

## How it works
* Scheduled trigger reads a list of website urls in a Google Sheet every 5 minutes
* Each website url is checked using the HTTP node which determines if the website is either in the UP or DOWN state.
* An email and Slack message are sent for websites which are in the DOWN state.
* The Google Sheet is updated with the website's state and a log created.
* Logs can be used to determine total % of UP and DOWN time over a period.

## Requirements
* Google Sheet for storing websites to monitor and their states
* Gmail for email alerts
* Slack for channel alerts

## Customising the workflow

Don't use Google Sheets? This can easily be exchanged with Excel or Airtable.

## 📊 Basic Information

- **Workflow ID:** 2327
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 27489
- **Downloads:** 2748
- **Created:** 2024/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2327)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **googleSheets** (×3)
- **slack** 
- **gmail** 
- **httpRequest** 
- **splitInBatches** 
- **stickyNote** (×5)
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
