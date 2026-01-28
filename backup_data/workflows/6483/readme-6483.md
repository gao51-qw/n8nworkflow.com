# AI-powered corporate research system for animal advocacy campaigns with Claude & Gemini

> ## Who’s it for 🎯  
This workflow is designed for **animal advocacy campaigners, strategists, and researchers** who need detailed intelligence on corporate targets and their key stakeholders like executives, investors, and suppliers.

## How it works / What it does ⚙️  
It uses the [Multi-tool Research Agent](https://n8n.io/workflows/5588-multi-tool-research-agent-for-animal-advocacy-with-openrouter-serper-and-open-paws-db/) subworkflow to research a target company, extract relevant sub-targets, and then runs focused research on each sub-target. It compiles all findings into a detailed HTML report outlining tailored campaign tactics.

## How to set up 🛠️  
1. Import this workflow and the [Multi-tool Research Agent subworkflow](https://n8n.io/workflows/5588-multi-tool-research-agent-for-animal-advocacy-with-openrouter-serper-and-open-paws-db/).  
2. Configure API credentials in n8n.  
3. Set the target company and campaign details.  
4. Test the workflow to verify multi-level research and report generation.

## Requirements 📋  
- n8n instance with internet access  
- Valid API keys 
- The Multi-tool Research Agent subworkflow installed and linked  
- Optional email node for sending reports

## How to customize 🔧  
- Modify target inputs and sub-target extraction for different industries.  
- Adjust research prompts in the subworkflow for style or focus.  
- Customize the HTML report template for branding.  
- Attach an email node to send reports automatically or route output as needed.  
- Add error handling or branching for campaign specifics.

---

Use this template to generate strategic, research-driven campaigns with actionable intelligence on complex corporate targets.


## 📊 Basic Information

- **Workflow ID:** 6483
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 260
- **Downloads:** 26
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6483)

## 👤 Author

- **Name:** Open Paws
- **Username:** @openpaws

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **aggregate** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **splitOut** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **executeWorkflowTrigger** 
- **executeWorkflow** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
