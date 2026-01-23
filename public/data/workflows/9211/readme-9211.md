# AI secretary for scheduling with WhatsApp and Telegram

> # 🏥 AI secretary for scheduling with WhatsApp and Telegram

&gt; ⚠️ **Community Disclaimer**  
&gt; This workflow is community-maintained and self-hosted.  
&gt; It is **not officially affiliated with or supported by n8n GmbH, OpenAI, or Google**.  
&gt; Users are responsible for their own configuration, security, and data compliance (e.g., HIPAA, LGPD, GDPR).  
&gt; Always secure API keys and ensure compliance with your local privacy regulations.

---

## 🧠 Description

This template deploys an **AI-powered virtual medical secretary** that automates appointment **scheduling, rescheduling, and cancellations** for clinics and healthcare professionals.  
It seamlessly integrates **OpenAI** for natural language understanding, **Google Calendar** for real-time booking, and **Evolution API (WhatsApp)** or **Telegram** for patient communication.

Patients can chat naturally via WhatsApp or Telegram, receiving **empathetic, professional, and human-like responses** — while your calendar stays automatically synchronized in real time.

![image.png](fileId:2906)

---

## 💡 What Problem Does This Solve?

Managing appointments manually is **time-consuming** and **error-prone**, often requiring staff to handle repetitive tasks like checking availability, confirming times, or rescheduling.  
Traditional systems lack conversational capabilities, forcing patients to call or text staff directly.

This template solves that by creating a **conversational AI assistant** that interacts with patients through familiar messaging channels, reducing administrative workload and ensuring accurate real-time scheduling through Google Calendar.

---

## ⚙️ Key Features

- 📅 **Google Calendar Integration** — Real-time synchronization of consultations and exams  
- 🤖 **AI Assistant Powered by OpenAI** — Understands patient intent and replies naturally  
- 💬 **Multi-Channel Support** — Works with **WhatsApp (via Evolution API)** and **Telegram**  
- 🔄 **Automated Workflow** — Handles booking, rescheduling, and cancellations  
- 🏥 **Healthcare-Focused Design** — Tailored for clinics, doctors, and medical secretaries  
- ✅ **Customizable Responses** — Modify prompts, message flows, and confirmation texts  
- ⏰ **Reminders & Follow-ups** — Reduce no-shows with automated notifications  

---

## 🧩 Setup Instructions (Step-by-Step)

1. **Obtain Required Credentials:**
   - OpenAI API Key  
   - Google Calendar API Credentials (OAuth or Service Account)  
   - Evolution API Token (for WhatsApp)  
   - Telegram Bot Token (if using Telegram)

2. **Configure n8n Environment:**
   - Add your credentials under *Settings → Credentials*.  
   - Ensure your n8n instance has internet access to the APIs.

3. **Configure Node “Variables Config” & Update Nodes:**
   - Set **nm_Clinic** → Name of the clinic  
   - Set **nm_Agent** → Name of the AI agent  
   - Set **ds_Address_Clinic** → Address of the clinic  
   - Set **nm_Health_Plan** → Name of the health insurance provider  
   - Set **nm_Evolution_Instance** → Name of your Evolution API instance  
   - Set **nm_City_Clinic** → City where the clinic is located  

![image.png](fileId:2905)

4. **Customize the Conversation Flow:**
   - Edit OpenAI prompt nodes to match your clinic’s tone of voice.  
   - Update Google Calendar event templates with your preferred titles and descriptions.

5. **Deploy and Test:**
   - Test both WhatsApp and Telegram channels.  
   - Verify that appointments appear correctly in Google Calendar.  
   - Review conversation logs to fine-tune the responses.


---

## 🚀 Suggested Use Cases

Ideal for:
- Clinics and medical offices wanting 24/7 automated appointment management  
- Healthcare professionals reducing manual scheduling and follow-ups  
- Multi-channel (WhatsApp + Telegram) patient interaction  
- Reducing no-shows with reminders and confirmations  
- Clinics seeking to modernize patient communication and optimize staff time  

This assistant ensures every patient request is handled naturally — while **Google Calendar remains the single source of truth** for scheduling.


## 📊 Basic Information

- **Workflow ID:** 9211
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 288
- **Downloads:** 28
- **Created:** 2025/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9211)

## 👤 Author

- **Name:** Thiago Vazzoler Loureiro
- **Username:** @thiagovazzoler

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.agent** 
- **redis** (×3)
- **code** (×3)
- **set** (×6)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleCalendarTool** (×3)
- **switch** (×3)
- **splitInBatches** (×2)
- **n8n-nodes-evolution-api.evolutionApi** 
- **telegramTrigger** 
- **telegram** 
- **dateTime** 
- **wait** 
- **splitOut** 
- **webhook** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
