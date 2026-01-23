# Remote job updates pipeline with RemoteOK, Airtable, and Telegram

> 🚀 Remote Job Automation Workflow
Automatically fetch, clean, and broadcast the latest remote job listings — powered by RemoteOK, Airtable, and Telegram.

🔧 Key Features
Seamless Data Fetching:
Pulls the latest job listings from the RemoteOK API using an HTTP Request node.

Smart Data Processing (via Code Node):

Filters out irrelevant metadata

Cleans and sanitizes job descriptions (e.g., HTML tags, special characters)

Handles malformed or encoded text gracefully

Extracts and formats salary ranges for clarity

Airtable Integration (Upsert):

Stores each job as a unique record using job ID

Avoids duplication through conditional upserts using Airtable's Personal Access Token

Telegram Bot Broadcasting:

Automatically formats and sends job posts to a Telegram group or channel

Keeps your community or team updated in real-time

📦 Tech Stack
RemoteOK API – source of curated remote job listings

Airtable – lightweight, accessible job database

Telegram Bot API – for real-time job notifications

n8n – workflow automation engine to tie everything together

🔁 Workflow Overview
Fetch Jobs from RemoteOK API

Clean & Normalize job descriptions and metadata

Extract Salary ranges and standardize them

Upsert to Airtable (avoiding duplicates)

Format Post for visual clarity

Send to Telegram via bot integration

🧠 Perfect For
Remote job boards or aggregators

Recruitment agencies/startups

Developers building personal job feeds

Communities or channels sharing curated remote opportunities

Automating newsletters or job digests

✅ Benefits

Near real-time updates

Minimal maintenance

Full control and extensibility with n8n



## 📊 Basic Information

- **Workflow ID:** 4383
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 679
- **Downloads:** 67
- **Created:** 2025/5/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4383)

## 👤 Author

- **Name:** Puspak
- **Username:** @dpreddy

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **httpRequest** 
- **code** (×6)
- **telegram** 
- **scheduleTrigger** 
- **airtable** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
