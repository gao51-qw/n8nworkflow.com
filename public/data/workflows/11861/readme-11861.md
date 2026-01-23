# Intelligent legal document review and compliance automation

> ## How It Works
This template automates legal document review by extracting text, analyzing clauses with OpenAI, checking compliance standards, and generating alternative wordings. Target audience: legal teams, contract managers, and compliance officers seeking efficient document processing. Problem solved: manual clause extraction and compliance review is time-consuming and error-prone. Workflow extracts document text, performs parallel AI-powered clause analysis and compliance verification via OpenAI, consolidates findings, generates alternative wordings for non-compliant clauses, creates summary reports, stores results in databases, and notifies stakeholders via email.

## Setup Steps
1. Configure OpenAI API with clause analysis and compliance prompts. 
2. Connect Google Sheets for database staging. 
3. Set Gmail for notifications. 
4. Input document source (upload node). 
5. Test with sample contracts.

## Prerequisites
OpenAI API key, Gmail account, Google Sheets access, document upload capability.

## Use Cases
Legal teams reviewing SaaS contracts, compliance departments auditing vendor agreements 

## Customization
Modify OpenAI prompts for industry-specific clauses. Swap Google Sheets for your database. 

## Benefits
Reduces manual review time by 80%, ensures consistent clause standardization 

## 📊 Basic Information

- **Workflow ID:** 11861
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 249
- **Downloads:** 24
- **Created:** 2025/12/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11861)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **set** (×2)
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **postgres** 
- **httpRequest** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
