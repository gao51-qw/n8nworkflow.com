# Evaluation metric: summarization

> ### This n8n template demonstrates how to calculate the evaluation metric "Summarization" which in this scenario, measures the LLM's accuracy and faithfulness in producing summaries which are based on an incoming Youtube transcript.

The scoring approach is adapted from [https://cloud.google.com/vertex-ai/generative-ai/docs/models/metrics-templates#pointwise_summarization_quality](https://cloud.google.com/vertex-ai/generative-ai/docs/models/metrics-templates#pointwise_summarization_quality)

### How it works
* This evaluation works best for an AI summarization workflows.
* For our scoring, we simple compare the generated response to the original transcript.
* A key factor is to look out information in the response which is not mentioned in the documents.
* A high score indicates LLM adherence and alignment whereas a low score could signal inadequate prompt or model hallucination.

### Requirements
* n8n version 1.94+
* Check out this Google Sheet for a sample data [https://docs.google.com/spreadsheets/d/1YOnu2JJjlxd787AuYcg-wKbkjyjyZFgASYVV0jsij5Y/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1YOnu2JJjlxd787AuYcg-wKbkjyjyZFgASYVV0jsij5Y/edit?usp=sharing)


## 📊 Basic Information

- **Workflow ID:** 4428
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 997
- **Downloads:** 99
- **Created:** 2025/5/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4428)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **evaluation** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **evaluationTrigger** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **extractFromFile** 
- **webhook** 
- **set** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
