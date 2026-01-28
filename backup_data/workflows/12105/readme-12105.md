# Automate launch intelligence with Hacker News, Asana, GPT & Slack/Email digests

> ## 📘 Description
This workflow automatically detects new product launches posted on Hacker News under “Show HN,” evaluates their launch strength, converts each launch into a tracked Asana task, and generates a clean daily founder digest delivered via Slack and email.
The system runs on a daily schedule, fetches recent Show HN posts directly from Hacker News, filters for real launch signals, extracts structured launch metadata, and scores each launch based on engagement indicators such as points, comments, and context. Every detected launch is immediately logged as an actionable Asana task with full context for follow-up.
All launches are then aggregated and analyzed by an AI engine that produces two outputs: a compact, skimmable Slack digest and a structured, email-ready launch briefing grouped by signal strength. Any workflow failure triggers a real-time Slack alert with diagnostic details.
This workflow replaces manual Hacker News monitoring, launch tracking, task creation, and digest writing with a fully automated launch intelligence and execution pipeline.

## ⚙️ What This Workflow Does (Step-by-Step)
⏰ Trigger Daily Show HN Launch Scan
 Runs automatically on a daily schedule.
📰 Fetch Recent Show HN Posts from Hacker News
 Pulls the latest “Show HN” posts using native Hacker News data.
🔍 Filter Likely Product Launch Announcements
 Scans titles and descriptions for launch indicators such as:
 • Launch
 • Beta
 • v1
 • API
 • Platform
 • Tool
🧠 Normalize Launch Metadata and Score Signal Strength
 Extracts and structures:
 • Product name
 • Description
 • Product URL
 • Hacker News discussion link
 • Author and publish date
 • Points and comments
 Assigns launch strength (High / Medium / Low).
📋 Create Asana Task for Detected Product Launch
 Creates a follow-up task with:
 • Full launch context
 • Engagement metrics
 • Signal strength
 • Direct links
 • Auto-assigned due date
📦 Aggregate Launch Items for Digest Generation
 Combines all detected launches into a single dataset for analysis.
🧠 Generate Daily Founder Launch Digest (AI)
 Creates:
 • A Slack-ready daily launch summary
 • A clean, structured, email-ready digest
 • Grouped by launch signal strength
🧠 LLM Reasoning Engine for Launch Digest
 Ensures clarity, structure, and readability across outputs.
🔄 Parse Digest Output into Slack and Email Payloads
 Separates AI output into delivery-ready formats.
📣 Send Daily Founder Launch Digest to Slack
 Posts the daily launch summary to Slack.
📧 Send Daily Founder Launch Digest via Email
 Delivers an inbox-optimized version of the launch digest.
🚨 Error Handler Trigger → Slack Alert
 Any workflow failure sends a detailed Slack alert with node name, error message, and timestamp.
🧩 Prerequisites
 • Hacker News API access (n8n HN node)
 • Asana OAuth credentials
 • Azure OpenAI API credentials
 • Slack API credentials
 • Gmail OAuth credentials
 • n8n schedule trigger enabled

## 💡 Key Benefits
 ✔ Detects real product launches automatically
 ✔ Scores launch strength using engagement signals
 ✔ Converts launches into actionable Asana tasks
 ✔ Produces clean Slack and email digests daily
 ✔ Eliminates manual Hacker News monitoring
 ✔ Maintains consistent launch intelligence flow
 ✔ Provides instant error visibility via Slack

## 👥 Perfect For
-  Startup founders
-  Product scouts and VC analysts
-  Growth and partnerships teams
-  Innovation and market research teams
-  Anyone tracking early-stage product launches without manual effort


## 📊 Basic Information

- **Workflow ID:** 12105
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 121
- **Downloads:** 12
- **Created:** 2025/12/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12105)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **asana** 
- **hackerNews** 
- **scheduleTrigger** 
- **code** (×3)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **slack** (×2)
- **gmail** 
- **stickyNote** (×7)
- **errorTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
