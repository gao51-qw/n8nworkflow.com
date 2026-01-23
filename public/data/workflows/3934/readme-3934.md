# Generate lessons learned reports from Jira epics with AI and Google Docs

> ### Who is this for?
Jira users who want to ****automate**** the generation of a **Lessons Learned** or **Retrospective** report after an Epic is Done.

### What problem is this workflow solving? / use case
Lessons Learned / Retrospective reports are often omitted in Agile teams because they take time to write. With the use of n8n and AI this process can be automated.

### What is this workflow doing
- Triggers automatically upon an Epic reaching the "Done" status in Jira.
- Collects all related tasks and comments associated with the completed Epic.
- Intelligently filters the gathered data to provide the LLM with the most relevant information.
- Utilizes an LLM with a structured System Message to generate insightful reports.
- Delivers the finalized report directly to your specified Google Docs document.

### Setup
1. Create a Jira API key and follow the Credentials Setup in the Jira trigger node.
2. Create credentials for Google Docs and paste your document ID into the Node.

### How to customize this workflow to your needs
- Change the System Message in the AI Agent to fit your needs.

## 📊 Basic Information

- **Workflow ID:** 3934
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 6522
- **Downloads:** 652
- **Created:** 2025/5/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3934)

## 👤 Author

- **Name:** Tarek Mustafa
- **Username:** @tarekadam

## 🏷️ Categories

- Project Management
- AI Summarization

## 🔗 Nodes Used

- **jira** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** 
- **summarize** 
- **googleDocs** 
- **jiraTrigger** 
- **if** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
