# Recipe recommendations with Qdrant and Mistral

> This n8n workflow demonstrates creating a recipe recommendation chatbot using the Qdrant vector store recommendation API.

Use this example to build recommendation features in your AI Agents for your users.

## How it works

* For our recipes, we'll use HelloFresh's weekly course and recipes for data. We'll scrape the website for this data.
* Each recipe is split, vectorised and inserted into a Qdrant Collection using Mistral Embeddings
* Additionally the whole recipe is stored in a SQLite database for later retrieval.
* Our AI Agent is setup to recommend recipes from our Qdrant vector store. However, instead of the default similarity search, we'll use the Recommendation API instead.
* Qdrant's Recommendation API allows you to provide a negative prompt; in our case, the user can specify recipes or ingredients to avoid.
* The AI Agent is now able to suggest a recipe recommendation better suited for the user and increase customer satisfaction.

## Requirements

* Qdrant vector store instance to save the recipes
* Mistral.ai account for embeddings and LLM agent

## Customising the workflow

This workflow can work for a variety of different audiences. Try different sets of data such as clothes, sports shoes, vehicles or even holidays.

## 📊 Basic Information

- **Workflow ID:** 2333
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 6999
- **Downloads:** 699
- **Created:** 2024/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2333)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Miscellaneous
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×4)
- **code** (×3)
- **html** (×2)
- **set** (×3)
- **@n8n/n8n-nodes-langchain.embeddingsMistralCloud** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **merge** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** 
- **wait** 
- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
