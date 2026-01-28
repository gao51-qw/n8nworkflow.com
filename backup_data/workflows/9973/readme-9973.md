# Generate AI-powered roadmaps for new leads with GPT-5 and email automation

> ## How it works  
This workflow automates the delivery of personalized, AI-generated reports or roadmaps for new leads.  
When someone submits their information through a form, the workflow:  
1. Captures and stores the lead data.  
2. Uses an AI model to generate a customized report or roadmap.  
3. Formats the output into a professional, email-ready HTML document.  
4. Sends the report automatically to the lead via email.  
5. Optionally sends internal notifications (e.g., via chat or email) for tracking and follow-up.  

The process eliminates manual work and ensures every lead receives instant, high-quality output tailored to their input.

---

## Setup steps  
1. **Webhook** – Connect your form or website to the webhook endpoint to receive lead data.  
2. **Data Table** – Create or link a table to store incoming leads and track delivery status.  
3. **AI Configuration** – Add your OpenAI (or compatible) API credentials and customize prompts for your desired output.  
4. **Email Setup** – Configure SMTP credentials and define sender/recipient addresses for report delivery.  
5. **Notifications** – Optionally connect a chat or messaging service (e.g., Telegram) for internal alerts.  
6. **Activation** – Test the workflow, confirm the data flow and email delivery, then activate it for live use.  

---

This workflow transforms manual lead engagement into a fully automated, AI-driven experience that delivers instant, personalized value to every new contact.

## 📊 Basic Information

- **Workflow ID:** 9973
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 265
- **Downloads:** 26
- **Created:** 2025/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9973)

## 👤 Author

- **Name:** Christian Lutz
- **Username:** @christianlutz

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **telegram** 
- **emailSend** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **dataTable** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
