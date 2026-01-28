# Classify & auto-sort invoices in Google Drive with GPT-4o

> **Description:**

Automatically classify invoices by industry (Retail, Manufacturing, or EdTech) using GPT-4o-powered AI parsing in this intelligent n8n automation template. Designed for teams managing high-volume billing data, this workflow fetches invoices from Google Drive, extracts PDF text, classifies each document using AI, and automatically moves files to the correct folder based on the predicted industry.

This smart auto-sorting system turns your invoice processing into a zero-touch AI workflow—ideal for finance teams, document processing agencies, and operations managers dealing with multi-client or multi-industry invoicing pipelines.

**What This Template Does (Step-by-Step)**

📂 Google Drive Search
- Scans a designated folder (e.g., “Incoming Invoices”)
- Collects all PDF files available for classification

⬇️ Download & Extract PDF Text
- Downloads each file using Google Drive API
- Extracts invoice text from PDFs using the “Extract from File” node

🔁 Batch Handling
- Loops through each invoice in a batch using the SplitInBatches node
- Ensures each document is processed one at a time

🧠 GPT-4o Mini via LangChain Agent
- Sends extracted invoice content to GPT-4o AI
- Classifies the document into one of: Retail, Manufacturing, EdTech
- Returns clean, structured classification output

🔀 Smart Switch Logic
- Evaluates the classification result
- Routes the invoice to the correct folder based on its predicted industry

📁 Auto-Move Files
- Uses Google Drive API to move files into industry-specific folders:
- Retail → Folder A
- Manufacturing → Folder B
- EdTech → Folder C

**Required Integrations:**

✅ Google Drive (OAuth2 authentication)
✅ Azure OpenAI (GPT-4o or compatible model)
✅ LangChain agent setup in n8n

**Best For:**

🧾 Finance teams classifying vendor or client invoices
🏭 Companies handling multi-industry procurement
🧠 AI automation agencies building custom document sorters
🗂️ Back-office automation for Google Drive file workflows

**Key Benefits:**

💡 No manual labeling required — AI classifies based on content
📦 Automatically moves files to clean, organized folders
🔄 Works in batch mode for bulk invoice handling
💬 Simple prompt customization for other classification types
🧠 GPT-4o-powered classification ensures high accuracy

## 📊 Basic Information

- **Workflow ID:** 6682
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 402
- **Downloads:** 40
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6682)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **googleDrive** (×5)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **splitInBatches** 
- **extractFromFile** 
- **switch** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
