# Complete business WhatsApp AI-powered RAG chatbot using OpenAI

> The provided workflow in n8n is designed to create a Business WhatsApp AI RAG (Retrieval-Augmented Generation) Chatbot.

---

### How it works:
1. **Webhook Setup**: The workflow begins by setting up webhooks for verification and response. The *Verify* webhook receives GET requests and sends back a verification code, while the *Respond* webhook handles incoming POST requests from Meta regarding WhatsApp messages.
2. **Message Handling**: Once a message is received, the workflow checks if the incoming JSON contains a user message. If it does, the message is processed further; otherwise, a generic response is sent.
3. **AI Agent Interaction**: The user's message is passed to the AI Agent node, which uses a conversational agent with a predefined system message tailored for an electronics store. This ensures that the AI provides accurate and professional responses based on the knowledge base.
4. **Knowledge Base Utilization**: The AI Agent references a knowledge base stored in Qdrant, a vector database. Documents from Google Drive are downloaded, vectorized using OpenAI embeddings, and stored in Qdrant for retrieval during conversations.
5. **Response Generation**: The AI Agent generates a response using the OpenAI chat model (gpt-4o-mini) and sends it back to the user via WhatsApp.

---

### Set up steps:
1. **Create Qdrant Collection**:
   - Update the `QDRANTURL` and `COLLECTION` variables in the workflow.
   - Use the *Create collection* HTTP request node to initialize the collection in Qdrant.

2. **Vectorize Documents**:
   - Configure the *Get folder* and *Download Files* nodes to fetch documents from a specified Google Drive folder.
   - Use the *Embeddings OpenAI* node to generate embeddings for the downloaded files.
   - Store the vectorized documents in Qdrant using the *Qdrant Vector Store* node.

3. **Configure Webhooks**:
   - Ensure both *Verify* and *Respond* webhooks have the same URL.
   - Set the *Verify* webhook to use the GET HTTP method and the *Respond* webhook to use the POST HTTP method.

4. **Set Up AI Agent**:
   - Define the system prompt for the AI Agent, specifying guidelines for product information, technical support, customer service, and knowledge base usage.
   - Link the AI Agent to the OpenAI chat model and configure any additional tools as needed.

5. **Test Workflow**:
   - Trigger the workflow manually using the *When clicking ‘Test workflow’* node to ensure all components are functioning correctly.
   - Monitor the flow of data through the nodes and verify that responses are being generated and sent accurately.

By following these steps, the workflow will be fully operational, enabling a robust AI-powered chatbot capable of handling customer inquiries via WhatsApp.

---


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 

## 📊 Basic Information

- **Workflow ID:** 2845
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 41595
- **Downloads:** 4159
- **Created:** 2025/2/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2845)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Support Chatbot
- AI RAG

## 🔗 Nodes Used

- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)
- **httpRequest** (×2)
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterTokenSplitter** 
- **webhook** (×2)
- **if** 
- **whatsApp** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
