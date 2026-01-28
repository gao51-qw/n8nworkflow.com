# Reconcile bank transactions and generate reports with GPT-4 and Gmail

> ## How It Works
This workflow automates end-to-end financial transaction processing for finance teams managing high-volume bank data. It eliminates manual reconciliation by intelligently classifying transactions, detecting anomalies, and generating executive summaries. The system pulls transaction data from Fable Bank, routes it through multiple AI models (OpenAI GPT-4, NVIDIA NIM) for classification and analysis, reconciles accounts, and distributes formatted reports via email. Finance managers and accounting teams benefit from reduced processing time, improved accuracy, and real-time anomaly detection. The workflow handles transaction categorization, reconciliation schema generation, account matching, journal entry creation, and comprehensive reporting—transforming hours of manual work into minutes of automated processing with AI-enhanced accuracy.

## Setup Steps
1. Configure Fable Bank API credentials for transaction data access 
2. Add OpenAI API key for GPT-4 classification and reconciliation models 
3. Set up NVIDIA NIM credentials for anomaly detection services 
4. Connect Google Sheets for reconciliation schema storage 
5. Configure Gmail account for automated report distribution  

## Prerequisites
OpenAI API account with GPT-4 access

## Use Cases
Monthly financial close automation, daily transaction monitoring for fraud detection

## Customization
Replace Fable Bank with your banking API

## Benefits
Reduces reconciliation time by 90%, eliminates manual data entry errors


 



## 📊 Basic Information

- **Workflow ID:** 12377
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 42
- **Downloads:** 4
- **Created:** 2026/1/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12377)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **httpRequest** (×3)
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** (×7)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×6)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×6)
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **gmailTool** 
- **gmail** 
- **if** 
- **aggregate** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
