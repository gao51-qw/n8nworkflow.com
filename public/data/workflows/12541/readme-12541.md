# Analyze customer feedback and send AI-written replies with GPT-4 and Gmail

> ## How It Works
This workflow automates customer feedback processing by analyzing sentiment, identifying key issues, generating personalized responses, and escalating critical cases to support teams when required. Designed for customer success managers, support teams, and product managers, it enables scalable feedback handling without compromising response quality or urgency. The workflow eliminates manual triage and response drafting by normalizing incoming feedback, performing sentiment and topic analysis, generating context-aware AI responses, validating tone and intent, escalating high-risk or negative feedback, logging all interactions for traceability, and delivering automated replies via email.

## Setup Steps
1. Configure webhook trigger URL for feedback form integration or email parsing
2. Add OpenAI API key for sentiment analysis and response generation
3. Connect Anthropic Claude API for alternative response generation and validation
4. Set up Google Sheets integration for feedback logging and analytics tracking
5. Configure Gmail OAuth2 credentials for automated customer response delivery
6. Integrate support ticket system (Zendesk, Freshdesk) for escalation routing

## Prerequisites
OpenAI API key, Anthropic Claude API key (optional), Google Workspace account (Sheets, Gmail)
## Use Cases
Product feedback management, customer support automation
## Customization
Adjust sentiment scoring thresholds per industry standards, modify response templates
## Benefits
Responds to feedback 95% faster, maintains consistent response quality across all interactions

## 📊 Basic Information

- **Workflow ID:** 12541
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 63
- **Downloads:** 6
- **Created:** 2026/1/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12541)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **set** 
- **code** (×2)
- **redis** (×3)
- **if** (×3)
- **postgres** (×6)
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **switch** (×2)
- **emailSend** 
- **salesforce** 
- **hubspot** 
- **slack** 
- **aggregate** 
- **googleSheets** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
