# Building RAG chatbot for movie recommendations with Qdrant and Open AI

> *Create a recommendation tool without hallucinations based on RAG with the Qdrant Vector database. This example is based on movie recommendations on the IMDB-top1000 dataset. You can provide your wishes and your "big no's" to the chatbot, for example: "A movie about wizards but not Harry Potter", and get top-3 recommendations*.

## How it works
- [a video with the full design process](https://www.youtube.com/watch?v=O5mT8M7rqQQ)
- Upload IMDB-1000 dataset to Qdrant Vector Store, embedding movie descriptions with OpenAI;
- Set up an AI agent with a chat. This agent will call a workflow tool to get movie recommendations based on a request written in the chat;
- Create a workflow which calls [Qdrant's Recommendation API](https://qdrant.tech/articles/new-recommendation-api/) to retrieve top-3 recommendations of movies based on your positive and negative examples. 

## Set Up Steps
- You'll need to create a free tier [Qdrant Cluster](https://cloud.qdrant.io/) (Qdrant can also be used locally; it's open-sourced) and set up API credentials
- You'll OpenAI credentials 
- You'll need GitHub credentials & to upload the [IMDB Kaggle dataset](https://www.kaggle.com/datasets/omarhanyy/imdb-top-1000) to your GitHub.

## 📊 Basic Information

- **Workflow ID:** 2440
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 35010
- **Downloads:** 3501
- **Created:** 2024/9/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2440)

## 👤 Author

- **Name:** Jenny 
- **Username:** @mrscoopers

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **github** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterTokenSplitter** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **executeWorkflowTrigger** 
- **merge** (×2)
- **splitOut** (×2)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequest** (×4)
- **set** (×3)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
