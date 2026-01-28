# Evaluation metric example: Check if tool was called

> ## AI evaluation in n8n

This is a template for n8n's [evaluation feature](https://docs.n8n.io/advanced-ai/evaluations/overview). 

Evaluation is a technique for getting confidence that your AI workflow performs reliably, by running a test dataset containing different inputs through the workflow.

By calculating a metric (score) for each input, you can see where the workflow is performing well and where it isn't.

## How it works

This template shows how to calculate a workflow evaluation metric: **whether a specific tool was called** by an agent.

- We use an evaluation trigger to read in our dataset 
- It is wired up in parallel with the regular trigger so that the workflow can be started from either one. [More info](https://docs.n8n.io/advanced-ai/evaluations/tips-and-common-issues/#combining-multiple-triggers)
- We make sure that the agent outputs the list of tools that it used
- We then check whether the expected tool (from the dataset) is in that list
- Finally we pass this information back to n8n as a metric


## 📊 Basic Information

- **Workflow ID:** 4268
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1100
- **Downloads:** 110
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4268)

## 👤 Author

- **Name:** David Roberts
- **Username:** @davidn8n

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **set** (×2)
- **httpRequestTool** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **noOp** 
- **evaluationTrigger** 
- **evaluation** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
