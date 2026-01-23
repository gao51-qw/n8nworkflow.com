# Transfer workflows with credentials & sub-workflow management between n8n instances

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# Export Workflows Between n8n Instances
Copy workflows between n8n instances — with optional credential export and automatic sub-workflow adjustments.

## 🧠 How it Works
This workflow copies a selected workflow from a **SOURCE** n8n server to a **TARGET** server and guides you through safe checks:

- **Name conflict check**: If a workflow with the same name exists on the target the export is stopped.
- **Sub-workflows**: Detects calls to sub-workflows.
  - If all sub-workflows exist on the target (same names), references are auto-updated and the export continues.
  - If any are missing, the form shows what’s missing and lets you cancel or proceed anyway.
- **Credentials**: Detects nodes using credentials and lets you export those credentials along with the workflow.
  - The workflow can only apply credential corrections for the credentials that you choose to export with it. 
  - At the end, the form lists which credentials were successfully exported.

💡 For in-depth behavior and edge cases, see the Notes inside the workflow (Setup, How It Works, and Credential Issues).

## 🚀 How to Use
1. Run this workflow on your **SOURCE** server.  
2. Follow the step-by-step form: pick the workflow to export, choose whether to include credentials, and review sub-workflow checks. Done.

## ⚙️ Setup
- Create an **n8n API key** on both servers (SOURCE and TARGET).
- On the SOURCE server, create **two n8n API credentials** in n8n: one for SOURCE and one for TARGET (using the respective base URL and key).
- Configure the nodes in this workflow with these two credentials.
- Detailed step-by-step instructions are available in the workflow notes.


✅ Once configured, you’ll be ready to migrate workflows between servers in just a few clicks.

## 📊 Basic Information

- **Workflow ID:** 8620
- **Complexity:** advanced
- **Node Count:** 54
- **Views:** 319
- **Downloads:** 31
- **Created:** 2025/9/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8620)

## 👤 Author

- **Name:** Arthur Braghetto
- **Username:** @arthurmb

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **formTrigger** 
- **n8n** (×7)
- **code** (×12)
- **form** (×6)
- **executeCommand** (×2)
- **readWriteFile** 
- **extractFromFile** 
- **splitOut** 
- **if** (×7)
- **filter** 
- **set** (×2)
- **noOp** 
- **stickyNote** (×12)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 54 nodes with 38 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
