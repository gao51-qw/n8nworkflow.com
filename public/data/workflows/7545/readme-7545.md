# Automate appointment phone reminders with Google Calendar and Retell AI

> Appointment Reminder Agent automates phone call reminders for upcoming appointments by seamlessly connecting Google Calendar with Retell AI. This powerful workflow is designed to help businesses, clinics, and service providers ensure clients never miss their scheduled appointments—reducing no-shows and increasing efficiency.

##Use Cases
Healthcare practitioners reminding patients of upcoming visits

Salons, spas, and beauty services confirming bookings

Consultants, therapists, and coaches sending appointment reminders

Any service-based business wanting to reduce missed appointments

##Workflow Overview
Trigger – A scheduler node runs every day at 9 AM (configurable) to start the workflow.

Fetch Events – Pulls all events scheduled in the next 12 hours from Google Calendar.

Extract Details – A Code node parses each event’s description for:

Name
Phone number (must be in E.164 format, e.g., +14155552671)
Reason for appointment
Start and end time

Configure Retell – Uses credentials to set up:

from_number (Retell-registered phone number)
agent_id (Retell agent ID)

Send Call – Calls Retell AI’s API to place a personalized reminder call to the client.

##Setup Instructions
Add your Retell API key to n8n credentials (never hardcode it).

Add your Google Calendar account to credentials.

Set the from_number (Retell-registered number).

Set the agent_id (Retell agent ID).

Ensure all calendar event descriptions include required fields (Name, Phone number, Reason, Start & End times) in the specified format.

Adjust the scheduler trigger time if needed.

##Requirements
Retell AI account with API key

Registered Retell phone number

Google Calendar account

Event descriptions formatted properly with all required details

##Customization Options
Modify the trigger schedule (e.g., nightly, hourly, or webhook-based).

Add logging or tracking (e.g., use Google Sheets or Airtable to log call attempts/results).

Tailor the Retell agent script to suit different appointment types (e.g., “Consultation,” “Follow-up,” “Service Visit”).

Expand with additional channels (e.g., SMS or email reminders before or after calls).
![Screenshot 20250818 at 15.21.46.png](fileId:2136)

## 📊 Basic Information

- **Workflow ID:** 7545
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1735
- **Downloads:** 173
- **Created:** 2025/8/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7545)

## 👤 Author

- **Name:** Nabin Bhandari
- **Username:** @knabinbhandari

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **set** 
- **scheduleTrigger** 
- **httpRequest** 
- **googleCalendar** 
- **stickyNote** (×6)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
