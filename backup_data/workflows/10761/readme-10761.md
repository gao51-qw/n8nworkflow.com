# Contract extraction, risk analysis & compliance automation with GPT-4.1 Mini

> ## How It Works
Scheduled triggers initiate automated contract reviews. The system fetches documents from cloud storage and email, then uses AI to extract key terms, obligations, and compliance requirements. Multi-model parsing identifies gaps, inconsistencies, and potential risks. A scoring engine evaluates severity and routes alerts to the appropriate channels. The workflow then updates the CLM system and produces audit-ready documentation for tracking and governance.

## Setup Instructions
1. **Storage:** Configure access to your Google Drive or webhook-based document repository.
2. **Email:** Connect Gmail to automatically ingest contract-related emails.
3. **AI Extraction:** Add the OpenAI API key and define extraction prompts for obligations and terms.
4. **CLM System:** Enter credentials for your contract lifecycle management platform.
5. **Alerts:** Set up Google Sheets logging and connect dashboard endpoints for risk and compliance alerts.

## Prerequisites
Cloud storage access; Gmail credentials; OpenAI API key; CLM system credentials; document processing license

## Use Cases
Contract renewal tracking; compliance audits; risk management; vendor agreement reviews; regulatory adherence monitoring

## Customization
Adjust risk thresholds; modify extraction rules; add Slack notifications; extend compliance frameworks 

## Benefits
Reduces review time 80%; catches compliance gaps; automates audit trails;  


## 📊 Basic Information

- **Workflow ID:** 10761
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 237
- **Downloads:** 23
- **Created:** 2025/11/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10761)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **webhook** 
- **gmailTrigger** 
- **httpRequest** (×4)
- **merge** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **postgres** (×2)
- **switch** 
- **slack** 
- **stickyNote** (×13)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
