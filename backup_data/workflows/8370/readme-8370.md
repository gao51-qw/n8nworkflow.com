# Automate lead intake & deduplication with Google Forms, Sheets and GoHighLevel CRM

> **Description:**

Eliminate duplicate entries and streamline your lead management process with this n8n workflow template! Automatically capture new form submissions, check against existing records, update duplicates, and sync leads seamlessly into GoHighLevel (GHL) CRM and your Google Sheets database.

This automation monitors Google Form submissions in real time, verifies if a lead already exists, and routes them accordingly:

✅ New leads are created in GoHighLevel and logged in your master database.
♻️ Duplicates are updated with the latest details and tracked in a dedicated duplicate log.

Perfect for sales, marketing, and operations teams that need clean, accurate, and up-to-date lead records without manual effort.

**What This Template Does**

📥 Captures new lead form submissions from Google Sheets
🔎 Checks existing records to detect duplicate entries
🆕 Creates new contacts in GoHighLevel CRM for unique leads
♻️ Updates existing GHL contacts with fresh submission details
📂 Logs new leads in a master database spreadsheet
📑 Tracks duplicate leads in a dedicated log for analytics
🌟 Fully automated: ensures a clean, organized, and deduplicated lead pipeline

**How It Works**

- Google Sheets Trigger – Monitors your form response sheet for new submissions.
- Process Contact Data – Evaluates lead details and checks for duplicates.
- Duplicate Check – Compares against your master database.
- New Lead Handling – Creates a new contact in GoHighLevel and adds it to the master sheet.
- Duplicate Handling – Updates the existing contact in GoHighLevel and logs the activity in the duplicate log sheet.

**Setup Instructions**-
- Google Sheets Setup
  - Prepare three sheets:
    - Form Responses Sheet → where new leads from your form are captured
    - Master Lead Database → stores all unique leads
    - Duplicate Log Sheet → tracks duplicate entries for reporting
- Required columns:
  - Name
  - Email Address
  - Phone Number
  - Company (optional)
  - Submission Time (timestamp)
- GoHighLevel Setup
  - Log into your GoHighLevel account.
  - Generate an API key under settings.
  - Store the key securely in n8n credentials.
- n8n Setup
  - Import the workflow into your n8n instance.
  - Update all node credentials (Google Sheets + GoHighLevel).
  - Rename the Code node to Process Contact Data.
  - Test the workflow with a sample form submission.

**Customization**

🕒 Business Logic: Adjust duplicate detection rules (e.g., match on email only, or email + phone).
📑 Data Fields: Add more fields (e.g., industry, source, notes) and map them to GHL + Sheets.
📊 Reporting: Use the Duplicate Log Sheet for analytics, dashboards, or reporting pipelines.
🔔 Notifications: Add a Telegram or Slack node to notify your team when duplicates occur.

**Security Best Practices**
❌ Do not hardcode your GoHighLevel API key. Use n8n credentials.
✅ Remove private sheet IDs and tokens before sharing workflows.
✅ Restrict credential access to authorized team members only.

**Requirements**
- Google Sheets (form responses, master database, duplicate log)
- GoHighLevel (GHL) account with API access
- n8n instance (self-hosted or cloud)


**This workflow is perfect for**:
🏢 Sales Teams managing growing lead databases
📈 Marketing Teams syncing form submissions with CRM
⚙️ Operations Teams preventing duplicate records
🚀 Businesses wanting a reliable, automated lead pipeline


## 📊 Basic Information

- **Workflow ID:** 8370
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 317
- **Downloads:** 31
- **Created:** 2025/9/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8370)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **googleSheets** (×3)
- **httpRequest** (×2)
- **filter** 
- **if** 
- **stickyNote** (×9)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
