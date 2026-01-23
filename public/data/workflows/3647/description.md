Automatically convert documents from Google Drive into vector embeddings using OpenAI, LangChain, and PGVector — fully automated through n8n.

---

### ⚙️ What It Does

This workflow monitors a Google Drive folder for new files, supports multiple file types (PDF, TXT, JSON), and processes them into vector embeddings using OpenAI’s `text-embedding-3-small` model. These embeddings are stored in a Postgres database using the PGVector extension, making them query-ready for semantic search or RAG-based AI agents.

After successful processing, files are moved to a separate “vectorized” folder to avoid duplication.

---

### 💡 Use Cases

- Powering Retrieval-Augmented Generation (RAG) AI agents  
- Semantic search across private documents  
- AI assistant knowledge ingestion  
- Automated document pipelines for indexing or classification  

---

### 🧠 Workflow Highlights

- **Trigger Options:** Manual or Scheduled (3 AM daily by default)  
- **Supported File Types:** PDF, TXT, JSON  
- **Embedding Stack:** LangChain Text Splitter, OpenAI Embeddings, PGVector  
- **Deduplication:** Files are moved after processing  
- **License:** CC BY-SA 4.0  
- **Author:** [AlexK1919](https://www.alexk1919.com)

---

### 🛠 What You’ll Need

- **Google Drive OAuth2** credentials (connected to `Search Folder`, `Download File`, and `Move File` nodes)  
- **OpenAI API Key** (used in the `Embeddings OpenAI` node)  
- **Postgres + PGVector** database (connected in the `Postgres PGVector Store` node)

---

### 🔧 Step-by-Step Setup Instructions

1. **Create Google OAuth2 credentials** in n8n and connect them to all Google Drive nodes.
2. **Set your source folder** ID in the `Search Folder` node — this is where incoming files are placed.
3. **Set your processed folder** ID in the `Move File` node — files will be moved here after vectorization.
4. **Ensure you have a PGVector-enabled Postgres instance** and input the table name and collection in the `Postgres PGVector Store` node.
5. **Add your OpenAI credentials** to the `Embeddings OpenAI` node and select `text-embedding-3-small`.
6. **Optional:** Activate the `Schedule Trigger` node to run daily or configure your own schedule.
7. **Run manually** by triggering `When clicking ‘Test workflow’` for on-demand ingestion.

---

### 🧩 Customization Tips

Want to support more file types or enhance the pipeline?

- **Add new extractors**: Use `Extract from File` with other formats like DOCX, Markdown, or HTML.
- **Refine logic by file type**: The `Switch` node routes files to the correct extraction method based on MIME type (`application/pdf`, `text/plain`, `application/json`).
- **Pre-process with OCR**: Add an OCR step before extraction to handle scanned PDFs or images.
- **Add filters**: Enhance the `Search Folder` or `Switch` node logic to skip specific files or folders.

---

### 📄 License

This workflow is available under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license. You are free to use, adapt, and share this workflow for non-commercial purposes under the terms of this license.

Full license details: https://creativecommons.org/licenses/by-nc-sa/4.0/