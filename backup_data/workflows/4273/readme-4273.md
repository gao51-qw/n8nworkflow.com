# Evaluation metric example: RAG document relevance

> ## AI evaluation in n8n

This is a template for n8n's [evaluation feature](https://docs.n8n.io/advanced-ai/evaluations/overview). 

Evaluation is a technique for getting confidence that your AI workflow performs reliably, by running a test dataset containing different inputs through the workflow.

By calculating a metric (score) for each input, you can see where the workflow is performing well and where it isn't.

## How it works

This template shows how to calculate a workflow evaluation metric: **retrieved document relevance** (i.e. whether the information retrieved from a vector store is relevant to the question).

The workflow takes a question and checks whether the information retrieved to answer it is relevant.

To run this workflow, you need to insert documents into a vector data store, so that they can be retrieved by the agent to answer questions. You can do this by running the top part of the workflow once.

The main workflow works as follows:

- We use an evaluation trigger to read in our dataset 
- It is wired up in parallel with the regular trigger so that the workflow can be started from either one. [More info](https://docs.n8n.io/advanced-ai/evaluations/tips-and-common-issues/#combining-multiple-triggers)
- We make sure that the agent outputs the list data from the tools that it used
- If we’re evaluating (i.e. the execution started from the evaluation trigger), we calculate the relevance metric using AI to compare the retrieved documents with the question
- We pass this information back to n8n as a metric
- If we’re not evaluating we avoid calculating the metric, to reduce cost

## 📊 Basic Information

- **Workflow ID:** 4273
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 3481
- **Downloads:** 348
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4273)

## 👤 Author

- **Name:** David Roberts
- **Username:** @davidn8n

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×7)
- **evaluationTrigger** 
- **evaluation** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **set** (×2)
- **noOp** 
- **googleSheets** 
- **removeDuplicates** 
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
