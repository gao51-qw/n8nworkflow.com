# Automated LinkedIn profile summaries with GPT-4o and Google Sheets

> Quickly transform any LinkedIn profile URL into a concise, AI‑generated professional summary — perfect for recruiters, sales teams, and hiring managers who need instant insights into prospects or candidates without manual research.

### How it works
- The workflow polls a Google Sheet for new or updated rows containing LinkedIn profile URLs.
- For each URL, the Real‑Time LinkedIn Scraper API (via RapidAPI) pulls experience and education sections.
- Extracted profile data is sent to OpenAI’s GPT model, which generates a clean, structured summary highlighting key strengths, career trajectory, and differentiators.
- The generated summary is written back into a new column in the same row of your Google Sheet for easy review and sharing.


### Set up steps
- Connect your Google account and select the spreadsheet + worksheet containing your list of LinkedIn URLs.
- Sign up for the Real‑Time LinkedIn Scraper API on RapidAPI, copy your API key, and add it to the workflow’s HTTP Request node.
- Insert your OpenAI API key credentials.
- Ensure your Google Sheet has one column for “linkedin_url” and create two empty columns named “full_name” and "summary" (or customize them based on your needs).
- Run a single row through the workflow to verify scraping accuracy and summary formatting, then turn on the workflow for continuous automation.


With this template, eliminate hours of manual profile review — instantly gain actionable insights and focus on what really matters: building relationships and closing deals.





## 📊 Basic Information

- **Workflow ID:** 3249
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 373
- **Downloads:** 37
- **Created:** 2025/3/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3249)

## 👤 Author

- **Name:** Hostinger
- **Username:** @hostinger

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×2)
- **splitOut** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **googleSheetsTrigger** 
- **httpRequest** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
