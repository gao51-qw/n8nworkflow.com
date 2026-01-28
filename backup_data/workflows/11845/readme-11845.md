# Auto-draft professional email replies with Gmail, AI, and Slack

> ## What this workflow does

This workflow monitors your Gmail inbox for new, unreplied emails and automatically generates a professional reply draft using AI.  
Instead of sending the email automatically, the draft is sent to Slack so a human can review and decide whether to send it.

This makes it ideal for teams that want to save time on email replies while keeping full control over outgoing communication.

---

## How it works

1. Checks Gmail on a schedule for new, unreplied emails  
2. Limits the number of emails processed per run to avoid overload  
3. Extracts the email body and sends it to an AI model  
4. Generates a polite, professional reply draft  
5. Sends the draft to a Slack channel for review  
6. Adds a Gmail label to prevent duplicate processing

---

## Setup time

~10–15 minutes

---

## Who this is for

- Customer support teams  
- Freelancers and consultants  
- Small businesses handling frequent email inquiries  
- Anyone who wants AI-assisted email replies with human approval

---

## Requirements

- Gmail account  
- Slack workspace  
- OpenAI (or compatible AI) credentials


## 📊 Basic Information

- **Workflow ID:** 11845
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 39
- **Downloads:** 3
- **Created:** 2025/12/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11845)

## 👤 Author

- **Name:** kota
- **Username:** @takasuka

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **limit** 
- **gmail** (×3)
- **if** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **slack** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
