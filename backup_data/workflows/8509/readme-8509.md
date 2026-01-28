# Smart meeting rescheduler: Gmail + Calendar + Sheets automation

> ## Description

Stop losing valuable leads to missed meetings with this No-Show Follow-Up & Rescheduling automation! Whenever a lead is marked as a “no-show” in your CRM or calendar, this workflow automatically sends polite follow-up emails with rescheduling options, tracks responses over 48 hours, and moves unresponsive leads into a nurture sequence—ensuring you recapture lost opportunities with zero manual effort.

**What This Template Does**

📋 Detects no-show leads from CRM or calendar data
 📧 Sends apology + reschedule link via Gmail instantly
 🗓 Creates placeholder calendar events for potential rebooking
 ⏳ Waits 24 hours to check for responses before sending a follow-up
 📩 Sends a shorter second follow-up if no reply
 🔄 Updates Google Sheets with final booking status
 📊 Moves unresponsive leads into nurture campaigns in GoHighLevel or Sheets

**Prerequisites**

- Google Sheets with lead details (Name, Email, Status, Meeting Date)
- Gmail API credentials for sending follow-ups
- Google Calendar API credentials for creating placeholder events
- GoHighLevel account (for nurture campaigns)
- n8n instance (self-hosted or cloud)

**Step-by-Step Setup**

- Connect CRM or calendar to detect no-show status updates.
- Trigger Gmail to send apology + reschedule email with booking link.
- Create a Google Calendar placeholder event to hold potential rebookings.
- Add a 24-hour delay node to wait for responses.
- If no reply → send a second, shorter follow-up email.
- Update Google Sheets with the final booking status (Rescheduled, No Response).
- For unresponsive leads → add them to a GoHighLevel nurture sequence.

**Customization Ideas**

- Add Slack/Telegram alerts for reps when a no-show is detected.
- Modify follow-up email templates with AI-generated personalized messages.
- Adjust response wait times (e.g., 12 hrs instead of 24 hrs).
- Sync updates with your CRM (HubSpot, Salesforce, Zoho).

**Key Benefits**
✅ Automatically recovers no-show leads with polite reminders
 ✅ Reduces wasted opportunities by offering quick rescheduling options
 ✅ Keeps reps prepared with calendar placeholders
 ✅ Ensures consistent tracking of booking status across platforms


**Perfect For**
Sales Teams managing high volumes of meetings
SDRs ensuring no lead slips through due to missed calls
Account Managers maintaining professional communication
Businesses wanting to maximize lead recovery with minimal effort


## 📊 Basic Information

- **Workflow ID:** 8509
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 68
- **Downloads:** 6
- **Created:** 2025/9/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8509)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **if** (×3)
- **googleCalendar** 
- **gmail** (×4)
- **googleSheets** (×2)
- **manualTrigger** 
- **set** 
- **wait** (×2)
- **stickyNote** (×14)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
