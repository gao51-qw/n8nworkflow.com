# Monitor X/Twitter for hiring posts with Apify, AI filtering & Telegram alerts

> Automatically scrape X (Twitter) for posts hiring specific roles (e.g., automation engineers, video editors, graphic designers), filter true hiring intent with AI, deduplicate in Google Sheets, and alert via Telegram.

## What it does

- Pulls recent X/Twitter posts for multiple role keywords via Apify.

- Normalizes each post (text, author, links, location).

- Uses an AI Agent to keep only posts where the author is hiring (not self-promo).

- Checks Google Sheets for duplicates by URL before saving.

- Writes qualified posts to a sheet and sends a Telegram notification.

We are using n8n automation roles as the example here


## How it works (Step by Step)

1. **Schedule Trigger** – Runs on an interval (currently every 12 hours).

2. **Scrape X/Twitter** – Apify tweet-scraper fetches up to 50 latest posts for keywords like:
n8n developer, looking for n8n, n8n expert, hire AI automation, looking for AI automation.

3. **Normalize Fields** – Set node maps to: url, text, author.userName, author.url, author.location.

4. **AI Filter & Dedupe Check**

- Accept only clear hiring posts for n8n/AI automation roles (reject self-promotion).
- Queries Google Sheets to see if url already exists; duplicates are dropped.

5. **Gate** – IF node passes only non-empty AI outputs.

6. **Parse JSON Safely** – Code node extracts/validates JSON from the AI output.

7. **Save to Google Sheets** – Appends/updates a row (matching on url).

8. **Telegram Alert** – Sends a message with the tweet URL, author, location, and text.

## Who it’s for

Freelancers, agencies, and job seekers who want a steady radar of real hiring posts for their target roles.

## Customization Ideas

Swap keywords to track other roles (video editors, designers, copywriters, etc.).

Add Slack/Discord notifications.

Extend the AI rules (e.g., different geographies or role scopes).

Treat the sheet as a mini-CRM (status, outreach date, notes).

## 📊 Basic Information

- **Workflow ID:** 9005
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 98
- **Downloads:** 9
- **Created:** 2025/9/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9005)

## 👤 Author

- **Name:** A Z
- **Username:** @db-aze

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **googleSheets** 
- **set** 
- **scheduleTrigger** 
- **httpRequest** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleSheetsTool** 
- **code** 
- **if** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
