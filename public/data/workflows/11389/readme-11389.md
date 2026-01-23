# Web research summarizer with Decodo Scraper, Google Gemini AI & Sheets integration

> ## How it works  
This workflow takes a list of links from Google Sheets, visits each page, extracts the main text using [Decodo](https://visit.decodo.com/raqXGD), and creates a summary with the help of artificial intelligence.  
It helps you turn research articles or web pages into clear, structured insights you can reuse for your projects, content ideas, or newsletters.

**Input:** A Google Sheet named `input` with one column called `url`.  
**Output:** Another Google Sheet named `output`, where all the processed data is stored:  
- **URL:** original article link  
- **Title:** article title  
- **Source:** website or domain  
- **Published Date:** publication date (if found)  
- **Main Topic:** main theme of the article  
- **Key Ideas:** three main takeaways or insights  
- **Summary:** short text summary  
- **Text Type:** type of content (e.g., article, blog, research paper)

## Setup steps  
1. Connect your Google Sheets account.  
2. Add your links to the `input` sheet.  
3. In the **[Decodo](https://visit.decodo.com/raqXGD)** node, insert your API key.  
4. Configure the AI model (for example, Gemini).  
5. Run the workflow and check the results in the `output` sheet.


## 📊 Basic Information

- **Workflow ID:** 11389
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 83
- **Downloads:** 8
- **Created:** 2025/12/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11389)

## 👤 Author

- **Name:** Kevin Meneses 
- **Username:** @pythonia-kevin

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@decodo/n8n-nodes-preview-decodo.decodo** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleSheets** (×2)
- **splitInBatches** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
