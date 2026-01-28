# AI: summarize podcast episode and enhance using Wikipedia

> The workflow automates the process of creating a summarized and enriched podcast digest, which is then sent via email.

Note that to use this template, you need to be on n8n version 1.19.4 or later.

## 📊 Basic Information

- **Workflow ID:** 1956
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 13522
- **Downloads:** 1352
- **Created:** 2023/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1956)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolWikipedia** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **splitOut** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
