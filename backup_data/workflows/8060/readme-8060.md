# Auto-summarize Zoom recordings with GPT-4 → Slack & email

> # 🎥 Auto-Summarize Zoom Recordings → Slack & Email

Never lose meeting insights again! This workflow automatically summarizes Zoom meeting recordings using **OpenAI GPT-4** and delivers structured notes directly to **Slack** and **Email**.

---

## ⚙️ How It Works
1. **Zoom Webhook** – triggers when a recording is completed.  
2. **Normalize Data** – extracts meeting details + transcript.  
3. **OpenAI GPT-4** – creates structured meeting summary.  
4. **Slack** – posts summary to your chosen channel.  
5. **Email** – delivers summary to your inbox.  

---

## 🛠️ Setup Steps
### 1. Zoom
- Create a Zoom App with the **`recording.completed`** event.  
- Add workflow webhook URL.

### 2. OpenAI
- Add your **API key** to n8n.  
- Use **GPT-4** for best results.

### 3. Slack
- Connect Slack credentials.  
- Replace `YOUR_SLACK_CHANNEL` with your channel ID.  

### 4. Email
- Connect Gmail or SMTP.  
- Replace recipient email(s).  

---

## 📊 Example Slack Message
📌 Zoom Summary
Topic: Sales Demo Pitch
Host: alex@company.com
Date: 2025-08-30
Summary:

Reviewed Q3 sales pipeline
Discussed objections handling
Assigned action items for next week

---

⚡ Get instant summaries from every Zoom meeting — no more manual note-taking!


## 📊 Basic Information

- **Workflow ID:** 8060
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 322
- **Downloads:** 32
- **Created:** 2025/8/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8060)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Support Chatbot
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **code** 
- **openAi** 
- **slack** 
- **gmail** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
