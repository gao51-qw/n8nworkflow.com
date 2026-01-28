# Automate web research with GPT-4, Claude & Apify for content analysis and insights

> This n8n template demonstrates how to automate comprehensive web research using multiple AI models to find, analyze, and extract insights from authoritative sources.

Use cases are many: Try automating competitive analysis research, finding latest regulatory guidance from official sources, gathering authoritative content for reports, or conducting market research on industry developments!

## Good to know

Each research query typically costs $0.08-$0.34 depending on the number of sources found and processed. The workflow includes smart filtering to minimize unnecessary API calls.

The workflow requires multiple AI services and may need additional setup time compared to simpler templates.

Qdrant storage is optional and can be removed without affecting performance.

## How it works

Your research question gets transformed into optimized Google search queries that target authoritative sources while filtering out low-quality sites.

Apify's RAG Web Browser scrapes the content and converts pages to clean markdown format.

Claude Sonnet 4 evaluates each article for relevance and quality before full processing.

Articles that pass the filter get analyzed in parallel - one pipeline creates focused summaries while another extracts specific claims and evidence.

GPT-4.1 Mini ranks all findings and presents the top 3 most valuable insights and summaries.

All processed content gets stored in your Qdrant vector database to prevent duplicate processing and enable future reference.

## How to use

The manual trigger node is used as an example but feel free to replace this with other triggers such as webhook, form submissions, or scheduled research.

You can modify the configuration variables in the Set Node to customize Qdrant URLs, collection names, and quality thresholds for your specific needs.

## Requirements

OpenAI API account for GPT-4.1 Mini (query optimization, summarization, ranking)
Anthropic API account for Claude Sonnet 4 (content filtering)
Apify account for web scraping capabilities
Qdrant vector database instance (local or cloud)
Ollama with nomic-embed-text model for embeddings

## Customizing this workflow

Web research automation can be adapted for many specialized use cases. Try focusing on specific domains like legal research (targeting .gov and .edu sites), medical research (PubMed and health authorities), or financial analysis (SEC filings and analyst reports).

## 📊 Basic Information

- **Workflow ID:** 6822
- **Complexity:** advanced
- **Node Count:** 42
- **Views:** 1038
- **Downloads:** 103
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6822)

## 👤 Author

- **Name:** Peter Zendzian
- **Username:** @zendzipr

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **httpRequest** 
- **manualTrigger** 
- **executeWorkflowTrigger** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×6)
- **@n8n/n8n-nodes-langchain.agent** (×6)
- **code** (×5)
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** 
- **@n8n/n8n-nodes-langchain.embeddingsOllama** 
- **@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×5)
- **if** (×3)
- **merge** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 42 nodes with 35 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
