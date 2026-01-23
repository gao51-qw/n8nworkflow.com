# Track real estate market pain points with Apify, GPT-4o and Telegram alerts

> ## How it works
This workflow runs on a daily schedule. It starts by scraping real estate-related queries from Google using Apify. The organic search results are parsed and summarized into a single text block. That text is then sent to an AI model (GPT-4o) which extracts the top 3 pain points faced by real estate agents based on current online sentiment. The workflow compares today's insights with yesterday's data stored in Airtable to detect recurring or new pain points. Finally, it sends a summary notification via Telegram and stores the current day's insights into Airtable for trend tracking.

## How to set up

1. Clone or import the workflow into your n8n instance.
2. Get an Apify API token and insert it into the HTTP Request node.
3. Create an Airtable base with a table containing two fields: "Date" (text) and "Summary" (long text). Copy the Base ID and Table ID into the Airtable nodes.
4. Connect your Telegram bot and replace the chat ID in the Telegram node.
5. Set up OpenAI credentials with GPT-4o or GPT-4o-mini for the LLM node.
6. Run once manually to test, then activate the schedule trigger to run daily.
7. (Optional) Extend the flow to generate cold outreach emails based on pain points, or sync to Notion/CRM.

## 📊 Basic Information

- **Workflow ID:** 5984
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 664
- **Downloads:** 66
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5984)

## 👤 Author

- **Name:** Marth
- **Username:** @marth

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **airtable** (×2)
- **telegram** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
