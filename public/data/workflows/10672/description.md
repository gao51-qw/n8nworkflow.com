# 🎯 Self-Learning X Content Engine (Creator RAG Booster)

Learn your voice. Generate posts that sound *like you* — not AI.

## 🧩 Overview
This n8n workflow builds a **personal RAG (Retrieval-Augmented Generation)** system for creators.  
It learns from your own past posts and generates new tweets, replies, and image prompts in your tone.

## ⚙️ How it works

**Step 1 — Ingest**
- Use the “Add to KB” Form to upload your past posts or notes.
- Text + metadata (topic, style) are stored in **Supabase** as vectors.

**Step 2 — Generate**
- Use the “Generate Posts” Form to create new post ideas.
- The Agent fetches the most relevant style snippets (via Supabase VectorStore)
- Output includes:  
  - 📝 `post`  
  - 💬 `quote`  
  - 💭 `reply`  
  - 🎨 `image_prompt`

## 🔧 Setup (3–5 min)
1. Connect **Supabase** (URL + Key)  
   - Make sure the table name is `documents`  
   - Enable vector extension (`pgvector`)  
2. Connect **OpenAI API Key**  
3. Activate both **Forms** and open the URLs to test.  
4. Optionally replace Forms with Webhooks.

💡 Tip: RLS enabled? Ensure your API key allows **insert/select** for `documents`.

## 🧠 Tech Stack
- n8n (self-hosted)
- Supabase (Vector Store)
- OpenAI (gpt-4.1-mini)
- HTML-based completion form

## 🪄 Credits
Built by [Yusuke | @yskautomation](https://x.com/yskautomation)  
License: MIT[View on GitHub](https://github.com/yskmtb0714/n8n-workflows/blob/main/creator-rag-booster.json)