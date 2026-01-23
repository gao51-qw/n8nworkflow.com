# Automate security incident response with Google Sheets, email alerts and EDR isolation

> 👤 Who it’s for
SOC teams, incident responders, or solo defenders who need to automatically act on critical threats without manual triage.

Ideal for BlueOps users who’ve already classified alerts via GPT (Module 4) and want to auto-execute response steps like email alerts, logging, or EDR isolation.

⚙️ How it works / What it does
Reads critical alerts from a classified incident log (e.g., Module 4 output)

Filters alerts by severity = Critical

Sends alert summary via email (custom HTML formatting)

Logs all details to a central incident response sheet

Optionally sends a request to your EDR/Isolation API (e.g. CrowdStrike or simulated API)

🛠️ How to set up
Replace Placeholder API Key
Swap in your secure ISOLATION_API_KEY from your EDR or proxy tool

Update Email Settings
Insert your FROM_EMAIL and TO_EMAIL credentials in the Email node

Connect Sheets
Authorize access to both your Classified Alerts sheet and Incident Log sheet

Schedule the Run
Default trigger is weekly — change it to run hourly, on webhook, or via logic hook

📋 Requirements
EDR or endpoint proxy API accepting POST requests

Open or pre-classified incident sheet (Module 4 required)

SMTP email provider or Gmail API access

Google Sheets or internal DB to log actions

🧩 How to customize the workflow
Replace Google Sheets with Supabase or your internal SQL

Swap email alerts with ticketing system (e.g., Jira or Slack alerts)

Trigger downstream actions (e.g. auto-pause cloud assets)

Modify aggregation or isolation logic to your threat model

📦 This is a live-fire auto-responder workflow.
Make sure to test with dummy data before enabling full EDR triggers.
All sensitive variables are clearly marked with placeholders.

🚨 This module is part of the CYBERPULSEBlueOps Pro Incident Response Suite.
View the full lineup at 👉 cyberpulsesolutions.com/blueops

## 📊 Basic Information

- **Workflow ID:** 6413
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 83
- **Downloads:** 8
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6413)

## 👤 Author

- **Name:** Adnan Tariq
- **Username:** @adnantariq

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **scheduleTrigger** 
- **emailSend** 
- **httpRequest** 
- **googleSheets** (×2)
- **if** 
- **aggregate** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
