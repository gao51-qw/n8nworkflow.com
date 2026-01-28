# Summarise Slack channel activity for weekly reports with AI

> ### This n8n template lets you summarize team member activity on Slack for the past week and generates a report.

For remote teams, chat is a crucial communication tool to ensure work gets done but with so many conversations happening at once and in multiple threads, ideas, information and decisions usually live in the moment and get lost just as quickly - and all together forgotten by the weekend!

Using this template, this doesn't have to be the case. Have AI crawl through last week's activity, summarize all threads and generate a casual and snappy report to bring the team back into focus for the current week. A project manager's dream!

### How it works
* A scheduled trigger is set to run every Monday at 6am to gather all team channel messages within the last week.
* Each message thread are grouped by user and data mined for replies.
* Combined, an AI analyses the raw messages to pull out interesting observations and highlights.
* The summarized threads of the user are then combined together and passed to another AI agent to generate a higher level overview of their week. These are referred to as the individual reports.
* Next, all individual reports are summarized together into a team weekly report. This allows understanding of group and similar activities.
* Finally, the team weekly report is posted back to the channel. The timing is important as it should be the first message of the week and ready for the team to glance over coffee.

### How to use
* Ideally works best per project and where most of the comms happens on a single channel. Avoid combining channels and instead duplicate this workflow for more channels.
* You may need to filter for specific team members if you want specific team updates.
* Customise the report to suit your organisation, team or the channel. You may prefer to be more formal if clients or external stakeholders are also present.

### Requirements
* Slack for chat platform
* Gemini for LLM (or switch for other models)

### Customising this workflow
* If the slack channel is busy enough already, consider posting the final report to email.
* Pull in project metrics to include in your report. As extra context, it may be interesting to tie the messages to production performance.
* Use an AI Agent to query for knowledgebase or tickets relevant to the messages. This may be useful for attaching links or references to add context.
* Channel not so busy or way too busy for 1 week? Play with the scheduled trigger and set an interval which works for your team. 

## 📊 Basic Information

- **Workflow ID:** 3969
- **Complexity:** advanced
- **Node Count:** 47
- **Views:** 7929
- **Downloads:** 792
- **Created:** 2025/5/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3969)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **slack** (×5)
- **set** (×8)
- **code** (×3)
- **splitOut** (×3)
- **aggregate** (×5)
- **filter** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** (×3)
- **splitInBatches** 
- **executeWorkflowTrigger** 
- **switch** 
- **executeWorkflow** (×3)
- **if** 
- **stickyNote** (×7)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 47 nodes with 38 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
