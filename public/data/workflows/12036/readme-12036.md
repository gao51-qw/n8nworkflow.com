# Verify property ownership with blockchain, GPT-4 fraud detection, and compliance tracking

> ## How It Works
This workflow automates property registration verification, fraud detection, and blockchain-based compliance tracking by systematically assessing fraud risk, validating transactions, ensuring data immutability through cryptographic hashing, and recording property records on the blockchain. It ingests property registration data, applies GPT-4–driven fraud analysis with risk scoring, and verifies transaction legitimacy against regulatory and contractual criteria. The system generates cryptographic hashes for property and lease records, validates compliance requirements using AI-based analysis, queries the blockchain for verification, logs transactions on-chain, stores audit records in structured sheets, and securely archives all supporting documentation. Designed for real estate firms, legal practices, and property management companies, it enables transparent verification, fraud mitigation, and tamper-resistant compliance tracking across the property lifecycle.

## Setup Steps
1. Configure property data source and set up OpenAI GPT-4 for fraud detection and compliance.
2. Connect blockchain network credentials and configure hash generation parameters.
3. Set up Google Sheets for audit logging and configure blockchain verification queries.
4. Define fraud risk thresholds, compliance criteria, and transaction validation rules.

## Prerequisites
Property registration data source; OpenAI API key; blockchain network access 
## Use Cases
Real estate firms automating fraud checks on property transactions; 
## Customization
Adjust fraud detection criteria and risk thresholds, modify blockchain network selection.
## Benefits
Eliminates manual fraud detection, prevents title fraud and forgery 

## 📊 Basic Information

- **Workflow ID:** 12036
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 32
- **Downloads:** 3
- **Created:** 2025/12/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12036)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **set** (×2)
- **if** (×2)
- **code** (×2)
- **httpRequest** (×2)
- **dataTable** (×2)
- **googleSheets** 
- **webhook** 
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
