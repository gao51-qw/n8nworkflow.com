# AI-powered information monitoring with OpenAI, Google Sheets, Jina AI and Slack

> **Check Legal Regulations**:
This workflow involves scraping, so ensure you comply with the legal regulations in your country before getting started. Better safe than sorry!

## 📌 Purpose  
This workflow enables **automated and AI-driven topic monitoring**, delivering **concise article summaries** directly to a **Slack channel** in a structured and easy-to-read format.  
It allows users to stay informed on specific topics of interest effortlessly, without manually checking multiple sources, ensuring a **time-efficient and focused** monitoring experience.  

**To get started, copy the Google Sheets template required for this workflow from [here](https://docs.google.com/spreadsheets/d/1F2FzWt9FMkA5V5i9d_hBJRahLDvxs3DQBOLkLYowXbY).**  


## 🎯 Target Audience  
This workflow is designed for:  
- **Industry professionals** looking to track key developments in their field.  
- **Research teams** who need up-to-date insights on specific topics.  
- **Companies** aiming to keep their teams informed with relevant content.  

## ⚙️ How It Works  
1. **Trigger:** A **Scheduler** initiates the workflow at regular intervals (default: every hour).  
2. **Data Retrieval:**  
   - RSS feeds are fetched using the **RSS Read** node.  
   - Previously monitored articles are checked in **Google Sheets** to avoid duplicates.  
3. **Content Processing:**  
   - The article relevance is assessed using **OpenAI (GPT-4o-mini)**.  
   - Relevant articles are scraped using **Jina AI** to extract content.  
   - Summaries are generated and formatted for Slack.  
4. **Output:**  
   - Summaries are posted to the specified Slack channel.  
   - Article metadata is stored in **Google Sheets** for tracking.  

## 🛠️ Key APIs and Nodes Used  
- **Scheduler Node:** Triggers the workflow periodically.  
- **RSS Read:** Fetches the latest articles from defined RSS feeds.  
- **Google Sheets:** Stores monitored articles and manages feed URLs.  
- **OpenAI API (GPT-4o-mini):** Classifies article relevance and generates summaries.  
- **Jina AI API:** Extracts the full content of relevant articles.  
- **Slack API:** Posts formatted messages to Slack channels.  

---

This workflow provides an **efficient and intelligent way** to stay informed about your topics of interest, directly within Slack.


## 📊 Basic Information

- **Workflow ID:** 2799
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 19368
- **Downloads:** 1936
- **Created:** 2025/1/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2799)

## 👤 Author

- **Name:** Dataki
- **Username:** @dataki

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **scheduleTrigger** 
- **rssFeedRead** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **stickyNote** (×13)
- **googleSheets** (×4)
- **slack** 
- **code** 
- **noOp** 
- **if** 
- **httpRequest** 
- **set** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
