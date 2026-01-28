# Telegram research assistant for academic papers using Gemini AI and Decodo

> ## AI Research Assistant Using Gemini AI and Decodo

Sign up for Decodo [HERE](https://visit.decodo.com/discount) for Discount

This workflow transforms your Telegram bot into a smart academic research assistant powered by Gemini AI and Decodo. It analyzes queries, interprets URLs, scrapes scholarly data, and returns concise summaries of research papers directly in chat.

## Who’s it for?
For researchers, students, and AI enthusiasts who want to search and summarize academic content via Telegram using Google Scholar and arXiv.

## How it works
1. The Telegram bot captures text, voice, or image messages.
2. Gemini models interpret academic URLs and user intent.
3. Decodo extracts paper details like titles, abstracts, and publication info.
4. The AI agent summarizes results and delivers them as text or file (if too long).

## How to set up
- Add your Telegram bot credentials in the `Start Telegram Bot` node.
- Connect Google Gemini and Decodo API credentials.
- Replace `{{INPUT_SEARCH_URL_INSIGHTS}}` placeholder on `Research Summary Agent`'s system message with your search URL insights (or use the pinned example).
- Test by sending a text, image, or voice message to your bot.
- Activate the workflow to run in real-time.

## 📊 Basic Information

- **Workflow ID:** 9966
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 324
- **Downloads:** 32
- **Created:** 2025/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9966)

## 👤 Author

- **Name:** Fahmi Fahreza
- **Username:** @fahmiiireza

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **@decodo/n8n-nodes-decodo.decodoTool** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **telegram** (×5)
- **telegramTrigger** 
- **switch** 
- **@n8n/n8n-nodes-langchain.googleGemini** (×2)
- **set** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **if** 
- **convertToFile** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
