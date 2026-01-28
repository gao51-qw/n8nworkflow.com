# Generate daily sales reports from Google Sheets with formatted email summaries

> **Description:**

Automate your daily sales reporting process with this powerful n8n workflow that reads data from Google Sheets, summarizes key metrics, and sends a beautifully formatted email report. Perfect for sales teams, operations managers, founders, or marketing leads who want a hands-free update on team performance every day.

This template intelligently parses sales activity, validates if meaningful data is present (like calls or prospecting counts), and dynamically generates both HTML and plain-text reports. Whether you're logging outbound efforts or tracking pipeline-building activities, this automation ensures you never miss a beat.

**What This Template Does (Step-by-Step)**

🚀 Trigger: Manually triggered (can be scheduled with Cron) to kickstart the report generation process.

📊 Read Google Sheet: 
- Pulls your daily outreach or sales data from a connected Google Sheet.
- Sheet contains records with fields like Name, Email, Calls, and Prospecting.

🔍 Check for Valid Records: Filters to ensure at least some records contain meaningful activity (non-empty calls or prospecting fields).

🧠 Generate Report (Conditional Logic)
If data exists:

 ➤ Creates a detailed and styled HTML table + summary
 ➤ Prepares a plain-text version for fallback or archival
 ➤ Computes total calls, total prospecting, and record count
If no data exists:
 ➤ Sends a default “No data available” message with a timestamp

📧 Send Email
- Sends the report to the designated email address using SMTP.
- Email subject includes date and total number of records.
- Includes a clean, professional report layout ideal for daily standups or performance reviews.

**Use Cases**

🏢 Daily reporting for sales or inside sales teams
📈 Prospecting activity summaries for managers
🧾 Recordkeeping for outreach performance
📬 Auto-notification of zero-activity days
📊 Daily visibility into team or campaign-level performance

**Required Integrations**

- Google Sheets (OAuth) – for reading activity logs
- SMTP (Gmail or custom provider) – for sending the report

**Why Use This Template?**

✅ Save time with no-code daily reporting
✅ Great for remote teams, async check-ins, or performance reviews
✅ Mobile-friendly, styled HTML reports
✅ Smart fallback when no data is present
✅ Plug-and-play Google Sheet integration


## 📊 Basic Information

- **Workflow ID:** 6370
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 131
- **Downloads:** 13
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6370)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **googleSheets** 
- **if** 
- **code** (×2)
- **manualTrigger** 
- **emailSend** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
