# Real-time security threat dashboard with Google Sheets, AI risk analysis & email alerts

> 👤 Who it’s for
Blue Team leads, CISOs, and SOC managers who want automated visibility into threat metrics, endpoint alerts, and response actions — without needing a full SIEM or BI platform.

Great for teams using Modules 1–5 and now ready to report, review, or share BlueOps data across stakeholders.

⚙️ How it works / What it does
Fetches threat + response data from up to 5 Google Sheets

Aggregates data into four key slices:

summary_metrics: Total threats, actions, endpoints

daily_trends: Time-based charting

top_assets: High-risk endpoints or systems

actions_taken: Logged IR activity

Generates a clean HTML report and sends via email

Logs report summary to a central reporting tracker sheet

Optionally converts and stores PDF versions or links

🛠️ How to set up
Google Sheets:
Connect your live sheets from previous BlueOps modules (M1–M5)

Email Setup:
Insert sender credentials and recipient(s)

Customize Your Charts:
Edit the “📈 Format Charts” and “📋 Structure Report Body” nodes

Trigger Options:
Run weekly, monthly, or on-demand via Webhook/Cron

Add PDF Generator (Optional):
Use Puppeteer, HTML → PDF services, or internal scripts

📋 Requirements
Google account with access to all BlueOps logs

SMTP or Gmail access for report delivery

Optional: PDF storage service or HTML → PDF logic

Previous modules (M1–M5) to populate threat/response data

🧩 How to customize the workflow
Swap out Google Sheets for Supabase or Notion

Modify visual output (color, layout, sections) using HTML nodes

Export to Airtable, Slack, or external BI tools

Add chart images using ChartJS, QuickChart API, or CloudConvert

📦 This module is modular, professional, and presentation-ready.
All sections are labeled, editable, and safe for team-wide sharing.

📈 This module is the final piece of the CYBERPULSEBlueOps automation suite.
Get the full reporting engine and link with live BlueOps modules at
👉 cyberpulsesolutions.com/blueops

## 📊 Basic Information

- **Workflow ID:** 6415
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 127
- **Downloads:** 12
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6415)

## 👤 Author

- **Name:** Adnan Tariq
- **Username:** @adnantariq

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×3)
- **merge** 
- **code** (×5)
- **if** 
- **emailSend** (×2)
- **googleSheets** (×2)
- **switch** 
- **splitOut** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
