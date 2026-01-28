## Description 
Automates daily EOD summaries from Jira issues into an Excel sheet, then compiles a weekly summary using Azure OpenAI (GPT-4o-mini) and delivers it to stakeholders via email. Gain consistent reporting, clear insights, and hands-free delivery. ✨📧

## What This Template Does 
- Fetches Jira issues and extracts key fields. 🧩
- Generates End‑of‑Day summaries and stores them in Excel daily. 📄
- Aggregates the week’s EOD data from Excel. 📚
- Creates a weekly summary using Azure OpenAI (GPT-4o-mini). 🤖
- Delivers the weekly report to stakeholders via email. 📬

## Key Benefits 
- Saves time with fully automated daily and weekly reporting. ⏱️
- Ensures consistent, structured summaries every time. 📏
- Improves clarity for stakeholders with readable insights. 🪄
- Produces mobile-friendly email summaries for quick consumption. 📱
- No-code customization inside n8n. 🛠

## Features 
- Jira issue ingestion and transformation.
- Daily EOD summary generation and Excel storage.
- Weekly AI summarization with Azure OpenAI (GPT-4o-mini).
- Styled HTML email output to stakeholders.
- Scheduling for hands-free execution.

## Requirements 
- An n8n instance (cloud or self-hosted).
- Jira access to read issues.
- Azure OpenAI (GPT-4o-mini) for weekly AI summarization.
- Email service (Gmail/SMTP) configured in n8n credentials.
- Excel/Sheet storage set up to append and read daily EOD entries.

## Target Audience 
- Engineering and product teams needing routine summaries.
- Project managers tracking daily progress.
- Operations teams consolidating weekly reporting.
- Stakeholders who prefer clean email digests.

## Step-by-Step Setup Instructions 
- Jira: Connect your Jira credentials and confirm issue read access.
- Azure OpenAI: Deploy GPT-4o-mini and add Azure OpenAI credentials in n8n.
- Gmail/SMTP: Connect your email account in n8n Credentials and authorize sending.
- Excel/Sheet: Configure the sheet used to store daily EOD summaries.
- Import the workflow, assign credentials to nodes, replace placeholders, then run and schedule.

## Security Best Practices 
- Use scoped API tokens for Jira with read-only permissions. 🔐
- Store Azure OpenAI and email credentials in n8n’s encrypted credentials manager. 🧯
- Limit email recipients to approved stakeholder lists. 🚦
- Review logs regularly and rotate credentials on a schedule. ♻
 