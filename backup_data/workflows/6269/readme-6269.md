# 🛠️ State Management System for Long-Running Workflows with Wait Nodes

> ## How it works

This template is a powerful, reusable utility for managing **stateful, long-running processes**. It allows a main workflow to be paused indefinitely at "checkpoints" and then be resumed by external, asynchronous events.

This pattern is essential for complex automations and I often call it the **"Async Portal"** or **"Teleport"** pattern.

The template consists of two distinct parts:
1.  **The Main Process (Top Flow):** This represents your primary business logic. It starts, performs some actions, and then calls the Portal to register itself before pausing at a `Wait` node (a "Checkpoint").
2.  **The Async Portal (Bottom Flow):** This is the state-management engine. It uses **Workflow Static Data** as a persistent memory to keep track of all paused processes. When an external event (like a new chat message or an approval webhook) comes in with a specific `session_id`, the Portal looks up the corresponding paused workflow and "teleports" the new data to it by calling its unique `resume_url`.

This architecture allows you to build sophisticated systems where the state is managed centrally, and your main business logic remains clean and easy to follow.

## When to use this pattern

This is an advanced utility ideal for:
*   **Chatbots:** Maintaining conversation history and context across multiple user messages.
*   **Human-in-the-Loop Processes:** Pausing a workflow to wait for a manager's approval from an email link or a form submission.
*   **Multi-Day Sequences:** Building user onboarding flows or drip campaigns that need to pause for hours or days between steps.
*   **Any process that needs to wait for an unpredictable external event** without timing out.

## Set up steps

This template is a utility designed to be copied into your own projects. The workflow itself is a live demonstration of how to use it.

1.  **Copy the Async Portal:** In your own project, copy the entire **Async Portal** (the bottom flow, starting with the `A. Entry: Receive Session Info` trigger) into your workflow. This will be your state management engine.

2.  **Register Your Main Process:** At the beginning of your main workflow, use an `Execute Workflow` node to call the Portal's trigger. You must pass it a unique `session_id` for the process and the `resume_url` from a `Wait` node.

3.  **Add Checkpoints:** Place `Wait` nodes in your main workflow wherever you need the process to pause and wait for an external event.

4.  **Trigger the Portal:** Configure your external triggers (e.g., your chatbot's webhook) to call the **Portal's entry trigger**, not your main workflow's trigger. You must pass the same `session_id` so the Portal knows which paused process to resume.

**To see it in action, follow the detailed instructions in the "How to Test This Workflow" sticky note on the canvas.**

## 📊 Basic Information

- **Workflow ID:** 6269
- **Complexity:** advanced
- **Node Count:** 42
- **Views:** 1984
- **Downloads:** 198
- **Created:** 2025/7/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6269)

## 👤 Author

- **Name:** Lucas Peyrin
- **Username:** @lucaspeyrin

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **httpRequest** 
- **filter** 
- **code** (×2)
- **set** (×3)
- **splitOut** (×3)
- **if** (×4)
- **noOp** (×2)
- **stickyNote** (×20)
- **executeWorkflowTrigger** 
- **manualTrigger** 
- **executeWorkflow** 
- **wait** (×2)
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 42 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
