# Chat with PDF docs using AI (quoting sources)

> This workflow allows you to ask questions about a PDF document. The answers are provided by an AI model of your choice, and the answer includes a citation pointing to the information it used.

You can use n8n’s built-in chat interface to ask the questions, or you could customise this workflow to use another one (e.g. Slack, Teams, etc.)

### Example

The workflow is set up with the Bitcoin whitepaper. So you could ask things like:

*Question: “Which email provider does the creator of Bitcoin use?“*
*Answer: “GMX [Bitcoin whitepaper.pdf, lines 1-35]”*

### Requirements

1. A Pinecone account (they have a free tier at the time of writing that is easily enough for this workflow)
2. Access to a large language model (e.g. an OpenAI account)

### Customizing this workflow

The workflow only reads in one document, but you could customise it to read in all the documents in a folder (or more).

The workflow is set up to use GPT 3.5, but you could swap that out for any other model (including self-hosted ones).

## 📊 Basic Information

- **Workflow ID:** 2165
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 113346
- **Downloads:** 11334
- **Created:** 2024/3/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2165)

## 👤 Author

- **Name:** David Roberts
- **Username:** @davidn8n

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** (×4)
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **code** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
