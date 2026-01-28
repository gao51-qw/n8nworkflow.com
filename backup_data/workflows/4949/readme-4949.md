# Automate WhatsApp booking system with GPT-4 Assistant, Cal.com and SMS reminders

> 
![Workflow Screenshot](https://www.dr-firas.com/Automate-WhatsApp.png)

# AI-powered WhatsApp booking system with instant SMS confirmations

### Who is this for?

This workflow is designed for solo entrepreneurs, consultants, coaches, clinics, or any business that handles client appointments and wants to automate the entire scheduling experience via WhatsApp — without the need for live agents.

### What problem is this workflow solving?

Responding to inbound messages, collecting booking details, suggesting available times, and sending reminders can be a huge time drain. This workflow eliminates manual handling by:
- Automating WhatsApp conversations with an AI assistant
- Booking appointments directly into Cal.com
- Sending timely SMS reminders before appointments

It ensures you never miss a lead or a follow-up — even while you sleep.

### What this workflow does

From a single WhatsApp message, the workflow:

1. Triggers via a WhatsApp webhook
2. Uses GPT-4 to handle conversation flow and qualify the prospect
3. Collects name, email, selected service
4. Calls Cal.com API to fetch available time slots
5. Books the appointment and stores it in Google Sheets
6. Sends a confirmation message via WhatsApp
7. Periodically scans for upcoming appointments
8. Sends SMS reminders to clients 2 hours before their session

### Setup

1. Connect your **Webhook** node to a WhatsApp API (e.g., 360dialog, Twilio, or Ultramsg)
2. Add your **OpenAI API key** for the GPT-4 nodes
3. Configure your **Cal.com API key** and set your calendar ID
4. Link your **Google Sheets** with fields like: `name`, `email`, `date`, `time`, `status`, `reminder_sent`
5. Connect your **SMS service** (e.g., sms77) with API credentials
6. Adjust the schedule in the reminder node as needed

### How to customize this workflow to your needs

- **Change the language or tone of the AI assistant** by editing the system prompt in the GPT node
- **Filter available time slots** by service, team member, or duration
- **Modify the reminder timing** (e.g., 1 hour before, 24h before, etc.)
- **Add conditional logic** to route users to different booking flows based on their responses
- **Integrate additional CRMs** or notification channels like email or Slack

📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/WhatsApp-II-20f3d6550fd980b9b2e6fe5e1a84051b?source=copy_link)

---

### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https:/https://www.youtube.com/@DRFIRASS)

## 📊 Basic Information

- **Workflow ID:** 4949
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 13857
- **Downloads:** 1385
- **Created:** 2025/6/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4949)

## 👤 Author

- **Name:** Dr. Firas
- **Username:** @drfiras

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×3)
- **webhook** 
- **switch** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleSheetsTool** (×2)
- **@n8n/n8n-nodes-langchain.toolHttpRequest** 
- **respondToWebhook** (×3)
- **googleSheets** (×4)
- **code** (×3)
- **httpRequest** 
- **scheduleTrigger** 
- **sms77** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
