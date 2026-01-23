# Scrape and summarize webpages with AI

> This workflow integrates both web scraping and NLP functionalities. It uses HTML parsing to extract links, HTTP requests to fetch essay content, and AI-based summarization using GPT-4o. It's an excellent example of an end-to-end automated task that is not only efficient but also provides real value by summarizing valuable content.

Note that to use this template, you need to be on n8n version 1.50.0 or later.

## 📊 Basic Information

- **Workflow ID:** 1951
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 367249
- **Downloads:** 36724
- **Created:** 2023/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1951)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×2)
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **html** (×3)
- **splitOut** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **set** 
- **merge** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **limit** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
