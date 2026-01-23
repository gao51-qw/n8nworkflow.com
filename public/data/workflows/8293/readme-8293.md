# Monitor lead response time SLA breaches with Google Sheets & Telegram alerts

> **Description**

Never miss a lead again with this SLA Breach Alert automation powered by n8n! This workflow continuously monitors your Google Sheets for un-replied leads and automatically triggers instant Telegram alerts, ensuring your team takes immediate action.

By running frequent SLA checks, enriching alerts with direct Google Sheet links, and sending real-time notifications, this automation helps prevent unattended leads, reduce response delays, and boost customer engagement.

**What This Template Does**

📅 Runs every 5 minutes to monitor SLA breaches
📋 Fetches lead data (status, contact, timestamps) from Google Sheets
🕒 Identifies leads marked “Un-replied” beyond the 15-minute SLA
🔗 Enriches alerts with direct Google Sheet row links for quick action
📲 Sends Telegram alerts with lead details for immediate response

**Step-by-Step Setup**
- Prepare Your Google Sheet
- Create a sheet with the following columns (minimum required):
  - Lead Name
  - Email
  - Phone
  - Status (values: Replied, Un-replied)
  - Timestamp (time of last update/reply)
- Set Up Google Sheets in n8n
  - Connect your Google account in n8n.
  - Point the workflow to your sheet (remove any hardcoded document IDs before sharing).
- Configure SLA Check
  - Use the IF node to filter leads where:
  - Status = Un-replied
    - Time since timestamp &gt; 15 minutes
- Enrich Alerts with Links
  - Add a Code node to generate direct row links to the sheet.
- Set Up Telegram Bot
  - Create a Telegram bot via @BotFather.
  - Add the bot to your team chat.
  - Store the botToken securely (remove chatId before sharing templates).
- Send Alerts
  - Configure the Telegram node in n8n to send lead details + direct Google Sheet link.

**Customization Guidance**
- Adjust the SLA window (e.g., 30 minutes or 1 hour) by modifying the IF node condition.
- Add more fields from Google Sheets (e.g., Company, Owner) to enrich the alert.
- Replace Telegram with Slack or Email if your team prefers a different channel.
- Extend the workflow to auto-assign leads in your CRM once alerted.

Perfect For
- Sales teams that need to respond to leads within strict SLAs
- Support teams ensuring no customer request is ignored
- Businesses aiming to keep lead response times sharp and consistent

## 📊 Basic Information

- **Workflow ID:** 8293
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 164
- **Downloads:** 16
- **Created:** 2025/9/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8293)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **cron** 
- **if** 
- **googleSheets** 
- **telegram** 
- **code** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
