# Aggregate endpoint security risk scores with EDR, vulnerability data & Google Sheets

> 👤 Who it’s for
Security teams, SOC analysts, and small-to-mid IT teams looking to automatically assess endpoint risk by combining known vulnerabilities with internal asset value and dynamic threat indicators.

Perfect for teams using Google Sheets or CSV asset inventories who want to prioritize incidents based on true business risk — not just raw CVE scores.

⚙️ How it works / What it does
Fetches endpoint-specific CVE data from prior modules or external feeds

Loads enriched internal asset inventory (IP, department, criticality, etc.)

Calculates risk score using a weighted formula:
(CVE severity × Asset risk rating × Exposure coefficient)

Applies custom playbook rules to determine action level (Notify / Investigate / Isolate)

Outputs filtered, triaged list of high-risk endpoints

Logs results to active and historical threat sheets

Sends summary email alerts based on final triaged list

🛠️ How to set up
Google Sheets:
Connect your enriched asset inventory and endpoint vulnerability input sheets
using your OAuth2 credentials

Edit Thresholds:
Adjust scoring logic or thresholds in the “🔎 Risk Score Calculator” node

Email Alerts:
Add your sender credentials and customize recipient address list

Automation Trigger:
Optional: Add a Cron node or Webhook to run this aggregator hourly/daily

Review sticky notes:
All logic is labeled clearly with setup instructions

📋 Requirements
Google account + access to n8n Google Sheets integration

Vulnerability scan output (from CyberScan or external CVE feed)

Enriched asset inventory with basic scoring fields (asset value, criticality)

SMTP or email alert service (optional)

🧩 How to customize the workflow
Replace Google Sheets with Supabase, Airtable, or internal DB

Add columns for department ownership, system type, or live agent signals

Integrate with EDR/XDR system or incident tracking tool

Expand the playbook to include automatic isolation triggers

📦 This is a clean, production-ready version with no sensitive data.
Placeholders are clearly marked.

🔐 This module is part of the CYBERPULSEBlueOps Pro Pack.
Get access to advanced automation, isolation triggers, full asset triage logic, and instant download at
👉 cyberpulsesolutions.com/blueops

## 📊 Basic Information

- **Workflow ID:** 6411
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 63
- **Downloads:** 6
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6411)

## 👤 Author

- **Name:** Adnan Tariq
- **Username:** @adnantariq

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **cron** 
- **httpRequest** (×3)
- **merge** (×2)
- **function** 
- **googleSheets** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
