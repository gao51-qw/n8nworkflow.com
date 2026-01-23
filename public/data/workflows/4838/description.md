Enable smart, real-time answers in your WhatsApp groups using a custom webhook, Pinecone vector database, and no Facebook Business setup.

&gt; 🟡 **Note:** This template uses a *custom WhatsApp webhook*. It does **not** use the official WhatsApp Business API.  

---

## 👥 Who is this for?

This workflow is designed for individuals and teams who want to enable smart WhatsApp group automation — without going through Meta’s official WhatsApp Business API. Ideal for small businesses, internal teams, communities, and personal power users.

---

## ❓ What problem is this solving?

Setting up WhatsApp bots with intelligent responses often requires approval from Meta and a verified business account. This workflow removes those barriers by using a self-hosted webhook to handle incoming messages and respond using a document-trained AI via Pinecone.

---

## ⚙️ What this workflow does

- Connects a regular WhatsApp number to a custom webhook  
- Adds the bot to any group chat (it stays silent unless mentioned)  
- Indexes documents from Google Drive into Pinecone  
- Responds with intelligent, context-aware answers from your custom knowledge base  
- Auto-updates its knowledge every minute as the document changes  

---

## 🛠️ Setup

### Step 1: Connect Google Drive

- Set up your [Google Drive credentials in n8n](https://docs.n8n.io/integrations/builtin/credentials/google/)

### Step 2: Configure Pinecone

1. Create an index in Pinecone  
   - **Dimension:** `1536`  
2. Select this index in **both** Pinecone nodes  
3. Click **Test Workflow** to ingest your document into Pinecone  

### Step 3: Get Access to the WhatsApp Webhook

- Fill out [this form to request access](https://docs.google.com/forms/d/e/1FAIpQLSd-bW5tSJu_rRvJ4NmFrxXSAwaNbO7MbGJtUIS-mBA23B7BWQ/viewform?usp=dialog)  
- You’ll receive a WhatsApp confirmation for linking  

### Step 4: Test WhatsApp Integration

- ✅ *One-on-one test:* Send a message from another number  
- 👥 *Group test:* Add the bot to a group; it will only respond when tagged  

---

## 🧩 How to customize this workflow

- Modify the **system prompt** inside the AI agent node to control tone and behavior  
- Update the connected Google Doc to match your specific domain (e.g. FAQs, SOPs, product manuals)  
- Adjust the Pinecone sync frequency if you want updates more or less often  

---

## 📚 Use cases

- **Customer Support**: Instant, intelligent replies in WhatsApp without live agents  
- **Team Knowledge Bot**: Tag the bot for quick access to SOPs and internal docs  
- **Community Groups**: Automate common questions while keeping noise low  
- **Personal AI Assistant**: A WhatsApp chatbot trained on your notes and files  

---

## 📝 Sticky Note Suggestion

 💬 **What this template does:**  
&gt; Enables an AI bot in your WhatsApp group that answers questions based on a Google Doc you provide. It uses a custom webhook, Google Drive, and Pinecone.  

🔧 **Requirements:**  
&gt;  Google Drive account  
&gt;  Pinecone account with an index (dimension 1536)  
&gt; Access to the custom WhatsApp webhook (see setup steps)  
