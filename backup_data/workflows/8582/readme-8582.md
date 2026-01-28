# Personal assistant bot with multi-agent system using Telegram & Google Gemini

> # How It Works 

- **Telegram Trigger** receives incoming messages (text, voice, photo, document).  
- **Switch** routes by message type to appropriate processors:  
  - **Text** → forwarded as-is.  
  - **Voice** → downloaded and sent to *Transcribe a recording*.  
  - **Photo** → downloaded, converted to base64, then sent to *Analyze image*.  
  - **Document** → routed to document handler.  
- **Merge** collects the processed input and passes a unified prompt to **Manager Agent**.  
- **Manager Agent (LM: Google Gemini)** orchestrates specialized agents/tools:  
  - `memory_base` (Airtable) → saving & retrieving personal/company memory  
  - `todo_and_task_manager` (Todoist / Google Sheets) → tasks  
  - `email_agent` (Gmail) → composing/sending emails  
  - `calendar_agent` (Google Calendar) → scheduling  
  - `research_agent` (SerpAPI / Wikipedia / Wolfram) → web research  
  - `project_management` (Google Sheets) → project updates  
- **Manager Agent** updates memory windows and sends the final reply back to Telegram.  

---

# Setup Steps

1. Create and configure **Telegram bot**; set bot token/webhook in Telegram Trigger and Telegram nodes. Update `chatId` placeholders.  
2. Add **Google Gemini (PaLM)** credentials in the Gemini model nodes.  
3. Configure **Airtable knowledge-base**: set base ID & table IDs used by `memory_base` nodes.  
4. Connect **Google APIs**: Sheets, Calendar, Gmail credentials and set document/sheet IDs.  
5. Configure **Todoist, SerpAPI, WolframAlpha** credentials and any other tool API keys.  
6. Verify **Window Buffer Memory** `sessionKey` values (match user sessions).  
7. Check **schedule triggers** (cron expressions) and adjust times/timezone.  
8. Run quick tests: send text, voice, image, and confirm replies and memory writes.  

---

# Estimated Setup Time

- **30–60 minutes** → if credentials & IDs are ready.  
- **2–4 hours** → full setup (API keys, spreadsheets, Airtable, detailed permissions).  
- **4–8 hours** → complex deployment (team permissions, multiple calendars, advanced tool tuning, production testing).  


## 📊 Basic Information

- **Workflow ID:** 8582
- **Complexity:** advanced
- **Node Count:** 85
- **Views:** 2206
- **Downloads:** 220
- **Created:** 2025/9/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8582)

## 👤 Author

- **Name:** Akil A
- **Username:** @akillabs

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×4)
- **telegramTrigger** 
- **telegram** (×3)
- **merge** 
- **set** (×5)
- **switch** 
- **@n8n/n8n-nodes-langchain.agent** 
- **scheduleTrigger** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×7)
- **@n8n/n8n-nodes-langchain.googleGemini** (×2)
- **@n8n/n8n-nodes-langchain.agentTool** (×6)
- **airtableTool** (×11)
- **stickyNote** (×6)
- **todoistTool** (×8)
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **@n8n/n8n-nodes-langchain.toolWikipedia** 
- **@n8n/n8n-nodes-langchain.toolWolframAlpha** 
- **gmailTool** (×7)
- **googleSheetsTool** (×9)
- **googleCalendarTool** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 85 nodes with 78 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
