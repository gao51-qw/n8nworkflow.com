# Run multi-model research analysis and email reports with GPT-4, Claude and NVIDIA NIM

> ## How It Works
This workflow automates end-to-end research analysis by coordinating multiple AI models—including NVIDIA NIM (Llama), OpenAI GPT-4, and Claude to analyze uploaded documents, extract insights, and generate polished reports delivered via email. Built for researchers, academics, and business analysts, it enables fast, accurate synthesis of information from multiple sources. The workflow eliminates the manual burden of document review, cross-referencing, and report compilation by running parallel AI analyses, aggregating and validating model outputs, and producing structured, publication-ready documents in minutes instead of hours. Data flows from Google Sheets (user input) through document extraction, parallel AI processing, response aggregation, quality validation, structured storage in Google Sheets, automated report formatting, and final delivery via Gmail with attachments.

## Setup Steps
1. Configure API credentials 
2. Add OpenAI API key with GPT-4 access enabled
3. Connect Anthropic Claude API credentials
4. Set up Google Sheets integration with read/write permissions
5. Configure Gmail credentials with OAuth2 authentication for automated email
6. Customize email templates and report formatting preferences 

## Prerequisites
NVIDIA NIM API access, OpenAI API key (GPT-4 enabled), Anthropic Claude API key
## Use Cases
Academic literature reviews, competitive intelligence reports
## Customization
Adjust AI model parameters (temperature, tokens) per analysis depth needs
## Benefits
Reduces research analysis time by 80%, eliminates single-source bias through multi-model consensus

## 📊 Basic Information

- **Workflow ID:** 12537
- **Complexity:** advanced
- **Node Count:** 46
- **Views:** 82
- **Downloads:** 8
- **Created:** 2026/1/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12537)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **webhook** 
- **set** (×2)
- **code** (×15)
- **httpRequest** (×6)
- **merge** (×3)
- **if** (×3)
- **switch** 
- **wait** 
- **postgres** (×5)
- **slack** 
- **emailSend** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 46 nodes with 35 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
