# AI web researcher for sales

> ## Who is this for?
This workflow is for all sales reps and lead generation manager who need to prepare their prospecting activities, and find relevant information to personalize their outreach.

## Use Case
This workflow allows you to do account research with the web using AI.

It has the potential to replace manual work done by sales rep when preparing their prospecting activities by searching complex information available online.

## What this workflow does
The advanced AI module has 2 capabilities: 
- Research Google using SerpAPI
- Visit and get website content using a sub-workflow


From an unstructured input like a domain or a company name. 

It will return the following properties: 
- domain
- company Linkedin Url
- cheapest plan
- has free trial
- has entreprise plan
- has API
- market (B2B or B2C)


The strength of n8n here is that you can adapt this workflow to research whatever information you need.

You just have to precise it in the prompt and to precise the output format in the "Strutured Output Parser" module.

Detailed instructions + video guide can be found [by following this link](https://lempire.notion.site/AI-Web-research-with-n8n-a25aae3258d0423481a08bd102f16906).


## 📊 Basic Information

- **Workflow ID:** 2324
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 76973
- **Downloads:** 7697
- **Created:** 2024/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2324)

## 👤 Author

- **Name:** Lucas Perret
- **Username:** @lucasperret

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitInBatches** 
- **googleSheets** (×2)
- **merge** 
- **stickyNote** (×8)
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
