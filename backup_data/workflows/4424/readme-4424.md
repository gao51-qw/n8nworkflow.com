# Evaluate AI agent response correctness with OpenAI and RAGAS methodology

> ### This n8n template demonstrates how to calculate the evaluation metric "Correctness" which in this scenario, measures the compares and classifies the agent's response against a set of ground truths.

The scoring approach is adapted from the open-source evaluations project [RAGAS](https://docs.ragas.io/) and you can see the source here [https://github.com/explodinggradients/ragas/blob/main/ragas/src/ragas/metrics/_answer_correctness.py](https://github.com/explodinggradients/ragas/blob/main/ragas/src/ragas/metrics/_answer_correctness.py)

### How it works
* This evaluation works best where the agent's response is allowed to be more verbose and conversational.
* For our scoring, we classify the agent's response into 3 buckets: True Positive (in answer and ground truth), False Positive (in answer but not ground truth) and False Negative (not in answer but in ground truth).
* We also calculate an average similarity score on the agent's response against all ground truths.
* The classification and the similarity score is then averaged to give the final score. 
* A high score indicates the agent is accurate whereas a low score could indicate the agent has incorrect training data or is not providing a comprehensive enough answer.

### Requirements
* n8n version 1.94+
* Check out this Google Sheet for a sample data [https://docs.google.com/spreadsheets/d/1YOnu2JJjlxd787AuYcg-wKbkjyjyZFgASYVV0jsij5Y/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1YOnu2JJjlxd787AuYcg-wKbkjyjyZFgASYVV0jsij5Y/edit?usp=sharing)

## 📊 Basic Information

- **Workflow ID:** 4424
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 1324
- **Downloads:** 132
- **Created:** 2025/5/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4424)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **evaluationTrigger** 
- **set** (×4)
- **evaluation** (×3)
- **noOp** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **merge** (×2)
- **code** (×3)
- **stickyNote** (×3)
- **httpRequest** (×2)
- **splitOut** 
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
