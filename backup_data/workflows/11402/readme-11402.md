# Audit web pages for SEO issues with Decodo, GPT-4 and Google Sheets

> ## What this workflow does

This workflow automatically audits web pages for SEO issues and generates an executive-friendly SEO report using AI.

It is designed for marketers, founders, and SEO teams who want fast, actionable insights without manually reviewing HTML, meta tags, or SERP data.

**The workflow:**

1. Reads URLs from Google Sheets


![image.png](fileId:3823)

2. Scrapes page content using Decodo (reliable scraping, even on protected sites)

3. Extracts key SEO elements (title, meta description, canonical, H1/H2, visible text)

4. Uses an AI Agent to analyze the page and generate:

- Overall SEO status

- Top issues

- Quick wins

- Title & meta description recommendations

- Saves results to Google Sheets

- Sends a formatted HTML executive report by email (Gmail)

![image.png](fileId:3824)

## Who this workflow is for

This template is ideal for:

SEO consultants and agencies

SaaS marketing teams

Founders monitoring their landing pages

Content teams doing SEO quality control

It focuses on on-page SEO fundamentals, not backlink analysis or technical crawling.

## Setup (step by step)

**1. Google Sheets**

Create an input sheet with one URL per row

Create an output sheet to store SEO results

**2. Decodo**

Add your Decodo API credentials

The URL is automatically taken from the input sheet
👉 [Decodo – Web Scraper for n8n](https://visit.decodo.com/raqXGD)

**3. AI Agent**

Connect your LLM credentials (OpenAI, Gemini, etc.)

The prompt is already optimized for non-technical SEO summaries

**4. Gmail**

Connect your Gmail account

Set the recipient email address

Emails are sent in clean HTML format

**Notes & disclaimer**

This is a community template

Results depend on page accessibility and content structure

It focuses on on-page SEO, not backlinks or rankings

## 📊 Basic Information

- **Workflow ID:** 11402
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 67
- **Downloads:** 6
- **Created:** 2025/12/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11402)

## 👤 Author

- **Name:** Kevin Meneses 
- **Username:** @pythonia-kevin

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@decodo/n8n-nodes-decodo.decodo** 
- **splitInBatches** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **googleSheets** (×2)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
