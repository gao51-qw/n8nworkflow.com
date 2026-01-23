# AI-powered automated stock analysis

> ## Introduction:

Streamline your fundamental stock analysis process with AI-powered automation. 

By harnessing the power of SEC 10K reports - comprehensive documents required by the SEC containing vital company information - this template automates the analysis workflow. 
 
From planning by a Senior Research Analyst to execution by five Research Analysts and final review by a Senior Editor, this template takes an AI persona approach to compose the report that includes an overview of the business, strategy, SWOT (Strengths, Weaknesses, Opportunities, and Threads) analysis, near term catalysts, and top risks.

Additionally, this template allows you to control the length and detail of the report generated.

## How it works
There are three personas in the workflow:

- **Senior Research Analyst** is the first part of the workflow.  They are responsible for planning the work for the rest of the team.

- **Squad of Research Analysts** is the second part of the workflow. They execute the plan created.

- **Senior Editor** is the third part of the workflow.  They polish the draft report and send it to publish

This template uses a custom tool that is able to answer the SEC 10K questions from the Research team.  


## Setup steps
1. Setup the Stock Q&A Workflow for the company you want to analyze using this [template](https://n8n.io/workflows/2183-ai-crew-to-automate-fundamental-stock-analysis-qanda-workflow/)

2. Customize the setup node by specifying the company to analyze

3. Customize the publish step by specifying the file name in the Google docs node


## Credit
Inspired by [Guilio's template](https://n8n.io/workflows/2187-write-a-wordpress-post-with-ai-starting-from-a-few-keywords/)




 

## 📊 Basic Information

- **Workflow ID:** 2209
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 14404
- **Downloads:** 1440
- **Created:** 2024/4/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2209)

## 👤 Author

- **Name:** Derek Cheung
- **Username:** @derekcheungsa

## 🏷️ Categories

- Crypto Trading
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×6)
- **set** 
- **@n8n/n8n-nodes-langchain.toolWikipedia** (×2)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.toolCode** (×2)
- **splitOut** 
- **merge** 
- **code** 
- **googleDocs** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
