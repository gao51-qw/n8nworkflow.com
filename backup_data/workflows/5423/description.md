*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

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
