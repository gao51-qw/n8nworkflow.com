# Multi-tool research agent for animal advocacy with OpenRouter, Serper & Open Paws DB

> This general-purpose sub-agent combines multiple research and automation tools to support high-impact decision-making for animal advocacy workflows. It’s designed to act as a reusable, modular unit within larger multi-agent systems—handling search, scraping, scoring, and domain-specific semantic lookup.

It powers many of the advanced workflows released by Open Paws and serves as a versatile backend utility agent.

---

## 🛠️ What It Does

- Performs real-time **Google Search** using Serper  
- Scrapes and extracts page content using **Jina AI** and **Scraping Dog**  
- Conducts **semantic search** over the Open Paws knowledge base  
- Generates **OpenAI embeddings** for similarity search and analysis  
- Routes search and content analysis through **OpenRouter LLMs**  
- Connects with downstream tools like the **Text Scoring Sub-Workflow** to evaluate message performance

&gt; 🧩 This agent is typically used as a **sub-workflow** in larger automations where agents need access to external tools or advocacy-specific knowledge.

---

## 🧠 Domain Focus: Animal Advocacy

The agent is pre-configured to interface with the Open Paws database—an open-source, animal advocacy-specific knowledge graph—and is optimized for content and research tasks relevant to farmed animal issues, corporate campaigns, and activist communication.

---

## 🔗 Integrated Tools and APIs

| Tool          | Purpose                                 |
|---------------|------------------------------------------|
| **Serper API**        | Real-time Google Search queries             |
| **Jina AI**           | Web scraping and content extraction         |
| **Scraping Dog**      | Social media scraping where Jina is blocked |
| **OpenAI API**        | Embedding generation for semantic search    |
| **OpenRouter**        | Proxy to multiple LLMs (e.g., GPT-4, Claude)|
| **Open Paws DB**      | Advocacy-specific semantic knowledge base   |

---

## 📦 Use Cases

- Create and evaluate online content (e.g. social media, emails, petitions) for predicted performance and advocacy alignment  
- Act as a research and reasoning agent within multi-agent workflows  
- Automate web and social media research for real-time campaign support  
- Surface relevant facts or arguments from an advocacy-specific knowledge base  
- Assist communications teams with message testing and content ideation  
- Monitor search results and scrape pages to inform rapid response messaging  



## 📊 Basic Information

- **Workflow ID:** 5588
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 875
- **Downloads:** 87
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5588)

## 👤 Author

- **Name:** Open Paws
- **Username:** @openpaws

## 🏷️ Categories

- Content Creation
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.toolHttpRequest** (×7)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **hunterTool** (×2)
- **set** (×3)
- **if** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
