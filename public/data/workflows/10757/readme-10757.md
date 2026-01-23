# Qualify and route sales leads with Mistral-Saba AI and MCDM scoring

> ## How It Works
The workflow starts with a scheduled trigger that activates at set intervals. Behavioral data from multiple sources is parsed and sent to the MCDN routing engine, which intelligently assigns leads to the right teams based on predefined rules. AI-powered scoring evaluates each prospect’s potential, ensuring high-quality leads are prioritized. The results are synced to the CRM, and updates are reflected on an analytics dashboard for real-time visibility.

## Setup Steps
1. **Trigger:** Define schedule frequency.
2. **Data Fetch:** Configure APIs for all behavioral data sources.
3. **MCDN Router:** Set routing rules, thresholds, and team assignments.
4. **AI Models:** Connect OpenAI/NVIDIA APIs and configure scoring prompts.
5. **CRM Integration:** Enter credentials for Salesforce, HubSpot, or other CRMs.
6. **Dashboard:** Link to analytics tools like Tableau or Google Sheets for reporting.

## Prerequisites
API credentials: NVIDIA AI, OpenAI, CRM platform; data sources; spreadsheet/analytics access

## Use Cases
Lead prioritization for sales teams; customer segmentation; automated routing; 

## Customization
Adjust routing rules, add custom scoring models, modify team assignments, expand data sources, integrate additional AI providers

## Benefits
Reduces manual lead routing 90%; improves scoring accuracy; accelerates sales cycle; enables data-driven team assignments;  


## 📊 Basic Information

- **Workflow ID:** 10757
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 11
- **Downloads:** 1
- **Created:** 2025/11/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10757)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **httpRequest** (×9)
- **aggregate** (×2)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolCode** 
- **switch** 
- **stickyNote** (×13)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
