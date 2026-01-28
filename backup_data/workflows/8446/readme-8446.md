# Analyze competitor content gaps with Gemini AI, Apify & Google Sheets

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Capture More Traffic: AI-Mapped Topics & Keywords
Stay ahead of competitors by uncovering their content strategies automatically. This workflow crawls competitor websites, extracts structured topic hierarchies, entities, and depth scores, and delivers actionable insights directly into Google Sheets. No more manual browsing, just clean, analyzable data you can act on.

## Benefits
- **Competitor mapping at scale**  Automatically map sites into hierarchical topics and entities.
- **Data-driven content strategy**  Identify gaps, weak spots, and opportunities to stand out.
- **Seamless integration**  Results flow straight into Google Sheets for filtering, charting, or export.
- **Time & resource savings**  Eliminate copy-paste research and focus on strategy.

## Target audience
- SEO specialists and digital marketers
- Content strategists and copywriters
- Agencies running content audits
- SaaS startups monitoring competition
- E-commerce teams benchmarking rivals

## Required APIs
- Google Sheets credentials (trigger & save)
- Apify API token (crawler)
- Gemini (Google Generative AI) key (content parsing)

## Easy customization
- **Competitor domains:** Update in the Google Sheets config.
- **Crawl depth & limits:** Adjust `max_pages_num` and `crawl_depth_num`.
- **Output format:** Modify the Code node to add or remove Google Sheets columns.
- **Delivery channels:** Add Slack or Email nodes for instant audit reports.

## 📊 Basic Information

- **Workflow ID:** 8446
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 356
- **Downloads:** 35
- **Created:** 2025/9/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8446)

## 👤 Author

- **Name:** Mychel Garzon
- **Username:** @mychel-garzon

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×12)
- **code** (×4)
- **@apify/n8n-nodes-apify.apify** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **merge** 
- **googleSheets** (×3)
- **if** (×2)
- **gmail** 
- **webhook** 
- **respondToWebhook** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
