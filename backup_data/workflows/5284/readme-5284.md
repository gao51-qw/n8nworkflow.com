# Daily govt exam quiz by Gopal Debnath (mrtechyguru)

> 💡 How It Works:

1. ⏰ Triggers daily at 6:00 AM


2. 📊 Fetches one random question from your Google Sheet


3. 🧠 Formats question, options, correct answer, and explanation


4. 📤 Sends it to:

📧 Email

💬 Telegram (via Bot)

📱 WhatsApp/SMS (via Twilio)





---

🔧 What You Need to Configure:

YOUR_GOOGLE_SHEET_ID → your sheet with columns: question, optionA, optionB, optionC, optionD, correctAnswer, explanation

Email credentials (SMTP)

Telegram Bot Token & Chat ID

Twilio phone numbers and credentials

## 📊 Basic Information

- **Workflow ID:** 5284
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 452
- **Downloads:** 45
- **Created:** 2025/6/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5284)

## 👤 Author

- **Name:** Gopal Debnath
- **Username:** @mrtechyguru

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **cron** 
- **googleSheets** 
- **function** 
- **emailSend** 
- **telegram** 
- **twilio** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
