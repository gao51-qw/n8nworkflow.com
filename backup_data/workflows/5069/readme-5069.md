# LinkedIn profile scraper & personalized outreach using PhantomBuster + GPT-4

> **Description**

This plug-and-play n8n workflow template helps you automate LinkedIn profile data extraction and transform it into structured, enriched outputs using PhantomBuster and GPT-4. Perfect for lead generation, recruiting, or growth marketing teams, this pipeline handles scraping, structuring, and messaging—all in one flow.

**Requirements**

**PhantomBuster Setup**
- Create a PhantomBuster account.
- Use the LinkedIn Profile Scraper Phantom (or your custom one).
- Get your API Key and Agent ID from PhantomBuster dashboard.
- Configure your LinkedIn Phantom with an active LinkedIn session cookie (available from your browser’s developer tools).

**OpenAI or Azure OpenAI**

- Provide your GPT-4 / GPT-4o API Key.
- You can use OpenAI or Azure's hosted model.

**(Optional) Google Sheets**

- Use Sheets for batch profile inputs or output logging.

**What This Template Does**

**Step-by-Step Flow:**

🔁 Manual Trigger / Google Sheets input – Accepts LinkedIn profile URLs.

🚀 Launch PhantomBuster Agent – Starts the scraping job with provided LinkedIn URLs.

⏳ Wait Node (45 sec) – Allows PhantomBuster to finish execution.

📥 Download Scraped Output – Fetches the download URL for JSON/CSV from the container.

📂 Temp File Management – Deletes temp URLs or intermediate data as needed.

**AI Parser (GPT-4) – Parses and extracts:**

- Name
- Headline
- Company
- Designation
- Industry
- Location
- Recent roles

(Optional) Create personalized outreach messages using structured output.

Output Structured JSON or CSV – Send to CRM, Google Sheets, Airtable, etc.

**Best For**

📈 Sales/BDRs building high-quality prospect lists

🧑‍💼 Recruiters extracting enriched candidate info

💼 Founders & Marketers creating targeted lead magnets

🧩 Tool builders building products using LinkedIn profile data

## 📊 Basic Information

- **Workflow ID:** 5069
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 712
- **Downloads:** 71
- **Created:** 2025/6/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5069)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **wait** 
- **scheduleTrigger** 
- **googleSheets** (×4)
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
