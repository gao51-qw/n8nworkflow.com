## AI evaluation in n8n

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
