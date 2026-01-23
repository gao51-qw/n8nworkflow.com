# Error handling: Send email via Gmail on execution or trigger-level errors

> This error handling workflow emails detailed notifications on workflow execution and trigger errors.

It extends [Send email via Gmail on workflow error](https://n8n.io/workflows/696-send-email-via-gmail-on-workflow-error/) template by covering trigger-level errors.

---

### Features
- Get notifications on both main workflow trigger and execution time errors.
- Subject line will have failed workflow id, name, error source (execution or trigger), error message.
- Body will contain links to **both** failed and error handling workflows as well as execution or trigger-level error details.
- Body will also contain a machine readable and enriched JSON from `Error Trigger` describing the error.

Use this **error handling workflow** for as many workflows as you need.

---

### Configiration
- Copy this workflow to your workspace and, optionally, move it under the project that contains your main workflow
- In this **error handling workflow** settings, set **This workflow can be called by** as appropriate
- In `Config` node, define your app url, notifications recipient email, and sender name (useful to build filters in your inbox)
- In `Gmail` node, create and select **credentials**
- In your **main workflow** settings, pick this error handling workflow in the **Error Workflow** field ([How to...](https://docs.n8n.io/flow-logic/error-handling/#create-and-set-an-error-workflow))

---

### Related resources
- [n8n Error Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.errortrigger/) documentation.

---

### Author
- Reach out [Olek](https://community.n8n.io/u/olek/summary) on community.n8n.io
- [Olek](https://n8n.io/creators/olek/) on n8n creators hub

## 📊 Basic Information

- **Workflow ID:** 3075
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 2180
- **Downloads:** 218
- **Created:** 2025/3/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3075)

## 👤 Author

- **Name:** Olek
- **Username:** @olek

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **errorTrigger** 
- **gmail** 
- **merge** (×2)
- **set** (×2)
- **if** 
- **html** (×2)
- **code** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
