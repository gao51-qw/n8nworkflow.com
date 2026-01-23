# Build an AI chatbot with InfraNodus knowledge graph for enhanced responses

> ## Build an embeddable AI chatbot with an access to a knowledge base

![InfraNodus knowledge graph](https://infranodus.com/images/front/infranodus-content-gap-3d-graph.png)

This is an example of a simple AI chatbot that has access to external knowledge to augment its responses. 

The knowledge can be **added manually** or **imported** from multiple sources (text and PDF files, websites, CSVs, Google search results, AI generated, YouTube search results, RSS feeds, etc) using [InfraNodus](https://infranodus.com). 

• **no OpenAI account needed**
• **no vector store needed**
• **easy data import: PDF, text, CSV, Google / YouTube results, RSS feeds, websites, or AI-generated**

## How it works

1. First, you add your data into your [InfraNodus](https://infranodus.com) graph — this will be your knowledge base.

2. You can import this data from multiple sources or add it manually.

3. You will have a **visual interface** available that will show the main concepts and topics in your knowledge base, so you can have an overview of its structure and know how to improve it, if necessary.

4. Your data is represented as a **knowledge graph** which contains information about **relations** and **topical clusters** in your data, making the LLM responses much more precise. 




## How to use
1. Copy the template
2. Add your [InfraNodus API key](https://infranodus.com/api-access) to the HTTP AI response node
3. Create a new graph in InfraNodus with your data (or import from an external source)
4. Add the name of this graph into the `name` field of the AI response HTTP node. 
5. That's it! You can query it using the embeddable web form available via a URL 

## Requirements

You only need an [InfraNodus account](https://infranodus.com) to set this workflow up.

Free 14-day trials are available.




## 📊 Basic Information

- **Workflow ID:** 6818
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 468
- **Downloads:** 46
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6818)

## 👤 Author

- **Name:** InfraNodus
- **Username:** @infranodus

## 🏷️ Categories

- Support Chatbot
- AI RAG

## 🔗 Nodes Used

- **httpRequest** 
- **formTrigger** 
- **form** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
