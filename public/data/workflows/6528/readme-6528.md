# Automated WhatsApp group weekly team reports with Gemini AI summarization

> This n8n template automatically summarizes your WhatsApp group activity from the past week and generates a team report.

**Why use this?**
Remote teams rely on chat for communication, but important discussions, decisions, and ideas get buried in message threads and forgotten by Monday. This workflow ensures nothing falls through the cracks.

**How it works**
* Runs every Monday at 6am to collect the previous week's group messages
* Groups conversations by participant and analyzes message threads
* AI summarizes individual member activity into personal reports
* Combines all individual reports into one comprehensive team overview
* Posts the final report back to your WhatsApp group to kick off the new week

**Setup requirements**
* WhatsApp (whapAround.pro) no need Meta API
* Gemini AI (or alternative LLM of choice)

**Best practices**
* Use one workflow per WhatsApp group for focused results
* Filter for specific team members if needed
* Customize the report tone to match your team culture
* Adjust the schedule if weekly reports don't suit your team's pace

**Customization ideas**
* Send reports via email instead of posting to busy groups
* Include project metrics alongside message summaries
* Connect to knowledge bases or ticket systems for additional context

Perfect for project managers who want to keep distributed teams aligned and ensure important conversations don't get lost in the chat noise.

## 📊 Basic Information

- **Workflow ID:** 6528
- **Complexity:** advanced
- **Node Count:** 47
- **Views:** 838
- **Downloads:** 83
- **Created:** 2025/7/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6528)

## 👤 Author

- **Name:** Jamot
- **Username:** @jamot

## 🏷️ Categories

- Project Management
- AI Summarization

## 🔗 Nodes Used

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
- **respondToWebhook** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 47 nodes with 38 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
