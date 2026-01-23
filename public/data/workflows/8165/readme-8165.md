# Automate Facebook group posting with Telegram messages and Google Sheets

> ![11_resized.png](fileId:2306)
## What this template does
Automates posting to **Facebook Groups** via **Airtop** browser automation. Reads group links from **Google Sheets**, opens each group in a logged-in Airtop profile, types your prepared message, and submits with human-like delays. **The message text is sent from your Telegram bot**, so you can provide content directly in Telegram and it will be published to the selected groups.

## How it works
- **Telegram Trigger** starts the run.
- **Google Sheets — Get Group List** reads rows with the `link` column (Facebook Group URL).
- **Airtop — Start Browser → Create a window** opens Facebook in a persistent profile.
- For each row:
  - **Load a page** visits the group link.
  - **Scroll / Click / Type text** fills the composer.
  - **Wait** nodes add delays for realistic behavior.
- **Loop Over Items** controls batching and session termination.

## Requirements
- n8n v1.105+
- **Airtop** profile logged into Facebook
- **Google Sheet** with a `link` column
- **Telegram bot** credentials stored in n8n (no secrets in nodes)

## Setup steps
1. Import the JSON template.
2. Open **Google Sheets** node → pick your spreadsheet and sheet with `link`.
3. Configure **Telegram Trigger** with your bot credentials.
4. In **Airtop — Start Browser**, set `profileName` to your prepared FB profile.
5. The **Type text** node automatically uses the message you send to your Telegram bot (no need to hardcode it).
6. Tune **Wait** nodes (1–5s between actions; longer if needed).
7. Test on one group before scaling.

## Safety & compliance
- **No hardcoded API keys** in HTTP nodes.
- Follow Facebook Terms: avoid spam, rotate content, throttle frequency.
- Post only where you have permission.
- Keep credentials in n8n’s Credentials storage.

## Troubleshooting
- **Composer not found** → adjust the element description/selector in Airtop nodes.
- **Slow loads** → increase Wait durations.
- **No rows** → verify sheet selection and the `link` column name.
- **Access issues** → ensure your Airtop profile is logged in and allowed to post.


## 📊 Basic Information

- **Workflow ID:** 8165
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 209
- **Downloads:** 20
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8165)

## 👤 Author

- **Name:** Ivan Maksiuta
- **Username:** @zodiac

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **set** (×5)
- **airtop** (×10)
- **googleSheets** 
- **splitInBatches** 
- **wait** (×5)
- **telegramTrigger** 
- **switch** (×2)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
