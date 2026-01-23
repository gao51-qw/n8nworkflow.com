# Create AI-ready vector datasets for LLMs with Bright Data, Gemini & Pinecone

> ### Who this is for?
This workflow enables automated, scalable collection of high-quality, AI-ready data from websites using Bright Data’s Web Unlocker, with a focus on preparing that data for LLM training. Leveraging LLM Chains and AI agents, the system formats and extracts key information, then stores the structured embeddings in a Pinecone vector database.

This workflow is tailored for:​

- ML Engineers & Researchers building or fine-tuning domain-specific LLMs.

- AI Startups needing clean, structured content for product training.

- Data Teams preparing knowledge bases for enterprise-grade AI apps.

- LLM-as-a-Service Providers sourcing dynamic web content across niches.

### What problem is this workflow solving?

Training a large language model (LLM) requires vast amounts of clean, relevant, and structured data. Manual collection is slow, error-prone, and lacks scalability. 

This workflow:

- Automatically extracts web data from specified URLs.

- Bypasses anti-bot measures using Bright Data’s Web Unlocker.

- Formats, cleans, and transforms raw content using LLM agents.

- Stores semantically searchable vectors in Pinecone.

- Makes datasets AI-ready for fine-tuning, RAG, or domain-specific training.

### What this workflow does

This workflow automates the process of collecting, cleaning, and vectorizing web content to create structured, high-quality datasets that are ready to be used for LLM (Large Language Model) training or retrieval-augmented generation (RAG).

1. Web Crawling with Bright Data Web Unlocker.
2. AI Information Extraction and Data Formatting.
3. AI Data Formatting to produce a JSON structured data.
3. Persistence in Pinecone Vector DB.
4. Handle Webhook notification of structured data.

### Setup

- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1235)
The Value field should be set with the
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- A Google Gemini API key (or access through Vertex AI or proxy).
- Update the LinkedIn URL by navigating to the **Set LinkedIn URL** node.
- Update the **Set Fields - URL and Webhook URL** node with the URL for web data extraction and the Webhook notification URL.

### How to customize this workflow to your needs

1. Set Your Target URLs. Target sites that are high-quality, domain-specific, and relevant to your LLM's purpose.
2. Adjust Bright Data Web Unlocker Settings. Geo-location, Headers / User-Agent strings, Retry rules and proxies.
3. Modify the Information Extraction Logic. Change prompts to extract specific attributes. Use structured templates or few-shot examples in prompts.
4. Swap the Embedding Model. Use OpenAI, Hugging Face or other your own hosted embedding model API.
4. Customize Pinecone Metadata Fields. Store extra fields in Pinecone for better filtering & semantic querying.
5. Add Data Validation or Deduplication. Skip duplicates or low-quality content.

## 📊 Basic Information

- **Workflow ID:** 3542
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 2385
- **Downloads:** 238
- **Created:** 2025/4/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3542)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 
- **@n8n/n8n-nodes-langchain.embeddingsGoogleGemini** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×5)
- **set** 
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
