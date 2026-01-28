# AI-powered email support router with Gmail, ChatGPT-4o, and Slack

> ### This n8n template automates your customer support workflow by connecting Gmail, OpenAI, Supabase, and Slack. It listens for new incoming emails, classifies them using AI, routes them to the appropriate Slack channel based on category (e.g., support or new requests), logs each thread to Supabase for tracking, and marks the email as read once processed.

###### Good to know
	•	The OpenAI API is used for automatic email classification, which incurs a small per-request cost. See OpenAI Pricing for up-to-date info.
	•	You can easily expand the categories or connect more Slack channels to fit your workflow.
	•	The Supabase integration ensures you don’t process the same thread twice.

### How it works
	1.	Gmail Trigger checks for unread emails.
	2.	Supabase Get Row verifies if the thread already exists.
	3.	If it’s a new thread, the OpenAI node classifies the email into categories such as “support” or “new-request.”
	4.	The Switch node routes messages to the correct Slack channel based on classification.
	5.	Supabase Create Row logs thread details (sender, subject, IDs) to your database.
	6.	Finally, the Gmail node marks the message as read to prevent duplication.

### How to use
	•	The workflow uses a manual Gmail trigger by default, but you can adjust the polling frequency.
	•	Modify category names or Slack channels to match your internal setup.
	•	Extend the workflow to include auto-replies or ticket creation in your CRM.

### Requirements
	•	Gmail account (with OAuth2 credentials)
	•	Slack workspace (with channel access)
	•	OpenAI account for classification
	•	Supabase project for storing thread data

### Customizing this workflow
Use this automation to triage incoming requests, route sales leads to specific teams, or even filter internal communications. You can add nodes for auto-responses, CRM logging, or task creation in Notion or ClickUp.

## 📊 Basic Information

- **Workflow ID:** 9376
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 63
- **Downloads:** 6
- **Created:** 2025/10/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9376)

## 👤 Author

- **Name:** Bohdan Saranchuk
- **Username:** @bosar

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** 
- **slack** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **supabase** (×2)
- **if** 
- **switch** 
- **gmail** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
