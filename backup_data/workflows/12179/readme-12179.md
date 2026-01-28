# Score Upwork jobs and generate proposals with Apify, GPT-4o, Google Sheets and Telegram

> ## How it works
1. **Schedule Trigger** runs every 6 hours (customizable)
2. **Apify Scraper** fetches Upwork jobs matching your criteria
3. **Deduplication** filters out jobs you've already seen
4. **AI Scoring** (GPT-4) evaluates fit, client quality, budget (0-100 score)
5. **Filter** keeps only jobs scoring 60+
6. **Proposal Generator** creates personalized proposals
7. **Google Sheets** logs all results
8. **Telegram** sends summary notification

## Setup steps
**Time:** ~15 minutes

1. Create Google Sheet with "Job ID" column
2. Get Apify account + Upwork scraper actor
3. Get OpenAI API key
4. Set environment variables:
   - `GOOGLE_SHEETS_DOC_ID`
   - `APIFY_ACTOR_ID`
   - `TELEGRAM_CHAT_ID`
5. Create credentials: Google Sheets, Apify (Header Auth), OpenAI, Telegram
6. Connect credentials to workflow nodes

## Who is this for?
- Freelancers actively applying to Upwork jobs
- Agencies monitoring multiple job categories
- Consultants prioritizing high-quality leads

## Estimated costs
- **Per run:** $0.50-3.00 (Apify + OpenAI)
- **Monthly (4x/day):** $50-200

## 📊 Basic Information

- **Workflow ID:** 12179
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 66
- **Downloads:** 6
- **Created:** 2025/12/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12179)

## 👤 Author

- **Name:** Nitin Garg
- **Username:** @nitin-animoautomation

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×7)
- **scheduleTrigger** 
- **httpRequest** (×2)
- **googleSheets** (×2)
- **code** (×4)
- **if** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **filter** 
- **splitInBatches** 
- **noOp** (×2)
- **telegram** (×2)
- **errorTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
