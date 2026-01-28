# Automate assignment grading with GPT-4-Turbo and multi-format reports

> ## Introduction
Automates AI-driven assignment grading with HTML and CSV output. Designed for educators evaluating submissions with consistent criteria and exportable results.
## How It Works
Webhook receives papers, extracts text, prepares data, loads answers, AI grades submissions, generates results table, converts to HTML/CSV, returns response.
## Workflow Template
Webhook → Extract Text → Prepare Data → Load Answer Script → AI Grade (OpenAI + Output Parser) → Generate Results Table → Convert to HTML + CSV → Format Response → Respond to Webhook
## Workflow Steps
1. Input & Preparation: Webhook receives paper, extracts text, prepares data, loads answer script.
2. AI Grading: OpenAI evaluates against answer key, Output Parser formats scores and feedback.
3. Output & Response: Generates results table, converts to HTML/CSV, returns multi-format response.
## Setup Instructions
1. Trigger & Processing: Configure webhook URL, set text extraction parameters.
2. AI Configuration: Add OpenAI API key, customize grading prompts, define Output Parser JSON schema.
## Prerequisites
- OpenAI API key
- Webhook platform
- n8n instance
## Use Cases
- University exam grading
- Corporate training assessments
## Customization
- Modify rubrics and criteria
- Add PDF output
- Integrate LMS (Canvas, Blackboard)
## Benefits
- Consistent AI grading
- Multi-format exports
- Reduces grading time by 90%


## 📊 Basic Information

- **Workflow ID:** 10316
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 251
- **Downloads:** 25
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10316)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **extractFromFile** 
- **set** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **code** 
- **convertToFile** (×2)
- **respondToWebhook** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
