# Discover HIDDEN Youtube trends / outlier videos in your niche (Apify + Airtable)

> ## For Who?

- Content Creators
- Youtube Automation 
- Marketing Team

---
## How it works?

**1 -** Every week, retrieve the keywords you want to track
**2 -** Thanks to Apify, scrape videos from YouTube Search related to these keywords, filtered by relevance
**3 -** Wait until the dataset is completed
**4 -** Get the information contained in the dataset
**5 -** For each video, clean and summarize the script
**6 -** Upload everything to your Airtable database

**📺 YouTube Video Tutorial:** 
[![Watch on YouTube](https://img.youtube.com/vi/pH2hVaij3FY/maxresdefault.jpg)](https://www.youtube.com/watch?v=pH2hVaij3FY)

---
## Setup (~5min)

**Scheduled Trigger:** Select the frequency you want. If you change it, update the data accordingly in the "Create Videos Dataset" HTTP Request node in Body ➡️ JSON ➡️ dateFilter.

**Setup Keywords:** Enter keywords related to the niche you want. If you change the number of keywords, update the data accordingly in the "Create Videos Dataset" HTTP Request node in Body ➡️ JSON ➡️ searchQueries.

**Create Videos Dataset:** Refer to the Apify documentation for more: [https://docs.apify.com/api/v2/getting-started](https://docs.apify.com/api/v2/getting-started)

**APIs:** For all HTTP Request nodes in the URL field, replace `[YOUR_API_TOKEN]` with your API token.

---
👨‍💻 **More Workflows :** [https://n8n.io/creators/nasser/](https://n8n.io/creators/nasser/)

## 📊 Basic Information

- **Workflow ID:** 4187
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 1876
- **Downloads:** 187
- **Created:** 2025/5/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4187)

## 👤 Author

- **Name:** Nasser
- **Username:** @nasser

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **wait** 
- **if** 
- **httpRequest** (×3)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** 
- **noOp** 
- **airtable** 
- **scheduleTrigger** 
- **stickyNote** (×3)
- **code** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
