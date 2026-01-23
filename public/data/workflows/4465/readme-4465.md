# AI-powered document chat with Nextcloud files using LangChain and OpenAI

> ### Main Workflow “AI Nextcloud”

* **Entry point**: A public chat-trigger greets the user; every incoming chat message starts the flow.
* **AI agent**: A LangChain agent (“AI Nextcloud”) uses the configured OpenAI model plus short-term memory to continue the dialogue in context.
* **Purpose**: Answers questions about files stored in a Nextcloud folder. The user simply includes the folder path in their question.
* **Tool integration**: Calls the sub-workflow “Nextcloud Tool” whenever it needs to read files and pass their text back to the AI.

---

### Sub-Workflow “Nextcloud Tool”

1. **Invocation**: Triggered by other workflows with the input parameter `path` (folder path).
2. **File listing**: Retrieves every file in the specified folder via the Nextcloud API.
3. **Filter**: Allows only readable formats (PDF, Markdown, DOCX).
4. **Download & text extraction**

   * **PDF** → Text via *Extract From File*
   * **Markdown** → Raw text
   * **DOCX** → Text via community node *word2text*
5. **Aggregation**: Combines all extracted text into a single `output` field and returns it.

&gt; **Outcome**: Each call yields the plain content of every supported file in a Nextcloud folder—providing rich context for the AI agent to answer user questions accurately.


## 📊 Basic Information

- **Workflow ID:** 4465
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 1951
- **Downloads:** 195
- **Created:** 2025/5/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4465)

## 👤 Author

- **Name:** johappel
- **Username:** @johappel

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **executeWorkflowTrigger** 
- **switch** 
- **aggregate** 
- **set** 
- **stickyNote** (×2)
- **if** 
- **nextCloud** (×2)
- **code** (×4)
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **extractFromFile** (×2)
- **n8n-nodes-word2text.word2text** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
