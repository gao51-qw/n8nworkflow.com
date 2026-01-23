# Automate Calendly to HubSpot: contact updates & meeting logging

> ## How it works

This workflow automatically syncs Calendly meeting bookings into HubSpot CRM by checking if the invitee already exists as a contact. It extracts attendee details, creates or updates contacts in HubSpot, and logs the meeting engagement with all relevant information. This ensures that every booked meeting is properly tracked, linked to the right contact, and enriched with context from Calendly.

## Step-by-step
**1. Trigger & Input**

- Calendly Trigger (Invitee Created) – Fires whenever a new meeting is booked in Calendly.

- Captures attendee details: name, email, meeting start/end time, and responses to any custom questions.

**2. Contact Search**

- Search Contact (HubSpot) – Looks up HubSpot to see if a contact with the invitee’s email already exists.

**3. Contact Decision**

- Contact Exists?

- Yes → Proceeds to log the meeting against the existing HubSpot contact.

- No → Creates a new contact in HubSpot with the attendee’s name and email.

**4. Engagement Logging**

- Log Meeting (Existing Contact) – Creates a HubSpot meeting engagement tied to the existing contact.

- Create Contact + Log Meeting (New Contact) – If no contact is found, a new one is created, and the meeting is immediately logged against it.

- Engagement includes: meeting title, start/end times, attendee details, and custom question notes.

## Benefits

- Automated CRM Sync – No more manual data entry between Calendly and HubSpot.

- Accurate Contact Management – Ensures meetings are always linked to the right person, creating new contacts when needed.

- Context-Rich Engagements – Logs attendee details and custom question responses for better follow-ups.

- Seamless Sales Tracking – Keeps HubSpot updated with every meeting for pipeline visibility.

- Hands-Free Workflow – Runs automatically whenever a Calendly invitee books a meeting.

## 📊 Basic Information

- **Workflow ID:** 8438
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 162
- **Downloads:** 16
- **Created:** 2025/9/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8438)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **calendlyTrigger** 
- **hubspot** (×4)
- **if** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
