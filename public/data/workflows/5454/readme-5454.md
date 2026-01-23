# Automated reservation system with Telegram, Google Gemini AI, and Google Sheets

> 💡 What It Is

SmartReserve is a flexible, automated Telegram chatbot built in n8n that allows users to request and confirm reservations for any kind of resource—training sessions, equipment, appointments, event slots, or more. It connects with Google Sheets for live availability tracking and automatically sends confirmation emails to your users.



⚙️ How It Works





Telegram Chatbot Interface
Users interact with a friendly bot to submit their reservation request. The bot collects:





Date



Name



Email



Resource / Service



Start Time & End Time



Final confirmation
All in one seamless message.



Conflict-Free Booking System
The bot checks your existing reservation sheet to avoid time overlaps before confirming.



Google Sheets Integration
Two spreadsheets are used:





Resource Info: Define available services, resources, or assets.



Reservation Log: Store confirmed reservations in structured rows.



Confirmation via Email
Once a reservation is accepted, the bot sends a detailed confirmation email to the user.



🚀 Setup Steps





Import the n8n Workflow





Use the provided .json template inside your n8n workspace.



Create Your Google Sheets





Sheet 1: Resource Info (e.g., rooms, courts, sessions, etc.)



Sheet 2: Reservation Log with these headers:



CopyEditDate | Name | Email | Resource | Start Time | End Time | Status





Set Telegram Bot Token





Create a Telegram bot and paste the token into n8n credentials.



Connect Google Sheets





Add your Google account to n8n and allow spreadsheet access.



Customize for Your Use Case





Rename “Resource” to anything (e.g., Room, Coach, Equipment).



Edit confirmation text and branding inside the “Set” and “Email” nodes.



Go Live!





Enable the workflow, and you’re ready to accept real-time reservations.

📦 What You Get





✅ One-click Telegram reservation system



✅ Conflict checker with Google Sheets



✅ Auto email confirmation



✅ User-friendly one-shot data collection



✅ Fully editable & extendable workflow



✅ Future updates and support options

🙋 Need Help Setting It Up?

If you'd like help customizing or deploying this workflow, I offer quick setup assistance and extended support.📧 Contact: tharwat.elsayed.hamad@gmail.com
💬 Whatsapp: +201061803236
Whether you're setting it up for your team, your club, or your business—I’m here to help!

## 📊 Basic Information

- **Workflow ID:** 5454
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 3580
- **Downloads:** 358
- **Created:** 2025/6/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5454)

## 👤 Author

- **Name:** Tharwat Mohamed
- **Username:** @tharwatelsayed

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleSheetsTool** (×2)
- **gmailTool** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.agent** 
- **aiTransform** 
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
