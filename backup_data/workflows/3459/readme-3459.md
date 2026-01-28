# Adaptive RAG strategy with query classification & retrieval (Gemini & Qdrant)

> This n8n workflow implements a version of the Adaptive Retrieval-Augmented Generation (RAG) framework. It recognizes that the best way to retrieve information often depends on the type of question asked. Instead of a one-size-fits-all approach, this workflow adapts its strategy based on the user's query intent.

## 🌟 How it Works

1. **Receive Query:** Takes a user query as input (along with context like a chat session ID and Vector Store collection ID if used as sub-workflow).
2. **Classify Query:** First, the workflow classifies the query into a predefined category. This template uses four examples:
    * **Factual:** For specific facts.
    * **Analytical:** For deeper explanations or comparisons.
    * **Opinion:** For subjective viewpoints.
    * **Contextual:** For questions relying on specific background.
3. **Select & Adapt Strategy:** Based on the classification, it selects a corresponding strategy to prepare for information retrieval. The example strategies aim to:
    * *Factual:* Refine the query for precision.
    * *Analytical:* Break the query into sub-questions for broad coverage.
    * *Opinion:* Identify different viewpoints to look for.
    * *Contextual:* Incorporate implied or user-specific context.
4. **Retrieve Info:** Uses the output of the selected strategy to search the specified knowledge base (Qdrant vector store - change as needed) for relevant documents.
5. **Generate Response:** Constructs a response using the retrieved documents, guided by a prompt tailored to the original query type.

By adapting the retrieval strategy, this workflow aims to provide more relevant results tailored to the user's intent.

## ⚙️ Usage & Flexibility

* **Sub-Workflow:** Designed to be called from other n8n workflows, passing `user_query`, `chat_memory_key`, and `vector_store_id` as inputs.
* **Chat Testing:** Can also be triggered directly via the n8n Chat interface for easy testing and interaction.
* **Customizable Framework:** The query categories (Factual, Analytical, etc.) and the associated retrieval strategies are examples. You can modify or replace them entirely to fit your specific domain or requirements.

## 🛠️ Requirements

* **Credentials:** You will need API credentials configured in your n8n instance for:
    * Google Gemini (AI Models)
    * Qdrant (Vector Store)

## 📊 Basic Information

- **Workflow ID:** 3459
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 3162
- **Downloads:** 316
- **Created:** 2025/4/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3459)

## 👤 Author

- **Name:** dmr
- **Username:** @dmr

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** (×6)
- **switch** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **set** (×6)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×6)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×5)
- **@n8n/n8n-nodes-langchain.embeddingsGoogleGemini** 
- **stickyNote** (×9)
- **summarize** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** 
- **respondToWebhook** 
- **executeWorkflowTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 29 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
