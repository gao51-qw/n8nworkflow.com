# Conversational WhatsApp assistant with Gemini AI and Pinecone memory

> ## 📋 Description

This template creates an intelligent AI assistant for WhatsApp that can:
- **Respond naturally** to messages using Google Gemini AI
- **Remember previous conversations** for each user
- **Access a knowledge base** for answering frequently asked questions
- **Automatically save** all conversations for long-term memory

## 🛠️ Requirements

### 1. **WAMM.pro Account** (FREE tier available)
- **What is WAMM.pro?** - A platform that enables WhatsApp automation using proprietary API technology
- **Free tier:** 50 messages/month
- **PRO tier:** Unlimited messages + advanced features
- **Link:** [wamm.pro](https://wamm.pro)

### 2. **Pinecone Account** (for AI memory)
- For storing conversations and knowledge base
- Free tier available

### 3. **Google AI Account** (for Gemini)
- For the conversational AI model

### 4. **OpenAI Account** (for embeddings)
- For generating memory vectors

## 🚀 Step-by-step Setup

### **Step 1: WAMM.pro Configuration**

1. **Create account** at [wamm.pro](https://wamm.pro)
2. **Account Manager** → **Add WhatsApp profile**
3. **Scan QR code** with your WhatsApp
4. **Note down:** `Instance ID` and `Access Token`

### **Step 2: Webhook Configuration**

1. **In WAMM.pro:** Integrations → Webhooks → Messages Webhooks
2. **Add Webhook** with the n8n URL
3. **Required configuration:**
   - **From others:** ✅ Relevant + ✅ Without media + ✅ Exclude no text
   - **To others:** ✅ Relevant + ✅ Without media + ✅ Exclude no text  
   - **To myself:** ✅ None (to avoid responding to own messages)

### **Step 3: Pinecone Configuration**

1. **Create 2 indexes:**
   - `historywa` - for conversation memory
   - `knowledge` - for knowledge base
2. **Index settings:**
   - **Dimensions:** 3072
   - **Metric:** cosine
   - **Embedding model:** text-embedding-3-large

### **Step 4: n8n Configuration**

1. **Configure credentials:**
   - **WAMM:** Instance ID + Access Token
   - **Pinecone:** API Key
   - **Google Gemini:** API Key  
   - **OpenAI:** API Key for embeddings

## 🔧 How it Works

### **Workflow Flow:**

```
📱 WhatsApp Message 
    ↓ (webhook)
🎯 AI Agent (Gemini)
    ↓ (uses tools)
📚 Memory Tool + Knowledge Tool
    ↓ (response generated)
📤 WAMM Send Message
    ↓ (saves)
💾 Pinecone Memory Storage
```

### **Available AI Tools:**

1. **Memory Tool** - Searches previous conversations with the user
2. **Knowledge Tool** - Searches the general knowledge base

### **Special Features:**

- **Natural conversations** - AI doesn't mention "searching history"
- **Persistent context** - Remembers names, preferences, previous conversations
- **User language detection** - Automatically responds in user's language
- **Organized memory** - Each user has their own memory space

## 📊 Benefits

✅ **Zero maintenance** - Runs automatically  
✅ **Scalable** - Supports multiple users simultaneously  
✅ **Intelligent memory** - Uses similarity search for relevant context  
✅ **Extensible** - Easy to add new features  
✅ **Cost-effective** - Free tiers available for all services  

## 🎯 Use Cases

- **Automated customer support** with memory
- **Personal assistant** for WhatsApp  
- **Business chatbot** with specific knowledge
- **Conversation automation** with persistent context

## 🔒 Security

- **Data** stored in Pinecone as vector embeddings
- **No plain text** message storage  
- **Each user** has separate memory space
- **API keys** secured in n8n credentials

## 📈 Possible Extensions

- **CRM** integrations
- **Scheduling** and reminders
- **Advanced multi-language** support  
- **Analytics** and conversation reports
- **Custom knowledge bases** per user

---

**💡 Tip:** For optimal results, populate the knowledge base with frequently asked questions specific to your business!

## 📊 Basic Information

- **Workflow ID:** 6170
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1156
- **Downloads:** 115
- **Created:** 2025/7/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6170)

## 👤 Author

- **Name:** Adrian
- **Username:** @adrian-from-robomarketing

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **webhook** 
- **n8n-nodes-wamm.wammpro** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **code** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×3)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
