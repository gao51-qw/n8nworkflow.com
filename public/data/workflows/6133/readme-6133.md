# Automated daily briefing with Todoist, Google Calendar & GPT-4o via Gmail

> Put your productivity on autopilot with this workflow.

## How it works

This workflow generates a beautifully formatted **daily briefing email** every morning at 6:00 AM by combining your **Todoist tasks** and **Google Calendar events**, summarizing them using **GPT-4o**, and sending them as a clean **HTML email**.

It includes:
- Auto-fetching today's tasks and events
- Formatting them for context
- Generating a motivational summary with GPT-4o
- Converting the output into styled HTML
- Emailing it to you daily

---

## Set up steps

1. Connect your **Google Calendar** and **Todoist** accounts
2. Set your **project ID** in the Todoist node
3. Customize the OpenAI prompt or email template if needed
4. Enable the **Schedule Trigger** to automate daily runs

All configuration logic and summaries are explained in **sticky notes** inside the workflow.

No external tools required. Just plug, personalize, and automate your day!


## 📊 Basic Information

- **Workflow ID:** 6133
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 1764
- **Downloads:** 176
- **Created:** 2025/7/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6133)

## 👤 Author

- **Name:** AK Pasnoor
- **Username:** @ak-pasnoor

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.openAi** 
- **gmail** 
- **todoist** 
- **googleCalendar** 
- **code** (×2)
- **merge** 
- **scheduleTrigger** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
