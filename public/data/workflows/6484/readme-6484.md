# Generate prospect research & connection strategy reports with Claude AI

> ## Who’s it for 🎯  
This workflow is ideal for **outreach specialists, fundraisers, campaigners, and professionals who want to build authentic connections** by researching prospects deeply and strategically. It helps users understand prospects’ backgrounds, interests, and mutual connections to craft effective outreach.

## How it works / What it does ⚙️  
Using the [Multi-tool Research Agent](https://n8n.io/workflows/5588-multi-tool-research-agent-for-animal-advocacy-with-openrouter-serper-and-open-paws-db/) subworkflow, it analyzes both the prospector’s and prospect’s profiles, social media, and online presence. The workflow verifies identities, uncovers key connection points, and generates a comprehensive HTML report with actionable insights, conversation starters, and suggested engagement tactics.

## How to set up 🛠️  
1. Import this workflow and the [Multi-tool Research Agent subworkflow](https://n8n.io/workflows/5588-multi-tool-research-agent-for-animal-advocacy-with-openrouter-serper-and-open-paws-db/).  
2. Configure required API credentials.  
3. Provide inputs: prospector and prospect names, social media URLs, and outreach goal.  
4. Test the workflow to ensure accurate research and report generation.

## Requirements 📋  
- n8n instance with internet access  
- Valid API keys  
- Multi-tool Research Agent subworkflow installed and linked  
- Optional email node for sending reports directly

## How to customize 🔧  
- Update input parameters to suit your outreach use case.  
- Modify research prompts in the subworkflow for tone or focus.  
- Customize the HTML report design for branding or format preferences.  
- Attach an email node to send reports automatically or route output as needed.

---

Use this workflow to power personalized, strategic outreach with data-driven insights.


## 📊 Basic Information

- **Workflow ID:** 6484
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 409
- **Downloads:** 40
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6484)

## 👤 Author

- **Name:** Open Paws
- **Username:** @openpaws

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **executeWorkflow** 
- **set** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
