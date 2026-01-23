# Automate job matching with Gemini AI, Decodo scraping & resume analysis to Telegram

> ## AI Job Matcher with Decodo, Gemini AI & Resume Analysis

[Sign up for Decodo — get better pricing here](https://visit.decodo.com/9L1XPE)

## Who’s it for

This workflow is built for job seekers, recruiters, founders, automation builders, and data engineers who want to automate job discovery and intelligently match job listings against resumes using AI.

It’s ideal for anyone building job boards, candidate matching systems, hiring pipelines, or personal job alert automations using n8n.

## What this workflow does

This workflow automatically scrapes job listings from SimplyHired using **Decodo residential proxies**, extracts structured job data with a **Gemini AI agent**, downloads resumes from Google Drive, extracts and summarizes resume content, and surfaces the most relevant job opportunities.

The workflow stores structured results in a database and sends real-time notifications via Telegram, creating a scalable and low-maintenance AI-powered job matching pipeline.


## How it works

1. A schedule trigger starts the workflow automatically
2. Decodo fetches job search result pages from SimplyHired
3. Job card HTML is extracted from the page
4. A Gemini AI agent converts raw HTML into structured job data
5. Resume PDFs are downloaded from Google Drive
6. Resume text is extracted from PDF files
7. A Gemini AI agent summarizes key resume highlights
8. Job and resume data are stored in a database
9. Matching job alerts are sent via Telegram

## How to set up

1. Add your **Decodo API credentials**
2. Add your **Google Gemini API key**
3. Connect **Google Drive** for resume access
4. Configure your **Telegram bot**
5. Set up your **database** (Google Sheets by default)
6. Update the job search URL with your keywords and location


## Requirements

* Self-hosted n8n instance
* Decodo account (community node)
* Google Gemini API access
* Google Drive access
* Telegram Bot token
* Google Sheets or another database

&gt; **Note:** This template uses a **community node (Decodo)** and is intended for **self-hosted n8n only**.


## How to customize the workflow

* Replace SimplyHired with another job board or aggregator
* Add job–resume matching or scoring logic
* Extend the resume summary with custom fields
* Swap Google Sheets for PostgreSQL, Supabase, or Airtable
* Route notifications to Slack, Email, or Webhooks
* Add pagination or multi-resume processing


## 📊 Basic Information

- **Workflow ID:** 11774
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 43
- **Downloads:** 4
- **Created:** 2025/12/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11774)

## 👤 Author

- **Name:** Rully Saputra
- **Username:** @rullysaputra15

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@decodo/n8n-nodes-decodo.decodo** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitOut** 
- **telegram** 
- **googleSheets** 
- **html** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×6)
- **googleDrive** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
