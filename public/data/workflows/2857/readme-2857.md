# Pattern for multiple triggers combined to continue workflow

> ## Overview

This template describes a possible approach to handle a pseudo-callback/trigger from an independent, external process (initiated from a workflow) and combine the received input with the workflow execution that is already in progress.  This requires the external system to pass through some context information (`resumeUrl`), but allows the "primary" workflow execution to continue with **BOTH** its own (previous-node) context, **AND** the input received in the "secondary" trigger/process.

### Primary Workflow Trigger/Execution
The workflow path from the `primary trigger` initiates some external, independent process and provides "context" which includes the value of `$execution.resumeUrl`. This execution then reaches a `Wait` node configured with `Resume - On Webhook Call`  and stops until a call to `resumeUrl` is received.

### External, Independent Process
The external, independent process could be anything like a Telegram conversation, or a web-service as long as:
1. it results in a single execution of the `Secondary Workflow Trigger`, and
2. it can pass through the value of `resumeUrl` associated with the `Primary Workflow Execution`

### Secondary Workflow Trigger/Execution
The `secondary workflow execution` can start with any kind of trigger as long as part of the input can include the `resumeUrl`.  To combine / rejoin the `primary workflow execution`, this execution passes along whatever it receives from its trigger input to the resume-webhook endpoint on the `Wait` node.

## Notes
* **IMPORTANT**: The workflow ids in the `Set` nodes marked **Update Me** have embedded references to the workflow IDs in the original system.  **They will need to be CHANGED to make this demo work.**
* Note: The `Resume Other Workflow Execution` node in the template uses the `$env.WEBHOOK_URL` configuration to convert to an internal "localhost" call in a Docker environment.  This can be done differently.
* **ALERT:** This pattern is NOT suitable for a workflow that handles multiple items because the first workflow execution will only be waiting for one callback.
* The second workflow (not the second trigger in the first workflow) is just to demonstrate how the `Independent, External Process` needs to work.


## 📊 Basic Information

- **Workflow ID:** 2857
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 1542
- **Downloads:** 154
- **Created:** 2025/2/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2857)

## 👤 Author

- **Name:** Hubschrauber
- **Username:** @hubschrauber

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **stickyNote** (×10)
- **manualTrigger** 
- **wait** (×2)
- **httpRequest** (×4)
- **set** (×3)
- **webhook** (×2)
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
