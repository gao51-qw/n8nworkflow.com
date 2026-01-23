# Discover GitHub developers with Hunter.io email lookup & Google Sheets CRM sync

> This workflow automatically discovers developers on GitHub, enriches their data with email addresses, removes duplicates, and saves everything into a structured Google Sheets CRM. No manual searching, copying, or data cleaning required.

It’s perfect for recruiter teams, SaaS founders, agencies, and outbound marketers who need fresh developer leads every day without spending hours on GitHub.

## How It Works

This automation is divided into 3 clear stages:

1. Find Developers on GitHub. The workflow runs on a schedule (daily/hourly).

2. Enrich Developer Data with Emails. The workflow checks if a developer already has an email. If not, it automatically uses Hunter.io to find a professional email address.

3. Remove Duplicates & Save to Google Sheets

## What You Get

- Automatic developer sourcing

- Email enrichment using Hunter.io

- Built-in duplicate detection

- Clean, enriched data you can use instantly for outreach

## What You Need

- GitHub API 

- Hunter.io API key 

- Google Sheets connection

- n8n (self-hosted or cloud)


## 📊 Basic Information

- **Workflow ID:** 11375
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 5
- **Downloads:** 0
- **Created:** 2025/12/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11375)

## 👤 Author

- **Name:** Gilbert Onyebuchi
- **Username:** @gilbert-onyebuchi

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **scheduleTrigger** 
- **code** (×6)
- **httpRequest** (×3)
- **if** 
- **googleSheets** (×2)
- **merge** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
