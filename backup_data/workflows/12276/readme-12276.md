# Verify document authenticity with Claude and record proofs on blockchain

> ## How It Works
This workflow automates document authenticity verification by combining AI-based content analysis with immutable blockchain records. It is built for compliance teams, legal departments, supply chain managers, and regulators who need tamper-proof validation and auditable proof. The solution addresses the challenge of detecting forged or altered documents while producing verifiable evidence that meets legal and regulatory standards. Documents are submitted via webhook and processed through PDF content extraction. Anthropic’s Claude analyzes the content for authenticity signals such as inconsistencies, anomalies, and formatting issues, returning structured authenticity scores. Verified documents trigger blockchain record creation and publication to a distributed ledger, with cryptographic proofs shared automatically with carriers and regulators through HTTP APIs. 

## Setup Steps

1. Configure webhook endpoint URL for document submission  
2. Add Anthropic API key to Chat Model node for AI 
3. Set up blockchain network credentials in HTTP nodes for record preparation
4. Connect Gmail account and specify compliance team email addresses  
5. Customize authenticity thresholds 

## Prerequisites
Anthropic API key, blockchain network access and credentials 

## Use Cases
Supply chain documentation verification for import/export compliance 

## Customization
Adjust AI prompts for industry-specific authenticity criteria 

## Benefits
Eliminates manual document review time while improving fraud detection accuracy 








 








## 📊 Basic Information

- **Workflow ID:** 12276
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 19
- **Downloads:** 1
- **Created:** 2025/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12276)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **set** (×3)
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** 
- **httpRequest** (×3)
- **gmail** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
