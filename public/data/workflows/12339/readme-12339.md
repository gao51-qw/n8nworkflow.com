# Automate SDR Outreach: Source Wiza Leads and Personalize Emails with LLMs

> ## What it does

Receives campaign parameters via form, creates a Smartlead campaign, sources qualified leads through Wiza based on your ICP description, researches each prospect with Perplexity AI, generates personalized icebreaker emails and follow-up sequences with OpenRouter LLMs, and uploads everything to Smartlead for automated delivery.

## Who's it for

B2B sales teams, marketing agencies, and consultants who want to automate the entire SDR prospecting process from lead sourcing to personalized email delivery.

## Requirements

- n8n (self-hosted or cloud)
- Smartlead API Key
- Wiza Bearer Token
- OpenRouter API Key
- Perplexity API Key

## How to set up

1. Import workflow JSON into n8n
2. Configure Smartlead, Wiza, OpenRouter, and Perplexity credentials
3. Create Lead Database and Case Study tables in n8n
4. Update the "Business Context" node with your offer
5. Activate workflow and use the campaign form

## How to customize

- Adjust ICP translation logic in the "Format Search Parameters" agent
- Modify email templates in the "Ice Breaker Email Generator" prompt
- Change follow-up sequence timing in the "Build Sequence Templates" code node

## 📊 Basic Information

- **Workflow ID:** 12339
- **Complexity:** advanced
- **Node Count:** 48
- **Views:** 36
- **Downloads:** 3
- **Created:** 2026/1/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12339)

## 👤 Author

- **Name:** Mezie
- **Username:** @mezie

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **httpRequest** (×11)
- **code** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×4)
- **splitInBatches** 
- **set** (×6)
- **perplexityTool** 
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **if** 
- **wait** 
- **dataTable** 
- **dataTableTool** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 48 nodes with 43 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
