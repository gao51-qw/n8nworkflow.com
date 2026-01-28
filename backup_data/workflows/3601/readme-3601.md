# Scrape Indeed job listings for hiring signals using Bright Data and LLMs

> # Scrape Indeed Job Listings for Hiring Signals Using Bright Data and LLMs

## How the flow runs
1. Fill the form with job position you're hunting for.
2. Bright data's scraper will scrape Indeed based on your requirments.  
3. Workflow waits for the snapshot.  
4. Data returns as JSON.  
5. Jobs append to Google Sheets.  
6. Each row goes to an LLM to analyze if you're a good fit for the job (based on your prompts).  
7. The LLMswrites **YES** or **NO** next to each job opportunity, helping you find job posts that are relevant to you.

## What you need
- Google Sheets with our template.  
- Bright Data dataset and API key.  
- OpenAI key for GPT‑4o mini (or any other LLM).  
- n8n with required nodes.

## Form fields To Fill
- **Job Location** – city or region.  
- **Keyword** – role or skills.  
- **Country** – two‑letter code.

## Setup steps
1. Copy the sheet template link.  
2. Import the JSON workflow. 
3. Add your credentials in nodes.  
4. Test the form manually.  
5. Add a schedule if desired.

## Bright Data filter example
```json
[
  {
    "country": "US",
    "domain": "indeed.com",
    "keyword_search": "Growth Marketer",
    "location": "Miami",
    "date_posted": "Last 24 hours"
  }
]

**Tips**
-Choose Last 24 hours often.

-Increase wait time for big snapshots.

-Narrow keywords to save credits.


**Need help?
**Email me anytime: 
Yaron@nofluff.online
YouTube: @YaronBeen
- LinkedIn: https://www.linkedin.com/in/yaronbeen/
=======================================
Bright Data Docs: https://docs.brightdata.com/introduction



## 📊 Basic Information

- **Workflow ID:** 3601
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 4393
- **Downloads:** 439
- **Created:** 2025/4/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3601)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **httpRequest** (×3)
- **formTrigger** 
- **wait** 
- **if** 
- **googleSheets** (×2)
- **splitOut** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
