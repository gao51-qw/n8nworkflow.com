# Automate sprint planning with OpenAI, Google Calendar, and Gmail for agile teams

> ### 👤 Who is this for?
This workflow is designed for **Scrum Masters** and **Agile Coaches** who prepare and coordinate **Sprint Planning sessions**, using **Google Calendar**, **Google Sheets**, and **OpenAI**.

### 🧩 What problem is this workflow solving?
It solves the **manual and time-consuming task** of collecting, validating, and preparing backlog items for sprint planning—especially when coordinating with **distributed teams** or **large product backlogs**.

### ⚙️ What this workflow does
Every week, the workflow:

- Detects if a Sprint Planning event is coming up.  
- Retrieves relevant backlog items marked as “Ready for Sprint Planning” or “Active in Sprint.”  
- Checks each user story against the **Definition of Ready (DoR)** using AI.  
- Adds **AI-generated feedback** per story in the backlog.  
- Drafts a personalized **preparation email** for the team and sends it after Scrum Master approval.  
- Optionally, generates **Sprint Goal suggestions** for the Product Owner.

### 🚀 Setup
Connect your **Google Calendar**, **Sheets**, and **Gmail** accounts.  
Then configure variables like **event names**, **sheet names**, and **email addresses** in the “Start Here” node.

### 🛠️ How to customize this workflow to your needs
- Swap **Google Sheets** with Jira or another tool.  
- Adjust **status filters** and **column mappings**.  
- Tweak **AI prompts** for tone, language, or preferred practices.  
- Change **email logic** for different approval flows.

### 🔥 Unique Selling Points (USPs)
- **Validated** by a Scrum Master with 10+ years of experience
- **AI-driven** backlog validation and email drafting.  
- **Weekly automation** with human approval loops.  
- **Clear, structured output** aligned with agile best practices.  
- **Fully customizable** for any Scrum environment.

## 📊 Basic Information

- **Workflow ID:** 4038
- **Complexity:** advanced
- **Node Count:** 52
- **Views:** 963
- **Downloads:** 96
- **Created:** 2025/5/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4038)

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
- **stickyNote** (×10)
- **googleSheets** (×4)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **aggregate** (×3)
- **merge** (×4)
- **errorTrigger** 
- **gmail** (×7)
- **if** 
- **set** 
- **filter** (×2)
- **code** 
- **splitOut** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 52 nodes with 38 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
