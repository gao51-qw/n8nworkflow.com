# Automated CV anonymization for GDPR compliance with GPT-4 and Stirling PDF

> ## Overview
Automatically anonymize CVs/resumes while preserving professional information. Perfect for recruitment agencies ensuring GDPR compliance and bias-free hiring.

## Features
- Supports multiple file formats (PDF, DOCX, etc.)
- Multi-language support (preserves original language)
- Removes PII: names, emails, phones, addresses
- Preserves: skills, experience, dates, achievements
- Outputs professionally formatted PDF

## Requirements
- OpenAI API key (GPT-4 recommended)
- Stirling PDF service (self-hosted or cloud)
- n8n version 1.0+

## Setup Instructions
1. Configure OpenAI credentials
2. Set up Stirling PDF API endpoint
3. Update API key in HTTP Request nodes
4. Activate workflow
5. Test with sample CV

## Usage
POST to webhook endpoint with CV file as `UploadCV` field.

## Use Cases
- Recruitment agencies (GDPR compliance)
- HR departments (bias-free screening)
- Job boards (candidate privacy)

## 📊 Basic Information

- **Workflow ID:** 11816
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 96
- **Downloads:** 9
- **Created:** 2025/12/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11816)

## 👤 Author

- **Name:** Jasurbek
- **Username:** @jasurbeknematov

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** (×4)
- **compression** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **code** (×4)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **webhook** 
- **merge** 
- **respondToWebhook** 
- **if** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
