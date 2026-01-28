# Automated lead follow-up with Follow Up Boss, Gmail, Twilio & WhatsApp messaging

> This workflow automates your entire lead follow-up process across email, SMS, and WhatsApp.

It starts on a schedule and pulls your latest leads from FollowUpBoss (FUB), checking when the workflow last ran. Each new contact is automatically validated — phone numbers and emails are cleaned, filtered, and checked for duplicates before sending any message.

Once validated, the system intelligently decides how to reach each lead:

💬 Email + SMS if all data looks good

📧 Email only if phone is invalid

📱 SMS/WhatsApp only if email is missing

Each message is personalized using data from the lead record, and everything is tracked back in your database for future reporting.

This template helps agents, marketing teams, and CRM users run consistent follow-ups without missing a single contact. Whether you manage 10 or 10 000 leads, this flow scales effortlessly.

Tools used: FollowUpBoss, Gmail, Twilio/WhatsApp, n8n

(Tip: Replace your API keys and Gmail credentials before running.)![Captura de pantalla 20251015 202825.png](fileId:2967)

## 📊 Basic Information

- **Workflow ID:** 9738
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 969
- **Downloads:** 96
- **Created:** 2025/10/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9738)

## 👤 Author

- **Name:** Fabian Perez
- **Username:** @fabianprz

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **scheduleTrigger** 
- **code** (×2)
- **httpRequest** 
- **if** (×2)
- **filter** 
- **splitOut** 
- **gmail** (×2)
- **twilio** (×2)
- **wait** 
- **splitInBatches** (×3)
- **set** (×3)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
