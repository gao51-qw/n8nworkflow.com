An extendable RAG template to build powerful, explainable AI assistants — with query understanding, semantic metadata, and support for free-tier tools like Gemini, Gemma and Supabase.

## Description
This workflow helps you build smart, production-ready RAG agents that go far beyond basic document Q&A.

It includes:

✅ File ingestion and chunking

✅ Asynchronous LLM-powered enrichment

✅ Filterable metadata-based search

✅ Gemma-based query understanding and generation

✅ Cohere re-ranking

✅ Memory persistence via Postgres



Everything is modular, low-cost, and designed to run even with **free-tier LLMs and vector databases**.

Whether you want to build a chatbot, internal knowledge assistant, documentation search engine, or a filtered content explorer — this is your foundation.


## ⚙️ How It Works
This workflow is divided into 3 pipelines:

### 📥 Ingestion
- Upload a PDF via form
- Extract text and chunk it for embedding
- Store in Supabase vector store using Google Gemini embeddings


### 🧠 Enrichment (Async)
- Scheduled task fetches new chunks
- Each chunk is enriched with LLM metadata (topics, use_case, risks, audience level, summary, etc.)
- Metadata is added to the vector DB for improved retrieval and filtering


### 🤖 Agent Chat
- A user question triggers the RAG agent
- Query Builder transforms it into keywords and filters
- Vector DB is queried and reranked
- The final answer is generated using only retrieved evidence, with references
- Chat memory is managed via Postgres

## 🌟 Key Features
- **Asynchronous enrichment** → Save tokens, batch process with free-tier LLMs like Gemma
- **Metadata-aware** → Improved filtering and reranking
- **Explainable answers** → Agent cites sources and sections
- **Chat memory** → Persistent context with Postgres
- **Modular design** → Swap LLMs, rerankers, vector DBs, and even enrichment schema
- **Free to run** → Built with Gemini, Gemma, Cohere, Supabase (free tier-compatible)



## 🔐 Required Credentials

|Tool|Use|
|-|-|-|
|Supabase w/ PostreSQL|Vector DB + storage|
|Google Gemini/Gemma|Embeddings & LLM|
|Cohere API|Re-ranking|
|PostgreSQL|Chat memory|



## 🧰 Customization Tips
- Swap extractFromFile with Notion/Google Drive integrations

- Extend Metadata Obtention prompt to fit your domain (e.g., financial, legal)

- Replace LLMs with OpenAI, Mistral, or Ollama 

- Replace Postgre Chat Memory with Simple Memory or any other

- Use a webhook instead of a form to automate ingestion

- Connect to Telegram/Slack UI with a few extra nodes


## 💡 Use Cases
- Company knowledge base bot (internal docs, SOPs)

- Educational assistant with smart filtering (by topic or level)
- Legal or policy assistant that cites source sections
- Product documentation Q&A with multi-language support
- Training material assistant that highlights risks/examples
- Content Generation


## 🧠 Who It’s For
- Indie developers building smart chatbots
- AI consultants prototyping Q&A assistants
- Teams looking for an internal knowledge agent
- Anyone building affordable, explainable AI tools

## 🚀 Try It Out!

Deploy a modular RAG assistant using n8n, Supabase, and Gemini — fully customizable and almost free to run.

#### 1. 📁 Prepare Your PDFs

- Use any internal documents, manuals, or reports in **PDF **format.

- Optional: Add Google Drive integration to automate ingestion.

#### 2. 🧩 Set Up Supabase

- Create a free Supabase project

- Use the table creation queries included in the workflow to set up your schema.

- Add your *supabaseUrl *and *supabaseKey *in your n8n credentials.

&gt; 💡 Pro Tip:
Make sure you match the embedding dimensions to your model.
This workflow uses *Gemini text-embedding-04* (768-dim) — if switching to OpenAI, change your table vector size to 1536.

#### 3. 🧠 Connect Gemini & Gemma

- Use Gemini/Gemma for embeddings and optional metadata enrichment.

- Or deploy locally for lightweight async LLM processing (via Ollama/HuggingFace).

#### 4. ⚙️ Import the Workflow in n8n

- Open n8n (self-hosted or cloud).

- Import the workflow file and paste your credentials.


You’re ready to ingest, enrich, and query your document base.


## 💬 Have Feedback or Ideas? I’d Love to Hear

This project is open, modular, and evolving — just like great workflows should be :).

If you’ve tried it, built on top of it, or have suggestions for improvement, I’d genuinely love to hear from you. Let’s share ideas, collaborate, or just connect as part of the n8n builder community.

📧 [ascuncia.es@gmail.com](mailto:ascuncia.es+n8ncreator@gmail.com)

🔗 [Linkedin](https://www.linkedin.com/in/alejandro-scuncia-60a62348/)