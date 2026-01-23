# Automate lead response with Google Sheets, OpenAI, Gmail, and Slack notifications

> ![Screenshot 20250926 at 140039 ▶️ Lead Nurturing Agent  n8n.png](fileId:2690)

## Generate and send personalized lead emails from Google Sheets via OpenAI to Gmail with Slack alerts
## Description

This template triggers when a new row appears in Google Sheets (from any intake form that writes to the sheet). It validates key fields, performs light deduplication by email or phone, and sends the data to OpenAI to generate a concise, brand-safe first-touch email. At the same time, the model classifies each lead as High, Medium, or Low based on your criteria for budget, services, and timeline. The email is sent immediately from your connected Gmail (or SMTP) account. The sales team is notified in Slack with the lead’s name, contact details, services of interest, budget, and a deep link to the exact Google Sheets row. The Google Sheet is then updated with send status, lead type, and a timestamp for easy tracking.

## Setup: 
Connect Google Sheets (read/write), Gmail/SMTP, Slack (webhook or app), and an OpenAI API key. Provide brief classifier rules and a short tone guide with one clear CTA (reply or booking link). Include a one-line opt-out in the email body to stay compliant. Expected headers are: Timestamp, Name, Email Address, Phone Number, Services Interested In, Budget Range, Preferred Contact Time, Project Timeline, and Additional Comments. The trigger checks the sheet every minute and processes after-hours submissions right away. You can extend the flow with calendar booking links, territory routing, or rate limits as needed.


## 📊 Basic Information

- **Workflow ID:** 8995
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 244
- **Downloads:** 24
- **Created:** 2025/9/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8995)

## 👤 Author

- **Name:** Jack Mason
- **Username:** @jack-bluecrabai

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **wait** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **gmail** 
- **googleSheets** 
- **slack** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
