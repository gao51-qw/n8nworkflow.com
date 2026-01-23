# Personalized customer retention campaigns with GPT-4o analytics & Gmail

> ## HOW IT WORKS
This workflow automates end-to-end data intelligence processing by ingesting structured data (CSV, JSON), enriching it through multiple AI analysis pathways, and generating actionable insights. Designed for business analysts, data scientists, and operations teams, it solves the problem of manual data enrichment and fragmented analysis by consolidating diverse AI models (GPT-4, LLM analysis, sentiment detection) into a unified pipeline. Data flows from source ingestion → enrichment/validation → branching into three specialized analysis paths (Competitive Intelligence, Sentiment Analysis, Market Insights) → aggregation → result storage (Google Sheets) and notifications (Slack, Gmail). Each path applies distinct AI models for comprehensive intelligence gathering.

## SETUP STEPS
1. Configure OpenAI API key in credentials
2. Set up Google Sheets connection with service account
3. Add Slack webhook for notifications
4. Connect Gmail for automated report distribution
5. Configure NVIDIA API (if using specialized models)
6. Map input data source (CSV upload or API endpoint)
7. Test each branch independently before full deployment

## PREREQUISITES
OpenAI API key, Google Sheets access, Slack workspace, Gmail account, basic n8n familiarity.  

## USE CASES
Market research automation, competitive intelligence monitoring, customer feedback analysis at scale 

## CUSTOMIZATION
Swap AI models (Claude, Gemini, Llama), add/remove analysis branches, modify output destinations 

## BENEFITS
Eliminates manual data processing (80% time savings), enables simultaneous multi-perspective analysis 

## 📊 Basic Information

- **Workflow ID:** 11857
- **Complexity:** advanced
- **Node Count:** 37
- **Views:** 54
- **Downloads:** 5
- **Created:** 2025/12/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11857)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Lead Nurturing
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **httpRequest** (×5)
- **code** (×3)
- **if** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **gmailTool** 
- **switch** 
- **merge** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **httpRequestTool** 
- **aggregate** 
- **wait** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 37 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
