# Ai voice & text note-taking with LINE Messaging, Supabase Vector DB & Gmail

> Overview

This workflow lets you capture, store, and retrieve notes from LINE chats — both text and voice messages — and automatically send them to your Gmail inbox. By leveraging Supabase Vector Database, you can not only store and recall your notes, but also repurpose them for idea generation, quiz creation, or hypothesis building.

Key Features

Receive text and audio messages via LINE

Transcribe audio messages automatically and save them in Supabase

Trigger note storage with a specific keyword (default: “Diane”)

Automatically send the latest notes to your Gmail every morning at 7 AM

Search and reuse your notes (e.g., generate ideas, quizzes, or insights)

Requirements

Supabase account (free plan supported)

LINE Messaging API channel setup (obtain your access token)

Gmail authentication (OAuth2)

Notes

Replace placeholders such as LINE_CHANNELACCESS_TOKEN, YOUR_USERID, and YOUR_EMAIL_ADDRESS with your own information.

All credentials (OpenAI, Supabase, LINE, Gmail, etc.) must be configured securely in the Credentials section of n8n.

You may customize the trigger keyword (“Diane”) to any word you like.

## 📊 Basic Information

- **Workflow ID:** 7508
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 697
- **Downloads:** 69
- **Created:** 2025/8/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7508)

## 👤 Author

- **Name:** kote2
- **Username:** @kote2

## 🏷️ Categories

- AI RAG
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **switch** 
- **set** (×4)
- **if** (×2)
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×3)
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **code** 
- **scheduleTrigger** 
- **gmailTool** 
- **stickyNote** (×3)
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
