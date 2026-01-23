# Scheduled automation for X and Google Sheets services

> Auto-like and repost latest tweets from accounts in Google Sheets
Who’s it for

Teams and solo creators who manage multiple X (Twitter) accounts they follow and want consistent engagement with minimal effort. Ideal for social managers, community leads, and campaign operators who need safe, repeatable automation.

What it does / How it works

On a schedule, the workflow reads a Google Sheet of screen names, fetches each account’s latest tweets, then likes and reposts them. A Limit node caps daily actions to respect rate limits and reduce risk. Every step includes Sticky notes: a yellow Overview (full description + safety notes) and white per-step notes (setup tips, filters, and expansion ideas).

How to set up

Add Credentials for X (Twitter) OAuth2 and Google Sheets (no hardcoded tokens).

Point the Google Sheets node to your sheet (header アカウントID, screen names without @).

Adjust the search query (e.g., -is:reply -is:retweet) and results per run.

Set the Schedule Trigger cadence and Limit (start with 1–3).

Test with a staging account, then enable scheduling.

Requirements

n8n 1.x+

X (Twitter) OAuth2 and Google Sheets OAuth2 credentials

A Google Sheet with column アカウントID

How to customize the workflow

Add a dry-run flag (Set → IF) to skip actions in testing.

Insert IF filters for NG words, language, or tweet age (created_at).

Add a Wait node between Like and Repost for cooldowns.

Append logs to another Google Sheet (status, URL, timestamp).

Security & quality: Use Credentials only, avoid personal IDs in nodes, and keep actions modest to respect API limits.

## 📊 Basic Information

- **Workflow ID:** 9758
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 54
- **Downloads:** 5
- **Created:** 2025/10/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9758)

## 👤 Author

- **Name:** masaya kawabe
- **Username:** @kawabe03

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** 
- **twitter** (×3)
- **limit** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
