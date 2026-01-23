# Send emails via Gmail from Obsidian

> ## How it Works
- This n8n template makes it possible to send emails directly from your Obsidian notes. 
- It leverages the power of the [Obsidian Post Webhook plugin](https://github.com/Masterb1234/obsidian-post-webhook/), allowing seamless integration between your notes and the email workflow. 

## What it does:
- Receives note content and metadata from Obsidian via a Webhook.
- Parses YAML frontmatter to define email recipients, subject, and more.
- Automatically processes attachments, encoding them into an email-friendly format.
- Sends emails via Gmail and confirms the status back to Obsidian.
- Includes a testing feature to verify everything works before going live.

## Set-up Steps
- Webhook Configuration: Set your n8n POST Webhook URL in the Obsidian [Obsidian Post Webhook plugin](https://github.com/Masterb1234/obsidian-post-webhook/) settings.
- Email Integration: Submit the Gmail credentials in n8n email nodes.
- Test the Workflow: Run a test from Obsidian to ensure the template functions correctly.
- Activate and Enjoy: Start sending customized emails with attachments from your notes in no time!

## 📊 Basic Information

- **Workflow ID:** 2591
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 3465
- **Downloads:** 346
- **Created:** 2024/11/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2591)

## 👤 Author

- **Name:** Obsidi8n
- **Username:** @derruttie

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **stickyNote** (×6)
- **if** (×2)
- **splitOut** 
- **splitInBatches** 
- **convertToFile** 
- **aggregate** 
- **gmail** (×2)
- **respondToWebhook** (×2)
- **set** 
- **dateTime** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
