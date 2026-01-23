# Automate lead ranking & task creation with Google Sheets + ClickUp

> ## Description
Stop losing warm leads in the noise. This automation analyzes your lead engagement data, calculates priority scores based on activity and last contact date, and automatically queues your top 10 leads for follow-up in ClickUp — complete with suggested send times based on timezone. ⚡

## What This Template Does
Pulls lead data from Google Sheets (e.g., name, engagement, last contact date, timezone). 📄
Calculates days since last contact to measure lead freshness. ⏰
Combines engagement score and recency into a weighted priority score. 📊
Sorts and filters top 10 leads for immediate follow-up. 🔝
Suggests best time to reach out based on each lead’s timezone. 🌍
Creates corresponding ClickUp tasks with lead details. 🗂️
Updates the Google Sheet to mark leads as queued. ✅

## Key Benefits
- Automatically identify high-priority leads daily. 🎯
- Increase conversion rates with timely, personalized follow-ups. ⏱️
- Eliminate manual sorting and spreadsheet filtering. 🚫
- Keep sales teams organized with ClickUp task automation. 💼
- Works perfectly for SDRs, account managers, and B2B teams. 🤝

## Features
- Google Sheets integration for real-time lead updates. 📊
- Smart recency calculator (days since last contact). ⏰
- Weighted priority formula (70% engagement, 30% recency). 🧮
- ClickUp task creation for seamless team coordination. 🔗
- Timezone-based follow-up time suggestion. 🌐
- Configurable limit (Top 10 leads — adjustable). ⚙️
- Automatic sheet update with queue status tracking. 📋

## Requirements
1. n8n instance (cloud or self-hosted). 🧰
2. Google Sheet with columns: Lead Name, Engagement_Score, Last_Contact_Date, Timezone, Email. 📑
3. Connected Google Sheets and ClickUp credentials in n8n. 🔐
4. Active ClickUp workspace with accessible list or space ID. 🧭

## Target Audience
- Sales and marketing teams managing large lead lists. 📈
- B2B organizations using ClickUp for pipeline tracking. 🧩
- SDRs who need to prioritize outreach daily. 🗓️
- Agencies managing multiple clients and follow-up cadences. 🤝

## Step-by-Step Setup Instructions (Concise)
- Create or connect a Google Sheet with all required headers. 📋
- Update node credentials for Google Sheets and ClickUp. 🔑
- Adjust weightage logic or maxItems count if needed. ⚙️
- Test workflow using the manual trigger. ▶️
- (Optional) Schedule it to run daily for auto-prioritization. ⏰
- Review ClickUp tasks and follow up with top leads. 📨

## Security Best Practices
- Share the Google Sheet only with the n8n Google account (Editor). 🔒
- Keep ClickUp API credentials encrypted within n8n. 🛡️
- Review ClickUp task creation permissions before activation. ✅
- Regularly clean archived leads from the Google Sheet. 🧹


## 📊 Basic Information

- **Workflow ID:** 9345
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 154
- **Downloads:** 15
- **Created:** 2025/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9345)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×9)
- **googleSheets** (×2)
- **sort** 
- **limit** 
- **function** (×3)
- **clickUp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
