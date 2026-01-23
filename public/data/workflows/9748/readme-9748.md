# Auto-post X videos with OpenRouter AI captions & Google Sheets deduplication

> Who’s it for

Marketers, creators, and social managers who want hands-off reposting of a specific X (Twitter) user’s videos — with on-brand AI captions and clean, deduplicated logs.

What it does / How it works

On a schedule, the workflow resolves a target user, fetches recent tweets with media, filters to video posts, and writes them to Google Sheets for tracking and dedupe. It then builds a shareable video URL, generates a short caption via an AI model (OpenRouter), posts to your X account, and updates the sheet with completion status. Sticky notes inside the workflow explain each step, setup tasks, and best practices.

How to set up

Add credentials: Twitter (X) OAuth2, Google Sheets OAuth2, OpenRouter.

Replace the demo Google Sheet with your own (document ID & sheet name).

Set the target X username (or parameterize it).

Adjust the schedule (interval/cron) and run a test execution.

Verify logs and posting format, then enable.

Requirements

Twitter (X) OAuth2 credential

Google Sheets OAuth2 credential

OpenRouter credential (choose an affordable model)

How to customize

Edit the caption prompt (tone, hashtags count, CTAs, compliance lines).

Add filters (language, min/max tweet age, exclude replies/retweets, since_id).

Extend logging (timestamps, posted text, account, errors).

Introduce a dry-run boolean to skip posting while testing.

Swap the caption model or add retry rules for robustness.

Security: Don’t hardcode tokens in HTTP nodes. Use n8n Credentials only and remove personal IDs before publishing.

## 📊 Basic Information

- **Workflow ID:** 9748
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 104
- **Downloads:** 10
- **Created:** 2025/10/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9748)

## 👤 Author

- **Name:** masaya kawabe
- **Username:** @kawabe03

## 🏷️ Categories

- Social Media
- AI Chatbot

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×2)
- **code** 
- **googleSheets** (×3)
- **set** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **twitter** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stickyNote** (×13)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
