# Categorize Revolut transactions automatically with GPT-4 and Supabase

> ## Revolut Extracts Analyzer

### This n8n template processes Revolut statements, normalizes transactions, and uses AI to categorize expenses automatically.
### Use cases include detecting subscriptions, separating internal transfers, and building dashboards to track spending.
---

## How it works
* **Get Categories from Supabase**
* **Download & Transform**
* **Loop Over Items**
* **LLM Categorizer**  
* **Insert into Supabase**

---

## How to use
* Start with the **manual trigger node** or replace it with a schedule/webhook.  
* Connect **Google Drive** to provide Revolut CSV files.  
* Ensure **Supabase** has tables for `transactions` and `categories`.  
* Extend with notifications, reports, or BI tools.  

---

## Requirements
* Google Drive for CSV files  
* Supabase tables for categories & transactions  
* LLM provider (OpenAI/Gemini)

## 📊 Basic Information

- **Workflow ID:** 8807
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 241
- **Downloads:** 24
- **Created:** 2025/9/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8807)

## 👤 Author

- **Name:** Jose Luis Segura
- **Username:** @jose99segura

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×5)
- **googleDrive** 
- **supabase** (×2)
- **set** 
- **code** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **merge** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **aggregate** 
- **crypto** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **extractFromFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
