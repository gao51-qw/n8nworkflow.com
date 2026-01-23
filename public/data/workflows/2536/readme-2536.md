# Pattern for parallel sub-workflow execution followed by wait-for-all loop

> ## What this workflow does
This (set of) workflow(s) shows how to start multiple sub-workflows, asynchronously, in parallel, and then wait for all of them to complete.  Normally sub-workflows would need to be run synchronously, in series, or, if they are executed asynchronously (to run concurrently, in parallel), there is no easy way to merge/wait for an arbitrary number of them to complete.

This is a "design pattern" template to show one approach for running multiple, data-driven instances of a sub-workflow "asynchronously," in parallel (instead of running them one at a time in series), but still prevent the later steps in the workflow from continuing until all of the sub-workflows have reported back that they are finished, via callback URL.  There are other techniques involving messaging services, database tables, or other external "flow manager" helpers, but this technique accomplishes the goal fully within n8n.

## Setup
To implement this pattern, examine the nodes in the template and modify the incoming data leading to:
1. A split-out loop to acynchronously execute a sub-workflow multiple times, in parallel.
    * For instance, each sub-workflow might process one of a list of incoming documents.
    * The resumeUrl for the main/parent workflow is provided to all of the sub-workflow executions, along with a unique identifier that can be counted later (e.g. a document file-name).
2. A "wait-for-all" loop that checks whether all sub-workflows have reported back (`if` node) and builds a unique list of identifiers from the callbacks received from each execution of the sub-workflow.
    * The sub-workflow should be designed to respond immediately (async) and later send a callback request when it has finished processing.
    * The callback request should include the unique identifier value received when the sub-workflow it was started.

This is meant to be a possible answer to questions like [this one about running things in parallel](https://community.n8n.io/t/is-it-possible-to-run-a-part-of-the-workflow-in-parallel/60221),  maybe [this one about waiting for things to finish](https://community.n8n.io/t/node-does-not-wait-for-predecessor-node-always-need-a-merge-node/60773), [this one about managing sub-batches of things by waiting for each batch](https://community.n8n.io/t/maximum-parallel-subworkflows/60052), or [this one about running things in parallel](https://community.n8n.io/t/parallel-execution-of-bat-files/49493).  The topic of how to do this comes up A LOT, and this is one of the only techniques that (so far) seems to work.

## 📊 Basic Information

- **Workflow ID:** 2536
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 11440
- **Downloads:** 1144
- **Created:** 2024/11/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2536)

## 👤 Author

- **Name:** Hubschrauber
- **Username:** @hubschrauber

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **wait** (×2)
- **code** (×2)
- **set** 
- **if** 
- **httpRequest** (×2)
- **respondToWebhook** (×2)
- **stickyNote** (×4)
- **noOp** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
