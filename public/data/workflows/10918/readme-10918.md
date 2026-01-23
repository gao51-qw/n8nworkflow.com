# Fetch daily job postings from JSearch to Google Sheets and Telegram

> This workflow automatically fetches job postings from the JSearch API once per day, filters out duplicates, and saves only new jobs to a Google Sheet. It also sends a Telegram summary with the number of newly added jobs.

### What this workflow does
• Builds a custom job search query  
• Fetches job listings from JSearch  
• Loads existing job IDs from Google Sheets  
• Removes already-saved jobs  
• Writes only new jobs into the sheet  
• Sends a Telegram summary with job count  

### Why it's useful
• Hands-free daily job monitoring  
• No duplicates — clean data tracking  
• Uses rate-limit-safe writing  
• Easy to customize search keywords  
• Works entirely with no-code steps  

### Requirements
• RapidAPI (JSearch) account  
• Google Sheets account  
• Telegram Bot token  

### Ideal For
• Job researchers  
• Recruitment automations  
• Personal job-search tracking  
• Data collection workflows


## 📊 Basic Information

- **Workflow ID:** 10918
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 34
- **Downloads:** 3
- **Created:** 2025/11/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10918)

## 👤 Author

- **Name:** Hrayr Movsisyan
- **Username:** @hrayronair

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** 
- **splitOut** 
- **googleSheets** (×2)
- **merge** (×2)
- **code** (×3)
- **splitInBatches** 
- **wait** 
- **telegram** 
- **set** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
