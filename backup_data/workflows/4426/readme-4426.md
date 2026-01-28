# Evaluate RAG response accuracy with OpenAI: document groundedness metric

> ### This n8n template demonstrates how to calculate the evaluation metric "RAG document groundedness" which in this scenario, measures the ability to provide or reference information included only in retrieved vector store documents.

The scoring approach is adapted from [https://cloud.google.com/vertex-ai/generative-ai/docs/models/metrics-templates#pointwise_groundedness](https://cloud.google.com/vertex-ai/generative-ai/docs/models/metrics-templates#pointwise_groundedness)

### How it works
* This evaluation works best for an agent that requires document retrieval from a vector store or similar source.
* For our scoring, we need to collect the agent's response and the documents retrieved and use an LLM to assess if the former is based off the latter.
* A key factor is to look out information in the response which is not mentioned in the documents.
* A high score indicates LLM adherence and alignment whereas a low score could signal inadequate prompt or model hallucination.

### Requirements
* n8n version 1.94+
* Check out this Google Sheet for a sample data [https://docs.google.com/spreadsheets/d/1YOnu2JJjlxd787AuYcg-wKbkjyjyZFgASYVV0jsij5Y/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1YOnu2JJjlxd787AuYcg-wKbkjyjyZFgASYVV0jsij5Y/edit?usp=sharing)


## 📊 Basic Information

- **Workflow ID:** 4426
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 1484
- **Downloads:** 148
- **Created:** 2025/5/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4426)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **evaluation** (×3)
- **noOp** 
- **set** (×2)
- **evaluationTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
