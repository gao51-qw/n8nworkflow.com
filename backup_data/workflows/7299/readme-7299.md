# Create personal data vector store from Google Sheets with OpenAI & Gemini AI

> This workflow integrates **Google Sheets** with **Supabase Vector Store** for storing personal data as vectors. It utilizes **OpenAI** and **Google Gemini** AI models for enhanced data processing and querying.

The workflow performs the following tasks:
- **Extracts personal data** from Google Sheets.
- Processes the data using **AI tools** like OpenAI and Google Gemini for intelligent insights.
- **Inserts the data** into **Supabase** as vectors, enabling efficient storage and fast querying.
- Includes seamless integration with **Postgres** for memory management.
- Supports data **loading**, **embedding**, and **management**.

This template is ideal for:
- Personal data storage with AI-driven **querying** and **analysis**.
- Building **intelligent agents** that interact with your data.
- Efficient vector-based storage for **personal information**.

Perfect for those looking to integrate AI into their personal data workflows.

## 📊 Basic Information

- **Workflow ID:** 7299
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 738
- **Downloads:** 73
- **Created:** 2025/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7299)

## 👤 Author

- **Name:** Mustafa Polat
- **Username:** @mpolat

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **convertToFile** 
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
