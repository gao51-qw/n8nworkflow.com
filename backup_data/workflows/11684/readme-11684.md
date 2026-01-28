# Automate payment gateway & database transaction reconciliation with Google Sheets

> ## How it works

This workflow fully automates the reconciliation process between your Local Database transactions and Payment Gateway transactions. It compares both data sources, identifies mismatches, categorizes discrepancies, logs them into Google Sheets, generates a final summary, and sends an automated reconciliation report to your finance team. This ensures accurate, consistent, and error-free financial reporting without manual work.

## Key Features

- Automatic data extraction from two Google Sheets
- Transaction comparison with result categorization
- Duplicate detection
- Real-time discrepancy logging
- Summary generation and storage
- Automated email reporting
- Zero manual effort required

## Setup Steps
#### 1. Connect Required Credentials 


You must connect the following credentials:
Google Sheets (Service Account or OAuth)
Email SMTP (Gmail or custom)

#### 2. Replace Default Values

Update the workflow with:
Your Google Sheet IDs
Your tab/sheet names
SMTP email, sender, and recipient
Optional: Custom domain or business branding

#### 3. Customize Email Template

 
Modify subject, message body, or formatting style based on your reporting standards.

#### 4. Adjust Trigger

You may choose:
Manual Trigger
Cron Trigger for daily/weekly reconciliation
Webhook Trigger integrated with your system

## Detailed Process Flow

#### 1. Fetch Local & Payment Gateway Transactions

The workflow reads all transaction records from the Local Database Sheet and Payment Gateway Sheet.

#### 2. Compare both Transactions

Using the compare operation, the workflow splits result into
  a. Valid Transactions
  b. Invalid Transactions
  c. Amount Differences Transactions
  d. Missing Transactions

#### 3. Duplicate Transaction Detection

The workflow scans local transactions to detect duplicate transaction and logs them seperately

#### 5. Logging Transactions

Each category is appended to its respective Google Sheet:
- DuplicateData
- AmountDifference
- DataNotInsert
- Reconciliation Summary
- RealData

#### 6. Count all categories

The workflow counts:

- Number of valid transactions
- Number of invalid transactions
- Number of missing transactions
- Number of Amount mismatch transactions

The final summary row is appended to a dedicated Reconciliation Summary Sheet.

#### 7. Send Final Email Report

The finance team receive a email of final summary report.


## Final Output

At the end the workflow, you get:

- Fully categorized reconciliation logs
- Complete Summary Stored Sheets
- Email Report
- Clean audit ready data



## 📊 Basic Information

- **Workflow ID:** 11684
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 52
- **Downloads:** 5
- **Created:** 2025/12/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11684)

## 👤 Author

- **Name:** Mohamed Abubakkar
- **Username:** @mohamed-abubakkar

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **code** (×2)
- **compareDatasets** 
- **filter** 
- **googleSheets** (×8)
- **summarize** (×4)
- **merge** 
- **emailSend** 
- **stickyNote** (×7)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
