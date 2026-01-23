# Automated GA4 analytics data backfill to BigQuery with Telegram alerts

> This workflow automates the daily backfill of Google Analytics 4 (GA4) data into BigQuery. It fetches 13 essential pre-processed reports (including User Acquisition, Traffic, and E-commerce) and uploads them to automatically created tables in BigQuery, and then send an alert in telegram.

## How it works
* **Configuration:** You define your Project ID, Dataset, and Date Range in a central "Config" node.
* **Parallel Fetching:** The workflow runs 13 parallel API calls to GA4 to retrieve key reports (e.g., `ga4_traffic_sources`, `ga4_ecommerce_items`).
* **Dynamic Tables:** It automatically checks if the target BigQuery table exists and creates it with the correct schema if it's missing.
* **Telegram Alerts:** After execution, it sends a summary message to Telegram indicating success or failure for the day's run.

## Set up steps
1.  **Google Credentials (OAuth):** This workflow uses n8n's built-in "Google OAuth2 API" credential. You do **not** need a Service Account key. Connect your Google account and ensure you grant scopes for **Google Analytics API** and **BigQuery API**.
2.  **Config Node:** Open the "Backfill Config" node and fill in:
    * `GA4 Property ID`
    * `Google Cloud Project ID`
    * `BigQuery Dataset ID`
3.  **Telegram Setup (Optional):** If you want alerts, configure the Telegram node with your Bot Token and Chat ID. If not, you can disable/remove this node.
4.  **Schedule:** By default, this is set to run daily. It is recommended to use a date expression (e.g., `Today - 2 Days`) to allow GA4 time to process data fully before fetching.

## 📊 Basic Information

- **Workflow ID:** 11010
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 160
- **Downloads:** 16
- **Created:** 2025/11/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11010)

## 👤 Author

- **Name:** Aliz
- **Username:** @aliz

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **googleAnalytics** (×13)
- **googleBigQuery** (×13)
- **set** 
- **scheduleTrigger** 
- **merge** (×2)
- **code** 
- **telegram** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
