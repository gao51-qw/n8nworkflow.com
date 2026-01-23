# AI-powered lead email classification & auto-reply with GPT-4o and Gmail

> ## How it works
This workflow automatically responds to incoming emails identified as potential leads using AI-generated text.  
It connects to your email inbox via IMAP, classifies incoming messages with an AI model, filters out non-leads, and sends a personalized reply to relevant messages.

## Steps
1. **Email Trigger (IMAP):** Watches your inbox for new emails in real time.
2. **Is Lead? (Message Model):** Uses AI to determine whether the sender is a lead.
3. **Filter:** Passes only lead emails to the next step.
4. **Write Customized Reply (Message Model):** Generates a personalized response using AI.
5. **Get Message:** Retrieves original email details to ensure correct threading.
6. **Reply to Message:** Sends the AI-generated reply to the sender.

## Setup Instructions
- Connect your **IMAP Email** credentials to the first node and set the folder to watch (e.g., INBOX).
- In the "Filter leads" node, adjust the AI prompt to match your lead qualification criteria.
- In the "Reply with customized message" node, edit the AI prompt to reflect your product, service, or business tone.
- Connect your **Gmail** (or other email provider) credentials in the Get Message and Reply to Message nodes.
- Test with a few sample emails before activating.

## Requirements
- IMAP-enabled email account (for receiving messages)
- Gmail API access (or modify to your email provider)
- OpenAI or other AI model credentials for message analysis and reply generation

This template is ready to use, with all steps documented inside sticky notes for easy customization.


## 📊 Basic Information

- **Workflow ID:** 7330
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 1234
- **Downloads:** 123
- **Created:** 2025/8/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7330)

## 👤 Author

- **Name:** Rodrigo
- **Username:** @rodrigonzalezsyncra

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **emailReadImap** 
- **filter** 
- **gmail** (×2)
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.openAi** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
