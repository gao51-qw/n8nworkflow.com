# Automate interview scheduling and data cleanup with Cal.com and Google Sheets

> ***Workflow Description***
Automate your candidate interview pipeline with precision.
This powerful integration pulls booking data from Cal.com, extracts interview details (name, email, date & time), and syncs them directly into your Google Sheets tracker. It matches applicants using email, formats the date in the Asia/Riyadh timezone, and appends only relevant entries.

But it doesn’t stop there — it cleans your sheet automatically by removing unmatched or empty records, ensuring your data stays clean, reliable, and ready for HR decisions.

 What it does:
 Fetches interview bookings from Cal.com

 Converts time to readable format (e.g. 30 June, 09:00 AM)

 Matches booking emails with existing applicant records

 Auto-updates interview date in your sheet

 Detects and deletes irrelevant or blank entries

 **Use Cases:**
Resume screening workflows that require automated interview sync

HR dashboards needing real-time calendar updates

Applicant pipelines where only valid interviews should remain

**Ideal for:**
Recruiters • HR teams • Automation architects • Remote hiring pipelines



## 📊 Basic Information

- **Workflow ID:** 5481
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 223
- **Downloads:** 22
- **Created:** 2025/6/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5481)

## 👤 Author

- **Name:** Abdulaziz
- **Username:** @abdulaziz747

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **set** 
- **googleSheets** (×3)
- **splitOut** 
- **stickyNote** (×3)
- **splitInBatches** 
- **if** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
