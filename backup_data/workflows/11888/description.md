## Who’s it for
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