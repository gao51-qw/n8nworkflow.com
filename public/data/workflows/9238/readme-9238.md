# Monitor LinkedIn Sales Navigator messages with Gmail & Google Sheets alerts

> ## Description
Never miss a qualified LinkedIn Sales Navigator message again. This automation monitors your Gmail for LinkedIn notifications, cross-references senders with your lead database in Google Sheets, and instantly sends you categorized email alerts. Stay on top of high-value conversations in real time. 🚀

## What This Template Does
- Monitors Gmail inbox for LinkedIn Sales Navigator notifications. 📧
- Extracts sender names from LinkedIn email headers. 🔍
- Fetches your lead database from Google Sheets (organized by industry or domain). 📊
- Cleans and standardizes lead names and categories. 🧹
- Merges LinkedIn senders with your lead database. 🔀
- Matches senders to known leads and retrieves their categories. 🎯
- Sends email alerts when a matched lead contacts you, showing name + category. 📬

## Key Benefits
- Respond faster with instant notifications when qualified leads send messages. ⚡
- Prioritize outreach with industry-based categorization. ✅
- Reduce manual inbox checking—automated 24/7 monitoring. ⏱️
- Ensure no missed opportunities from valuable prospects. 💡
- Scales effortlessly across industries and large lead lists. 📈

## Features
- Gmail fetch node with LinkedIn notification filter. 📥
- Sender name extraction and cleanup for accuracy. ✂️
- Google Sheets integration for lead database. 🔗
- Name cleaning to remove dropdown artifacts like "Select...". 🧼
- Data merge node combining LinkedIn senders and sheet leads. 🔄
- Matching logic with case-insensitive comparison. 🧠
- Gmail node for sending categorized alert emails. ✉️

## Requirements
- n8n instance (cloud or self-hosted). 🧰
- Gmail account with LinkedIn notifications enabled. 📧
- Google Sheet named (e.g., “Edtech”) with columns Name and Category, shared with n8n Google account. 📑
- Gmail account credentials configured in n8n. 🔑

## Target Audience
- Sales reps working in LinkedIn Sales Navigator. 📈
- Agencies tracking multiple industries and lead lists. 🤝
- Founders and B2B startups who rely heavily on LinkedIn messaging. 🚀
- Lead management teams needing structured alerts for fast responses. 🧭

## Step-by-Step Setup Instructions (Concise)
- Connect your Gmail account to n8n. 🔐
- Update the Google Sheets node with your lead database (Document ID + sheet name). 📋
- Test workflow with the manual trigger to fetch sample notifications. ▶️
- Replace manual trigger with a Gmail trigger for real-time alerts. ⏱️
- Update the recipient email in the alert node to your own address. 📧
- Enable the workflow and let it run continuously. 🚦

## Security Best Practices
- Keep your lead database shared only with the n8n Google account. 🔒
- Use Gmail API credentials stored securely in n8n, not hardcoded. 🛡️
- Validate sender names before merging with leads to prevent mismatches. ✅
- Regularly update your Google Sheet to keep categories accurate. 🗂️

## 📊 Basic Information

- **Workflow ID:** 9238
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 43
- **Downloads:** 4
- **Created:** 2025/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9238)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **stickyNote** (×12)
- **manualTrigger** 
- **gmail** (×2)
- **code** (×3)
- **googleSheets** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
