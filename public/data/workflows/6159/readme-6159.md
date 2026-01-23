# Sync Cal.com meeting bookings to Notion with contact management

> This workflow is especially suitable for founders and operators offering services to their clients and regularly scheduling sales or project update meetings.
## How it works
When a booking is created, rescheduled, or canceled in cal.com, this workflow syncs the meeting and contact data into Notion.

**When a new booking is scheduled:**

1. Creates a meeting in the dedicated Notion database. Here we can customize all the information to include on the meeting page (e.g., mapping the answers to custom questions).

2. Finds the Contact(s) in the dedicated Notion database (based on the email). If the Contact(s) exists, it links the contact(s) to the newly created meeting. If the Contact(s) doesn’t exist, it creates the contact(s) and links them to the newly created meeting.

**When a booking is rescheduled:**

1. The automation finds the event in Notion (based on the “cal id” property)

2. It updates the event date and time in Notion

**When a booking is cancelled:**

The automation deletes the event in Notion (i.e., it archives the page, which remains available in the Trash for 30 days)

## Requirements
A Cal account and [API key](https://app.cal.com/settings/developer/api-keys).

A Notion account and connection with access to all the databases involved (Meetings, Contacts). Find all your connections, manage their access, or create a new connection on your [Notion Integrations page](https://www.notion.so/profile/integrations).

A Meetings and Contacts database in Notion, both accessible by the Integration (see step 2 above). The database names don't matter. You will input your database IDs in the workflow. Find a Notion database ID in the URL between the slash characters.

## Notion database column specifications
In the *Meetings* database, these are required properties:
1. Event time (date)
2. cal id (text)
3. Contacts (relation)
4. Name

In the *Contacts* database, these are required properties:
1. Name
2. Email
3. Meetings (relation)
---
[Read the essay and watch the video](https://www.simonesmerilli.com/business/cal-notion-automation) for a detailed walkthrough.

## 📊 Basic Information

- **Workflow ID:** 6159
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 340
- **Downloads:** 34
- **Created:** 2025/7/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6159)

## 👤 Author

- **Name:** Simone Smerilli
- **Username:** @simo

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **calTrigger** 
- **switch** 
- **notion** (×7)
- **if** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
