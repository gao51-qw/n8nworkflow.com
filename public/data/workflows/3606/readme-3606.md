# Document analysis & chatbot creation with Llama Parser, Gemini LLM & Pinecone DB

> ### 📄Description
This automation workflow enables users to upload files via an N8N form, automatically analyzes the content using Google Gemini agents, and delivers the analyzed results via email along with a chatbot link. The system leverages Llama Cloud API, Google Gemini LLM, Pinecone vector database, and Gmail to provide a seamless, multilingual content analysis experience.

### ✅ Prerequisites
Before setting up this workflow, ensure the following are in place:

An active N8N instance.

Access to Llama Cloud API.

Google Gemini LLM API keys (for Translator & Analyzer agents).

A Pinecone account with an active index.

A Gmail account with API access configured.

Basic knowledge of N8N workflow setup.

### ⚙️ Setup Instructions
Deploy the N8N Form

Create a public-facing form using N8N.

Configure it to accept:

File uploads.

User email input.

File Preprocessing

Store the uploaded files temporarily.

Organize and preprocess them as needed.

Content Extraction using Llama Cloud API

Feed the files into the Llama Cloud API.

Extract and parse the content for further processing.

### Translation (if required)

Use a Translator Agent (Google Gemini).

Check if the content is in English. If not, translate it.

### Content Analysis

Forward the (translated) content to the Analyzer Agent (Google Gemini).

Perform deep analysis to extract insights.

Vector Storage in Pinecone

### Store both:

The parsed and translated content.

The analyzed content.

Use Pinecone to store the content as embeddings for chatbot use.

### User Notification via Gmail

Send the analyzed content and chatbot link to the user’s provided email using Gmail API.

### 🧩 Customization Guidance
To add more languages: Update the translation logic to include additional language support.

To modify analysis depth: Adjust the prompts sent to the Gemini Analyzer Agent.

To change the chatbot behavior: Retrain or reconfigure the chatbot to utilize the new Pinecone index contextually.

### 🔁 Workflow Summary
User uploads files and email via N8N form.

Files are parsed using Llama Cloud API.

Content is translated (if needed) using Gemini Translator Agent.

Translated content is analyzed by the Gemini Analyzer Agent.

Parsed and analyzed data is stored in Pinecone.

User receives email with analyzed results and a chatbot link.



## 📊 Basic Information

- **Workflow ID:** 3606
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 4033
- **Downloads:** 403
- **Created:** 2025/4/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3606)

## 👤 Author

- **Name:** pavith
- **Username:** @pavith

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **formTrigger** 
- **splitInBatches** 
- **if** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×6)
- **code** (×2)
- **httpRequest** (×3)
- **markdown** 
- **gmail** 
- **convertToFile** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsMistralCloud** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.chainRetrievalQa** 
- **@n8n/n8n-nodes-langchain.retrieverVectorStore** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 29 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
