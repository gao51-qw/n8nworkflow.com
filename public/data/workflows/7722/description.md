
# 📘 Code of Conduct Q&A Slack Chatbot with RAG Powered 
[![Watch the video](https://wisestackai.s3.ap-southeast-1.amazonaws.com/code-of-conduct-qanda-chatbot-rag-powered-for-slack.jpg)](https://www.youtube.com/watch?v=2EWgC5UKiBQ)
&gt; Empower employees to instantly access and understand the company’s Code of Conduct via a Slack chatbot, powered by Retrieval-Augmented Generation (RAG) and LLMs.

## 🧑‍💼 Who’s it for

This workflow is designed for:
- **HR and compliance teams** to automate policy-related inquiries
- **Employees** who want quick answers to Code of Conduct questions directly inside Slack
- **Startups or enterprises** that need internal compliance self-service tools powered by AI

## ⚙️ How it works / What it does

This RAG-powered Slack chatbot answers user questions based on your uploaded **Code of Conduct PDF** using GPT-4 and embedded document chunks. Here's the flow:

1. **Receive Message from Slack:** A webhook triggers when a message is posted in Slack.
2. **Check if it’s a valid query:** Filters out non-user messages (e.g., bot mentions).
3. **Run Agent with RAG:**
   - Uses GPT-4 with `Query Data Tool` to retrieve relevant document chunks.
   - Returns a well-formatted, context-aware answer.
4. **Send Response to Slack:** Fetches user info and posts the answer back in the same channel.
5. **Document Upload Flow:**
   - HR can upload the PDF Code of Conduct file.
   - It’s parsed, chunked, embedded using OpenAI, and stored for future query retrieval.
   - A backup copy is saved to Google Drive.

## 🛠️ How to set up

1. **Prepare your environment:**
   - Slack Bot token & webhook configured (Sample slack app manifest: https://wisestackai.s3.ap-southeast-1.amazonaws.com/slack_bot_manifest.json)
   - OpenAI API key (for GPT-4 & embedding)
   - Google Drive credentials (optional for backup)

2. **Upload the Code of Conduct PDF:**
   - Use the designated node to upload your document (Sample file: https://wisestackai.s3.ap-southeast-1.amazonaws.com/20220419-ingrs-code-of-conduct-policy-en.pdf)
   - This triggers chunking → embedding → data store.

3. **Deploy the chatbot:**
   - Host the webhook and connect it to your Slack app.
   - Share the command format with employees (e.g., `@CodeBot Can I accept gifts from partners?`)

4. **Monitor and iterate:**
   - Improve chunk size or embed model if queries aren’t accurate.
   - Review unanswered queries to enhance coverage.

## 📋 Requirements

- n8n (Self-hosted or Cloud)
- Slack App (with `chat:write`, `users:read`, `commands`)
- OpenAI account (embedding + GPT-4 access)
- Google Drive integration (for backups)
- Uploaded Code of Conduct in PDF format

## 🧩 How to customize the workflow

| What to Customize            | How to Do It                                                                 |
|-----------------------------|------------------------------------------------------------------------------|
| 🔤 **Prompt style**           | Edit the System & User prompts inside the `Code Of Conduct Agent` node       |
| 📄 **Document types**         | Upload additional policy PDFs and tag them differently in metadata          |
| 🤖 **Agent behavior**         | Tune GPT temperature or replace with different LLM                          |
| 💬 **Slack interaction**      | Customize message formats or trigger phrases                                |
| 📁 **Data Store engine**      | Swap to Pinecone, Weaviate, Supabase, etc. depending on use case            |
| 🌐 **Multilingual support**   | Preprocess text and support locale detection via Slack metadata             |