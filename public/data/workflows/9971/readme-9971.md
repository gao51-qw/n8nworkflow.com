# Track AI model executions with LangFuse observability for better performance insights

> ## About this template
This template is to demonstrate how to  trace the observations per execution ID in Langfuse via ingestion API.

## Good to know
* Endpoint: `https://cloud.langfuse.com/api/public/ingestion`
* Auth is a `Generic Credential Type` with a `Basic Auth`: `username` = `you_public_key`, `password` = `your_secret_key`.

## How it works
* **Trigger**: the workflow is executed by another workflow after an AI run finishes (input parameter `execution_id`).

* **Remove duplicates**
Ensures we only process each `execution_id` once (optional but recommended).

* **Wait to get execution data**
Delay (60-80 secs) so totals and per-step metrics are available.

* **Get execution**
Fetches workflow metadata and token totals.

* **Code: structure execution data**
Normalizes your run into an array of `perModelRuns` with model, tokens, latency, and text previews.

* **Split Out** → **Loop Over Items**
Iterates each run step.

* **Code: prepare JSON for Langfuse**
  Builds a batch with:
    * trace-create (stable id trace-&lt;executionId&gt;, grouped into session-&lt;workflowId&gt;) 
    * generation-create (model, input/output, usage, timings from latency)


* **HTTP Request to Langfuse**
Posts the batch. Optional short Wait between sends.

## Requirements
1. Langfuse Cloud project and API keys
2. n8n instance with the HTTP node

## Customizing
1. Add span-create and set `parentObservationId` on the generation to nest under spans.
2. Add scores or feedback later via score-create.
3. Replace `sessionId` strategy (per workflow, per user, etc.). If some steps don’t produce tokens, compute and set usage yourself before sending.

## 📊 Basic Information

- **Workflow ID:** 9971
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 60
- **Downloads:** 6
- **Created:** 2025/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9971)

## 👤 Author

- **Name:** Artem Makarov
- **Username:** @makarovartyom

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **n8n** 
- **splitOut** 
- **splitInBatches** 
- **httpRequest** 
- **wait** (×2)
- **removeDuplicates** 
- **code** (×2)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
