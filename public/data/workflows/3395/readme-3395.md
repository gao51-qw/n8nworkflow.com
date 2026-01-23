# Auto-assign support tickets with JIRA, Supabase and AI

> ### This n8n template builds a simple automation to ensure no JIRA issues go unassigned for more than a week to prevent them falling through the cracks. It uses AI to perform searching tasks against a Supabase Vector Store.
This can be one way to help reduce the amount of manual work in managing the issue backlog for busy teams with little effort.

### How it works
* This template contains 2 separate flows which run continuously via schedule triggers.
* The first populates our Supabase vector store with resolved issues within the last day. This helps keep our vector store up-to-date and relevant for the purpose of finding similar issues.
* It does this by pulling the latest resolved issues from JIRA and populating the Supabase vectorstore with carefully chosen metadata. This will come in handy later.
* The second flow watches for stale, unassigned issues for the purpose of aut-assigning to a relevant team member.
* It does this by comparing the stale issue against our vector store of resolved issues with the goal of identifying which team member would have best context regarding the issue.
* In a busy team, this may net a few team members as possible candidates to assign. Therefore, we can introduce additional logic to count each team member's assigned, in-progress issues. This is intended to not overload our busiest members.
* The team member with the least assigned issues is pressumed to have the most capacity and therefore is assigned. A comennt is left in the issue to notify the team member that they've been auto-assigned due to age of issue.

### How to use
* Modify the project and interval parameters to match those of your use-case and team members.
* Add additional criteria before assigning to a team member eg. department, as required.

### Requirements
* OpenAI for LLM
* JIRA for Issue Management
* Supabase for Vector Store

### Customising this workflow
* Not using JIRA or Supabase? The beauty of these AI templates are these components are entirely interchangeable with competing services. Try Linear and Qdrant instead!
* Auto-assigning logic is simplified in this template. Expand criteria as required for your team and organisation. eg. Might be a good idea to pull in annual leave information from HR system to prevent assigning to someone who is on currently on holiday!

## 📊 Basic Information

- **Workflow ID:** 3395
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 1836
- **Downloads:** 183
- **Created:** 2025/4/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3395)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Ticket Management
- AI RAG

## 🔗 Nodes Used

- **scheduleTrigger** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **jira** (×5)
- **splitInBatches** (×2)
- **removeDuplicates** 
- **set** (×2)
- **noOp** (×2)
- **stickyNote** (×8)
- **splitOut** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **summarize** 
- **sort** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
