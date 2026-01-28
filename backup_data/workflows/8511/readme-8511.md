# Automated lead follow-up system with Gmail, Google Calendar & Sheets sync

> ## Description
Boost your meeting conversion rates with this Automated Meeting Booking Sequence! This workflow automatically follows up with unbooked leads after 24 hours, sends personalized emails with calendar links and alternate time slots, and confirms bookings via replies or webhook triggers—ensuring you book more meetings with less manual effort.

**What This Template Does**

 📅 Runs every hour to check for unbooked leads
 📋 Fetches lead details (name, company, contact info) from Google Sheets
 📧 Sends personalized follow-up emails with booking links + alternate time slots
 🗓 Creates placeholder events in Google Calendar for reserved slots
 ⏳ Waits 24 hours to monitor lead responses
 📩 Analyzes replies for booking confirmations
 🔄 Updates Google Sheets with confirmed “BOOKED” status

**Prerequisites**

- Google Sheets with lead details (Name, Email, Status, Initial Reply Date)
- Gmail API credentials (for follow-up emails)
- Google Calendar API credentials (for placeholder events)
- n8n instance (self-hosted or cloud)

**Step-by-Step Setup**

- Use a schedule trigger to run the workflow hourly.
- Fetch lead records from Google Sheets.
- Add an IF condition to detect leads with status = “Unbooked” OR &gt;24 hrs since reply.
- Send a Gmail follow-up email with booking link + 2 alternate time slots.
- Create a Google Calendar placeholder event (e.g., 24 hrs from now).
- Add a 24-hour delay node to wait for responses.
- Fetch Gmail threads to check replies or webhook responses.
- If confirmed → update Google Sheets status to “BOOKED.”

**Customization Ideas**

- Replace Gmail with Outlook or Zoho Mail.
- Add AI-generated personalized email copy for higher response rates.
- Use Slack/Telegram alerts when a booking is confirmed.
- Connect to your CRM (HubSpot, Zoho, Salesforce) for full sync.

**Key Benefits**
✅ Automates follow-ups for unbooked leads
 ✅ Increases meeting conversion with ready-made slots
 ✅ Reduces manual effort in tracking responses
 ✅ Keeps CRM/Google Sheets updated automatically

**Perfect For**
- Sales teams managing high-volume leads
- SDRs ensuring follow-ups never get missed
- Agencies scheduling discovery/intro calls
- Businesses that want to maximize conversions with minimal effort

## 📊 Basic Information

- **Workflow ID:** 8511
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 92
- **Downloads:** 9
- **Created:** 2025/9/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8511)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **scheduleTrigger** 
- **if** (×2)
- **googleCalendar** 
- **gmail** (×2)
- **googleSheets** (×2)
- **set** 
- **wait** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
