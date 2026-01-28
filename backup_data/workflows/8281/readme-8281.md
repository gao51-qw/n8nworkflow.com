# Deduplicate lead data with Google Sheets: automated email alerts & log management

> **Description:**

Keep your databases clean and reliable with this intelligent n8n workflow template! Effortlessly detect duplicate records, generate structured logs, and receive instant email updates—no manual review needed.

This automation retrieves records from Google Sheets, runs a custom deduplication engine to detect duplicate entries (based on email and phone), saves detailed logs to Google Drive, and notifies your team via email. Perfect for businesses, analysts, and data teams who need to maintain clean datasets and ensure accuracy in customer or lead management systems.

**What This Template Does:**

 📊 Fetches data from Google Sheets for duplicate analysis
 🧠 Identifies duplicate entries using email + phone logic
 📂 Generates detailed duplication logs and saves them in Google Drive
 📧 Sends automated email notifications to your team with process details
 🌟 100% automated: just run the workflow and get instant results

**Built-in Logic Ensures:**

 ✔️ Duplicate detection is accurate and structured
 ✔️ Logs are organized for easy access and auditing
 ✔️ Team members stay informed with timely notifications

**Requirements:**

- Google Sheets containing your dataset
- Google Drive account for log storage
- SMTP/Gmail account for notifications
- n8n instance (self-hosted or cloud)

**Perfect For:**

- Data teams maintaining large customer or lead databases
- Businesses ensuring accuracy in CRM records
- Analysts and operations teams wanting hands-free duplicate management


## 📊 Basic Information

- **Workflow ID:** 8281
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 123
- **Downloads:** 12
- **Created:** 2025/9/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8281)

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
- **code** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
