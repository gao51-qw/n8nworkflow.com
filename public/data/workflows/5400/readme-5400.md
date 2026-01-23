# The title is very good, clearly conveying the template's purpose while mentioning key technologies

> ## How it works
- Collects articles from your preferred RSS feeds. 
- Rates and tags each article using an AI model (e.g., QWEN 14B-s4), filtering for relevance and quality. 
- Summarizes high-rated articles with a language model (e.g., Gemma3 4B) for quick, digestible reading. 
- Checks for duplicates to avoid sending the same article twice. 
- Formats and sends the top articles as an HTML newsletter via Gmail, using OAuth2 authentication. 
- Stores records in a Postgres database, tracking which articles have been sent and their ratings.

## Requirements
- Postgres Account
- AI Models (if you work localy use Ollama)
- In the cloud you have to change Ollama node to your prefered Model Node
- RSS Feed of your desire
- Google Auth2, if you want to use Gmail

## Recommendations
- Use n8n local version for this workflow
- Here are some more informations: https://github.com/falks-ai-workbench/n8n_newsletter



## 📊 Basic Information

- **Workflow ID:** 5400
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 444
- **Downloads:** 44
- **Created:** 2025/6/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5400)

## 👤 Author

- **Name:** Falk
- **Username:** @falks-ai-workbench

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **rssFeedRead** 
- **set** (×2)
- **code** (×4)
- **merge** (×3)
- **if** 
- **noOp** (×2)
- **gmail** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **stickyNote** (×8)
- **postgres** (×4)
- **compareDatasets** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
