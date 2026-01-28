# Dental clinic appointment & admin system with Supabase, phone integration & AI

> ## Dental Clinic Automation: Scheduling, Availability & Patient Lookup
This workflow automates dental appointment management through a phone-based assistant. It listens for requests like booking, rescheduling, canceling, checking insurance, looking up appointments, and finding available time slots. Each request is processed through a Switch node and then routed to your Supabase database for action.

## How it works
Once a request is received, the workflow uses the patient’s phone number to identify them. Then, it:
- Booking: Checks for available time, creates or retrieves the patient record, and stores the appointment.
- Rescheduling: Confirms the new date, avoids double-booking, and updates the record.
- Canceling: Removes the appointment and sends a confirmation.
- Insurance: Looks up the member ID and provides a status (accepted or not).
- Availability: Finds the doctor’s existing appointments and generates available 60-minute slots.
- Appointment & doctor lists: Retrieves and presents clean, structured information for the assistant.
Each action ends with a webhook response that the phone system reads back to the patient.

## Setup steps
1. Add your Supabase credentials to the Supabase nodes.
2. Connect your phone/voice system to the webhook URL.
3. Ensure Supabase table and column names match the workflow.
4. Test all actions (booking, rescheduling, canceling, etc.) before going live.

## Customization tips (optional)
You can update working hours, appointment durations, or add new services by modifying the availability logic or Switch node routing.

## 📊 Basic Information

- **Workflow ID:** 11463
- **Complexity:** advanced
- **Node Count:** 49
- **Views:** 482
- **Downloads:** 48
- **Created:** 2025/12/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11463)

## 👤 Author

- **Name:** Optimum Office Solution
- **Username:** @isight

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **switch** 
- **respondToWebhook** (×10)
- **stickyNote** (×11)
- **supabase** (×15)
- **if** (×4)
- **summarize** (×2)
- **aggregate** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **supabaseTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 49 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
