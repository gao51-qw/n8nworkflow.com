# Simple expense tracker with n8n chat, AI agent and Google Sheets

> ## Use Case
It is very convenient to add expenses via simple chat message. This workflow attempts to do exactly this using AI-powered n8n magic!

![20250129 at 17.37.png](fileId:921)
Send message to a chat, something like **"car wash; 59.3 usd; 25 jan 2024"**

And get a response:
**Your expense saved, here is the output of save sub-workflow:{"cost":59.3,"descr":"car wash","date":"2024-01-25","msg":"car wash; 59.3 usd; 25 jan 2024"}**


LLM will smartly parse your message to structured JSON and save the expense as a new row into Google Sheet!



## Installation
### 1. Set up Google Sheets:
Clone this Sheet:
https://docs.google.com/spreadsheets/d/1D0r3tun7LF7Ypb21CmbTKEtn76WE-kaHvBCM5NdgiPU/edit?gid=0#gid=0

(File -&gt; Make a copy)

Choose this sheet into "Save expense into Google Sheets" node.


### 2. Fix sub-workflow dropdown: 
open "Parse msg and save to Sheets" node (which is an n8n sub-workflow executor tool) and make sure the SAME workflow is chosen in the dropdown. it will allow n8n to locate and call "Workflow Input Trigger" properly when needed.


### 3. Activate the workflow to make chat work properly.
Sent message to chat, something like "car wash; 59.3 usd; 25 jan 2024"

you should get a response:
Your expense saved, here is the output of save sub-workflow:{"cost":59.3,"descr":"car wash","date":"2024-01-25","msg":"car wash; 59.3 usd; 25 jan 2024"}

and new row in Google sheets should be inserted!


## 📊 Basic Information

- **Workflow ID:** 2819
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 15327
- **Downloads:** 1532
- **Created:** 2025/1/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2819)

## 👤 Author

- **Name:** Anthony
- **Username:** @scrapeninja

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
