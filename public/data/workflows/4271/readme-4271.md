# Evaluation metric example: Correctness (judged by AI)

> ## AI evaluation in n8n

This is a template for n8n's [evaluation feature](https://docs.n8n.io/advanced-ai/evaluations/overview). 

Evaluation is a technique for getting confidence that your AI workflow performs reliably, by running a test dataset containing different inputs through the workflow.

By calculating a metric (score) for each input, you can see where the workflow is performing well and where it isn't.

## How it works

This template shows how to calculate a workflow evaluation metric: **whether an output matches an expected output** (i.e. has the same meaning).

The workflow takes questions about the causes of historical events and compares them with the reference answers in the dataset.

- We use an evaluation trigger to read in our dataset 
- It is wired up in parallel with the regular chat trigger so that the workflow can be started from either one. [More info](https://docs.n8n.io/advanced-ai/evaluations/tips-and-common-issues/#combining-multiple-triggers)
- If we're evaluating (i.e. the execution started from the evaluation trigger), we calculate the correctness metric using AI
- We pass this information back to n8n as a metric
- If we're not evaluating we avoid calculating the metric, to reduce cost 




## 📊 Basic Information

- **Workflow ID:** 4271
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1551
- **Downloads:** 155
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4271)

## 👤 Author

- **Name:** David Roberts
- **Username:** @davidn8n

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **evaluationTrigger** 
- **evaluation** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **set** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
