# Reconcile Stripe, bank, and e-commerce data with GPT-4.1 and Google Sheets

> ## How It Works
This workflow automates financial reconciliation by orchestrating multiple AI agents to detect mismatches, analyze root causes, and apply corrections across bank statements, invoices, and e-commerce platforms. Designed for finance teams, accountants, and business owners managing high transaction volumes, it eliminates manual reconciliation tedious work that typically consumes hours weekly. The system retrieves financial data from Stripe, banking APIs, and e-commerce platforms, then feeds it to specialized AI agents: one detects discrepancies using pattern recognition, another performs root cause analysis, and a third generates ledger corrections. An orchestrator agent coordinates these specialists, ensuring systematic processing. Results are logged to Google Sheets and trigger email notifications for critical issues, creating an audit trail while reducing reconciliation time from hours to minutes with 95%+ accuracy.

## Setup Steps
1. Configure Stripe API credentials in "Get Stripe Transactions" node
2. Add banking API authentication for "Get Bank Feed Data" node
3. Connect e-commerce platform (Shopify/WooCommerce) credentials  
4. Input NVIDIA API key for all OpenAI Model nodes
5. Set OpenAI API key in Orchestrator Agent
6. Configure Gmail credentials for notification node

## Prerequisites
NVIDIA API access, OpenAI API key, Stripe account
## Use Cases
Monthly financial close automation, daily transaction reconciliation
## Customization
Modify detection thresholds, add custom financial data sources
## Benefits
Reduces reconciliation time by 90%, eliminates manual data entry errors

## 📊 Basic Information

- **Workflow ID:** 12493
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 19
- **Downloads:** 1
- **Created:** 2026/1/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12493)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **stripe** 
- **httpRequest** (×3)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.agentTool** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×4)
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **code** 
- **googleSheets** 
- **gmail** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
