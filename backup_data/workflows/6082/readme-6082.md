# Human in the loop email response system (AI + IMAP)

> How it works

This workflow automates the process of handling incoming emails by:

1. Receiving emails via IMAP.
2. Converting the email to Markdown for better AI understanding.
3. Summarizing the email using an AI model.
4. Drafting a professional reply with AI, based on the summary.
5. Requesting human approval for the AI-generated response.
6. Sending the approved reply back to the original sender.

---

Set up steps

Estimated time: 10–20 minutes (excluding credential setup)
What you’ll need:
- IMAP credentials for your email inbox
- SMTP credentials for sending emails
- OpenAI (or compatible) API key for AI steps

Setup outline:
1. Add your IMAP and SMTP credentials to the workflow.
2. Connect your OpenAI (or compatible) account for AI summarization and reply generation.
3. Deploy the workflow in n8n and activate it.
4. Test by sending an email to your connected inbox.

Note:
Detailed configuration tips and explanations are included as sticky notes inside the workflow for each step. 

## 📊 Basic Information

- **Workflow ID:** 6082
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 1516
- **Downloads:** 151
- **Created:** 2025/7/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6082)

## 👤 Author

- **Name:** Yatharth Chauhan
- **Username:** @yatharthchauhan

## 🏷️ Categories

- AI
- Lead Nurturing

## 🔗 Nodes Used

- **emailReadImap** 
- **markdown** 
- **emailSend** (×2)
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **stickyNote** (×6)
- **set** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
