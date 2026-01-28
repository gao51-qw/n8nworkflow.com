# Automatic Gmail message categorization with GPT-4 content analysis & labels

> ## Who is this for?

This workflow is ideal for Gmail users and teams who receive a high volume of emails and want to streamline inbox management. It suits professionals seeking to organize messages automatically, including sales teams, project managers, support staff, and anyone who benefits from automated email categorization.

## What problem is this workflow solving? / Use case

Manually labeling emails is time-consuming and can lead to inconsistent organization. This automated n8n workflow uses Gmail and OpenAI to analyze incoming messages and apply the appropriate labels, such as "Quotation", "Inquiry", "Project progress", and "Notification", based on content—improving productivity and ensuring important messages are prioritized.

## What this workflow does

The workflow retrieves new Gmail messages, analyzes their content with OpenAI, and automatically assigns pre-defined Gmail labels that match the email’s intent. This ensures emails are sorted efficiently using AI-powered content analysis and Gmail’s labeling system.

## Setup

- Ensure Gmail labels (e.g., "Quotation", "Inquiry") are created in your Gmail account.
- Connect your Gmail and OpenAI accounts as credentials in n8n.
- Import the workflow into your n8n instance and update node configurations to match your Gmail label names.

## How to customize this workflow to your needs

- Edit or add Gmail labels both in your Gmail account and within the workflow logic.
- Adjust the prompt or parameters sent to OpenAI to better match your categorization style.
- Expand or refine the list of label categories to fit your team’s or business’s requirements.


## 📊 Basic Information

- **Workflow ID:** 4680
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 972
- **Downloads:** 97
- **Created:** 2025/6/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4680)

## 👤 Author

- **Name:** Henry
- **Username:** @henry

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×7)
- **gmailTrigger** 
- **gmail** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **set** 
- **splitOut** 
- **merge** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
