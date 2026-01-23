# Generate personalized cold email openers with website scraping using Claude & GPT-4

> **This template enriches a lead list by analyzing each contact’s company website and auto-generating a single personalized cold-email opener. Drop a spreadsheet into a Google Drive folder → the workflow parses rows, fetches website content via Jina AI, uses OpenAI to check if the site contains valid business info, then calls Anthropic to craft a one-liner. It writes both the website summary and personalized opener back to Google Sheets, and finally sends you a Telegram confirmation with the file link.**

## What it does
Turns a CSV/Google Sheet of leads into tailored cold-email openers. For each lead, the workflow fetches the company website, writes a 300-word business summary, then crafts a one-sentence, emotionally engaging opening line. Results are written back to the same Sheet, and you get a Telegram ping when processing finishes.

## How it works (high-level)
	1.	Trigger: Watches a Google Drive folder. When a new Sheet is added, the flow starts.
	2.	Parse: Reads rows (expects columns like First Name, Last Name, Email, domain).
	3.	Enrich: An AI Agent calls Jina “r.jina.ai/{url}” to fetch page markdown, then produces a structured website summary.
	4.	Validate: An OpenAI step checks if the fetched content is a real business page (hasWebsite: true/false).
	5.	Personalize:
	•	If true → Anthropic crafts a bespoke opener using the summary.
	•	If false → Fallback prompt creates a strong opener using domain + universal lead-gen pains.
	6.	Update: Writes websiteSummary and personalization back to the Sheet (matching on domain).
	7.	Notify: Sends a Telegram message with the file name + link when done.

## What you need
	•	Google Drive (folder to watch)
	•	Google Sheets (the uploaded Sheet to enrich)
	•	Jina HTTP header auth (for the markdown fetch tool)
	•	OpenAI (JSON check for website validity)
	•	Anthropic (Claude Sonnet 4 for copy quality)
	•	Telegram Bot (to receive completion alerts)

## Inputs & expected schema
	•	A Google Sheet with at least: First Name, Last Name, Email, domain
	•	Optional columns are preserved; rows are processed in batches.

## Outputs
	•	New/updated columns per row:
	•	websiteSummary — concise, structured business overview
	•	personalization — a single, high-impact opening sentence
	•	Telegram confirmation with file name and link.

## Customization tips
	•	Tweak the system prompts for tone or length.
	•	Add scoring (e.g., ICP fit) before personalization.
	•	Expand validation (e.g., handle multi-page sites or language detection).
	•	Swap/parallel LLMs to balance quality, cost, and speed.

## Nodes & key logic
	•	Google Drive Trigger → Google Drive (Download) → Spreadsheet File (parse) → Split in Batches
	•	LangChain Agent with: HTTP Tool (Jina) + Think
	•	OpenAI (JSON validator) → If (website present?)
	•	Anthropic Chat (with + without website branches)
	•	Edit Fields (Set) → Google Sheets (Update) → Telegram

## Great for
Sales teams, SDRs, and founders who want fast, high-quality personalization at scale without manual research.

## **Need help customizing?**
Contact me for consulting and support: [LinkedIn](https://www.linkedin.com/in/mariela-ceo-founder/)


## 📊 Basic Information

- **Workflow ID:** 8856
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 230
- **Downloads:** 23
- **Created:** 2025/9/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8856)

## 👤 Author

- **Name:** Mariela Slavenova
- **Username:** @marielabg

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **stickyNote** (×6)
- **googleDriveTrigger** 
- **googleDrive** 
- **spreadsheetFile** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.toolHttpRequest** 
- **@n8n/n8n-nodes-langchain.toolThink** (×4)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** (×3)
- **if** 
- **set** 
- **code** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleSheets** 
- **telegram** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
