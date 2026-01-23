# Email assistant: convert natural language to SQL queries with Phi4-mini and PostgreSQL

> # Who is this for?

🧑🏻🫱🏻‍🫲🏻🤖 **Humans** and **Robots** alike.

This workflow can be used as a *Chat Trigger*, as well as a *Workflow Trigger*.

It will take a natural language request, and then generate a `SQL` query. The resulting `query` parameter will contain the query, and a `sqloutput` parameter will contain the results of executing such query.

## What's the use case?

This template is most useful paired with other workflows that extract e-mail information and store it in a structured Postgres table, and use LLMs to understand inquiries about information contained in an e-mail inbox and formulate questions that needs answering.

Plus, the prompt can be easily adapted to formulate SQL queries over any kind of structured database.

## Privacy and Economics

As LLM provider I'm using **Ollama** locally, as I consider my e-mail extremely sensitive information. As model, [`phi4-mini`](https://ollama.com/library/phi4-mini) does an excellent job balancing quality and efficiency.

## Setup

Upon running for the first time, this workflow will *automatically* trigger a sub-section to read all tables and extract their schema into a local file.

Then, either by *chatting* with the workflow in n8n's interface or by using it as a *sub-workflow*, you will get a `query` and a `sqloutput` response.

## Customizations

If you want to work with just one particular table yet keep edits at bay, append a condition to the `List all tables in a database` step, like so:

```sql
WHERE table_schema='public' AND table_name='my_emails_table_name'
```

To repurpose this workflow to work with any other data corpus in a structured database, inspect the `AI Agent` *user* and *system* prompts and edit them accordingly.


## 📊 Basic Information

- **Workflow ID:** 3761
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 2864
- **Downloads:** 286
- **Created:** 2025/4/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3761)

## 👤 Author

- **Name:** Alfonso Corretti
- **Username:** @acorretti

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **set** (×6)
- **convertToFile** 
- **readWriteFile** (×2)
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×3)
- **manualTrigger** 
- **if** (×4)
- **merge** 
- **postgres** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
