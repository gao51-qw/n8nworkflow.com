# Automate call scheduling with Voice AI receptionist using Vapi, Google Calendar & Airtable

> ## Who is this template for?

This template is ideal for small businesses, agencies, and solo professionals who want to automate appointment scheduling and caller follow-up through a voice-based AI receptionist. If you’re using tools like Google Calendar, Airtable, and Vapi (Twilio), this setup is for you.



## What problem does this workflow solve?

Manual call handling, appointment booking, and email coordination can be time-consuming and prone to errors. This workflow solves that by automating the receptionist role: answering calls, checking calendar availability, managing appointments, and storing call summaries—all without human intervention.


## What this workflow does

This Agent Receptionist manages inbound voice calls and scheduling tasks using Vapi and Google Calendar. It checks availability, books or updates calendar events, sends email confirmations, and logs call details into Airtable. The workflow includes built-in logic for slot management, email triggers, and storing call transcripts. 

## Setup Instructions

Duplicate Airtable Base: Use this Airtable base template[BASE LINK](.) 

Import Workflow: Load provided JSON into your n8n instance.

Credentials: Connect your Google Calendar and Airtable credentials in n8n.

Activate Workflow: Enable workflow to get live webhook URLs.

Vapi Configuration:

Paste provided system prompt into Vapi Assistant. 

Link the appropriate webhook URLs from n8n (GetSlots, BookSlots, UpdateSlots, CancelSlots, and end-of-call report).



Disclaimer

Optimized for cloud-hosted n8n instances. Self-hosted users should verify webhook and credential setups.

## 📊 Basic Information

- **Workflow ID:** 3427
- **Complexity:** advanced
- **Node Count:** 92
- **Views:** 42323
- **Downloads:** 4232
- **Created:** 2025/4/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3427)

## 👤 Author

- **Name:** SuperAgent
- **Username:** @customaistudio

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **set** (×17)
- **itemLists** (×2)
- **code** (×7)
- **if** (×5)
- **respondToWebhook** (×8)
- **stickyNote** (×37)
- **webhook** (×5)
- **googleCalendar** (×5)
- **airtable** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 92 nodes with 46 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
