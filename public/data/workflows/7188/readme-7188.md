# RAG-powered AI voice customer support agent (Supabase + Gemini + ElevenLabs)

> Execution video: [Youtube Link](https://youtu.be/GGvJBnIZQsY?si=y-SPWiy8EFo473_s)

I built an **AI voice-triggered RAG assistant** where ElevenLabs’ conversational model acts as the front end and n8n handles the brain....here’s the real breakdown of what’s happening in that workflow:

1. **Webhook** (`/inf`)

   * Gets hit by ElevenLabs once the user finishes talking.
   * Payload includes `user_question`.

2. **Embed User Message** (Together API - BAAI/bge-large-en-v1.5)

   * Turns the spoken question into a dense vector embedding.
   * This embedding is the query representation for semantic search.

3. **Search Embeddings** (Supabase RPC)

   * Calls `matchembeddings1` to find the top 5 most relevant context chunks from your stored knowledge base.

4. **Aggregate**

   * Merges all retrieved `chunk` values into one block of text so the LLM gets full context at once.

5. **Basic LLM Chain** (LangChain node)

   * Prompt forces the model to only answer from the retrieved context and to sound human-like without saying “based on the context”....
   * Uses **Google Vertex Gemini 2.5 Flash** as the actual model.

6. **Respond to Webhook**

   * Sends the generated answer back instantly to the webhook call, so ElevenLabs can speak it back.

You essentially have:
**Voice → Text → Embedding → Vector Search → Context Injection → LLM → Response → Voice**

## 📊 Basic Information

- **Workflow ID:** 7188
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 302
- **Downloads:** 30
- **Created:** 2025/8/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7188)

## 👤 Author

- **Name:** iamvaar
- **Username:** @iamvaar

## 🏷️ Categories

- Support Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **aggregate** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **httpRequest** (×3)
- **webhook** 
- **respondToWebhook** 
- **googleDocs** 
- **code** 
- **supabase** 
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleVertex** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
