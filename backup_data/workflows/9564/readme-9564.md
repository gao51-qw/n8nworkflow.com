# Prioritize Todoist tasks with OpenRouter AI and send daily summaries to Slack

> ## Title

**Prioritize Todoist tasks and send a daily summary to Slack**

## Who’s it for

Busy professionals, team leads, and freelancers who want a plug-and-play, AI-assisted morning briefing that turns messy task lists into a clear, actionable plan.

## What it does / How it works

At **08:00** every morning, the workflow pulls open tasks from **Todoist**. An **AI agent** scores and ranks them by urgency, importance, dependencies, and effort, then produces a concise plan. You receive the summary in **Slack** (Markdown). Overdue or critical items are highlighted with **warnings**.

## How to set up

1. Connect OAuth for **Todoist** and **Slack**.
2. Select your posting channel in **Send to Slack**.
3. Adjust the time in **Morning Schedule Trigger** (default **08:00**).
4. Run once to verify the parser output and Slack preview, then set the workflow **Active**.

## Requirements

* n8n (cloud or self-hosted)
* Todoist account / Slack workspace
* LLM provider connected in the AI node (**do not** hardcode keys in HTTP nodes)

## How to customize the workflow

* Edit the prompt in **AI Task Analyzer** to tweak prioritization rules.
* Adjust **Format AI Summary** to match your tone and structure.
* Add filters in the Todoist node (e.g., due today).
* (Optional) Log results to Google Sheets or a database for analytics.

## Disclaimer (community node)

This template uses a community **LangChain** node for AI features and is intended for **self-hosted** n8n. Add a workflow image at the top of your submission page for a clearer preview.


## 📊 Basic Information

- **Workflow ID:** 9564
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 116
- **Downloads:** 11
- **Created:** 2025/10/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9564)

## 👤 Author

- **Name:** Toshiya Minami
- **Username:** @minami

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **scheduleTrigger** 
- **todoist** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **set** 
- **slack** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
