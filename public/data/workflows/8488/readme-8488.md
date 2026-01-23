# Voice AI customer support for WooCommerce using VAPI, GPT-4o & Gemini with RAG

> This workflow integrates a **Retrieval-Augmented Generation (RAG) system** with a **post-sales AI agent for WooCommerce**. It combines vector-based search (Qdrant + OpenAI embeddings) with LLMs (Google Gemini and GPT-4o-mini) to provide accurate and contextual responses.

Both systems are connected to **VAPI webhooks**, making the workflow usable in a **voice AI assistant** via **Twilio** phone numbers.

The workflow receives JSON payloads from VAPI via webhooks, processes the request through the appropriate chain (Agent or RAG), and sends a structured response back to VAPI to be read out to the user.

---

### Advantages

* ✅ **Unified AI Support System**: Combines knowledge retrieval (RAG) with transactional support (WooCommerce).
* ✅ **Data Privacy & Security**: Enforces strict email/order verification before sharing information.
* ✅ **Multi-Model Power**: Leverages both **Google Gemini** and **OpenAI GPT-4o-mini** for optimal responses.
* ✅ **Scalable Knowledge Base**: Qdrant vector database ensures fast and accurate context retrieval.
* ✅ **Customer Satisfaction**: Provides real-time answers about orders, tracking, and store policies.
* ✅ **Flexible Integration**: Easily connects with VAPI for **voice assistants** and **phone-based customer support**.
* ✅ **Reusable Components**: The RAG part can be extended for FAQs, while the post-sales agent can scale with more WooCommerce tools.

---

### How it Works

It has two main components:

1. **RAG System (Knowledge Retrieval & Q\&A)**

   * Uses **OpenAI embeddings** to store documents in **Qdrant**.
   * Retrieves relevant context with a **Vector Store Retriever**.
   * Sends the information to a **Question & Answer Chain** powered by **Google Gemini**.
   * Returns precise, context-based answers to user queries via webhook.

2. **Post-Sales Customer Support Agent**

   * Acts as a **WooCommerce virtual assistant** to:

     * Retrieve customer orders (`get_order`, `get_orders`).
     * Get user profiles (`get_user`).
     * Provide **shipment tracking** (`get_tracking`) using YITH WooCommerce Order Tracking plugin.
   * Enforces **strict verification rules**: customer email must match the order before disclosing details.
   * Communicates professionally, providing clear and secure customer support.
   * Integrates with **GPT-4o-mini** for natural conversation flow.

---

### **Set Up Steps**

To implement this workflow, follow these three main steps:

**1. Infrastructure & Credentials Setup in n8n:**
*   Ensure all required nodes have their credentials configured:
    *   **OpenAI API Key:** For the `GPT 4o-mini` and `Embeddings OpenAI` nodes.
    *   **Google Gemini API Key:** For the `Google Gemini Chat Model` node.
    *   **Qdrant Connection Details:** For the `Qdrant Vector Store1` node (points to a Hetzner server).
    *   **WooCommerce API Keys:** For the `get_order`, `get_orders`, and `get_user` nodes (for `magnanigioielli.com`).
    *   **WordPress HTTP Auth Credentials:** For the `Get tracking` node in the sub-workflow.
*   **Pre-populate the Vector Database:** The RAG system requires a pre-filled Qdrant collection with your store's knowledge base (e.g., policy documents, product info). The "Sticky Note2" provides a link to a guide on building this RAG system.

**2. Workflow Activation in n8n:**
*   Save this JSON workflow in your n8n instance.
*   **Activate the workflow.** This is crucial, as n8n only listens for webhook triggers when the workflow is active.
*   Note the unique public webhook URLs generated for the `Webhook` (post-sales agent) and `rag` (RAG system) nodes. You will need these URLs for the next step.

**3. VAPI Configuration:**
*   **Create Two API Tools in VAPI:**
    *   **Tool 1 (Post-Sales):** Create an "API Request" tool. Connect it to the n8n `Webhook` URL. Configure the request body to send parameters `email` and `n_order` based on the conversation with the user.
    *   **Tool 2 (RAG):** Create another "API Request" tool. Connect it to the n8n `rag` webhook URL. Configure the request body to send a `search` parameter containing the user's query.
*   **Build the Assistant:** Create a new assistant in VAPI. Write a system prompt that instructs the AI on when to use each of the two tools you created. In the "Tools" tab, add both tools.
*   **Go Live:** Add a phone number (e.g., from Twilio) to your VAPI assistant and set it to "Inbound" to receive customer calls.

---



### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 

## 📊 Basic Information

- **Workflow ID:** 8488
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 874
- **Downloads:** 87
- **Created:** 2025/9/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8488)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Support Chatbot
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chainRetrievalQa** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.retrieverVectorStore** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **webhook** (×2)
- **wooCommerceTool** (×3)
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×5)
- **httpRequest** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **respondToWebhook** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
