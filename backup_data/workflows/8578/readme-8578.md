# Run multiple tasks in parallel with asynchronous processing and webhooks

> ## n8n Asynchronous Workflow with Wait Node POC
This template contains a two-part workflow designed to demonstrate a proof-of-concept for asynchronous and parallel execution of tasks in n8n.
### Purpose
The purpose of this template is to showcase how you can run multiple long-running tasks simultaneously without blocking your main workflow. It utilizes the "Wait For Sub-workflow Completion" option and the "Wait" node to effectively manage concurrent execution and collect results from sub-workflows via webhooks. This pattern is ideal for use cases involving batch processing or any scenario where a workflow needs to trigger multiple independent tasks and wait for all of them to report back.
### Setup Instructions
1. **Import:** Import both the "Main Orchestrator" and "Asynchronous Worker" workflows into your n8n instance.
2. **Link Workflows:** In the "Main Orchestrator" workflow, ensure the "Execute Workflow" node is correctly configured to call the "Asynchronous Worker" workflow. You can select it by its name from the dropdown menu.
3. **Configure:** The template is pre-configured to run two parallel tasks with different `wait` durations to simulate a real-world scenario. You can adjust the parameters on the "Execute Workflow" node to test different wait times.
4. **Execution:** Execute the "Main Orchestrator" workflow. You will see the workflow pause at the "Wait" nodes while the "Asynchronous Worker" workflows run in the background. Once they complete, they will call back via the webhook, allowing the main workflow to resume and summarize the results.


For a detailed walkthrough of how this template works and an explanation of the underlying concepts, please read the [full blog post here](https://n8nplaybook.com/post/2025/09/asynchronous-n8n-workflows-parallel-processing-poc/)

## 📊 Basic Information

- **Workflow ID:** 8578
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 1054
- **Downloads:** 105
- **Created:** 2025/9/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8578)

## 👤 Author

- **Name:** Viktor Klepikovskyi
- **Username:** @vklepikovskyi

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **executeWorkflowTrigger** 
- **wait** (×4)
- **executeWorkflow** (×2)
- **httpRequest** 
- **merge** 
- **summarize** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
