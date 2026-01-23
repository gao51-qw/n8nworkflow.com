# Find hiring posts on Threads with Apify, AI filtering, and Telegram alerts

> Automatically scrape Meta Threads for posts hiring specific roles (e.g. automation engineers, video editors, graphic designers), filter true hiring intent, deduplicate, and send alerts.

We are taking automation roles as an example for now.

## What it does

This workflow continuously scans Threads for fresh posts mentioning the roles you care about. It uses AI to filter out self-promotion and service ads, keeping only posts where the author is hiring. Qualified posts are saved into Google Sheets for tracking and sent to Telegram for instant alerts.

It’s ideal for freelancers, agencies, and job seekers who want a steady radar of opportunities.

## How it works (Step by Step)

1. **Schedule trigger** – Runs on a set interval (e.g. every 12 hours).

2. **Scrape Threads posts** – Fetches recent posts from multiple keywords (e.g., “n8n expert”, “hire video editor”, “graphic designer”, etc.) via Apify.

3. **Merge results** – Combines posts into a single stream.

4. **Normalize fields** – Maps raw data into clean fields: text, author, URL, timestamp, profile link.

5. **AI filter** – Uses an AI Agent to:

- Accept only posts where someone is hiring (rejects “hire me” style self-promo).
- Apply simple geography rules (e.g., allow US, UK, UAE, CA; pass unknowns).
- Exclude roles outside your scope.
- Deduplication – Checks Google Sheets to skip posts already seen.

6. **Save to Google Sheets** – Writes qualified posts with full details.

7. **Telegram alerts** – Sends you the matched post instantly so you can act.

## **Who it’s for**

**Freelancers:** Get first dibs on gigs before others spot them.

**Agencies:** Build a client pipeline by tracking hiring signals.

**Job seekers:** Spot hidden opportunities in your target field.

## Customization Ideas

Swap keywords to monitor roles you care about (e.g., “UI/UX designer”, “motion graphics editor”, “copywriter”).

Add Slack or Discord notifications instead of Telegram.

Expand geo rules to match your region.

Use Sheets as a CRM—add columns for status, outreach date, etc

## 📊 Basic Information

- **Workflow ID:** 9004
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 123
- **Downloads:** 12
- **Created:** 2025/9/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9004)

## 👤 Author

- **Name:** A Z
- **Username:** @db-aze

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **if** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleSheets** 
- **code** 
- **googleSheetsTool** 
- **scheduleTrigger** 
- **set** 
- **httpRequest** (×6)
- **merge** 
- **telegram** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
