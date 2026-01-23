# Weekly OKR alignment report with Gmail, Google Calendar, Notion, and GPT-4.1

> ## How it works

This workflow is your personal **CEO Brain**. Every Saturday night, it automatically collects the past week’s activity across:

- 📩 Gmail: filters out spam, promos, receipts, etc.  
- 📅 Google Calendar: grabs past week and upcoming month  
- 🗒️ Notion Weekly Plan: pulls and analyzes a photo of your weekly plan (e.g., taken from a paper planner/notebook) using GPT-4o  
- 🎯 Notion OKRs: fetches quarterly OKRs and formats them for summary

It sends all the data to GPT-4.1, which generates a smart weekly report — including progress check, misalignments, overdue follow-ups, and next steps — then emails it to you as a **Weekly OKR Report**.

---

## Set up steps

- 🧠 Add your Gmail, Google Calendar, Notion, and OpenAI credentials  
- 📅 The Notion Weekly Plan should have a **date property** and an **image field** that holds a photo of your planner/notebook page  
- 🎯 The Notion OKR database should include **objective**, **key result**, and **status** fields  
- 🔁 Schedule is preset to **every Saturday at 20:30 HK time** (cron `0 30 20 * * 6`). Also set the **workflow timezone in n8n** and, if self-hosting, the **server/container TZ** (e.g., `TZ=Asia/Hong_Kong`) to ensure correct triggering  
- 💬 You can modify the AI prompts inside the LLM nodes for more customized outputs


## 📊 Basic Information

- **Workflow ID:** 8341
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 300
- **Downloads:** 30
- **Created:** 2025/9/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8341)

## 👤 Author

- **Name:** Mark Ma
- **Username:** @mark10667

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **gmail** (×2)
- **set** (×2)
- **googleCalendar** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **httpRequest** 
- **filter** (×2)
- **code** (×5)
- **merge** (×3)
- **scheduleTrigger** 
- **notion** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
