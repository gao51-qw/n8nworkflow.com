# Analyze workflow errors with OpenAI, FreshDesk tickets & Slack alerts

> ### Automatically analyze n8n workflow errors with AI, create support tickets, and send detailed Slack notifications

Perfect for development teams and businesses that need intelligent error handling with automated support workflows. Never miss critical workflow failures again!

### How it works
* Error Trigger captures any workflow failure in your n8n instance
* AI Debugger analyzes the error using structured reasoning to identify root causes
* Clean Data transforms AI analysis into organized, actionable information
* Create Support Ticket automatically generates a detailed ticket in FreshDesk
* Merge combines ticket data with AI analysis for comprehensive reporting
* Generate Slack Alert creates rich, formatted notifications with all context
* Send to Team delivers instant alerts to your designated Slack channel

### How to use
* Replace FreshDesk credentials with your helpdesk system API
* Configure Slack channel for your team notifications
* Customize AI analysis prompts for your specific error types
* Set up as global error handler for all your critical workflows

### Requirements
* FreshDesk account (or compatible ticketing system)
* Slack workspace with bot permissions
* OpenAI API access for AI analysis
* n8n Cloud or self-hosted with AI nodes enabled

### Good to know
* OpenAI API calls cost approximately $0.01-0.03 per error analysis
* Works with any ticketing system that supports REST API
* Can be triggered by webhooks from external monitoring tools
* Slack messages use rich formatting for mobile-friendly alerts

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Monitoring!

## 📊 Basic Information

- **Workflow ID:** 7675
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 137
- **Downloads:** 13
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7675)

## 👤 Author

- **Name:** Anna Bui
- **Username:** @annabuiplayground

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **errorTrigger** 
- **slack** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **code** 
- **set** 
- **httpRequest** 
- **merge** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
