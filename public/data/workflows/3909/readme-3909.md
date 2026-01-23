# Automate agile refinement prep with Gmail, OpenAI & Google Sheets

> ### 👤 Who is this for?  
This workflow is designed for **Scrum Masters**, **Agile Coaches**, and **Product Owners** who want to automate backlog refinement preparation using **Google Sheets**, **Gmail**, and **OpenAI**. It’s ideal for teams seeking consistent, high-quality refinement sessions with minimal manual effort.

### 🧩 What problem is this workflow solving?  
Many Agile teams struggle with unprepared refinement sessions, unclear user stories, and inconsistent feedback. This workflow solves that by automating the selection, validation, and communication process—saving time while improving backlog quality and team alignment.

### ⚙️ What this workflow does  
The workflow checks the Scrum Master’s **Google Calendar** for an upcoming refinement event. It then pulls potential user stories from a **Google Sheets** backlog, filters them by status, and validates them using **OpenAI agents** for Scrum, business, and technical feedback. Finally, it compiles everything into a structured **HTML email**, either creating a draft or sending it upon approval.

### 🚀 Setup  
- Use consistent event naming in Google Calendar  
- Configure environment variables for your project (e.g., sheet names, statuses)  
- Connect your own backlog and Definition of Ready  
- Customize the AI prompts and email layout

### 🛠️ How to customize this workflow to your needs  
- Replace Google Sheets with Jira or Airtable  
- Switch Gmail to Outlook, SMTP, or Mailgun  
- Extend error handling or approval logic  
- Tailor the email tone and AI prompts to match your team

### 🔥 Unique Selling Points (USPs)
- AI-Powered Multi-Perspective Feedback
- Automated Definition of Ready (DoR) Checks
- Calendar-Aware Triggering
- Fully Formatted Gmail Emails, With Approval Flow
- Plug-and-Play Customizability



## 📊 Basic Information

- **Workflow ID:** 3909
- **Complexity:** advanced
- **Node Count:** 51
- **Views:** 351
- **Downloads:** 35
- **Created:** 2025/5/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3909)

## 👤 Author

- **Name:** Willemijn
- **Username:** @willemijn

## 🏷️ Categories

- Project Management
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **scheduleTrigger** 
- **noOp** (×2)
- **googleCalendar** 
- **stickyNote** (×9)
- **filter** 
- **googleSheets** (×6)
- **splitInBatches** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×5)
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×5)
- **merge** (×5)
- **aggregate** (×2)
- **errorTrigger** 
- **gmail** (×5)
- **if** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 51 nodes with 39 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
