# Automate customer support issue resolution using AI text classifier

> This n8n template is designed to assist and improve customer support team member capacity by automating the resolution of long-lived and forgotten JIRA issues.

## How it works

* Schedule Trigger runs daily to check for long-lived unresolved issues and imports them into the workflow.
* Each Issue is handled as a separate subworkflow by using an execute workflow node. This allows parallel processing.
* A report is generated from the issue using its comment history allowing the issue to be classified by AI - determining the state and progress of the issue.
* If determined to be resolved, sentiment analysis is performed to track customer satisfaction. If negative, a slack message is sent to escalate, otherwise the issue is closed automatically.
* If no response has been initiated, an AI agent will attempt to search and resolve the issue itself using similar resolved issues or from the notion database. If a solution is found, it is posted to the issue and closed.
* If the issue is blocked and waiting for responses, then a reminder message is added.

## How to use

* This template searches for JIRA issues which are older than 7 days which are not in the "Done" status. Ensure there are some issues that meet this criteria otherwise adjust the search query to suit.
* Works best if you frequently have long-lived issues that need resolving.
* Ensure the notion tool is configured as to not read documents you didn't intend it to ie. private and/or internal documentation.

## Requirements

* JIRA for issues management
* OpenAI for LLM
* Slack for notifications

## Customising this workflow

* Why not try classifying issues as they are created? One use-case may be for quality control such as ensuring reporting criteria is adhered to, summarising and rephrasing issue for easier reading or adjusting priority.

## 📊 Basic Information

- **Workflow ID:** 2468
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 27569
- **Downloads:** 2756
- **Created:** 2024/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2468)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **scheduleTrigger** 
- **jira** (×8)
- **aggregate** 
- **set** (×2)
- **if** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **slack** (×2)
- **stickyNote** (×7)
- **executeWorkflow** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.sentimentAnalysis** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **jiraTool** 
- **notionTool** 
- **@n8n/n8n-nodes-langchain.textClassifier** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
