# Ai agent to chat with files in Supabase Storage and Google Drive

> ### Video Guide

I prepared a detailed guide that illustrates the entire process of building an AI agent using Supabase and Google Drive within N8N workflows.

[![Youtube Thumbnail](https://res.cloudinary.com/de9jgixzm/image/upload/rv0bmq7vr691gfmqn3yw)](https://youtu.be/NB6LhvObiL4)

[Youtube Link](https://youtu.be/NB6LhvObiL4)

### Who is this for?
This workflow is designed for developers, data scientists, and business users who wish to automate document management and enable AI-powered interactions over their stored files. It's especially beneficial for scenarios where users need to process, analyze, and retrieve information from uploaded documents rapidly.

### What problem does this workflow solve?
Managing files across multiple platforms often involves tedious manual processes. This workflow facilitates automated file handling, making it easier for users to upload, parse, and interact with documents through an AI agent. It reduces redundancy and enhances the efficiency of data retrieval and management tasks.

### What this workflow does
This workflow integrates Supabase storage with Google Drive and employs an AI agent to manage files effectively. The agent can:
- Upload files to Supabase storage and activate processes based on file changes in Google Drive.
- Retrieve and parse documents, converting them into a structured format for easy querying.
- Utilize an AI agent to answer user queries based on saved document data.

1. **Data Collection**: The workflow initially gathers files from Supabase storage, ensuring no duplicates are processed in the 'files' table.
2. **File Handling**: It processes files to be parsed based on their type, leveraging LlamaParse for effective data transformation.
3. **Google Drive Integration**: The workflow monitors a designated Google Drive folder to upload files automatically and refresh document records in the database with new data.
4. **AI Interaction**: A webhook is established to enable the AI agent to converse with users, facilitating queries and leveraging stored document knowledge.

### Setup

1. **Supabase Storage Setup**:
   - Create a private bucket in Supabase storage, modifying the default name in the URL.
   - Upload your files using the provided upload options.

2. **Database Configuration**:
   - Establish the 'file' and 'document' tables in Supabase with the necessary fields.
   - Execute any required SQL queries for enabling vector matching features.

3. **N8N Workflow Logic**:
   - Start with a manual trigger for the initial workflow segment or consider alternative triggers like webhooks.
   - Replace all relevant credentials across nodes with your own to ensure seamless operation.

4. **File Processing and Google Drive Monitoring**:
   - Set up file processing to take care of downloading and parsing files based on their types.
   - Create triggers to monitor the designated Google Drive folder for file uploads and updates.

5. **Integrate AI Agent**:
   - Configure the webhook for the AI agent to accept chat inputs while maintaining session context for enhanced user interactions.
   - Utilize PostgreSQL to store user interactions and manage conversation states effectively.  

6. **Testing and Adjustments**:
   - Once everything is set up, run tests with the AI agent to validate its responses based on the documents in your database.
   - Fine-tune the workflow and AI model as needed to achieve desired performance.

## 📊 Basic Information

- **Workflow ID:** 4086
- **Complexity:** advanced
- **Node Count:** 62
- **Views:** 8707
- **Downloads:** 870
- **Created:** 2025/5/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4086)

## 👤 Author

- **Name:** Mark Shcherbakov
- **Username:** @lowcodingdev

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **httpRequest** (×8)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** (×2)
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×3)
- **supabase** (×4)
- **if** (×2)
- **splitInBatches** 
- **manualTrigger** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×3)
- **stickyNote** (×13)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleDriveTrigger** (×2)
- **googleDrive** 
- **set** (×6)
- **wait** (×2)
- **switch** (×2)
- **stopAndError** (×2)
- **merge** (×2)
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 62 nodes with 45 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
