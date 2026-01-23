# Automatically import Square sales summary reports into Google Sheets

> ## What It Does
This workflow automatically connects to the Square API and generates a daily sales summary report for all your Square locations. The report matches the figures displayed in Square Dashboard &gt; Reports &gt; Sales Summary.

It's designed to run daily and pull the previous day's sales into a Google Sheet for easy analysis and reporting.

This workflow builds on my previous template, which allows users to automatically pull data from the Square API into N8N for processing. (See here: [https://n8n.io/workflows/6358](https://n8n.io/workflows/6358))

## Prerequisites
To use this workflow, you'll need:
- A Square API credential (configured as a Header Auth credential)
- A Google Sheets credential

## How to Set Up Square Credentials:
- Go to **Credentials &gt; Create New**
- Choose **Header Auth**
- Set the **Name** to "Authorization"
- Set the **Value** to your **Square Access Token** (e.g., Bearer &lt;your-api-key&gt;)

## How It Works
- Trigger – The workflow runs daily at 4:00 AM
- Fetch Locations – An HTTP request retrieves all Square locations linked to your account
- Fetch Orders – For each location, an HTTP request pulls completed orders for the specified report_date
- Filter Empty Locations – Locations with no sales are ignored
- Aggregate Sales Data – A Code node processes the order data and produces a summary identical to Square’s Sales Summary report
- Append to Google Sheets – The data will automatically be appended to an existing Google sheet

# Example Use Cases
- Automatically store daily sales data in Google Sheets for analysis and historical tracking
- Automatically create charts or visualizations from the imported data
- Build weekly/monthly reports after running for multiple days
- Quickly calculate commissions or rent payments based on sales volume

## How to Use
- Configure both HTTP Request nodes to use your Square API credential
- Set the workflow to Active so it runs automatically
- Select the Google Sheet you want to import data into, and map the data to your columns

## Customization Options
- Add pagination to handle locations with more than 1,000 orders per day
- Expand the workflow to save or send the report output via other integrations (email, database, webhook, etc.)

## Why It's Useful
This workflow saves time, reduces manual report pulling from Square, and enables smarter automation around sales data—whether for operations, finance, or performance monitoring.



## 📊 Basic Information

- **Workflow ID:** 6456
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 149
- **Downloads:** 14
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6456)

## 👤 Author

- **Name:** Rosh Ragel
- **Username:** @roshragel

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **httpRequest** (×2)
- **splitOut** 
- **if** 
- **code** 
- **stickyNote** (×7)
- **scheduleTrigger** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
