# Analyze search intent for keywords with Google scraping, Bright Data, and Gemini AI

> ## What it does
This workflow scrapes the top 10 pages on SERP and conducts an in-depth analysis of the keyword intent for each ranking keyword, saving the information to a Google Sheet for further analysis.


## How does this workflow work?

- We add our keywords and country code to a Google sheet that we need to monitor and research on
- Run the system
- Scrape the top 10 pages
- Analyze the intents of the top 10 and update to a Google sheet

## Technical Setup
1. Make a copy of this [G sheet](https://docs.google.com/spreadsheets/d/1QU9rwawCZLiYW8nlYYRMj-9OvAUNZoe2gP49KbozQqw/edit?usp=sharing)
2. Add your desired keywords to the Google sheet
3. Map keyword and country code 
4. Update the Zone name to match your zone on Bright Data
5. Run the scraper

Upon successful scraping, we run an intent classifier to determine the intents for each ranking page and update the G sheet.

## Setting up the Serp Scraper in Bright Data

1. On Bright Data, go to the [Proxies & Scraping](https://brightdata.com/cp/zones) tab
2. Under SERP API, create a new zone
3. Give it a suitable name and description. The default is `serp_api`
3. Add this to your account
4. Add your credentials as a header credential

## 📊 Basic Information

- **Workflow ID:** 6043
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 927
- **Downloads:** 92
- **Created:** 2025/7/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6043)

## 👤 Author

- **Name:** Zacharia Kimotho
- **Username:** @imperolq

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **splitOut** 
- **googleSheets** (×2)
- **splitInBatches** 
- **set** (×7)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **stickyNote** (×8)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
