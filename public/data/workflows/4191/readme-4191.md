# Automated lead research – from LinkedIn to ready-to-send report

> # AI Prospect Researcher – Automated Lead Intelligence Workflow

This workflow is built for professionals and teams who want to scale their B2B outreach with context-rich, personalized communication. It automates the full prospect research process — from pulling lead data and scraping LinkedIn profiles, to gathering real-time company insights and generating high-quality outreach reports with GPT-4. 

Using a combination of Apify, Perplexity AI, and OpenAI, this system creates a structured Google Doc for each lead, along with a logged summary in Google Sheets. Whether you’re preparing for sales calls, writing cold emails, or enriching your CRM — this tool delivers ready-to-use intelligence in minutes, without manual research.

The process is modular, production-ready, and suitable for agencies, SDR teams, or founders managing outbound on their own.

## How it works

Once triggered, the workflow takes in a list of leads from Google Sheets. For each lead, it uses Apify to scrape both the LinkedIn profile and company page (no login or cookies required). Then, Perplexity AI fetches contextual insights and competitor data. GPT-4 validates the research and synthesizes a structured summary of the individual and their company. Finally, a complete outreach report is generated and saved in Google Docs, while key data is logged in Sheets for tracking or follow-up automation.



## This is a powerful, production-grade automation for anyone serious about personalizing outreach without spending hours per lead.


## 📊 Basic Information

- **Workflow ID:** 4191
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 1527
- **Downloads:** 152
- **Created:** 2025/5/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4191)

## 👤 Author

- **Name:** LukaszB
- **Username:** @lukaszb

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** (×3)
- **wait** (×2)
- **merge** 
- **if** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** (×2)
- **set** (×5)
- **httpRequest** (×6)
- **googleDocs** (×2)
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
