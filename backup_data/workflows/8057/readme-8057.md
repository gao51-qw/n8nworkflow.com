# Generate AI meeting notes from Zoom with GPT-4, Google Docs & Slack

> # 📝 Auto-Generate Meeting Notes & Summaries (Zoom → Google Docs + Slack)

This workflow automatically captures Zoom meeting data when a meeting ends, generates AI-powered notes, saves them to Google Docs, and instantly posts a summary with a link in Slack.

---

## ⚙️ How It Works
1. **Zoom Webhook** → Triggers on `meeting.ended` or `recording.completed`.  
2. **Normalize Data** → Extracts meeting details (topic, host, duration, transcript).  
3. **AI Notes (GPT-4)** → Summarizes transcript into key decisions, action items, and next steps.  
4. **Google Docs** → Saves formatted meeting notes + transcript archive.  
5. **Slack Post** → Shares summary + link to notes in `#team-meetings`.

---

## 🛠️ Setup Steps
### 1. Zoom App
- Go to Zoom Developer Console → create App.  
- Enable event **`meeting.ended`**.  
- Paste workflow webhook URL.

### 2. Google Docs
- Connect Google OAuth in n8n.  
- Docs auto-saved in your Google Drive.

### 3. Slack
- Connect Slack OAuth.  
- Replace channel `#team-meetings`.

### 4. OpenAI
- Add your OpenAI API key.  
- Uses **GPT-4** for accurate summaries.

---

## 📊 Example Output
**Slack Message:**  
# 📝 Auto-Generate Meeting Notes & Summaries (Zoom → Google Docs + Slack)

This workflow automatically captures Zoom meeting data when a meeting ends, generates AI-powered notes, saves them to Google Docs, and instantly posts a summary with a link in Slack.

---

## ⚙️ How It Works
1. **Zoom Webhook** → Triggers on `meeting.ended` or `recording.completed`.  
2. **Normalize Data** → Extracts meeting details (topic, host, duration, transcript).  
3. **AI Notes (GPT-4)** → Summarizes transcript into key decisions, action items, and next steps.  
4. **Google Docs** → Saves formatted meeting notes + transcript archive.  
5. **Slack Post** → Shares summary + link to notes in `#team-meetings`.

---

## 🛠️ Setup Steps
### 1. Zoom App
- Go to Zoom Developer Console → create App.  
- Enable event **`meeting.ended`**.  
- Paste workflow webhook URL.

### 2. Google Docs
- Connect Google OAuth in n8n.  
- Docs auto-saved in your Google Drive.

### 3. Slack
- Connect Slack OAuth.  
- Replace channel `#team-meetings`.

### 4. OpenAI
- Add your OpenAI API key.  
- Uses **GPT-4** for accurate summaries.

---

## 📊 Example Output
**Slack Message:**  
📝 New Meeting Notes Available
Topic: Marketing Sync
Host: david@company.com
Duration: 45 mins
👉 Read full notes here: https://docs.google.com/document/d/xxxx

**Google Doc:**  
- Executive Summary  
- Key Decisions  
- Action Items w/ Owners  
- Next Steps  
- Full Transcript  

---

⚡ With this workflow, your team never scrambles for meeting notes again.


## 📊 Basic Information

- **Workflow ID:** 8057
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 358
- **Downloads:** 35
- **Created:** 2025/8/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8057)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Internal Wiki
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **code** 
- **openAi** 
- **googleDocs** 
- **slack** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
