# Evaluate AI agent response relevance using OpenAI and cosine similarity

> ### This n8n template demonstrates how to calculate the evaluation metric "Relevance" which in this scenario, measures the relevance of the agent's response to the user's question.

The scoring approach is adapted from the open-source evaluations project [RAGAS](https://docs.ragas.io/) and you can see the source here 
[https://github.com/explodinggradients/ragas/blob/main/ragas/src/ragas/metrics/_answer_relevance.py](https://github.com/explodinggradients/ragas/blob/main/ragas/src/ragas/metrics/_answer_relevance.py)

### How it works
* This evaluation works best for Q&A agents.
* For our scoring, we analyse the agent's response and ask another AI to generate a question from it. This generated question is then compared to the original question using cosine similarity.
* A high score indicates relevance and the agent's successful ability to answer the question whereas a low score means agent may have added too much irrelevant info, went off script or hallucinated.

### Requirements
* n8n version 1.94+
* Check out this Google Sheet for a sample data [https://docs.google.com/spreadsheets/d/1YOnu2JJjlxd787AuYcg-wKbkjyjyZFgASYVV0jsij5Y/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1YOnu2JJjlxd787AuYcg-wKbkjyjyZFgASYVV0jsij5Y/edit?usp=sharing)

## 📊 Basic Information

- **Workflow ID:** 4425
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 1025
- **Downloads:** 102
- **Created:** 2025/5/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4425)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **evaluationTrigger** 
- **set** (×3)
- **evaluation** (×3)
- **noOp** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **stickyNote** (×3)
- **httpRequest** 
- **code** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
