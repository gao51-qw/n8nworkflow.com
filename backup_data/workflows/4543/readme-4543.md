# Smart Customer Support System with GPT-4o, Gmail, Slack & Drive Knowledge Base'

> The  AI Support Agent combines Gmail, Slack, and Google Drive into a seamless support workflow powered by GPT-4o and Pinecone.

🧠 Email Monitoring – New support emails are pulled from Gmail every minute.
📤 Classification – AI categorizes emails (e.g., billing, support, spam, urgent).
📚 Knowledge-Based Replies – GPT-4o drafts personalized replies using your support documents synced from Google Drive and stored in Pinecone.


📩 Automatic Response – The agent replies to the customer in the same Gmail thread.
🚨 Escalation Detection – If human support is needed, Slack is notified instantly.
📊 Logging – Each interaction is logged in Google Sheets for tracking and analysis.
🔁 Live Sync – Any document added to your Google Drive folder is auto-loaded into the knowledge base for future AI responses.
🛠️ Quick Setup Steps
🛠️ Quick Setup Checklist

⏱ Time to Deploy: ~10–15 minutes
🔌 1. Connect Integrations
✅ Gmail (OAuth2)
✅ Google Drive (OAuth2)
✅ Google Sheets (OAuth2)
✅ OpenAI API Key
✅ Pinecone API Key
✅ Slack Webhook (for alerts)

🗂️ 2. Update Workflow IDs
Replace the sample IDs in your nodes:

📁 Google Drive Folder ID → Where your KB lives
📊 Google Sheet ID → Where interactions are logged
🚨 Slack Webhook URL → Where urgent alerts go
🔎 Pinecone Index → Your vector storage index

🎨 3. Customize Prompt & Tone
Go to 🔧 “Response Agent” Node
Update the System Prompt to reflect your brand’s tone:
e.g. “We’re always here to help, and we reply fast.”

📂 4. Upload Your Docs
Add .pdf, .txt, or .docx files to your synced Google Drive folder.
The agent will auto-read and embed them into Pinecone for AI-powered replies.

▶️ 5. Run & Test
Send a test email from another account
✅ Watch the reply come through Gmail
✅ Check Slack for urgent alert
✅ Confirm logging in Google Sheets
✅ Done!


## 📊 Basic Information

- **Workflow ID:** 4543
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 466
- **Downloads:** 46
- **Created:** 2025/6/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4543)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Support Chatbot
- AI RAG

## 🔗 Nodes Used

- **gmailTrigger** 
- **code** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **if** 
- **httpRequest** 
- **googleSheets** 
- **stickyNote** 
- **gmailTool** 
- **googleDriveTrigger** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
