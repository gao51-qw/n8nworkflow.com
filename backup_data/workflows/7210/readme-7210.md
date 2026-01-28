# Smartlead email campaign analytics dashboard with Google Sheets integration

> **Workflow 1: Domain and Email Health 🩺**
This part of the workflow is triggered every 5 hours by the Schedule Trigger1 node. Its purpose is to pull health metrics for both email domains and individual email addresses.

How it Works:
++Schedule Trigger:++ The Schedule Trigger1 node initiates the workflow every 5 hours.

++API Requests:++ Two separate HTTP Request nodes, HTTP Request5 and HTTP Request6, make API calls to Smartlead.

++HTTP Request5 calls++ the endpoint for domain-wise health metrics.

++HTTP Request6 calls++ the endpoint for email-wise health metrics.

Both requests use the same api_key and a date range from 2025-07-04 to the current day.

++Data Splitting:++ The Split Out5 and Split Out6 nodes take the JSON response from the API calls and split the data into individual items. This is necessary so each row of data can be processed and added to Google Sheets separately.

++Google Sheets Integration:++ Finally, the Append or update row in sheet5 and Append or update row in sheet6 nodes update two different Google Sheets:

++Append or update row in sheet5 adds++ or updates rows in the DomainHealth sheet, matching on the domain column.

++Append or update row in sheet6 adds++ or updates rows in the EmailHealth sheet, matching on the from_email column.

**Workflow 2: Global and Campaign-Specific Analytics 📊**
This second part of the workflow is triggered every 2 hours by the Schedule Trigger node. Its goal is to get a day-by-day overview of email engagement and campaign-specific performance.

How it Works:
Schedule Trigger: The Schedule Trigger node starts this workflow every 2 hours.

++API Requests:++ Two HTTP Request nodes, HTTP Request and HTTP Request1, call different Smartlead API endpoints.

++HTTP Request++ retrieves day-wise overall stats for email engagement.

++HTTP Request1 ++retrieves overall stats for each campaign.

++Data Splitting:++ The Split Out and Split Out1 nodes separate the JSON responses into individual data items for processing.

++Google Sheets Integration:++ The Append or update row in sheet and Append or update row in sheet1 nodes then write the data to Google Sheets.

++Append or update row in sheet++ updates the Sheet1 sheet with day-wise metrics, using the date as a matching column.

++Append or update row in sheet1++ updates the CampaignWise sheet with campaign performance metrics, using the campaign id to match rows.

## 📊 Basic Information

- **Workflow ID:** 7210
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 169
- **Downloads:** 16
- **Created:** 2025/8/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7210)

## 👤 Author

- **Name:** Rahi Uppal
- **Username:** @rahiuppal

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×4)
- **googleSheets** (×4)
- **splitOut** (×4)
- **scheduleTrigger** (×2)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
