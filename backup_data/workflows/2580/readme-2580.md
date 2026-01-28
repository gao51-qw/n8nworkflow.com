# Qualifying appointment requests with AI & n8n forms

> This n8n template builds upon a simple appointment request form design which uses AI to qualify if the incoming enquiry is suitable and/or time-worthy of an appointment.

This demonstrates a lighter approach to using AI in your templates but handles a technically difficult problem - contextual understanding! This example can be used in a variety of contexts where figuring out what is and isn't relevant can save a lot of time for your organisation.

## How it works
* We start with a form trigger which asks for the purpose of the appointment.
* Instantly, we can qualify this by using a text classifier node which uses AI's contextual understanding to ensure the appointment is worthwhile. If not, an alternative is suggested instead.
* Multi-page forms are then used to set the terms of the appointment and ask the user for a desired date and time.
* An acknowledgement is sent to the user while an approval by email process is triggered in the background.
* In a subworkflow, we use Gmail with the wait for approval operation to send an approval form to the admin user who can either confirm or decline the appointment request.
* When approved, a Google Calendar event is created. When declined, the user is notified  via email that the appointment request was declined.

## How to use
* Modify the enquiry classifier to determine which contexts are relevant to you.
* Configure the wait for approval node to send to an email address which is accessible to all appropriate team members.

## Requirements
* OpenAI for LLM
* Gmail for Email
* Google Calendar for Appointments

## Customising this workflow
* Not using Google Mail or Calendar? Feel free to swap this with other services.
* The wait for approval step is optional. Remove if you wish to handle appointment request resolution in another way.

## 📊 Basic Information

- **Workflow ID:** 2580
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 16624
- **Downloads:** 1662
- **Created:** 2024/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2580)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Lead Nurturing
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **form** (×5)
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **if** (×2)
- **gmail** (×3)
- **googleCalendar** 
- **stickyNote** (×6)
- **executeWorkflow** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.textClassifier** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
