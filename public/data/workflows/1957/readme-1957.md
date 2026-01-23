# Force AI to use a specific output format

> This workflow is for anyone looking to automatically fetch, validate, and parse complex language-based queries into a structured format. Its unique capability lies in not only processing language but also fixing invalid outputs before structuring them.

Note that to use this template, you need to be on n8n version 1.19.4 or later.

## 📊 Basic Information

- **Workflow ID:** 1957
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 15850
- **Downloads:** 1585
- **Created:** 2023/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1957)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
