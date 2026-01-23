# Automate unified marketing reports with Google Analytics, Google Ads, Meta Ads & HubSpot

> ## How it works
This workflow runs on scheduled weekly and monthly triggers to generate unified marketing performance reports. It processes multiple websites by collecting analytics data, paid ads performance, and CRM leads, then calculates KPIs and insights automatically. The workflow sends structured reports via email and stores historical data in Google Sheets. It ensures consistent reporting without manual effort.

## Step-by-step
- **Step 1: Trigger & report type detection**
  - **Schedule Trigger2** – Triggers the workflow weekly at a predefined time.
  - **Schedule Trigger3** – Triggers the workflow monthly at a predefined time.
  - **check month and week1** – Identifies whether the run is weekly or monthly and sets flags.
  - **Set Websites and Campaings1** – Defines websites, GA4 property IDs, and mapped ad campaigns.
  - **Expand Websites1** – Expands the website array into individual website items.
  - **Attach Run Flags1** – Attaches weekly or monthly flags to each website record.

- **Step 2: Website & ads data processing**
  - **Loop Websites1** – Iterates through each website independently.
  - **Get a report** – Fetches website traffic and engagement metrics from analytics.
  - **Get many campaigns** – Retrieves Google Ads campaign data.
  - **Fetch Meta Ads** – Fetches Meta Ads performance data via API.
  - **Filter Google Ads By Website1** – Filters Google Ads campaigns by website.
  - **Filter Meta Ads By Website1** – Filters Meta Ads campaigns by website.
  - **Merge1** – Merges analytics, Google Ads, and Meta Ads datasets.
  - **Build Website Dataset1** – Builds a unified dataset per website.
  - **Calculate KPIs & Campaign Insights1** – Calculates spend, CTR, CPA, CPL, conversions, and performance insights.
  - **Append or update row in sheet2** – Stores website-level marketing metrics in Google Sheets.

- **Step 2.1: Marketing report generation**
  - **Prepare Report Data2** – Combines all website datasets into a unified report object.
  - **Switch** – Routes execution based on weekly or monthly report type.
  - **Send Weekly Marketing report2** – Sends the weekly marketing performance email.
  - **Send Monthly Marketing Report2** – Sends the monthly marketing performance email.

- **Step 3: HubSpot lead analysis**
  - **Fetch1** – Fetches leads from HubSpot CRM.
  - **Filter Hubspot Leads** – Filters leads based on weekly or monthly time range.
  - **Summarize Hubspot Leads** – Aggregates lead status and lifecycle metrics.
  - **Prepare Report Data3** – Prepares CRM summary data for reporting.
- **Step 3.1: CRM reporting & storage**
  - **Switch3** – Routes CRM reporting by report type.
  - **Send Weekly Marketing report3** – Sends the weekly CRM summary email.
  - **Send Monthly Marketing Report3** – Sends the monthly CRM summary email.
  - **Code in JavaScript1** – Transforms CRM data for storage.
  - **Append or update row in sheet3** – Stores CRM lead performance data in Google Sheets.
  - **Switch3** – Routes CRM reporting by report type.
  - **Send Weekly Marketing report3** – Sends the weekly CRM summary email.
  - **Send Monthly Marketing Report3** – Sends the monthly CRM summary email.
  - **Code in JavaScript1** – Transforms CRM data for storage.
  - **Append or update row in sheet3** – Stores CRM lead performance data in Google Sheets.

## Why use this?
- Automates complex weekly and monthly marketing reporting.
- Unifies website analytics, ad platforms, and CRM data in one flow.
- Delivers consistent KPI calculations and insights every run.
- Maintains historical performance logs in Google Sheets.
- Scales easily across multiple websites and campaigns.


## 📊 Basic Information

- **Workflow ID:** 12124
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 401
- **Downloads:** 40
- **Created:** 2025/12/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12124)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** (×2)
- **code** (×10)
- **set** (×2)
- **splitInBatches** 
- **gmail** (×4)
- **switch** (×2)
- **splitOut** 
- **merge** 
- **googleSheets** (×2)
- **googleAnalytics** 
- **googleAds** 
- **httpRequest** 
- **hubspot** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
