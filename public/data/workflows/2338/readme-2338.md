# Reconcile rent payments with local Excel spreadsheet and OpenAI

> This n8n workflow is designed to work on the local network and assists with reconciling downloaded bank statements with internal tenant records to quickly highlight any issues with payments such as missed or late payments or those of incorrect amounts.

This assistant can then generate a report to quick flag attention to ensure remedial action is taken.

## How it works

* The workflow monitors a local network drive to watch for new bank statements that are added.
* This bank statement is then imported into the n8n workflow, its contents extracted and sent to the AI Agent.
* The AI Agent analyses the line items to identify the dates and any incoming payments from tenants.
* The AI agent then uses an locally-hosted Excel ("XLSX") spreadsheet to get both tenant records and property records. From this data, it can determine for each active tenant when payment is due, the amount and the tenancy duration.
* Comparing to the bank statement, the AI Agent can now report on where tenants have missed their payments, made late payments or are paying the incorrect amounts.
* The final report is generated and logged in the same XLSX for a human to check and action.

## Requirements

* A self-hosted version of n8n is required.
* OpenAI account for the AI model

## Customising this workflow

If you organisation has a Slack or Teams account, consider sending reports to a channel for increased productivity. Email may be a good choice too.

## Want to go fully local?

A version of this workflow is available which uses Ollama instead. You can download this template here: https://drive.google.com/file/d/1YRKjfakpInm23F_g8AHupKPBN-fphWgK/view?usp=sharing

## 📊 Basic Information

- **Workflow ID:** 2338
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 7845
- **Downloads:** 784
- **Created:** 2024/7/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2338)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **localFileTrigger** 
- **@n8n/n8n-nodes-langchain.toolCode** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **readWriteFile** 
- **extractFromFile** 
- **splitOut** 
- **stickyNote** (×6)
- **set** 
- **code** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
