# Find out which Chrome extensions are tracked by Linkedin

> ## What this workflow does
**Linkedin tracks which Chrome extensions are installed in your browser.**  This workflow uses a huge raw JSON of chrome extension ids, extracted from Linkedin pages, and builds a pretty Google Sheet with the list of these extensions. This workflow web scrapes Google to search for chrome extension id - and extracts the first search result.

## Setup
1. Clone this Google Sheet template: https://docs.google.com/spreadsheets/d/1nVtoqx-wxRl6ckP9rBHSL3xiCURZ8pbyywvEor0VwOY/edit?gid=0#gid=0
2. Get API key for Google SERP API access here: https://rapidapi.com/restyler/api/serp-api1
3. Create n8n header auth for Google SERP API

## Some context and discussion 
https://www.linkedin.com/feed/update/urn:li:activity:7245006911807393792/

**Follow the author and get the final Google Sheet with 1300+ Chrome extensions:** https://www.linkedin.com/in/anthony-sidashin/



## 📊 Basic Information

- **Workflow ID:** 2438
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 921
- **Downloads:** 92
- **Created:** 2024/9/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2438)

## 👤 Author

- **Name:** Anthony
- **Username:** @scrapeninja

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **limit** 
- **code** 
- **googleSheets** (×2)
- **merge** 
- **httpRequest** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
