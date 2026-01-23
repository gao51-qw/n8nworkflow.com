*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## 🚀 Overview  
This workflow enables a powerful AI-driven virtual assistant that dynamically responds to website queries using **webhook input**, **Pinecone vector search**, and **OpenAI agents** — all smartly routed based on the source website.

## 🔧 How It Works  

1. **Webhook Trigger**  
   The workflow starts with a `Webhook` node that receives query parameters:
   - `query`: The user's question  
   - `userId`: Unique user identifier  
   - `site`: Website identifier (e.g., test_site)  
   - `page`: Page identifier (e.g., homepage, pricing)  

2. **Smart Routing**  
   A `Switch` node directs the request to the correct AI agent based on the `site` value. Each AI agent uses:
   - OpenAI GPT-4/3.5 model  
   - Pinecone vector store for context-aware answers  
   - SQL-based memory for consistent multi-turn conversation  

3. **Contextual AI Agent**  
   Each agent is customized per website using:
   - Site-specific Pinecone namespaces  
   - Predefined system prompts to stay in scope  
   - Webhook context including `page`, `site`, and `userId`  

4. **Final Response**  
   The response is sent back to the originating website using the `Respond to Webhook` node.

## 🧠 Use Case  
Ideal for multi-site platforms that want to serve **tailored AI chat experiences** per domain or page — whether it’s support, content discovery, or interactive agents.

## ✅ Highlights  
- 🧠 Vector search using Pinecone for contextual responses  
- 🔀 Website-aware logic with `Switch` node routing  
- 🔐 No hardcoded API keys  
- 🧩 Modular agents for scalable multi-site support  
