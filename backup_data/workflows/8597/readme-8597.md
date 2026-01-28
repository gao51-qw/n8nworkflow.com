# Build your first AI agent with ChatGPT-5

> ## Build Your First AI Agent with ChatGPT-5 
![Workflow Screenshot](https://www.dr-firas.com/build-agent-ai.png)
### Who is this for?  
This workflow is designed for beginners and professionals who want to build their first AI-powered assistant with n8n. It’s perfect for anyone managing online trainings, consultations, or services that require both a knowledge base and appointment scheduling.  

### What problem is this workflow solving?  
Manually handling client questions, checking your availability, and confirming bookings can be time-consuming and error-prone. This workflow automates the process, ensuring quick, accurate answers and seamless scheduling directly through chat.  

### What this workflow does  
- Answers user questions using your knowledge base stored in Google Sheets.  
- Checks availability in Google Calendar and proposes alternative time slots if needed.  
- Books 1-hour appointments in Paris time only after client confirmation.  
- Sends a professional confirmation email with all appointment details.  

### Setup  
1. Import this workflow into your n8n instance.  
2. Connect your Google Sheets, Gmail, and Google Calendar credentials.  
3. Add your knowledge base into Google Sheets (questions, answers, policies, packs, etc.).  
4. Test the workflow using the **Connected Chat Trigger** node to start conversations with the AI Agent.  

### How to customize this workflow to your needs  
- Update the Google Sheets database with your own training packs, services, or company FAQs.  
- Adjust the email template to reflect your branding and communication style.  
- Modify the appointment duration if you need sessions longer or shorter than 1 hour.  
- Add extra nodes (e.g., CRM integration) to capture leads or sync appointments with external systems.  
---

📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Build-Your-First-AI-Agent-with-ChatGPT-5-By-Dr-Firas-26f3d6550fd9801eb00dc0c578fc5f2c?source=copy_link)

---

### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https:/https://www.youtube.com/@DRFIRASS)

## 📊 Basic Information

- **Workflow ID:** 8597
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 12711
- **Downloads:** 1271
- **Created:** 2025/9/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8597)

## 👤 Author

- **Name:** Dr. Firas
- **Username:** @drfiras

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleSheetsTool** 
- **googleCalendarTool** (×2)
- **gmailTool** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
