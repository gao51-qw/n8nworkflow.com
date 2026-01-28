# Ai prospect researcher +ISCP only need company name and domain

> # AI Prospect Researcher +ISCP only from Domain and Company Name 

## This workflow finds available email addresses, researches the company using public data (LinkedIn, website scraping, etc.), calculates the ISCP score, and delivers a complete, ready-to-use report.

This workflow is designed for professionals and teams seeking to scale their B2B research with comprehensive company intelligence. It automates the full prospect analysis process — from extracting contact data and scraping website content to gathering market insights and generating structured reports with GPT-4.

Using a combination of Hunter.io, Perplexity AI, Airtop, and OpenAI, this system creates a detailed Google Doc profile for each company, complete with decision-maker identification and ISCP scoring. Whether you're conducting market research, qualifying leads, or preparing investor briefings — this tool delivers actionable business intelligence in minutes, without manual data collection.

The process is battle-tested, with built-in error handling, and suitable for sales teams, market researchers, or founders conducting competitive analysis.

## How it works

Once triggered (via form or spreadsheet), the workflow:
1. Uses Hunter.io to discover professional emails associated with the domain
2. Leverages Perplexity AI to gather web-wide company intelligence and industry context
3. Scrapes the company website using Airtop to extract services, products, and key pages
4. Optionally enriches with LinkedIn data via Apify (company size, specialties)
5. Processes all inputs through GPT-4 to:
   - Generate an executive summary
   - Identify potential decision-makers
   - Calculate an Ideal Service Customer Profile (ISCP) match score
6. Produces a finalized report in Google Docs with:
   - Company overview
   - Key contacts
   - Market positioning
   - Recommended outreach approach

This is a turnkey solution for teams who need deep company profiles without the hours of manual research and data stitching.

## 📊 Basic Information

- **Workflow ID:** 4882
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 621
- **Downloads:** 62
- **Created:** 2025/6/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4882)

## 👤 Author

- **Name:** LukaszB
- **Username:** @lukaszb

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **hunter** 
- **httpRequest** (×3)
- **wait** 
- **set** (×4)
- **airtop** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **merge** 
- **googleDocs** (×3)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×9)
- **manualTrigger** 
- **formTrigger** 
- **googleSheets** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
