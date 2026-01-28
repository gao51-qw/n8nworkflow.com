# Add Project Tasks to Google Sheets with GPT-4.1-mini Chat Assistant

> Let your team create, track, and manage project tasks through natural conversation.  
This workflow uses an **AI Project Manager Agent** that chats with users, gathers the task details it needs, and automatically adds them to a **Google Sheet**.

---

## ✅ What this template does
- Lets you **chat naturally** with an AI to add new project tasks  
- Automatically detects if the user wants to *create* or *update* an item (updates coming soon)  
- Collects `Task`, `Description`, and `Status` fields — allows “don’t know” responses  
- Appends new entries directly into your connected **Google Sheets**  
- Provides real-time confirmation when the task is added  

&gt; **Trigger:** n8n Chat Trigger  
&gt; **Integrations:** OpenAI GPT-4.1-mini + Google Sheets (OAuth2)

---

## 🧠 How it works
1. The **Chat Trigger** starts a chat with the user.  
2. The **AI Project Manager Agent** asks guiding questions to gather the task name, description, and status.  
3. When all fields are complete (`all Info = Yes`), the data is passed to the **Google Sheets node**.  
4. The task is automatically added to your project tracker sheet.  
5. The AI confirms completion in chat.

---

## ⚙️ Setup instructions

### 1. Connect OpenAI
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys) → copy your API key.  
2. In n8n, create **New Credentials → OpenAI API** and paste your key.  
3. Ensure your account has active billing under [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview).

### 2. Connect Google Sheets (OAuth2)
1. In **n8n → Credentials → New → Google Sheets (OAuth2)**  
2. Sign in with your Google account and **grant access**.  
3. Select your spreadsheet and tab (e.g., “Tasks”) when prompted.  
   - Example sheet: `https://docs.google.com/spreadsheets/d/1pbK-B-Q9p8fVjxJIsjEVrAfRgqEPCeYw8rZojZPAb84/edit`

### 3. Test your chat
Click **Execute Workflow**, then start chatting:  
&gt; “Add a task for reviewing the project report tomorrow.”  
The agent will ask questions if needed, then add the record to your sheet.

---

## 🧩 Customization ideas
- Add a **Date Added** or **Assigned To** column to the Google Sheet  
- Integrate with **Slack or Outlook** to message assigned users  
- Extend the agent to support task *updates* and *deletes*  
- Replace Google Sheets with **Airtable** or **Notion** if preferred  

---

## 🪄 Requirements
- n8n version ≥ 1.100  
- OpenAI API key  
- Google Sheets account  

---

## 📬 Contact  
Need help customizing this (e.g., adding deadlines, linking to Notion, or Slack notifications)?  

- 📧 **robert@ynteractive.com**  
- 🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
- 🌐 **[ynteractive.com](https://ynteractive.com)**  


## 📊 Basic Information

- **Workflow ID:** 10230
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 9616
- **Downloads:** 961
- **Created:** 2025/10/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10230)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Project Management
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **stickyNote** (×4)
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.chat** (×2)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
