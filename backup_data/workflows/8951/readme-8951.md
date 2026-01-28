# Automated CRM deal stage updates with Stripe & Google Sheets

> ## Description:
Keep your CRM always up to date by automatically syncing closed deals from Stripe into Google Sheets. This n8n workflow fetches all paid invoices, finds matching customer records in your CRM tracking sheet, removes duplicates, marks the deal as “Closed,” and updates the sheet in real time—eliminating manual updates and ensuring your sales pipeline reflects actual revenue.

## What This Template Does
-  ⏰ Scheduled Trigger (Cron): Runs automatically at your chosen frequency (daily/hourly) to check Stripe for new paid invoices.
- 💳 Fetch Paid Invoices from Stripe: Calls the Stripe API to retrieve all invoices with status = “paid.”
- 📋 Split Invoice Array: Breaks down the list of paid invoices into individual records for easier processing.
- 🔍 Find Customer in CRM Sheet: Looks up each Stripe customer email against your Google Sheets CRM tracker to fetch HubSpot/Pipedrive Deal IDs.
- 🧹 Clean Data & Mark as Closed (Code Node): Removes duplicates, filters out empty rows, and tags deals with status = “Closed” (customizable to “Won” or your CRM’s terminology).
- ✅ Update CRM Sheet with Closed Deals: Updates your Google Sheet by matching records via Stripe Email and marking them as closed while preserving existing CRM IDs.
- 📈 Full Sync Summary: At the end, your CRM sheet reflects all customers who have completed payments in Stripe, ensuring your pipeline and revenue reporting stay aligned.

## Required Integrations
 ✅ Stripe API Credentials (for fetching paid invoices)
 ✅ Google Sheets OAuth2 API (for reading/writing CRM records)

## Ideal Use Cases
 💼 Automatically close deals when payment is received
 📊 Keep CRM pipeline metrics aligned with Stripe transactions
 🧑‍💼 Sync sales & finance teams on deal status
 🏢 Perfect for SaaS, e-commerce, or agencies handling recurring payments

## Why This Template is Powerful
 ✔ Removes manual CRM updates
 ✔ Prevents duplicate or missed records
 ✔ Ensures instant revenue recognition in CRM
 ✔ Easy to extend to HubSpot, Pipedrive, or Zoho


## 📊 Basic Information

- **Workflow ID:** 8951
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 82
- **Downloads:** 8
- **Created:** 2025/9/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8951)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **scheduleTrigger** 
- **stickyNote** (×7)
- **googleSheets** (×2)
- **httpRequest** 
- **splitOut** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
