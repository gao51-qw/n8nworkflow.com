# Extract sales leads from Google Jobs, LinkedIn & Indeed with GPT-4o and Apify

> ## Who is this for?

This template is designed for B2B sales teams, recruiters, and business development professionals who want to identify sales opportunities by monitoring hiring signals from target companies. It's particularly useful for:

- Sales teams selling HR tech, recruitment software, or staffing services
- Consultancies offering technical talent or project-based work
- Any B2B company that uses "intent data" from job postings to time their outreach

## What this workflow does

This workflow automates the entire process of monitoring job postings and converting hiring signals into actionable sales leads:

1. **Daily Job Scraping**: Automatically scrapes job postings from Google Jobs, LinkedIn, and Indeed for your target companies using Apify actors
2. **Data Normalization**: Standardizes job data from multiple sources into a unified format
3. **Keyword Filtering**: Filters jobs based on your target keywords to identify relevant opportunities
4. **AI-Powered Analysis**: Uses GPT-4o to analyze each qualified job posting and generate:
   - Inferred pain points from the hiring signal
   - Strategic sales approach angles
   - Urgency scoring (1-10)
   - Ready-to-send cold email drafts
5. **Slack Notifications**: Sends real-time alerts with AI insights to your sales channel
6. **Weekly Reports**: Generates comprehensive trend analysis reports every Monday with AI-powered insights

## Setup

1. **Google Sheets**: Create a spreadsheet with 4 sheets:
   - `Target Companies` (columns: Company Name, Target Keywords, My Solution)
   - `Raw Jobs` (for all scraped jobs)
   - `Qualified Leads` (for filtered opportunities)
   - `Weekly Reports` (for trend analysis)

2. **Apify**: Set up accounts and get Actor IDs for:
   - Google Jobs Scraper
   - LinkedIn Jobs Scraper
   - Indeed Scraper

3. **Credentials**: Connect your Google Sheets, Slack, Gmail, OpenAI, and Apify credentials

4. **Configuration**: Update the placeholder values in the workflow for your specific IDs and channel names

## Requirements

- n8n instance (self-hosted or cloud)
- Apify account with credits
- OpenAI API key (GPT-4o access)
- Google Sheets access
- Slack workspace (optional, for notifications)
- Gmail account (optional, for email reports)

## Customization

- Adjust `maxJobsPerSource` and `daysToCheck` in the Configuration node
- Modify AI prompts to match your sales style and language preferences
- Add or remove job sources based on your needs
- Customize Slack message format and notification triggers

## 📊 Basic Information

- **Workflow ID:** 11574
- **Complexity:** advanced
- **Node Count:** 37
- **Views:** 212
- **Downloads:** 21
- **Created:** 2025/12/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11574)

## 👤 Author

- **Name:** 福壽一貴
- **Username:** @fukujukazuki

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **scheduleTrigger** (×2)
- **@apify/n8n-nodes-apify.apify** (×3)
- **code** (×6)
- **merge** (×2)
- **googleSheets** (×6)
- **if** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **slack** (×2)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 37 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
