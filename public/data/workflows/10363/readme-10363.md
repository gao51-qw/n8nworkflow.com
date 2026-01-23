# Automated job scraping with SerpAPI, Gemini AI filter & email notifications

> 
## 🛜 Daily Notification on Specific Latest Job Offers 🛜

🌟 **Overview**: Never miss a job offer again! This n8n workflow automates daily job scraping from LinkedIn, Indeed, Welcome to the Jungle, and more, using Google Dorks and SerpAPI. It filters offers with a Gemini AI agent, stores them in Google Sheets, and sends a sleek HTML newsletter to your inbox or subscribers—all manageable from your phone!

**💼 Use Cases**:

- Students hunting for M&A, valuation, or transaction services internships (6+ months).
- Career switchers seeking automated, curated job alerts.
- Content creators building a job newsletter to monetize their audience.

**⚙️ How It Works**:

1. **Scrape**: Uses SerpAPI with a tailored Google Dork to fetch fresh job listings daily from top platforms.
2. **Filter**: A Gemini AI agent validates offers to ensure they match corporate finance criteria.
3. **Store**: Saves new offers in Google Sheets, marking duplicates to avoid spam.
4. **Notify**: Generates an email/newsletter notification and sends it via Outlook

**🛠️ Setup Instructions**:

- Import the JSON workflow into n8n.
- Add credentials: SerpAPI (API key), Google Sheets (OAuth2), Microsoft Outlook (OAuth2)
- Customize the Google Dork in the "Edit Fields" node for specific job criteria.
- Schedule to run daily at 7 AM. Test and tweak the AI prompt for precision.

**🔑 Required Credentials & Nodes**:

- **Credentials**: SerpAPI, Google Sheets OAuth2, Microsoft Outlook OAuth2
- **Nodes**: Schedule Trigger, HTTP Request, Google Sheets, AI Agent (Gemini), Microsoft Outlook

🔗 **Creator**: Louis Delahaye | [n8n.io/creators/louisdl](https://n8n.io/creators/louisdl/)

🎥 YouTube	[@cash-routine](https://www.youtube.com/@cash-routine)

My AI Agency : https://agence-alain.fr

## 📊 Basic Information

- **Workflow ID:** 10363
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 54
- **Downloads:** 5
- **Created:** 2025/10/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10363)

## 👤 Author

- **Name:** Louis
- **Username:** @louisdl

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **googleSheets** (×4)
- **scheduleTrigger** 
- **wait** 
- **set** 
- **splitOut** (×5)
- **httpRequest** (×5)
- **merge** 
- **compareDatasets** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **switch** 
- **stickyNote** (×9)
- **executeWorkflowTrigger** 
- **microsoftOutlook** 
- **aggregate** 
- **executeWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
