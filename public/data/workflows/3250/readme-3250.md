# Build a RAG-powered AI assistant with OpenAI, Google Drive & Supabase Vector DB

> ## Target Audience

This guide is designed for developers, data scientists, and AI enthusiasts who want to create intelligent chatbots capable of understanding and using custom data. Whether you are building a research assistant, a customer support bot, or an internal knowledge base tool, this workflow helps you integrate your own documents into an AI chat system.

## What Is RAG and Why Use It?

Retrieval-Augmented Generation (RAG) is an AI architecture that combines information retrieval with text generation. Instead of relying solely on a model’s built-in knowledge, RAG retrieves relevant data from external sources—such as your uploaded documents—and feeds it into the AI’s reasoning process.
This approach solves a major limitation of traditional language models: their inability to access or recall up-to-date or proprietary information. By using RAG, your chatbot can deliver accurate, context-aware answers drawn directly from your specific data.

## Use Case Example

Consider a scenario where your organization has a collection of internal reports, manuals, or research documents. With RAG, your AI chatbot can answer detailed questions about these materials without exposing sensitive data externally. This setup is ideal for teams working in customer support, technical documentation, education, or data analysis.

## Workflow Overview
#### Step 1: Upload Your Document

Add your document to the Supabase Vector Store using the "Add Document" feature after downloading or linking it via Google Drive.

#### Step 2: Data Retrieval

The workflow retrieves and embeds your document’s content into the vector database for efficient search and retrieval.

#### Step 3: AI Query Processing

When you ask a question, the AI retrieves the most relevant context from the Supabase Vector Store based on semantic similarity.

#### Step 4: Response Generation

The AI combines the retrieved context with its generative capabilities to produce accurate, data-driven responses tailored to your input.

## Prerequisites

Before setting up the workflow, ensure you have the following:

A GitHub account

A Supabase account

A Google Drive document containing your data

Basic understanding of APIs and environment configuration

## Setup Instructions
### Step 1: Create Accounts

Create a GitHub account and clone the repository containing the workflow. Then, create a Supabase account and a new project to generate your API keys.

### Step 2: Prepare Your Data

Upload your data to Google Drive and make it downloadable. Add the document to the Supabase Vector Store using the “Add Document” feature.

### Step 3: Configure the Environment

Set your Supabase keys as environment variables in your workflow configuration.

### Step 4: Run the Workflow

Execute the workflow to connect your document with the AI agent. Once configured, you can start chatting with the AI agent—your responses will now be powered by your own data.

## 📊 Basic Information

- **Workflow ID:** 3250
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 254
- **Downloads:** 25
- **Created:** 2025/3/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3250)

## 👤 Author

- **Name:** Zakaria Ben
- **Username:** @nocodeinnovate

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **manualTrigger** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
