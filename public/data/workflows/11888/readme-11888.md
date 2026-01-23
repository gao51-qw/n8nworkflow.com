# Audio transcription & chat bot with AssemblyAI, Gemini, and Pinecone RAG

> ## Who’s it for
This template is designed for podcasters, researchers, educators, product teams, and support teams who work with audio content and want to turn it into searchable knowledge. It is especially useful for users who need automated transcription, structured summaries, and conversational access to audio data.

## What it does / How it works
This workflow starts with a public form where users upload an audio file.  
The audio is sent to AssemblyAI for speech-to-text processing, including speaker labels and bullet-point summarization.  
Once transcription is complete, the full text is converted into a document, split into chunks, and embedded using Google Gemini.  
The embeddings are stored in a Pinecone vector database along with metadata, making the content retrievable for future use.

In parallel, the workflow logs uploaded file information into Google Sheets for tracking.  
A separate chat trigger allows users to ask questions about the uploaded audio files.  
An AI agent retrieves relevant context from Pinecone and responds using Gemini, enabling conversational search over audio transcripts.

## Requirements
- AssemblyAI API credentials  
- Google Gemini (PaLM) API credentials  
- Pinecone API credentials  
- Google Sheets OAuth2 credentials  
- A Pinecone index for storing audio embeddings  

## How to set up
1. Connect AssemblyAI, Gemini, Pinecone, and Google Sheets credentials in n8n.  
2. Configure the Pinecone index for storing transcripts.  
3. Verify the Google Sheet has columns for file name and status.  
4. Test by uploading an audio file through the form.  
5. Enable the workflow for continuous use.

## How to customize the workflow
- Change summary style or transcript options in AssemblyAI  
- Adjust chunk size and overlap for better retrieval  
- Add email or Slack notifications after processing  
- Extend the chatbot to support multiple knowledge bases  

## 📊 Basic Information

- **Workflow ID:** 11888
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 346
- **Downloads:** 34
- **Created:** 2025/12/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11888)

## 👤 Author

- **Name:** Pixcels Themes
- **Username:** @pixcelsthemes

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×3)
- **wait** 
- **if** 
- **convertToFile** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
