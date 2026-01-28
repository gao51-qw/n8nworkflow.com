# Automate support ticket triage and resolution with JIRA and AI

> ### This n8n template automates triaging of newly opened support tickets and issue resolution via JIRA.

If your organisation deals with a large number of support requests daily, automating triaging is a great use-case for introducing AI to your support teams. Extending the idea, we can also get AI to give a first attempt at resolving the issue intelligently.

### How it works
* A scheduled trigger picks up newly opened JIRA support tickets from the queue and discards any seen before.
* An AI agent analyses the open ticket to add labels, priority on the seriousness of the issue and simplifies the description for better readability and understanding for human support.
* Next, the agent attempts to address and resolve the issue by finding similar issues (by tags) which have been resolved.
* Each similar issue has its comments analysed and summarised to identify the actual resolution and facts.
* These summarises are then used as context for the AI agent to suggest a fix to the open ticket.

### How to use
* Simply connect your JIRA instance to the workflow and activate to start watching for open tickets. Depending on frequency, you may need to increase for decrease the intervals.
* Define labels to use in the agent's system prompt.
* Restrict to certain projects or issue types to suit your organisation.

### Requirements
* JIRA for issue management and support portal
* OpenAI for LLM

### Customising this workflow
* Not using JIRA? Try swapping out the nodes for Linear or your issue management system of choice.
* Try a different approach for issue resolution. You might want to try RAG approach where a knowledge base is used.


## 📊 Basic Information

- **Workflow ID:** 3868
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 7832
- **Downloads:** 783
- **Created:** 2025/5/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3868)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Ticket Management
- AI RAG

## 🔗 Nodes Used

- **scheduleTrigger** 
- **jira** (×5)
- **set** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×3)
- **splitInBatches** 
- **noOp** 
- **aggregate** (×2)
- **stickyNote** (×5)
- **removeDuplicates** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
