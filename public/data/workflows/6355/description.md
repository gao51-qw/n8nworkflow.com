🧠 EnumX: Auto DNS Lookup for Subdomains with Markdown Export

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