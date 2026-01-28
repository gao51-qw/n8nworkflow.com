# Research AI agent team with auto citations using OpenRouter and Perplexity

> **Purpose of workflow:**
This AI-powered workflow is designed to automatically generate comprehensive, well-researched articles on any given topic. It utilizes a team of AI agents to streamline the research and writing process, producing high-quality content with proper citations and credible sources.

**How it works**

Multi-agent team:

1. Research Leader: Plans and conducts initial research, creating a table of contents.
2. Project Planner: Breaks down the table of contents into manageable sections.
3. Research Assistants: Multiple agents that conduct in-depth research on assigned sections.
4. Editor: Compiles and refines the final article, ensuring coherence and proper citations.

**Key features:**
- Utilizes Perplexity AI for internet search and citation capabilities
- Produces well-structured articles with proper citations
- Customizable parameters (topic, tone, word count, number of sections)


**Step by step setup:**

1. Get account from OpenRouter.ai to access Perplexity API
2. Set API key in the Perplexity API node
3. Credential key name : Authorization and key value Bearer &lt;api-key value&gt;


## 📊 Basic Information

- **Workflow ID:** 2607
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 4695
- **Downloads:** 469
- **Created:** 2024/12/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2607)

## 👤 Author

- **Name:** Derek Cheung
- **Username:** @derekcheungsa

## 🏷️ Categories

- Content Creation
- AI RAG

## 🔗 Nodes Used

- **merge** 
- **code** 
- **formTrigger** 
- **ghost** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **stickyNote** (×7)
- **executeWorkflowTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×3)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitOut** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
