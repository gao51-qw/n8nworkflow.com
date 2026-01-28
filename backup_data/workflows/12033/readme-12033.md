# Multi-platform revenue reconciliation across Stripe, PayPal & bank with tax archive

> ## How It Works
This workflow automates monthly revenue reconciliation across Stripe, PayPal, and bank statements by standardizing data formats, detecting discrepancies, and producing audit-ready reports. It concurrently retrieves revenue data from multiple sources, normalizes datasets into consistent structures, consolidates records, and reconciles transactions against bank statements with intelligent mismatch detection. The system aggregates monthly totals, generates detailed audit reports with clearly flagged discrepancies, archives finalized outputs to Google Drive, and notifies tax agents. Designed for accounting firms, finance teams, and businesses, it enables automated revenue verification, multi-channel reconciliation, discrepancy identification, and compliance audit documentation without manual record matching or error-prone spreadsheet workflows.

## Setup Steps
1. Configure Stripe, PayPal.
2. Set up normalization rules for date, currency, and transaction ID mappings.
3. Connect Google Drive for report archiving and Gmail for agent notifications.
4. Define mismatch thresholds and reconciliation tolerance parameters.

## Prerequisites
Stripe, PayPal, and bank statement accounts

## Use Cases
Accounting firms automating client revenue verification; multi-channel e-commerce businesses  

## Customization
Add additional payment sources (Square, Shopify), adjust normalization rules for regional formats 

## Benefits
Eliminates manual reconciliation, detects discrepancies automatically 

## 📊 Basic Information

- **Workflow ID:** 12033
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 58
- **Downloads:** 5
- **Created:** 2025/12/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12033)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×5)
- **httpRequest** (×3)
- **merge** 
- **code** (×2)
- **if** 
- **aggregate** 
- **googleDrive** 
- **gmail** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
