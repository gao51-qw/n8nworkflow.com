# AI chatbot call center: Taxi booking support (production-ready, part 7)

> ### Workflow Name: 🫶 Taxi Booking Support

Template was created in n8n v1.90.2

### Skill Level: Mid

### Categories: n8n, Chatbot

### Stacks

- Schedule Trigger node
- Postgres node
- AI Agent node
- Google Calendar node
- Execute Sub-workflow
- If node, Switch node, Code node, Edit Fields (Set)

### Prerequisite

- Sub-workflow: **Demo Call Back** (or your own node)

# Production Features

- **Scaling Design** for n8n **Queue mode** in production environment
- Customize **Expired Booking Actions** example
- **Multi-Language** Design

# What this workflow does?

This is a n8n **Taxi Booking Support,** the background node to process the job at scheduled. It is scheduled to check the database for outstanding booking and handle the after sales process. In this particular case, it will check for OPEN booking over 10 minutes, then update the booking status from OPEN to CANCELLED, delete the Calendar event and send a reply to the user.

# **How it works**

- The **Schedule Trigger** node is scheduled to run every 5 minutes.
- It will check the database for OPEN or HOLD booking.
- For OPEN booking
    - update the booking status to CANCELLED
    - delete the Calendar event
    - send a reply to the user
- Optional: The AI Agent is used to create the reply message to the user in Multi-language based on the language set in the booking.

# **Set up instructions**

1. Pull and Set up the required SQL from our [Github repository](https://github.com/ChatPayLabs/n8n-chatbot-core).
2. Create you **Postgres credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
3. Select your Credentials in **Open Hold Booking** and **Set Cancel Booking.**
4. Create your **Google Calendar credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=n8n-nodes-base.googleCalendar) for more information.
5. Create a Google Calendar, e.g. DEMO
6. Select your Credentials in **Delete Event**, and select the above Calendar
7. **Remember to activate this workflow for schedule to run.**

# How to adjust it to your needs

1. There should be more status for the booking.
2. The current action only check for OPEN and HOLD booking, you can do more based on your needs.
3. You can replace the sub-workflow trigger **Call Back** to another flow as needs.

## 📊 Basic Information

- **Workflow ID:** 4051
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 729
- **Downloads:** 72
- **Created:** 2025/5/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4051)

## 👤 Author

- **Name:** ChatPayLabs
- **Username:** @chatpaylabs

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatXAiGrok** 
- **switch** 
- **postgres** (×2)
- **scheduleTrigger** 
- **set** 
- **executeWorkflow** 
- **if** (×2)
- **stickyNote** (×4)
- **googleCalendar** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
