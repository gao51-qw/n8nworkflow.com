# Retrieve answers from Knowledge Base with InfraNodus GraphRAG chatbot

> ## Basic AI Chatbot that Retrieves Answers From Knowledge Base Using GraphRAG.

### Easiest setup, without vector database, external knowledge base, or OpenAI API keys. All you need is an [InfraNodus graph](https://infranodus.com) with your knowledge.

----

In this workflow, user sends a request to the [InfraNodus GraphRAG system](https://infranodus.com/docs/graph-rag-knowledge-graph) that will extract a reasoning ontology from a graph that you create (or that you can copy from our [repository of public graphs](https://infranodus.com/knowledge-graphs)) and generate a response directly to the user. 


![InfraNodus Graph](https://support.noduslabs.com/hc/article_attachments/24079237448220)

## How it works

1. Receives a request from a user (via n8n or a publicly available URL chat bot if you replace the Chat Trigger with a webhook connected to the embeddable [n8n Chat Widget](https://n8n-chat-widget.com) that you can expose via a URL or add to any website.
2. Sends the request to the knowledge graph in your InfraNodus account that contains a [reasoning ontology represented as a knowledge graph](https://support.noduslabs.com/hc/en-us/articles/24079266183196-Building-Expert-Ontology-for-InfraNodus-GraphRAG-n8n-Expert-Node). You can also use a standard graph — InfraNodus will use its underlying GraphRAG technology to generate the most relevant response.
3. Sends the answer back to the user via chat or webhook (which is then delivered back via [n8n chat widget](https://n8n-chat-widget.com)

**Note:** This is a simple example that will work well for occasionally providing responses to users. For a more advanced setup, you might want to build a more sophisticated workflow with AI agent node that would orchestrate among different InfraNodus expert graphs and chat memory, so the context of the conversation can be maintained. See our other workflows for examples.

## How to use

• Just get an [InfraNodus API key](https://infranodus.com/api-access) and add API authentication to your InfraNodus GraphRAG node.

• In the same InfraNodus GraphRAG Nnode, provide the name of the graph you want to u. Note, these can be two different graphs ife for retrieval. 

## Support

If you wan to create your own reasoning ontology graphs, please, refer to this [article on generating your own knowledge graph ontologies](https://support.noduslabs.com/hc/en-us/articles/18301655686172-Generate-Knowledge-Graphs-and-Ontologies-in-Plain-Text).

You may also be interested to watch this video that explains the logic of this approach in detail:

[![Video tutorial](https://img.youtube.com/vi/qP4KTLBzoWQ/sddefault.jpg)](https://www.youtube.com/watch?v=qP4KTLBzoWQ)

Help article on this specific workflow: [Building expert ontology for InfraNodus GraphRAG n8n expert node](https://support.noduslabs.com/hc/en-us/articles/24079266183196-Building-Expert-Ontology-for-InfraNodus-GraphRAG-n8n-Expert-Node). 



## 📊 Basic Information

- **Workflow ID:** 11570
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 88
- **Downloads:** 8
- **Created:** 2025/12/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11570)

## 👤 Author

- **Name:** InfraNodus
- **Username:** @infranodus

## 🏷️ Categories

- Support Chatbot
- AI RAG

## 🔗 Nodes Used

- **n8n-nodes-infranodus.infranodus** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.chat** 
- **webhook** 
- **respondToWebhook** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
