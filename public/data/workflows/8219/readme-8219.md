# Scrape LinkedIn jobs with Gemini AI and store in Google Sheets using RSS

> ### What Problem Does it Solve
This workflow automates the process of finding and collecting job postings from LinkedIn, eliminating the need for manual job searching. It’s designed to save time and ensure you don’t miss out on new opportunities by automatically populating a spreadsheet with key job details.

### Key Features
- **Automated Data Collection:** The workflow pulls job posts from a LinkedIn search via an RSS feed.

- **Intelligent Data Extraction:** It scrapes the full job description and uses AI to summarize the key benefits and job responsibilities into a concise format.

- **Centralized Database:** All collected and processed information is automatically saved to a Google Sheet, providing a single source of truth for your job search.
### How It Works
The workflow starts when manually triggered. It reads the job posts from a given RSS feed, processing each one individually. For each job, it fetches the full webpage content to extract structured data. This data is then cleaned and passed to an AI model, which generates a brief summary of the job and its benefits. Finally, a new row is either added or updated in a Google Sheet with all the collected details, including the job title, company name, and AI-generated summary.

### Configuration & Customization
This workflow is highly customizable to fit your specific needs.

- **RSS Feed:** To get started, you'll need to provide the RSS feed URL for your desired LinkedIn job search. We can help you set this up.

- **AI Model:** The workflow uses Google Gemini by default, but it can be adjusted to work with other AI platforms.

- **Data Destination:** The output is configured to a Google Sheet, but it can easily be changed to a different platform like Notion or a CRM.

- **AI Prompting:** The AI's instructions are customizable, so you can tailor the output to extract different information or match a specific tone.

If you need any help [Get In Touch](https://www.linkedin.com/in/abdallaelshikh0/)

## 📊 Basic Information

- **Workflow ID:** 8219
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1496
- **Downloads:** 149
- **Created:** 2025/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8219)

## 👤 Author

- **Name:** Abdullah Alshiekh
- **Username:** @abdullah01

## 🏷️ Categories

- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitInBatches** 
- **html** 
- **code** (×2)
- **stickyNote** (×6)
- **rssFeedRead** 
- **httpRequest** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
