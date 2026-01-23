# Automated email validation with Google Sheets, Hunter.io and EmailValidation.io

> Streamline your email list hygiene with this automated validation workflow that monitors Google Sheets for new email entries and instantly verifies their deliverability. Perfect for maintaining clean contact databases, reducing bounce rates, and ensuring successful email marketing campaigns.

## Key Features
**📊 Real-Time Processing**

Monitors Google Sheets for new email entries every minute
Automatic validation triggers when emails are added
Instant deliverability status updates in the same spreadsheet

**🔍 Dual Validation Sources**

Hunter.io API for comprehensive email verification
EmailValidation.io API as backup validation service
Cross-verification for higher accuracy

**✅ Smart Filtering**

Skips empty email cells to prevent unnecessary API calls
Processes only valid email formats
Handles bulk email list uploads efficiently

**📈 Seamless Integration**

Updates original spreadsheet with validation results
Preserves existing data while adding deliverability status
No manual intervention required after setup

## Workflow Components
**Processing Flow:**

Google Sheets Trigger monitors for new rows
Filter removes empty email entries
Email extraction and formatting
Dual API validation (Hunter + EmailValidation.io)
Status processing and formatting
Automatic spreadsheet updates

**Use Cases**

Email Marketing: Clean lists before campaigns
Lead Generation: Validate new prospect emails
Database Maintenance: Regular email hygiene checks
CRM Integration: Ensure contact data quality

## Setup Requirements
**Required:**

Google Sheets with email column
Hunter.io API key
EmailValidation.io API key
Google Sheets OAuth2 credentials

**Benefits:**

Reduce email bounce rates
Improve sender reputation
Save costs on invalid email sends
Maintain clean contact databases

This workflow transforms manual email validation into an automated process, ensuring your email lists stay clean and deliverable without any manual effort.
Tags: email-validation, google-sheets, hunter-io, data-cleaning, automation

## 📊 Basic Information

- **Workflow ID:** 8198
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 160
- **Downloads:** 16
- **Created:** 2025/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8198)

## 👤 Author

- **Name:** Khair Ahammed
- **Username:** @khair1212

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **httpRequest** 
- **filter** 
- **set** (×2)
- **googleSheets** 
- **hunter** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
