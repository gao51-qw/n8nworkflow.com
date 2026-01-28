### Good to know:

This workflow creates a WhatsApp chatbot that answers questions using your own PDFs through RAG (Retrieval-Augmented Generation). Every time you upload a document to Google Drive, it is processed into embeddings and stored in Pinecone—allowing the bot to respond with accurate, context-aware answers directly on WhatsApp.

### Who is this for?

- Anyone building a custom WhatsApp chatbot.
 
- Businesses wanting a private knowledge based assistant

- Teams that want their documents to be searchable via chat

- Creators/coaches who want automated Q&A from their PDFs

- Developers who want a no-code RAG pipeline using n8n

### What problem is this workflow solving?

```This workflow eliminates the need to manually search through documents or upload data every time someone asks a question. It turns your PDFs into a smart, searchable knowledge base and delivers instant, accurate answers to WhatsApp users—without hallucinations or manual work.```

### What this workflow does:

✅ Monitors a Google Drive folder for new PDFs
✅ Extracts and splits text into chunks
✅ Generates embeddings using OpenAI/Gemini
✅ Stores embeddings in a Pinecone vector index
✅ Receives user questions via WhatsApp
✅ Retrieves the most relevant info using vector search
✅ Generates a natural response using an AI Agent
✅ Sends the answer back to the user on WhatsApp

### How it works:

1️⃣ Google Drive Trigger detects a new or updated PDF
2️⃣ File is downloaded and its text is split into chunks
3️⃣ Embeddings are generated and stored in Pinecone
4️⃣ WhatsApp Trigger receives a user’s question
5️⃣ The question is embedded and matched with Pinecone
6️⃣ AI Agent uses retrieved context to generate a response
7️⃣ The message is delivered back to the user on WhatsApp

### How to use:

- Connect your Google Drive account

- Add your Pinecone API key and index name

- Add your OpenAI/Gemini API key

- Connect your WhatsApp trigger + sender nodes

- Upload a sample PDF to your Drive folder

- Send a test WhatsApp message to see the bot reply

### Requirements:

✅ n8n cloud or self-hosted
✅ Google Drive account
✅ Pinecone vector database
✅ OpenAI or Gemini API key
✅ WhatsApp integration (Cloud API or provider)

### Customizing this workflow:

🟢 Change the Drive folder or add file-type filters
🟢 Adjust chunk size or embedding model
🟢 Modify the AI prompt for tone, style, or restrictions
🟢 Add memory, logging, or analytics
🟢 Add multiple documents or delete old vector entries
🟢 Swap the AI model (OpenAI ↔ Gemini ↔ Groq, etc.)