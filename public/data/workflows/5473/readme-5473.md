# AI-powered email to Jira ticket creation with Llama 3.2

> This AI-powered workflow reads emails, understands the request using an LLM, and creates structured Jira issues.

### Key Insights

- Poll for new emails every 5 minutes; ensure Gmail/IMAP is properly configured.  
- AI analysis requires a reliable LLM model (e.g., Chat Model or AI Tool).

### Workflow Process

- Trigger the workflow with the `Check for New Emails Gmail Trigger` node.  
- Fetch full email content using the `Fetch Full Email Content get message` node.  
- Analyze email content with the `Analyze Email & Extract Tasks` node using AI.  
- Parse the AI-generated JSON output into tasks with the `Parse JSON Output from AI` node.  
- Create the main Jira issue with the `Jira - Create Main Issue create: issue` node.  
- Split subtasks from JSON and create them with the `Split Subtasks JSON Items` and `Create Subtasks create: issue` nodes.

### Usage Guide

- Import the workflow into n8n and configure Gmail and Jira credentials.  
- Test with a sample email to ensure ticket creation and subtask assignment.

### Prerequisites

- Gmail/IMAP credentials for email polling  
- Jira API credentials with issue creation permissions  

### Customization Options

Adjust the `Analyze Email & Extract Tasks` node to refine AI task extraction or modify the polling frequency in the trigger node.

## 📊 Basic Information

- **Workflow ID:** 5473
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 3241
- **Downloads:** 324
- **Created:** 2025/6/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5473)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Project Management
- AI Summarization

## 🔗 Nodes Used

- **gmail** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **code** (×2)
- **stickyNote** 
- **gmailTrigger** 
- **jira** (×2)
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
