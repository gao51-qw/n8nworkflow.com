# Build custom workflows automatically with GPT-4o, RAG, and web search

> ## 🚀 What the “Agent Builder” template does

Need to **turn a one-line chat request into a fully-wired n8n workflow template—complete with AI agents, RAG, and web-search super-powers—without lifting a finger?**
That’s exactly what *Agent Builder* automates:

1. **Listens to any incoming chat message** (via the *Chat Trigger*).
2. **Spins up an AI architect** that analyses the request, searches the web, reads n8n docs from a Pinecone vector store, and designs the smallest possible set of nodes.
3. **Auto-generates a ready-to-import JSON template** and hands it back as a downloadable file—plus all the supporting assets (embeddings, vector store etc.) so the next prompt is even smarter.

Think of it as your personal “workflow chef”: you shout the order, it shops for ingredients, cooks, plates, and serves the meal. All you do is eat.

---

## 🤗 Who will love this?

* **No-code builders / power users** who don’t want to wrestle with AI node wiring.
* **Agencies & consultants** delivering lots of bespoke automations.
* **Internal platform teams** who need a “workflow self-service portal” for non-technical colleagues.

---

## 🧩 How it’s wired

| Sub-process                | What happens inside                                                                                                                                                                              | Key nodes                                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| **Web Crawler** (optional) | Firecrawl scrapes docs.n8n.io (or any URL you drop in) and streams raw markdown back.                                                                                                            | `Set URL → HTTP Request (Extract) → Wait & Retry`                                      |
| **RAG Trainer**            | Splits the scraped docs, embeds them with OpenAI, and upserts vectors into Pinecone.                                                                                                             | `Recursive Text Splitter → Embeddings OpenAI → Train Pinecone`                         |
| **Agent Builder**          | The star of the show – orchestrates GPT-4o (via OpenRouter), SerpAPI web-search, your Pinecone index and a Structured Output Parser to **produce → validate → prettify** the final n8n template. | `Chat Trigger → AI Agent → OpenAI (validator) → Code (extract) → Convert to JSON file` |

*Every arrow in the drawn workflow is pre-connected, so the generated template always passes n8n’s import check.*

---

## 🛠️ Getting set up (5 quick creds)

| Service                                             | Credential type                                            |
| --------------------------------------------------- | ---------------------------------------------------------- |
| **OpenAI / Azure OpenAI** – embeddings & validation | *OpenAI API*                                               |
| **Pinecone** – vector store                         | *Pinecone API*                                             |
| **OpenRouter** – GPT-4o LLM                         | *OpenRouter API Key*                                       |
| **SerpAPI** – web search                            | *SerpAPI Key*                                              |
| **Firecrawl** (only if you plan to crawl)           | Generic **Header Auth** → `Authorization: Bearer YOUR_KEY` |

Each node already expects those creds; just create them once, select in the dropdown, hit **Activate**.

---

## 🏃‍♀️ What a typical run looks like

1. **User says:** “Build me a workflow that monitors our support inbox, summarises new tickets with GPT and posts to Slack.”
2. *Chat Trigger* captures the message.
3. **AI Agent**:

   * queries Pinecone for relevant n8n docs,
   * fires a SerpAPI search for “n8n gmail trigger example”,
   * sketches an architecture (Gmail Trigger → GPT Model → Slack).
4. The agent **returns JSON** ➜ OpenAI node double-checks field names, connections, type versions.
5. A tiny JS Code node slices the JSON out of the chat blob and **saves it as `template.json`** ready for download.
6. You download, import, and… done.

---

## ✏️ Customising

* **Switch the LLM** – plug in Claude 3, Gemini 1.5, or a local model; just swap the *OpenRouter Chat Model* node.
* **Point the RAG at your own docs** – change the crawl URL or feed PDFs via the *Default Data Loader*.
* **Hard-code preferred nodes** – edit the “User node preferences” in the system message so the agent always chooses *Notion* for databases, etc.

---

## 🥡 Take-away notes

* It's a **prototype** feel free to experiment with it to improve its capabilities.
* **Have fun building!**


## 📊 Basic Information

- **Workflow ID:** 5024
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 28040
- **Downloads:** 2804
- **Created:** 2025/6/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5024)

## 👤 Author

- **Name:** Franz
- **Username:** @agents-by-franz

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **manualTrigger** 
- **httpRequest** (×2)
- **if** 
- **wait** (×2)
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** 
- **stickyNote** (×10)
- **set** (×3)
- **convertToFile** (×2)
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
