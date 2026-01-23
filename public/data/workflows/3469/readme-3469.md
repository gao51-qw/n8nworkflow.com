# Gumroad Clientbell: Auto-log sales, ping Telegram, & thank via email

> ## Who is this for?  
This template is perfect for **Gumroad creators, solopreneurs, digital product sellers**, and **freelancers** who want to **track and thank customers automatically** — without spending time on manual work.

---

## What problem does this solve?  
Every sale is a moment to build trust. But manually checking your inbox for new orders, logging clients, and remembering to send a thank-you note? It’s time-consuming and inconsistent.

**This workflow handles it all:**  
From sale → to sheet → to ping → to personalized “thank you” — all fully automated.

---

## What this workflow does:  
✅ Triggers on each new sale on **Gumroad**  
📋 Extracts buyer details, amount paid, and product purchased  
📈 Logs the sale to a **Google Sheet** for tracking  
📲 Sends a **Telegram approval message** to notify you  
💌 (Optional) Sends a Gmail **thank-you email** to the buyer  
🔁 Keeps your workflow organized with color-coded notes and sample data

---

## ⚙️ Setup Instructions:

1. Create **Gumroad API** and connect the trigger node  
2. Authenticate with **Google Sheets** to store each client  
3. Connect your **Telegram bot** for real-time alerts  
4. (Optional) Setup **Gmail API** for sending thank-you emails  
5. Customize the email copy & sheet headers (e.g. % cut, timestamps)

---

## 🗒 Color-coded workflow notes:

To make customization smooth, the workflow includes a **color-coded sticky note system**:

🟩 **Green Notes** – Main building blocks (trigger, logging, ping, email)  
🟦 **Blue Notes** – Setup guidance and editable fields (e.g. your email or brand name)  
🟨 **Yellow Notes** – Optional upgrades (e.g. swap Gmail, use AI email generator, change to WhatsApp)

Each step has comments or hints to make your setup easy — whether you're new to n8n or a seasoned automator.

---

## 🔧 How to customize this workflow?

🎯 Swap Gmail with Outlook, SMTP, or Mailgun  
🤖 Use AI (e.g. OpenAI or Claude) to draft personalized emails dynamically  
📞 Replace Telegram with WhatsApp, Discord, or Slack  
🗃️ Log to Airtable or Notion instead of Google Sheets  
🧠 Add approval logic or advanced tagging in Gmail

---

## 🧾 Licensing & Support

This template is built by **Velebit from Innovatio**. External links (Gumroad store or support email) are included in the notes for optional help and upgrades.

A separate license applies to the paid version on Gumroad, which includes additional modules and commercial use rights.

📩 Support & customization: **velebit@innovatio.design**


## 📊 Basic Information

- **Workflow ID:** 3469
- **Complexity:** advanced
- **Node Count:** 43
- **Views:** 1045
- **Downloads:** 104
- **Created:** 2025/4/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3469)

## 👤 Author

- **Name:** Velebit from Innovatio
- **Username:** @innovatio

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **googleSheets** 
- **set** (×2)
- **gumroadTrigger** 
- **telegram** 
- **if** 
- **gmail** 
- **stickyNote** (×28)
- **noOp** 
- **airtable** 
- **hubspot** 
- **notion** 
- **twilio** 
- **emailSend** 
- **microsoftOutlook** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 43 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
