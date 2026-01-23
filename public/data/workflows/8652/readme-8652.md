# Extract meeting tasks from transcripts with AI and sync to Trello

> ## Who’s it for
Teams and project managers who want to turn meeting transcripts into actionable Trello tasks automatically, without worrying about duplicate cards.

## What it does
This workflow receives a transcript file in `.txt` format and processes it with AI to extract clear, concise tasks. Each task includes a short title, a description, an assignee (if mentioned), and a deadline (if available).  
The workflow then checks Trello for duplicates across **all lists**, comparing both card titles (`name`) and descriptions (`desc`). If a matching card already exists, the workflow returns the existing Trello card ID. If not, it creates a new card in the predefined default list.  
Finally, the workflow generates a **user-friendly summary**: how many tasks were found, how many already existed, how many new cards were created, and how many tasks had no assignee or deadline.

## Requirements
- A Trello account with API credentials configured in n8n (no hardcoded keys).
- An OpenAI (or compatible) LLM account connected in n8n.

## How to customize
- Adjust similarity thresholds for title/description matching in the Trello Sub-Agent.
- Modify the summary text to always return in your preferred language.
- Extend the Trello card creation step with labels, members, or due dates.


## 📊 Basic Information

- **Workflow ID:** 8652
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 309
- **Downloads:** 30
- **Created:** 2025/9/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8652)

## 👤 Author

- **Name:** Gabriel Santos
- **Username:** @gabrielhmsantos

## 🏷️ Categories

- Project Management
- AI Summarization

## 🔗 Nodes Used

- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.agentTool** 
- **trelloTool** (×3)
- **form** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
