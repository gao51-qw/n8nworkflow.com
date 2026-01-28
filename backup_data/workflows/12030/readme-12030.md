# Automate tax deduction processing with GPT-4 receipt analysis and Gmail reporting

> ## How It Works
This workflow automates monthly tax processing by ingesting expense receipts alongside revenue data, extracting structured deduction details using GPT-4, and accurately matching expenses to their corresponding revenue periods. It retrieves receipts with built-in type validation, parses deduction information through OpenAI structured output extraction, and consolidates revenue records into a unified dataset. The system then intelligently aligns expenses with revenue timelines, calculates eligible deductions, and generates well-formatted tax reports that are automatically sent to designated agents via Gmail. Designed for accountants, tax professionals, and finance teams, it enables automated expense categorization and optimized deduction calculations.

## Setup Steps
1. Configure receipt storage source and OpenAI Chat Model API key.
2. Connect Gmail for report delivery and set up tax agent email.
3. Define expense categories, revenue periods, and deduction rules.
4. Schedule monthly trigger and test extraction 

## Prerequisites
Expense receipt repository; OpenAI API key; Gmail account; revenue data source 

## Use Cases
Accountants automating receipt processing for multiple clients;  

## Customization
Adjust extraction prompts for industry-specific expenses, modify deduction rules 

## Benefits
Eliminates manual receipt review, reduces categorization errors  

## 📊 Basic Information

- **Workflow ID:** 12030
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 21
- **Downloads:** 2
- **Created:** 2025/12/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12030)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **httpRequest** (×2)
- **if** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **merge** 
- **code** (×2)
- **gmail** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
