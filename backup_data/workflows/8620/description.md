*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

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