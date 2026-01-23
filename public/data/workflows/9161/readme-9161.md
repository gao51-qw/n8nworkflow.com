# Automated customer support with GPT-4 knowledge base agent for Gmail

> # Customer Support AI Agent for Gmail  

This n8n template demonstrates how to build an **AI-powered customer support workflow** that automatically handles incoming Gmail messages, classifies them, finds answers from your knowledge base, and sends a personalized reply.  

## Who’s it for  
- SaaS founders or teams who want to automate customer support.  
- Freelancers and solopreneurs who receive repetitive customer queries.  
- Companies that want to reduce manual email triage and improve response times.  

## How it works / What it does  
1. **Trigger**: A new email arrives in Gmail.  
2. **Classification**: The workflow uses a text classifier to decide whether the email is customer support-related or not.  
   - If not, it’s ignored.  
   - If yes, it proceeds.  
3. **AI Agent**:  
   - Queries a knowledge base (vector database with OpenAI embeddings).  
   - Retrieves the most relevant answer.  
   - Drafts a reply using AI (OpenAI or Google Gemini model).  
4. **Post-processing**:  
   - Labels the email in Gmail for organization.  
   - Sends a reply automatically.  

This ensures that your customers get timely, relevant responses without manual intervention.  

## How to set up  
1. Import this template into your n8n account.  
2. Connect your **Gmail account** in the Gmail Trigger, Label, and Reply nodes.  
3. Connect your **AI model provider** (OpenAI or Google Gemini).  
4. Configure the **knowledge base embeddings** (upload your docs/FAQ into the vector database).  
5. Activate the workflow — and your AI customer support agent is live!  

## Requirements  
- n8n account.  
- Gmail account (with API access enabled).  
- OpenAI or Google Gemini account for LLM and embeddings.  
- Knowledge base data (FAQ, documentation, or past tickets).  
- Google Drive account for auto update your vector database(with API access enabled).

## How to customize the workflow  
- **Knowledge Base**: Replace or expand with your own company docs, FAQs, or past conversations.  
- **Classification Rules**: Train or adjust the classifier to handle more categories (e.g., Sales, Partnership, Technical Support).  
- **Reply Style**: Customize AI prompts for tone — professional, casual, or friendly.  
- **Labels**: Change Gmail labels to match your workflow (e.g., “Support,” “Sales,” “Priority”).  
- **Multi-language**: Add translation steps if your customers speak different languages.  

---

This template saves you hours of manual email triage and ensures your customers always get quick, accurate responses.  


## 📊 Basic Information

- **Workflow ID:** 9161
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 547
- **Downloads:** 54
- **Created:** 2025/10/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9161)

## 👤 Author

- **Name:** Yasser Sami
- **Username:** @yassersami

## 🏷️ Categories

- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **gmail** (×2)
- **noOp** 
- **googleDriveTrigger** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **stickyNote** (×5)
- **gmailTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
