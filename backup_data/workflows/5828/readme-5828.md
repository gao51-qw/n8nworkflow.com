# Generate cold emails & sales letters with OpenAI GPT & Google Docs via Chat

> **How it works**
- Trigger: Listens for an incoming chat message
- Copy Assistant: Feeds the message (plus memory) into an OpenAI Chat Model and exposes two “tools”

**Cold Email Writer Tool**


**Sales Letter Tool**• 

Tool execution: Depending on the user’s intent, the appropriate tool generates the copy
• Save output: Writes the generated email or sales letter into your target document via the Update a document node

**Set up steps**
- • Configure your OpenAI Chat Model credentials in n8n (no hard-coded keys!)
- • Add and authenticate the Simple Memory credential (to keep context across messages)
- • Create Google Docs (or MS Word) credentials for the Update a document node
- • Ensure your Chat trigger is pointing at your incoming-message endpoint
- • Mandatory: Drop sticky-note annotations on each tool node explaining where to enter API keys and how to tweak prompts

Once everything’s wired up, send a test chat message like “Write me a cold email for a fintech startup” and watch the workflow spin up a polished draft in your document.

**How to use**

Import the workflow JSON into n8n.

Configure your Chat trigger (webhook or form) to receive incoming messages.

Send a chat prompt like:

“Write me a cold email for a B2B SaaS offering.”

The “Copy Assistant” custom GPT picks the right tool (Cold Email or Sales Letter).

Generated copy is written directly into your linked Google Doc or Word document.

**Requirements**
OpenAI API Key (with Chat Completions & Custom GPTs enabled)

Custom Assistant created in your ChatGPT dashboard (Assistant ID pasted into the Chat Model node)

n8n instance (Cloud or self-hosted) with credentials set up for:

Simple Memory (to persist context)

Google Docs or Microsoft Word (for document output)

**Customising this workflow**
Tweak system and user prompts inside the Copy Assistant node to fit your brand voice.

Swap in Slack, Teams or email nodes instead of a document writer to deliver copy where you need it.

Add or remove tools (e.g., “Follow-up Email Writer”) by duplicating the existing tool pattern.

Use sticky-note annotations on every node to explain where to enter API keys, Assistant IDs, or prompt tweaks.

## 📊 Basic Information

- **Workflow ID:** 5828
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 2868
- **Downloads:** 286
- **Created:** 2025/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5828)

## 👤 Author

- **Name:** Yar Malik (Asfandyar)
- **Username:** @yar

## 🏷️ Categories

- Content Creation
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleDocs** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
