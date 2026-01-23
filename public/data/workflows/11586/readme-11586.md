# Automate client lifecycle: lead intake to onboarding with Airtable, Notion & Google Calendar

> ## How it works

This workflow automates the entire lifecycle of a service-based client, combining four distinct business flows into a single view:

1. **Intake Leads:** Receives a webhook from your form builder, validates the data, optionally enriches the email using Clearbit, and creates records in Airtable and Notion.
2. **Manage Bookings:** Processes scheduling webhooks to update lead status, create Google Calendar events, and send pre-call survey emails.
3. **Send Reminders:** Runs a daily schedule to scan Airtable for upcoming calls and automatically sends 24h reminder emails to reduce no-shows.
4. **Onboard Clients:** Reacts to successful payments by marking leads as "Paid," generating a Notion Onboarding Checklist, and sending a Welcome Kit via Email and WhatsApp.

## Set up steps

1. **Configure Credentials:**
   * Connect your accounts for **Airtable, Notion, Slack, Google Calendar, and GMAIL**.
   * (Optional) Add credentials for **Clearbit** (enrichment) and **Twilio** (WhatsApp).

2. **Customize Emails:**
   * Open the four **Email Send** nodes.
   * Customize the `Body Text` with your own booking links and survey URLs.

3. **Configure Tables & IDs:**
   * Update the **Airtable** nodes with your specific Base and Table names (e.g., `tblLeads`).
   * Update the **Notion** nodes with your Database IDs for Projects and Onboarding.

4. **Connect Webhooks:**
   * Copy the Production URLs from the three Webhook nodes (`Lead Intake`, `Booking`, `Payment`) and paste them into your respective form, calendar, or payment provider settings.

## 📊 Basic Information

- **Workflow ID:** 11586
- **Complexity:** advanced
- **Node Count:** 37
- **Views:** 192
- **Downloads:** 19
- **Created:** 2025/12/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11586)

## 👤 Author

- **Name:** Dhruv Mali
- **Username:** @dhruvmali

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **webhook** (×3)
- **if** (×3)
- **airtable** (×6)
- **notion** (×3)
- **googleCalendar** 
- **scheduleTrigger** 
- **slack** (×4)
- **respondToWebhook** (×5)
- **httpRequest** (×2)
- **gmail** (×4)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 37 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
