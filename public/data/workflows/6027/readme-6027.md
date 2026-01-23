# AI-powered lead generation system with email personalization and LinkedIn

> # 🔧 AI-Powered B2B Prospecting Automation

This automation is a complete end-to-end system designed to find, qualify, and contact B2B leads — fully automated and powered by AI.

## 1. Lead Discovery & Scoring

- Searches for target companies on LinkedIn via [Ghost Genius API](https://ghostgenius.fr), using filters like location, and company size.
- Enriches each company with details like website, description, and follower count.
- Uses OpenAI to **score** each company (0 to 10) based on fit with your product.
- Filters out irrelevant companies and stores only qualified ones (score ≥ 7) into a Google Sheet CRM.

## 2. Decision-Maker Enrichment & Outreach

- Finds key decision-makers at each qualified company via LinkedIn Sales Navigator.
- Retrieves their job titles, descriptions, and LinkedIn summaries.
- Generates a **fully personalized 3-email cold outreach sequence** using OpenAI.
- Retrieves verified email addresses using a waterfall enrichment system.
- Stores all contact data and email content in your CRM and updates lead status.

## Key Features

- **Fully automated**: runs daily with no manual input required.
- **Smart targeting**: all filters and parameters managed in Google Sheets.
- **AI-enhanced**: leverages OpenAI for scoring, personalization, and copywriting.
- **Compliant & safe**: uses Ghost Genius API (cookieless scraping).

---

Ideal for B2B startups, agencies, or growth teams looking to scale outbound without manual effort.


## 📊 Basic Information

- **Workflow ID:** 6027
- **Complexity:** advanced
- **Node Count:** 52
- **Views:** 7593
- **Downloads:** 759
- **Created:** 2025/7/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6027)

## 👤 Author

- **Name:** Matthieu
- **Username:** @yaznow

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **aggregate** (×2)
- **googleSheets** (×8)
- **filter** 
- **splitInBatches** (×2)
- **httpRequest** (×5)
- **if** (×5)
- **splitOut** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×5)
- **code** 
- **stickyNote** (×16)
- **limit** 
- **manualTrigger** 
- **stopAndError** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 52 nodes with 34 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
