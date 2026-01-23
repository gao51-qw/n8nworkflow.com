# Assess document fraud risk and compliance with GPT-4, Claude and Slack alerts

> # n8n Template Submission: AI-Powered Multi-Document Analysis & Recommendation Engine

## 1. Title
**AI Multi-Document Analyzer with Smart Recommendations & Reporting**


## How It Works
This workflow automates intelligent document analysis by processing multiple uploaded files through parallel AI pipelines to extract insights, generate comparative analysis, and produce actionable recommendations delivered via email. Designed for business analysts, consultants, and researchers, it enables efficient synthesis of insights from diverse document types into strategic, data-driven conclusions. The workflow eliminates the manual effort of reviewing documents, identifying patterns, cross-referencing information, and formulating recommendations by orchestrating structured data extraction, routing content through specialized AI models (OpenAI and Claude), aggregating and validating results, and formatting professional-grade reports. End-to-end processing includes batch document ingestion, structured extraction, parallel AI analysis, comparative evaluation, recommendation generation, report formatting, and tracked delivery via Gmail.

## Setup Steps
1. Configure NVIDIA NIM API credentials for creative content analysis
2. Add OpenAI API key with GPT-4 access for strategic evaluation
3. Connect Anthropic Claude API for technical assessment capabilities
4. Set up Google Sheets integration with read/write permissions
5. Configure Gmail OAuth2 credentials for automated report delivery
6. Customize analysis prompts and recommendation thresholds 

## Prerequisites
NVIDIA NIM API access, OpenAI API key (GPT-4), Anthropic Claude API key
## Use Cases
Multi-vendor proposal evaluation, regulatory compliance document review
## Customization
Adjust AI model parameters per analysis depth, modify recommendation scoring algorithms
## Benefits
Processes multiple documents 90% faster than manual review, eliminates bias through multi-model  

## 📊 Basic Information

- **Workflow ID:** 12540
- **Complexity:** advanced
- **Node Count:** 48
- **Views:** 77
- **Downloads:** 7
- **Created:** 2026/1/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12540)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **set** (×2)
- **crypto** (×2)
- **switch** (×2)
- **extractFromFile** (×2)
- **code** (×2)
- **merge** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×5)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×5)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×5)
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.toolCode** 
- **postgres** (×4)
- **wait** 
- **slack** (×2)
- **respondToWebhook** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 48 nodes with 40 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
