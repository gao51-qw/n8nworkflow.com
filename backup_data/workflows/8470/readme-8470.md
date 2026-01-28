# Qualify B2B prospects with ProspectPro, Web RAG and GPT-4

> This template qualifies and segments B2B prospects in ProspectPro using live web data and AI. It retrieves website content and search snippets, processes them with an LLM, and updates the prospect record in ProspectPro with qualification labels and tags. The workflow ensures each prospect is processed once and can be reused as a sub-flow or direct trigger.

## ✨ Features

- Automatically qualify B2B companies based on website and search content

- Flexible business logic: qualify and segment prospects by your own criteria

- Updates ProspectPro records with labels and tags

- Live data retrieval via Bedrijfsdata.nl RAG API nodes

- Easy customization through flexible AI setup

- Extendable and modular: use as a trigger workflow or callable sub-flow

## ⚙ Requirements

- n8n instance or cloud workspace

- Install the Bedrijfsdata.nl Verified Community Node

- Bedrijfsdata.nl developer account (14-day free trial, 500 credits)

- Install the ProspectPro Verified Community Node

- ProspectPro account & API credentials (14-day free trial)

- OpenAI API credentials (or another LLM)

## 🔧 Setup Instructions

- Import the template and set your credentials (Bedrijfsdata.nl, ProspectPro, OpenAI).

- Connect to a trigger (e.g., ProspectPro "New website visitor") or call as a sub-workflow.

- Adjust qualification logic in the Qualify & Tag Prospect node to match your ICP.

- Optional: extend tags, integrate with Slack/CRM, or add error logging.

## 🔐 Security Notes

- Prevents re-processing of the same prospect using tags

- Error branches included for invalid input or API failures

- LLM output validated via a structured parser

## 🧪 Testing

- Run with a ProspectPro ID of a company with a known domain

- Check execution history and ProspectPro for enrichment results

- Verify updated tags and qualification label in ProspectPro

## 📌 About Bedrijfsdata.nl
Bedrijfsdata.nl operates the most comprehensive company database in the Netherlands. With real-time data on 3.7M+ businesses and AI-ready APIs, they help Dutch SMEs enrich CRM, workflows, and marketing automation.

**Website:** https://www.bedrijfsdata.nl
**Developer Platform:** https://developers.bedrijfsdata.nl
**API docs:** docs.bedrijfsdata.nl
**Support:** https://www.bedrijfsdata.nl/klantenservice

Support hours: Monday–Friday, 09:00–17:00 CET

## 📌 About ProspectPro
ProspectPro is a B2B Prospecting Platform for Dutch B2B SMEs. It helps sales teams identify prospects, identify website visitors and more.

**Website:** https://www.prospectpro.nl
**Platform:** https://mijn.prospectpro.nl
**API docs:** https://www.docs.bedrijfsdata.nl
**Support:** https://www.prospectpro.nl/klantenservice

Support hours: Monday–Friday, 09:00–17:00 CET

## 📊 Basic Information

- **Workflow ID:** 8470
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 161
- **Downloads:** 16
- **Created:** 2025/9/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8470)

## 👤 Author

- **Name:** Olivier
- **Username:** @olivier-nl

## 🏷️ Categories

- Lead Generation
- AI RAG

## 🔗 Nodes Used

- **code** (×6)
- **if** (×5)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@bedrijfsdatanl/n8n-nodes-bedrijfsdata.bedrijfsdata** (×2)
- **@bedrijfsdatanl/n8n-nodes-prospectpro.prospectpro** (×3)
- **stickyNote** (×8)
- **executeWorkflowTrigger** 
- **@bedrijfsdatanl/n8n-nodes-prospectpro.prospectproTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
