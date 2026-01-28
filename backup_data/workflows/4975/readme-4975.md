# Automated HR Service System with WhatsApp, GPT-4 Classification & Google Workspace

> Who is this for?
This workflow is ideal for HR teams, startups, and enterprises that want to handle employee interactions through WhatsApp and automate responses using LLM (OpenAI) and intelligent routing.

What problem is this workflow solving?
Managing WhatsApp messages manually can be time-consuming and error-prone. This workflow solves that by:

Auto-classifying messages using LLM

Routing them to the right AI-powered agent

Automating leave approvals, attendance, HR FAQs, complaints, and candidate shortlisting

Delivering final responses interactively via WhatsApp

What this workflow does
WhatsApp Trigger captures incoming messages

LLM Classification analyzes message intent and outputs category (1–5)

Switch Node routes the message to the correct agent:

1 → Leave Agent

2 → HR FAQ Chatbot

3 → Attendance Agent

4 → Complaint/Request Agent

5 → Shortlisting Agent

Each agent performs specific tasks using tools like:

Google Sheets (fetch dept head emails, JD/applicants, logs)

Google Calendar (schedule meetings)

Vector Search (for policy embeddings)

OpenAI (transcription, classification, chatbot)

Final WhatsApp Response node sends updates and interactive options to the user

Setup
Connect WhatsApp API (e.g., via Twilio or WhatsApp Business Cloud API)

Configure OpenAI credentials

Set up Google Sheets with:

Employee data

JD and applicants info

Policy documents (for embedding)

Prepare Google Calendar access

Create a vector store with embedded company policy docs

How to customize this workflow to your needs
Update the LLM prompt to suit your company’s categories or expand to more intents

Replace sample sheets with your organization’s actual data

Train your own policy embeddings if needed

Add/modify agents (e.g., Payroll Bot, IT Support Bot) by cloning an existing pattern

Adjust the Switch Node if you add more classifications

With this modular and intelligent setup, you can turn your WhatsApp into a smart HR & operations assistant powered by AI, accessible 24/7.

## 📊 Basic Information

- **Workflow ID:** 4975
- **Complexity:** advanced
- **Node Count:** 65
- **Views:** 15660
- **Downloads:** 1566
- **Created:** 2025/6/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4975)

## 👤 Author

- **Name:** Tanay Agarwal
- **Username:** @tnayagarwal

## 🏷️ Categories

- HR
- AI Chatbot

## 🔗 Nodes Used

- **whatsAppTrigger** 
- **switch** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×8)
- **set** (×4)
- **httpRequest** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **gmailTool** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **googleCalendarTool** 
- **googleSheets** 
- **googleSheetsTool** (×9)
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **if** 
- **merge** (×3)
- **stickyNote** (×8)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.agent** (×6)
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **whatsApp** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 65 nodes with 57 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
