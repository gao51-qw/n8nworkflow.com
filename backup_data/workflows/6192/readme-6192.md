# Automated invoice follow-ups with smart response tones via Google Sheets & email

> 🔍 How It Works
This AI Agent checks your invoice database (Google Sheets) daily and looks for unpaid invoices that are past their due date. It calculates how many days each invoice is overdue (Days Past Due / DPD), then automatically crafts a follow-up message with an appropriate tone:

- 1–7 days overdue: Friendly reminder
- 8–14 days overdue: Slightly firm nudge
- 15+ days overdue: Final warning tone


After generating the message, it sends the follow-up via email to the client and logs the interaction. You can extend this to send WhatsApp messages, Slack alerts, or update a CRM.

⚙️ Set Up Steps
- Connect Google Sheets : Replace YOUR_SHEET_ID in the workflow with the actual Sheet ID
- Make sure your sheet has these columns: client_name, email, invoice_number, due_date, status
- Adjust Cron Trigger
- By default, it runs daily — you can change the frequency in the “Daily Trigger” node.
- Configure Email Node
- Set your email sender (Gmail, SMTP, or Mailgun) in the “Send Email” node.
- Customize Messages (Optional)
- Modify tone and content in the “Generate Message” node based on your brand style.
- Run & Monitor
- Activate the workflow
- Monitor activity in Google Sheets or add a logging step (Notion, Slack, etc.)

## 📊 Basic Information

- **Workflow ID:** 6192
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 444
- **Downloads:** 44
- **Created:** 2025/7/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6192)

## 👤 Author

- **Name:** Marth
- **Username:** @marth

## 🏷️ Categories

- Invoice Processing
- Multimodal AI

## 🔗 Nodes Used

- **cron** 
- **googleSheets** 
- **function** (×3)
- **emailSend** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
