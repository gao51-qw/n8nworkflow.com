# Weekly competitor Facebook ads intelligence report with Airtop and Gmail

> README

# Monitor Competitor Facebook Ads with Airtop

## Use Case

Monitor a competitor’s active Facebook ads and get a weekly HTML intelligence brief by email — saving time on manual research and helping you spot messaging, offers, and creative trends quickly.

## What This Automation Does

* Runs weekly on a set schedule.
* Uses **Airtop** to visit the competitor’s Facebook Ad Library page and extract up to 30 active ads.
* Summarizes each ad with key points: message, topic, CTA, duration active, language, target audience.
* Sends the compiled HTML report via Gmail.

## How It Works

1. **Schedule Trigger** – Fires once a week at the configured time.
2. **Airtop Extraction** – Loads the Ad Library URL and runs a prompt to extract and format the ads into HTML.
3. **Email Delivery** – Sends the HTML report to your specified recipient using Gmail.

## Setup Requirements

1. **Airtop API Key** — [Generate here](https://portal.airtop.ai/api-keys).
2. **Airtop Credential in n8n** — Add your API key under “Airtop” in n8n.
3. **Gmail OAuth2 Credential** — Connect the Gmail account to send reports.
4. **Competitor’s Ad Library URL** — Replace the default `view_all_page_id` in the workflow with your target.

## Next Steps

* Duplicate the Airtop step for multiple competitors.
* Enrich reports by visiting ad landing pages for deeper analysis.
* Send outputs to Slack or archive in a shared workspace.

[Read about ways to monitor your competitors ads here](https://www.airtop.ai/automations/competitor-facebook-ads-intelligence-agent-n8n)

## 📊 Basic Information

- **Workflow ID:** 7272
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 784
- **Downloads:** 78
- **Created:** 2025/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7272)

## 👤 Author

- **Name:** Airtop
- **Username:** @cesar-at-airtop

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **airtop** 
- **gmail** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
