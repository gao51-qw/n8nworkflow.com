# Sync multi-bank balance data to BigQuery using Plaid

> ## Automated Multi-Bank Balance Sync to BigQuery

This workflow automatically fetches balances from multiple financial institutions (RBC, Amex, Wise, PayPal) using Plaid, maps them to QuickBooks account names, and loads structured records into Google BigQuery for analytics.

## Who’s it for?
Finance teams, accountants, and data engineers managing consolidated bank reporting in Google BigQuery.

## How it works
1. The Schedule Trigger runs weekly.
2. Four Plaid API calls fetch balances from RBC, Amex, Wise, and PayPal.
3. Each response splits out individual accounts and maps them to QuickBooks names.
4. All accounts are merged into one dataset.
5. The workflow structures the account data, generates UUIDs, and formats SQL inserts.
6. BigQuery node uploads the finalized records.

## How to set up
Add Plaid and Google BigQuery credentials, replace client IDs and secrets with variables, test each connection, and schedule the trigger for your reporting cadence.


## 📊 Basic Information

- **Workflow ID:** 9988
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 140
- **Downloads:** 14
- **Created:** 2025/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9988)

## 👤 Author

- **Name:** Fahmi Fahreza
- **Username:** @fahmiiireza

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×4)
- **splitOut** (×4)
- **code** (×6)
- **merge** 
- **googleBigQuery** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
