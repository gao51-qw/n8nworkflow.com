# Invoice creator with Google Sheets & automated email payment reminder system

> This automated n8n workflow streamlines invoice creation and payment reminders. It generates invoices on a monthly schedule and sends reminders for overdue payments, updating records in Google Sheets.

## Good to Know
- Supports monthly invoice generation and daily overdue checks
- Integrates with Google Sheets for data management
- Uses email notifications for invoice delivery and reminders
- Includes logging for tracking and auditing
- Features multiple reminder types based on overdue duration

## How It Works
### Invoice Creation Flow:
- **Monthly Invoice Trigger** - Initiates workflow on a set monthly schedule
- **Get Clients for Invoicing** - Reads client data from Google Sheet
- **Filter Active Clients** - Filters out inactive clients
- **Generate Invoice Data** - Creates invoice details in required format
- **Save Invoice to Google Sheets** - Appends or updates invoice record in the sheet
- **Send Invoice Email** - Sends the invoice to the client via email
- **Log Invoice Creation** - Logs invoice creation for records/auditing

### Reminder Flow:
- **Daily Payment Reminder Check** - Triggers workflow daily to check overdue invoices
- **Get Overdue Invoices** - Reads overdue invoices from Google Sheet
- **Filter Overdue Invoices** - Filters invoices still unpaid
- **Calculate Reminder Type** - Calculates how many days overdue
- **Switch Reminder Type** - Decides which type of reminder to send
- **Send Gentle / Follow-up / Urgent / Final Notice** - Sends respective reminder email
- **Update Reminder Log** - Updates reminder status in the sheet

## How to Use
- Import workflow into n8n
- Configure Google Sheets API for data access
- Set up email service for notifications
- Define monthly schedule for invoice trigger
- Test with sample client data and monitor reminders
- Adjust reminder thresholds as needed

## Requirements
- Access to Google Sheets API
- Email service configuration
- Scheduled trigger setup in n8n

## Sheet Columns:
- **Client Name**
- **Invoice ID**
- **Amount**
- **Due Date**
- **Status**
- **Reminder Type**
- **Last Updated**

## Customizing This Workflow
- Modify invoice generation schedule
- Adjust reminder email templates
- Configure custom Google Sheet columns
- Set custom overdue thresholds
- Integrate additional notification methods

## 📊 Basic Information

- **Workflow ID:** 6744
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 782
- **Downloads:** 78
- **Created:** 2025/7/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6744)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **cron** (×2)
- **googleSheets** (×5)
- **code** (×4)
- **emailSend** (×5)
- **switch** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
