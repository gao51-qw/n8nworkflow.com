# Weekly job discovery and CV matching with Gemini 1.5 Pro and Decodo Scraper

> # Header 1Smart Weekly Job Discovery Powered by Decodo

This workflow automates the entire search process: every week, it uses **Decodo’s reliable scraping engine** to scan the web for fresh opportunities in your region and industry — no manual searching, no endless scrolling.

Decodo handles the heavy lifting behind the scenes:
it gathers search results, opens each job link, and extracts clean, readable text from pages that are normally full of scripts and formatting noise. The workflow always receives structured, usable information ready for AI analysis.

## Intelligent Matching — Not Just Scraping
Once the jobs are collected, the system analyzes the candidate’s CV and compares it to each posting.
It evaluates:
- Skill alignment
- Experience relevance
- Domain match
- Seniority level

Then it generates a Match Percentage for each role, filtering out weak options and keeping only meaningful opportunities.

## A Weekly Report That Feels Human
Every week, the workflow sends a polished report straight to your inbox:
- A quick overview of the candidate’s strengths
- Best-fit roles sorted by match score
- Clear reasons why each job fits
- Posted dates and direct links
- Insights on skills and market trends

It reads like a personalized career briefing — generated automatically.

## How to Configure It
### Decodo Setup
Add your Decodo API credentials to n8n.
The Google Search + Scraper nodes rely on Decodo’s Web Scraping API.
Make sure your plan supports scraping LinkedIn/Indeed pages.

### AI Setup
Add your Google Gemini API key.
The workflow uses two Gemini models: one for summarizing, one for job-matching.
You can switch to OpenAI or Claude if you prefer.

### CV Input
Add your CV text into the workflow (or connect Google Drive/Sheets for auto-loading).
The Job Matcher Agent will use this text to compute match percentages.

### Email Setup
Add your Gmail credentials and choose where the final report should be sent.

## Flexible and Easy to Customize
- Change the search region.
- Target different industries.
- Store all job data in Notion or Google Sheets.


With **Decodo’s** scraping pipeline at the core, the whole process stays consistent, fast, and dependable.

If you need any help [Get in Touch](https://www.linkedin.com/in/abdallaelshikh0/)

## 📊 Basic Information

- **Workflow ID:** 11125
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 80
- **Downloads:** 8
- **Created:** 2025/11/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11125)

## 👤 Author

- **Name:** Abdullah Alshiekh
- **Username:** @abdullah01

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **scheduleTrigger** 
- **set** 
- **@decodo/n8n-nodes-decodo.decodo** (×2)
- **code** (×3)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
