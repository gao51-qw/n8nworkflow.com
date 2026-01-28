# Automate patient intake & symptom triage with AI, Cal.com and Google Services

> **🚨 DISCLAIMER (READ FIRST):**

This workflow is **NOT HIPAA-compliant** and **NOT intended for production use**.
It is a **test/demo prototype** built for experimentation, education, and non-clinical evaluation purposes only.

It does **not include encryption**, **does not meet any regulatory standards**, and **must not be used with real patient data or PHI** (Protected Health Information).

The creator is **not liable** for any misuse or damage caused by deploying this workflow in a real-world or clinical environment.

---

🎥 **Watch the Workflow Demo:** [https://youtu.be/1qt3sU2o4_Y?si=oA1CizPaO66_tKnc](https://youtu.be/1qt3sU2o4_Y?si=oA1CizPaO66_tKnc)

**🔧 Workflow Summary:**
This n8n workflow mimics a lightweight AI assistant for healthcare clinics by automatically analyzing patient symptoms and booking appointments. It uses no-code tools and basic AI integration to demonstrate automation potential in medical triage.

---

**🩺 What it does:**

1. **Patient submits a form** (Cal.com or webhook) with name, contact, and symptoms
2. **AI processes the symptoms** (via OpenRouter) and suggests the likely issue
3. **AI assigns a relevant department** like Ortho, Neuro, etc.
4. **Books the appointment** on the correct Google Calendar (department-wise)
5. **Saves the patient info** to a Google Sheet for tracking
6. **Skips duplicate appointments** for the same patient (based on name or contact)

---

**📦 Tools Used:**
• n8n (Cloud or Self-Hosted)
• OpenRouter (GPT-based AI model)
• Cal.com (Booking system)
• Google Calendar
• Google Sheets

---

**⚠️ For a HIPAA-Compliant Version (Future-Ready Notes):**

* Self-host n8n to avoid vendor lock-in or BAA issues
* Run LLMs locally (LLaMA, Mistral) instead of APIs
* Replace Cal.com with a self-hosted calendar/booking tool
* Use end-to-end encryption for PHI transmission
* Store data in encrypted Postgres (with pgcrypto or similar)
* Implement access control and audit logging
* AND MANY MORE.... REFER/CONSULT RESPECTIVE AUTHORITIES FOR MORE INFO

---

**💡 Use Case:**
This demo can help founders, developers, or healthtech explorers prototype AI-assisted clinic systems without writing code — but again, strictly for mock/demo workflows only.

## 📊 Basic Information

- **Workflow ID:** 6406
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 179
- **Downloads:** 17
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6406)

## 👤 Author

- **Name:** iamvaar
- **Username:** @iamvaar

## 🏷️ Categories

- Support Chatbot
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chainLlm** 
- **dateTime** 
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **googleSheets** (×2)
- **code** (×3)
- **calTrigger** 
- **googleCalendar** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
