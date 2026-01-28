# Handle Gmail reply-based scheduling with Google Calendar and GPT-4o-mini

> Reply Handling (Optional Extension)

This optional workflow handles email replies after availability options have been sent.

It extends the main scheduling flow by enabling two-way, email-based confirmation.

What this extension does

Listens for user replies via Gmail

Normalizes free-text replies into structured data

Detects whether the user confirmed a proposed slot or requested alternatives

Automatically creates a Google Calendar event on confirmation

Sends a confirmation or follow-up email accordingly

Why this matters

Most scheduling automations stop after sending availability.
This extension closes the loop by turning email replies into real actions —
without requiring booking links or manual follow-ups.

Typical reply examples

1 → Confirms the suggested time and creates the calendar event

2 → Requests alternative time slots and continues the scheduling flow

When to use this

Email-first scheduling (no Calendly / booking pages)

High-touch or human-like scheduling flows

Sales calls, interviews, consultations, internal meetings

## 📊 Basic Information

- **Workflow ID:** 12167
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 23
- **Downloads:** 2
- **Created:** 2025/12/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12167)

## 👤 Author

- **Name:** kota
- **Username:** @takasuka

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **webhook** 
- **set** (×6)
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleCalendar** (×3)
- **if** (×3)
- **stickyNote** (×6)
- **gmailTrigger** 
- **gmail** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
