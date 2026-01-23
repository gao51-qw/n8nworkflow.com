# Analyze Customer Reviews from 5 Platforms with Thordata Scraping & GPT-4.1 Reports

> Automatically gather hundreds of real customer reviews from five major platforms in one run using [Thordata](https://www.thordata.com/?ls=n8n&lk=reviewmonitor) API and Proxy — Trustpilot, Capterra, Chrome Web Store, TrustRadius, and Product Hunt — then let GPT-4.1 perform deep collective sentiment analysis, uncover common praises & complaints, flag critical issues, assess churn risk, and deliver actionable recommendations straight to your inbox as a stunning executive HTML report.

## Who’s it for
- Product managers & founders  
- Growth and marketing teams  
- Customer success & support leads  
- Agencies delivering competitor or product review reports

## How it works
1. Submit product URLs via form, webhook, or use defaults  
2. Smart, Cloudflare-safe scraping with automatic pagination  
3. Universal parser standardizes every review format  
4. Global deduplication using deterministic unique IDs  
5. GPT-4.1 analyzes all reviews collectively (not one-by-one)  
6. Beautiful responsive HTML email with sentiment badges, stats, and recommendations

## Requirements
- [Thordata](https://www.thordata.com/?ls=n8n&lk=reviewmonitor) API key (free tier works) → set as HTTP Header Auth credential  
- OpenAI API key  
- Gmail account (or replace with any email node)

## How to set up
1. Add your Thordata and OpenAI credentials  
2. Connect Gmail  
3. Click “Execute Workflow” – instantly tests with Thordata’s own reviews

## How to customize
- Edit default product in “Prepare Review Sources” node  
- Modify the AI prompt or email design anytime  
- Add more sources or change the output format easily

Zero browser automation · Rate-limit safe · Fully deduplicated · Plug-and-play in minutes.

## 📊 Basic Information

- **Workflow ID:** 11076
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 184
- **Downloads:** 18
- **Created:** 2025/11/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11076)

## 👤 Author

- **Name:** Naveen Choudhary
- **Username:** @n8nstein

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **code** (×6)
- **manualTrigger** 
- **set** (×2)
- **splitInBatches** 
- **httpRequest** 
- **if** 
- **wait** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **respondToWebhook** 
- **webhook** 
- **formTrigger** 
- **gmail** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
