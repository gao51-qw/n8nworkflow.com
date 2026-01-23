# Streamline Content Creation with GPT-4o and One-Click Human Review Approvals

> ## Overview
Automate AI content creation from request to approval. While AI writes quickly, human review often delays delivery—and multiple tools create workflow gaps and version confusion. This unified solution streamlines the entire process, enabling teams to produce quality content at scale with transparent tracking.

## How it works
Submit a form with your topic, tone, and keywords. GPT-4o generates the content and assigns a quality score (0–100). The reviewer receives an email to approve, edit, or reject the draft—all actions are automatically logged in Google Sheets for tracking and audit purposes.

## Setup steps
1. Import the workflow JSON file into n8n
2. Connect your OpenAI and Google account credentials
3. Update three variables in the workflow: SHEET_ID (your Google Sheets document ID), REVIEWER_EMAIL (recipient for review notifications), and WEBHOOK_URL (for form submissions)
4. Test the workflow with a sample submission

### Workflow Stages
1. Submit a form with topic, tone, and keywords.
2. GPT-4o generates content and assigns a quality score (0–100).
3. Reviewer receives an email to approve, edit, or reject the draft.
4. All review actions are automatically logged in Google Sheets with timestamps and approval status.


## Requirements
n8n v1.0+ instance, OpenAI API key with GPT-4o access, and Google Workspace with OAuth2 credentials.

## Custom options
Choose model: gpt-4o, 4o-mini, or 3.5-turbo. Adjust score weights: Readability 40%, Keywords 30%, Length 30%.

## Key benefits
Generate drafts 99% faster and approve content 95% quicker. Centralized tracking ensures clarity and accountability.

## 📊 Basic Information

- **Workflow ID:** 10072
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 57
- **Downloads:** 5
- **Created:** 2025/10/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10072)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** (×3)
- **webhook** 
- **if** (×2)
- **googleSheets** (×5)
- **respondToWebhook** (×3)
- **set** 
- **gmail** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
