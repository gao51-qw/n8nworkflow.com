# CYBERPULSE AI redOps: credential trap sim: fake login page simulation

> ## 📝 Description:
Simulate a phishing login page to test user behavior and SOC response. This controlled workflow sends trap links to predefined targets and logs simulated interaction results—without capturing real credentials.

## ✅ Who’s It For:
Red Teams conducting phishing awareness campaigns

SOCs validating alert triggers for credential-based phishing

GRC/Compliance teams performing control testing

## ⚙️ How It Works:
Loads test targets from Google Sheets

Generates trap page URLs (non-malicious)

Fakes login interaction upon click

Logs timestamped event and status to Google Sheet

## 📦 Requirements:
Google Sheets credentials

Optional: Use Vercel/Cloudflare to deploy a real HTML page for advanced simulation

No sensitive data is collected

## 📁 File Templates:
RedOps_CredentialTrapSim_Log_Template.xlsx

email	name	team	payload	response	status	module	timestamp
jane@org.com	Jane Doe	HR	fake-login.com	User clicked	Simulated	Credential_Trap_Sim	2025-07-27T11:00:00Z

## 🧠 Customization Tips:
Change trap content using a public static site

Connect to real EDR/alert system for end-to-end SOC validation

Adjust payload wording for different awareness campaigns

## ⚠️ Ethics & Warning:
This module is 100% simulated and does not capture real credentials. Use only in authorized environments with informed consent. It is designed for training, awareness, and control testing under ethical guidelines.

🔗 Part of the CYBERPULSE AI RedOps Suite
🌐 https://cyberpulsesolutions.com
📧 info@cyberpulsesolutions.com

## 📊 Basic Information

- **Workflow ID:** 6510
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 69
- **Downloads:** 6
- **Created:** 2025/7/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6510)

## 👤 Author

- **Name:** Adnan Tariq
- **Username:** @adnantariq

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **stickyNote** (×2)
- **manualTrigger** 
- **googleSheets** (×2)
- **if** 
- **set** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
