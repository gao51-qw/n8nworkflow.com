# Enhance AI chatbot responses with InfraNodus knowledge graph reasoning

> ## Augment AI chatbot prompts with a knowledge graph reasoning ontology and improve the quality of responses with Graph RAG.

In this workflow, we augment the original prompt using the [InfraNodus GraphRAG system](https://infranodus.com/docs/graph-rag-knowledge-graph) that will extract a reasoning ontology from a graph that you create (or that you can copy from our [repository of public graphs](https://infranodus.com/knowledge-graphs)). 

This additional reasoning logic will improve the user's prompt and make it more descriptive and closely related to the logic you want to use. 

As the next step, you can send it back to the same graph to generate a high-quality response using Graph RAG or to another graph (or AI model) to apply one type of knowledge in a completely different field.

![InfraNodus Graph](https://infranodus.com/images/front/blog/reasoning-knowledge-graph-infranodus.png)

## How it works

1. Receives a request from a user (via n8n or a publicly available URL chat bot, you can also connect it to [Telegram](https://n8n.io/workflows/4485-telegram-ai-chatbot-agent-with-infranodus-graphrag-knowledge-base/)
2. Sends the request to the knowledge graph in your InfraNodus account that contains a reasoning ontology represented as a knowledge graph. Reformulates the original prompt to include the reasoning logic provided. 
3. Sends the request to the knowledge graph in your InfraNodus account (same as the previous one or a new one for cross-disciplinary research) to retrieve a high-quality response using GraphRAG

**Special sauce:** [InfraNodus](https://infranodus.com) will build a graph from your augmented prompt, then overlap it on the knowledge graph you want to inquire, traverse this graph based on the overlapped parts and extended relations, then retrieve the necessary part of the graph and include it in the context to improve the quality of your response. This helps InfraNodus grasp the relations and nuances that are not usually available through standard RAG.

## How to use

• Just get an [InfraNodus API key](https://infranodus.com/api-access) and add it into your Prompt Augmentation and Knowledge Base InfraNodus HTTP nodes for authentication

• Then provide the name of the graphs you want to be using for prompt augmentation and retrieval. Note, these can be two different graphs if you want to apply a reasoning logic from one domain in another (e.g. machine learning in biology or philosophy in electrical engineering).

## Support

If you wan to create your own reasoning ontology graphs, please, refer to this [article on generating your own knowledge graph ontologies](https://support.noduslabs.com/hc/en-us/articles/18301655686172-Generate-Knowledge-Graphs-and-Ontologies-in-Plain-Text).

You may also be interested to watch this video that explains the logic of this approach in detail:

[![Video tutorial](https://img.youtube.com/vi/jhqBb3nuyAY/sddefault.jpg)](https://www.youtube.com/watch?v=jhqBb3nuyAY)

Help article on the same topic: [Using knowledge graphs as reasoning experts](https://support.noduslabs.com/hc/en-us/articles/21429518472988-Using-Knowledge-Graphs-as-Reasoning-Experts). 



## 📊 Basic Information

- **Workflow ID:** 6887
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 473
- **Downloads:** 47
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6887)

## 👤 Author

- **Name:** InfraNodus
- **Username:** @infranodus

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **httpRequest** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
