# AI-powered CV filtering with Llama3.1 LLM, Google Drive & Sheets

> This visual workflow represents an AI-powered automated CV filtering system created using tools like n8n, Google Drive, Google Sheets, and Ollama (LLM)



## ⚙️ Key Features
- ### 📂 Google Drive Integration – Automatically searches and downloads CVs (PDF/DOCX/PPTX) from a shared folder.
- ### 📋 Criteria Matching – Reads and applies filtering rules from a Google Sheet.
- ### 🧠 LLM-Based Analysis – Uses a Large Language Model (Ollama) to assess and interpret CV content.
- ### 🧪 Smart Parsing – Includes structured and auto-fixing output parsers to ensure data accuracy.
- ### 📊 Automated Results Output – Writes matching candidates and analysis to a Google Sheet.
- ### 🔁 Loop and Aggregate Logic – Handles multiple CVs with iterative processing and aggregation.
- ### 🚀 No-Code Automation with n8n – Fully visual, modifiable without programming.

## 🛠️ How It Works

Trigger: Workflow is initiated via a Webhook (from a UI “Start Workflow” button).

CV Search: Searches for CV files in a designated Google Drive folder.
Loop Over Files:
Each file is downloaded.
Text is extracted (from PDFs or other formats).
Criteria Input: Matching rules are fetched from a predefined Google Sheet.
Merge & Aggregate: Combines file text and criteria for unified processing.

LLM Processing:
Text + criteria are sent to the Basic LLM Chain.

Utilizes Ollama Model for advanced language understanding.

Structured or auto-fixing output parsers enhance reliability.

Custom Code Execution: Optionally enriches or reformats the data.

Output: Results are appended to a shared Google Sheet (the output sheet).

## 📊 Basic Information

- **Workflow ID:** 6696
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 566
- **Downloads:** 56
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6696)

## 👤 Author

- **Name:** Lakindu Siriwardana
- **Username:** @laki99

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **splitInBatches** 
- **merge** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.lmOllama** 
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **code** 
- **googleDrive** (×2)
- **googleSheets** (×2)
- **extractFromFile** 
- **webhook** 
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
