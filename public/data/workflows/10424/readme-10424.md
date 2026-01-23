# Track government grants with OpenRouter AI, RSS feeds, Google Sheets & Gmail

> ## How it works
This workflow automatically fetches the latest public grant information from the Ministry of Health, Labour and Welfare (MHLW) RSS feed.  
It uses AI to summarize and structure each grant post into a clear format, stores the results in Google Sheets, and sends a formatted HTML summary via Gmail.

**Workflow summary**
1. Schedule Trigger – Runs the flow daily or weekly.  
2. RSS Feed Reader – Fetches the latest MHLW news and updates.  
3. Text Classifier (AI) – Categorizes the item as “Grant/Subsidy”, “Labor-related”, or “Other”.  
4. AI Agent – Extracts structured data such as title, summary, deadline, amount, target, and URL.  
5. Google Sheets – Appends or updates the database using the grant title as the key.  
6. Code Node – Builds an HTML report summarizing new entries.  
7. Gmail – Sends a daily digest email to your inbox.

---

## Setup steps
1. Add your **OpenRouter API key** as a credential (used in the AI Agent).  
2. Replace the **Google Sheets ID** and sheet name with your own.  
3. Update the **recipient email** address in the Gmail node.  
4. Adjust the **schedule trigger** to match your preferred frequency.  
5. (Optional) Add more RSS feeds if you want to monitor other sources.

---

## Ideal for
- Consultants or administrators tracking subsidy and grant programs  
- Small business owners who want automatic updates  
- Anyone who wants a daily AI-summarized government grant digest  

---

⚙️ **Note:**  
Detailed explanations and setup hints are included as **Sticky Notes** above each node inside the workflow.


## 📊 Basic Information

- **Workflow ID:** 10424
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 209
- **Downloads:** 20
- **Created:** 2025/11/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10424)

## 👤 Author

- **Name:** Tsubasa Shukuwa
- **Username:** @tsubasa-shukuwa

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **stickyNote** (×10)
- **rssFeedRead** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** 
- **aggregate** 
- **code** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
