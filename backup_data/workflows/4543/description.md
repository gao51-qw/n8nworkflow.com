The  AI Support Agent combines Gmail, Slack, and Google Drive into a seamless support workflow powered by GPT-4o and Pinecone.

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
