# WooCommerce AI post-sales chatbot with GPT-4o, RAG, Google Drive and Telegram

> This **WooCommerce-integrated chatbot** is designed to transform post-sales customer support by combining automation and artificial intelligence to deliver fast, secure, and personalized assistance. 

The chatbot **retrieves real-time order information, including shipping details and tracking numbers,** after verifying the customer's identity through a strict email-based authentication system.

Beyond order management, the chatbot answers frequently asked questions about return policies, delivery times, and terms of service using **RAG**. 

If a request is too complex, the system seamlessly **escalates it to a human operator via Telegram**, guaranteeing no customer query goes unresolved. 

---

#### **Key Features of the Chatbot**  
1. **Order Tracking**: Retrieves real-time tracking information for WooCommerce orders, including carrier URLs and pickup dates.  
2. **Order Details Retrieval**: Provides customers with past/current order information after strict email verification.  
3. **Policy & FAQ Assistance**: Answers questions about shipping, returns, and store policies using a vectorized knowledge base (ToS tool).  
4. **Identity Verification**: Ensures privacy by requiring exact email-order matches before sharing sensitive data.  
5. **Human Escalation**: Transfers complex issues to human agents via Telegram when the AI cannot resolve them.  
6. **Context-Aware Conversations**: Maintains dialogue context using memory buffers for seamless interactions.  
---


#### **Who Benefits from This Chatbot?**  
1. **E-commerce Stores**: WooCommerce businesses needing 24/7 automated post-sales support.  
2. **Customer Support Teams**: Reduces ticket volume by handling repetitive queries (tracking, policies).  
3. **SMBs**: Small-to-medium businesses lacking resources for full-time support staff.  
4. **Customers**: Shoppers who want instant, self-service access to order status and FAQs.  

---

#### **How It Works**  
1. **Customer Interaction**: The workflow starts when a customer sends a chat message, triggering the AI agent.  
2. **Identity Verification**: The agent requests the order number and associated email, strictly verifying the match before proceeding.  
3. **Order & Tracking Retrieval**: Using WooCommerce API tools (`get_order`, `get_tracking`), it fetches order details and tracking information.  
4. **Policy & Support**: The `ToS` tool answers shipping and policy questions, while `human_assistance` escalates unresolved issues to a human agent via Telegram.  
5. **Memory & Context**: A buffer memory retains conversation context for coherent interactions.  

---

#### **Set Up Steps**  
1. **Configure Qdrant Vector Store**: Replace `QDRANTURL` and `COLLECTION` in the nodes to set up document storage.  
2. **Add Telegram Chat ID**: Insert your Telegram `CHAT_ID` in the `human_assistance` node for escalations.  
3. **Integrate WooCommerce Tracking Plugin**: Install the YITH WooCommerce Order Tracking plugin and update the HTTP request URL in the tracking node.  
4. **Test & Activate**: Verify the workflow by testing order queries and ensuring proper email verification.  

---


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 

## 📊 Basic Information

- **Workflow ID:** 3329
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 3742
- **Downloads:** 374
- **Created:** 2025/3/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3329)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **wooCommerceTool** (×3)
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **manualTrigger** 
- **httpRequest** (×3)
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterTokenSplitter** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **telegramTool** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
