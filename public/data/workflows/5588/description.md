This general-purpose sub-agent combines multiple research and automation tools to support high-impact decision-making for animal advocacy workflows. It’s designed to act as a reusable, modular unit within larger multi-agent systems—handling search, scraping, scoring, and domain-specific semantic lookup.

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

