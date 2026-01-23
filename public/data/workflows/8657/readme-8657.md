# Automate HR Q&A sessions with AI question clustering and Google Calendar integration

> This workflow helps HR teams run smoother **monthly Q\&A sessions** with employees.

* **Who’s it for**
  HR teams and managers who want to centralize employee questions, avoid duplicates, and keep meetings focused.

* **How it works**

1. Employees submit questions through a styled form.
2. Questions are stored in a database.
3. HR selects a date range to review collected questions.
4. An AI Agent deduplicates and clusters similar questions, then generates a **meeting script** in Markdown format.
5. The Agent automatically creates a **Google Calendar event** (with a Google Meet link) on the **last Friday of the current month at 16:00–17:00**.
6. The script is returned as a downloadable `.txt` file for HR to guide the session.

* **Requirements**

  * MySQL (or compatible DB) for storing questions
  * Google Calendar credentials
  * OpenAI (or another supported LLM provider)

* **How to customize**

  * Adjust meeting day/time in the `Set` node expressions
  * Change database/table name in MySQL nodes
  * Modify clustering logic in the AI Agent prompt
  * Replace the form styling with your company’s branding

This template ensures **no repeated questions**, keeps HR **better prepared with a structured script**, and **automates meeting scheduling** in just one click.


## 📊 Basic Information

- **Workflow ID:** 8657
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 1919
- **Downloads:** 191
- **Created:** 2025/9/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8657)

## 👤 Author

- **Name:** Gabriel Santos
- **Username:** @gabrielhmsantos

## 🏷️ Categories

- HR
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **googleCalendarTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **convertToFile** 
- **merge** 
- **formTrigger** (×2)
- **mySql** (×2)
- **form** (×2)
- **set** 
- **aggregate** 
- **stickyNote** (×12)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
