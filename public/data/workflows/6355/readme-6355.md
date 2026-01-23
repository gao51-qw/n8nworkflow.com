# Automated DNS records lookup for subdomains with HackerTarget API reports

> 🧠 EnumX: Auto DNS Lookup for Subdomains with Markdown Export

Who’s it for

Security engineers, red teamers, or automation-curious teams looking to enhance passive reconnaissance with minimal effort. Ideal for early-stage security setups, bug bounty hunters, and SME SOC analysts.

What it does

This workflow performs passive subdomain enumeration and DNS record lookup for a given domain. It parses the data, generates a clean markdown report, and sends it via email.

🌐 Uses HackerTarget APIs for subdomain and DNS data

🧠 Parses records (A, AAAA, CNAME, TXT, MX, NS, SOA)

📨 Sends a structured markdown report to a designated inbox

🛡️ Useful for recon, misconfiguration detection, and compliance evidence

How to set up
Replace the email address in the Gmail node with your recipient.

(Optional) Replace HackerTarget API with your own recon APIs.

Click Execute Workflow or trigger via cron on schedule.

View the full markdown output in your inbox.

Requirements
Free Gmail account (with n8n Gmail OAuth2 configured)

(Optional) Replace example.com with your target domain

Internet access (API calls use HTTPS)

How to customize the workflow
Modify the target domain via the "🌐 Target Domain" Set node

Adjust markdown format in “📝 Format DNS Markdown”

Replace Gmail node with Slack/Telegram/Notion if preferred

Add additional enrichment nodes (e.g., Shodan, VirusTotal) for deeper analysis

*💼 This template is part of the CYBERPULSE AI BlueOps/RedOps suite. 

## 📊 Basic Information

- **Workflow ID:** 6355
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 298
- **Downloads:** 29
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6355)

## 👤 Author

- **Name:** Adnan Tariq
- **Username:** @adnantariq

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **httpRequest** (×2)
- **code** (×4)
- **merge** 
- **gmail** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
