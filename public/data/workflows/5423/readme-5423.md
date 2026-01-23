# Gmail MCP workflow - AI-powered email management

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

## MCP Gmail Workflow – AI-Powered Email Management

## ✨ What It Does
A smart n8n workflow that connects Gmail with an AI agent (via MCP), letting you send, read, and organize emails using natural language.

## ⚙️ Key Features
🧠 AI Commands: “Send email to John about the budget”
📥 Inbox Control: Mark read/unread, apply/remove labels
🗂 Smart Organization: Auto-label based on content
🤖 MCP-Ready: Works with Claude, ChatGPT, etc.
## 🎯 Use Cases
“📤 Send a follow-up to the client about yesterday’s meeting”
“📬 Mark all newsletters as read and label ‘Newsletter’”
“🧾 Summarize latest email from Sarah”
“🗃 Label all Project X emails as ‘Project-X-2024’”
“⭐ Find unread emails from my manager and mark as important”
🛠 Setup Guide
🔑 Prerequisites

n8n (self-hosted or cloud)
Gmail API credentials
MCP-compatible AI (optional but powerful)
## 📥 1. Import Workflow

Copy JSON → Open n8n → Import → Paste → Done ✅
## 🔐 2. Gmail OAuth2 Setup

Create Google project → Enable Gmail API
Create OAuth2 creds → Add n8n redirect URI
In n8n: Add Gmail OAuth2 → Paste Client ID/Secret → Connect
## 🧩 3. Update Credential References

Find your credential ID in n8n
Update each Gmail node with your ID
## 🧠 4. MCP Trigger (Optional)

Use provided webhook URL in your AI system
Send test prompts to verify connection
## 🧪 5. Test Key Actions

✅ “Send a test email”
✅ “Read latest email”
✅ “Label last email as ‘Test’”
✅ “Mark latest email as unread”
## ⚙️ 6. Advanced Tips

Create custom labels in Gmail
Use HTTPS + webhook auth
Add retries and error handling in n8n
🧯 Troubleshooting
❗ Gmail Auth Error? → Re-auth and check redirect URI
❗ Webhook not firing? → Check endpoint + manual test
❗ Label errors? → Use correct label names or IDs
✅ Required Gmail Scopes:
gmail.modify
gmail.send
📈 Best Practices
🔁 Test regularly
🔒 Use minimal permissions
🏷 Consistent label naming
🔍 Monitor execution + webhook logs
🎉 You’re All Set!
Control Gmail with your voice or text through AI. Make managing emails smarter, faster, and 100% automated 💌


## 📊 Basic Information

- **Workflow ID:** 5423
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1362
- **Downloads:** 136
- **Created:** 2025/6/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5423)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Ticket Management
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **gmailTool** (×6)
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
