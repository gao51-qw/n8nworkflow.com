# Generate Twitter content in personal style with OpenAI & Supabase RAG

> # 🎯 Self-Learning X Content Engine (Creator RAG Booster)

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

## 📊 Basic Information

- **Workflow ID:** 10672
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 70
- **Downloads:** 7
- **Created:** 2025/11/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10672)

## 👤 Author

- **Name:** Yusuke
- **Username:** @yusuke-matsuba

## 🏷️ Categories

- Content Creation
- AI RAG

## 🔗 Nodes Used

- **formTrigger** (×2)
- **set** (×3)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **form** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
