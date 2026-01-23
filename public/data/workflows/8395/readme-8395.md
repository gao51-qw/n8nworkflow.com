# Create professional email drafts with GPT-4, Telegram & contact database

> 
**Transform** your email workflow with this intelligent automation that drafts professional emails through Telegram commands using AI and contact retrieval.
Key Features

📱 Telegram Integration: Send email requests directly from Telegram
🤖 AI-Powered Email Generation: Uses OpenAI GPT-4 to create formal, professional emails
📧 Smart Contact Retrieval: Leverages Pinecone vector database with RAG to automatically find recipient email addresses
✉️ Gmail Draft Creation: Automatically creates email drafts in your Gmail account
📋 Google Docs Integration: Sync contact data from Google Docs to vector database
🎯 Structured Email Formatting: Ensures consistent professional email format with proper recipients and formal tone

## How It Works

Send Message: Send a message via Telegram with your email request
AI Processing: AI agent processes your request and queries the contact database to find recipient emails
Email Generation: OpenAI generates a professionally formatted email based on your input
Draft Creation: Gmail draft is automatically created with the formatted content
Confirmation: Receive confirmation via Telegram with a completion sticker

### Perfect For

Business professionals managing multiple contacts
Academic professionals (professors, researchers) who frequently send formal emails
Anyone wanting to streamline their email creation process with AI assistance

#### Required Credentials

Telegram Bot API
OpenAI API
google OAuth2 for(gmail&docs)
Pinecone Vector Database


##### Setup Instructions

**Load Contact Data:** Add your contact information to the Google Docs document
**Configure Pinecone:** Set up your Pinecone index with namespace "contacts"
**Connect Services:** Add all required API credentials to their respective nodes
**Customize AI:** Modify the AI system message and sender name in the AI Agent node
**Test Workflow:** Run the manual trigger to populate your vector database first **


 #### Ex. of the google docs data

![image.png](fileId:2327)

## 📊 Basic Information

- **Workflow ID:** 8395
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 183
- **Downloads:** 18
- **Created:** 2025/9/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8395)

## 👤 Author

- **Name:** Ninja - Abbas
- **Username:** @abbas-ghazi

## 🏷️ Categories

- AI Chatbot

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **gmail** 
- **googleDocs** 
- **telegram** (×2)
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
