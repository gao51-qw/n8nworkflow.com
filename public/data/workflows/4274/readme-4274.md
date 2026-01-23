# Evaluation metric example: String similarity

> ## AI evaluation in n8n

This is a template for n8n's [evaluation feature](https://docs.n8n.io/advanced-ai/evaluations/overview). 

Evaluation is a technique for getting confidence that your AI workflow performs reliably, by running a test dataset containing different inputs through the workflow.

By calculating a metric (score) for each input, you can see where the workflow is performing well and where it isn't.

## How it works

This template shows how to calculate a workflow evaluation metric: **text similarity, measured character-by-character**.

The workflow takes images of hand-written codes, extracts the code and compares it with the expected answer from the dataset.

The images look like this:

![image](https://storage.googleapis.com/n8n_template_data/handwriting_scans/doc20250302_08223946_001.jpg)

The workflow works as follows:

- We use an evaluation trigger to read in our dataset 
- It is wired up in parallel with the regular trigger so that the workflow can be started from either one. [More info](https://docs.n8n.io/advanced-ai/evaluations/tips-and-common-issues/#combining-multiple-triggers)
- We download the image and use AI to extract the code
- If we’re evaluating (i.e. the execution started from the evaluation trigger), we calculate the string distance metric
- We pass this information back to n8n as a metric


## 📊 Basic Information

- **Workflow ID:** 4274
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 1057
- **Downloads:** 105
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4274)

## 👤 Author

- **Name:** David Roberts
- **Username:** @davidn8n

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×3)
- **set** 
- **webhook** 
- **evaluationTrigger** 
- **respondToWebhook** 
- **evaluation** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
