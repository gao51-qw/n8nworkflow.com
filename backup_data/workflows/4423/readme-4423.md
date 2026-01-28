# Evaluations metric: answer similarity

> ### This n8n template demonstrates how to calculate the evaluation metric "Similarity" which in this scenario, measures the consistency of the agent.

The scoring approach is adapted from the open-source evaluations project [RAGAS](https://docs.ragas.io/) and you can see the source here [https://github.com/explodinggradients/ragas/blob/main/ragas/src/ragas/metrics/_answer_similarity.py](https://github.com/explodinggradients/ragas/blob/main/ragas/src/ragas/metrics/_answer_similarity.py)

### How it works
* This evaluation works best where questions are close-ended or about facts where the answer can have little to no deviation.
* For our scoring, we generate embeddings for both the AI's response and ground truth and calculate the cosine similarity between them.
* A high score indicates LLM consistency with expected results whereas a low score could signal model hallucination.

### Requirements
* n8n version 1.94+
* Check out this Google Sheet for a sample data [https://docs.google.com/spreadsheets/d/1YOnu2JJjlxd787AuYcg-wKbkjyjyZFgASYVV0jsij5Y/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1YOnu2JJjlxd787AuYcg-wKbkjyjyZFgASYVV0jsij5Y/edit?usp=sharing)


## 📊 Basic Information

- **Workflow ID:** 4423
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 1011
- **Downloads:** 101
- **Created:** 2025/5/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4423)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **evaluationTrigger** 
- **set** (×4)
- **evaluation** (×3)
- **noOp** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×3)
- **httpRequest** (×2)
- **splitOut** 
- **aggregate** 
- **merge** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
