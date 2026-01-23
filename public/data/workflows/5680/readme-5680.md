# RAG chatbot with Supabase + TogetherAI + Openrouter

> ## ⚠️ RUN the FIRST WORKFLOW ONLY ONCE 
(as it will convert your content in Embedding format and save it in DB and is ready for the RAG Chat)

## 📌 Telegram Trigger

* **Type:** `telegramTrigger`
* **Purpose:** Waits for new Telegram messages to trigger the workflow.
* **Note:** Currently disabled.

---

## 📄 Content for the Training

* **Type:** `googleDocs`
* **Purpose:** Fetches document content from Google Docs using its URL.
* **Details:** Uses Service Account authentication.

---

## ✂️ Splitting into Chunks

* **Type:** `code`
* **Purpose:** Splits the fetched document text into smaller chunks (1000 chars each) for processing.
* **Logic:** Loops over text and slices it.

---

## 🧠 Embedding Uploaded Document

* **Type:** `httpRequest`
* **Purpose:** Calls Together AI embedding API to get vector embeddings for each text chunk.
* **Details:** Sends JSON with model name and chunk as input.

---

## 🛢 Save the embedding in DB

* **Type:** `supabase`
* **Purpose:** Saves each text chunk and its embedding vector into the Supabase `embed` table.


## SECOND WORKFLOW EXPLAINATION:

## 💬 When chat message received

* **Type:** `chatTrigger`
* **Purpose:** Starts the workflow when a user sends a chat message.
* **Details:** Sends an initial greeting message to the user.

---

## 🧩 Embend User Message

* **Type:** `httpRequest`
* **Purpose:** Generates embedding for the user’s input message.
* **Details:** Calls Together AI embeddings API.

---

## 🔍 Search Embeddings

* **Type:** `httpRequest`
* **Purpose:** Searches Supabase DB for the top 5 most similar text chunks based on the generated embedding.
* **Details:** Calls Supabase RPC function `matchembeddings1`.

---

## 📦 Aggregate

* **Type:** `aggregate`
* **Purpose:** Combines all retrieved text chunks into a single aggregated context for the LLM.

---

## 🧠 Basic LLM Chain

* **Type:** `chainLlm`
* **Purpose:** Passes the user's question + aggregated context to the LLM to generate a detailed answer.
* **Details:** Contains prompt instructing the LLM to answer only based on context.

---

## 🤖 OpenRouter Chat Model

* **Type:** `lmChatOpenRouter`
* **Purpose:** Provides the actual AI language model that processes the prompt.
* **Details:** Uses `qwen/qwen3-8b:free` model via OpenRouter and you can use any of your choice.

## 📊 Basic Information

- **Workflow ID:** 5680
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 6434
- **Downloads:** 643
- **Created:** 2025/7/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5680)

## 👤 Author

- **Name:** iamvaar
- **Username:** @iamvaar

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **googleDocs** 
- **code** 
- **httpRequest** (×3)
- **supabase** 
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
