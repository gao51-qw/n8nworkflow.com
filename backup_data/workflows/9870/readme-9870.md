# Create a voice & text Telegram assistant with Lookio RAG and GPT-4.1

> Create a Telegram bot that answers questions using Retrieval-Augmented Generation (RAG) powered by **Lookio** and an LLM agent (GPT-4.1).

This template handles both **text** and **voice** messages (voice transcribed via a Mistral model by default), routes queries through an agent that can call a Lookio tool to fetch knowledge from your uploaded documents, and returns concise, Telegram-friendly replies. A security switch lets you restrict use to a single Telegram username for private testing, or remove the filter to make the bot public.

## Who is this for?

* **Internal teams & knowledge workers**: Turn your internal docs into an interactive Telegram assistant for quick knowledge lookups.
* **Support & ops**: Provide on-demand answers from your internal knowledge base without exposing full documentation.
* **Developers & automation engineers**: Use this as a reference for integrating agents, transcription, and RAG inside n8n.
* **No-code builders**: Quickly deploy a chat interface that uses Lookio for accurate, source-backed answers.

## What it does / What problem does this solve?

* **Provides accurate, source-backed answers**: Routes queries to **Lookio** so replies are grounded in your documents instead of generic web knowledge.
* **Handles voice & text transparently**: Accepts Telegram voice messages, transcribes them (via the **Mistral** API node by default), and treats transcripts the same as typed text.
* **Simple agent + tool architecture**: Uses a **LangChain AI Agent** with a **Query knowledge base** tool to separate reasoning from retrieval.
* **Privacy control**: Includes a **Myself?** filter to restrict access to a specific Telegram username for safe testing.

## How it works

1.  **Trigger**: **Telegram Trigger** receives incoming messages (text or voice).
2.  **Route**: **Message Router** detects voice vs text. Voice files are fetched with **Get Audio File**.
3.  **Transcribe**: **Mistral transcribe** receives the audio file and returns a transcript; the transcript or text is normalized into **preset\_user\_message** and consolidated in **Consolidate user message**.
4.  **Agent**: **AI Agent** (GPT-4.1-mini configured) runs with a system prompt that instructs it to call the **Query knowledge base** tool when domain knowledge is required.
5.  **Respond**: The agent output is sent back to the user via **Telegram answer**.

## How to set up

1.  **Create a Lookio assistant**: Sign up at [https://www.lookio.app/](https://www.lookio.app/), upload documents, and create an assistant.
2.  **Add credentials in n8n**: Configure **Telegram API**, **OpenAI** (or your LLM provider), and **Mistral Cloud** credentials in n8n.
3.  **Configure Lookio tool**: In the **Query knowledge base** node, replace `&lt;your-lookio-api-key&gt;` and `&lt;your-assistant-id&gt;` placeholders with your Lookio API Key and Assistant ID.
4.  **Set Telegram privacy (optional)**: Edit the **Myself?** **If** node and replace `&lt;Replace with your Telegram username&gt;` with your username to restrict access. Remove the node to allow public use.
5.  **Adjust transcription (optional)**: Swap the **Mistral transcribe** HTTP node for another provider (OpenAI, Whisper, etc.) and update its prompt to include your jargon list.
6.  **Connect LLM**: In **OpenAI Chat Model** node, add your OpenAI API key (or configure another LLM node) and ensure the **AI Agent** node references this model.
7.  **Activate workflow**: Activate the workflow and test by messaging your bot in Telegram.

## Requirements

* An n8n instance (cloud or self-hosted)
* A **Telegram Bot** token added in n8n credentials
* A **Lookio** account, **API Key**, and **Assistant ID**
* An LLM provider account (OpenAI or equivalent) for the **OpenAI Chat Model** node
* A **Mistral** API key (or other transcription provider) for voice transcription

## How to take it further

* **Add provenance & sources**: Parse Lookio responses and include short citations or source links in the agent replies.
* **Rich replies**: Use Telegram media (images, files) or inline keyboards to create follow-up actions (open docs, request feedback, escalate to humans).
* **Multi-user access control**: Replace the single-username filter with a list or role-based access system (Airtable or Google Sheets lookup) to allow multiple trusted users.
* **Logging & analytics**: Save queries and agent responses to **Airtable** or **Google Sheets** for monitoring, quality checks, and prompt improvement.

## 📊 Basic Information

- **Workflow ID:** 9870
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 219
- **Downloads:** 21
- **Created:** 2025/10/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9870)

## 👤 Author

- **Name:** Guillaume Duvernay
- **Username:** @duv

## 🏷️ Categories

- Support Chatbot
- AI RAG

## 🔗 Nodes Used

- **telegramTrigger** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×8)
- **telegram** (×2)
- **switch** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequestTool** 
- **set** (×3)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
