# Automated patient response system with GPT-3.5 and Google Sheets for dental clinics

> *From Leads to Smiles – Automated Patient Engagement______Turn every lead into a booked appointment with AI*
## 💡 Why this workflow?
Dental clinics lose 50%+ of leads due to slow response.

This template ensures instant engagement with AI-powered personalization.

Works for  *dentists, beauty clinics, physiotherapists*, or any appointment-based business.
**Description:**

When a new patient submits a form (e.g., teeth whitening, Invisalign, implants), the workflow:
1. Captures and stores the lead in Google Sheets.
2.Uses an AI Agent to generate a friendly, personalized welcome message.
3. Instantly sends tailored notifications to both the patient and the dentist.

No more generic thank-you emails → engage leads before they go cold! 🚀

**Category:**

- Marketing & Sales

- Customer Engagement

- Healthcare Automation
 ### 
**📖 Step-by-Step Guide (for beginners)**
**Trigger (Google Sheets):**

Every time a new patient submits a Google Form, the lead is automatically captured in Google Sheets.

**AI Agent (OpenAI Chat Model):**

Generates a personalized welcome message 

**Patient Notification (Email):**

Sends a warm, engaging welcome message with appointment details instantly.

**Dentist Notification (Email):**

Alerts the dentist with lead details so they can follow up quickly.

**Execution:**

Just hit Execute Workflow → watch as your clinic never loses another lead.

*👉 Perfect for beginners in AI + n8n automation. You can duplicate this template, connect your Google Sheet + Gmail + OpenAI API key, and start converting leads today.*

Tags: lead generation dentist crm google sheets ai agent chatgpt email automation
![Screenshot 20250828 092943.png](fileId:2269)

## 📊 Basic Information

- **Workflow ID:** 7971
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1248
- **Downloads:** 124
- **Created:** 2025/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7971)

## 👤 Author

- **Name:** Sana Fatima
- **Username:** @iamsanafatimachattha

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **wait** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **gmail** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
