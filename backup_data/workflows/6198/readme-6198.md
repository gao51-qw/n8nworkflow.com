# Generate LinkedIn posts from books using OpenAI, LangChain & Pinecone vector search

> Automates the process of generating, storing, and publishing engaging LinkedIn posts derived from books (PDFs) using AI and vector search.

---

## 🧠 Overview

This workflow:
1. **Watches a Google Drive folder** for new or updated book PDFs.
2. **Extracts and embeds** the content using OpenAI.
3. **Stores the data** in a Pinecone vector database.
4. **Uses a LangChain agent** to generate post ideas.
5. **Creates concise LinkedIn posts** with hook, insight, CTA.
6. **Updates a Google Sheet** and posts to LinkedIn.

---

## 🛠 Workflow Breakdown

### 📥 1. Google Drive Trigger
- **Trigger:** Watches a folder for new or updated PDF files.
- **Action:** Downloads the updated PDF.

### 📄 2. Extract and Embed Content
- **Extract from File:** Parses PDF to extract text.
- **Text Splitter:** Breaks text into chunks.
- **Embeddings (OpenAI):** Converts chunks into vector embeddings.
- **Pinecone Vector Store:** Saves the embeddings with the book name as namespace.

### 🧠 3. Post Idea Generation (LangChain Agent)
- Uses a prompt to:
  - Search Pinecone DB
  - Extract insights
  - Format into 5 LinkedIn post ideas with:
    - **Hook**
    - **Insight**
    - **CTA**
- **Memory buffer** and structured output parser are used for clean AI interaction.

### ✍️ 4. Post Creation
- Each idea is:
  - **Split**
  - Rewritten with a GPT model prompt to match LinkedIn tone
  - Styled for under 600 characters
  - Includes emojis, hashtags, and tone guidelines

### 📊 5. Google Sheet Integration
- Saves all generated posts to a **Google Sheet**.
- Marks status: `"published"` or `"no"`.

### 🔁 6. Scheduled Publishing
- Every day:
  - Pulls an unpublished post
  - Publishes it to LinkedIn
  - Updates the post's status and timestamp in the Google Sheet

---

## ⚙️ Setup Guide

### 📂 Google Drive
- Create a folder for book PDFs
- Connect your Google Drive account to n8n
- Provide access token with file read permission

### 📊 Google Sheets
- Create a Google Sheet with columns:
  - `bookname`, `hook`, `insight`, `cta`, `postContent`, `published`, `date`
- Add credentials in n8n with read/write permission

### 🧠 Pinecone
- Set up a Pinecone project and index (`linkdenpost`)
- Namespace will be auto-named using the book filename

### 🔑 API Credentials Required
- **OpenAI API** (for embeddings and post generation)
- **Pinecone API** (for vector storage and retrieval)
- **LinkedIn OAuth2** (to publish posts)
- **Google Drive & Sheets** credentials

---

## 🔁 Flow Summary

```mermaid
graph TD
  A[Google Drive Trigger] --&gt; B[Download PDF]
  B --&gt; C[Extract Text]
  C --&gt; D[Text Splitter]
  D --&gt; E[Create Embeddings]
  E --&gt; F[Pinecone Vector Store]
  F --&gt; G[LangChain Agent]
  G --&gt; H[Structured Output (5 Post Ideas)]
  H --&gt; I[Split Ideas]
  I --&gt; J[Format as LinkedIn Post (GPT)]
  J --&gt; K[Store in Google Sheet]
  L[Schedule Trigger] --&gt; M[Get Unpublished Post]
  M --&gt; N[Post to LinkedIn]
  N --&gt; O[Mark as Published]
```

---

## 🧪 Prompt Example (Used in LangChain Agent)

```text
You are a content strategist. Search the Pinecone vector DB containing a book. Generate 5 unique LinkedIn post ideas with:
- A Hook (curiosity driven)
- Insight (summary &lt; 100 words)
- CTA ("Agree or disagree?", etc.)

Respond in structured JSON:
[
  { "Hook": "...", "Insight": "...", "CTA": "..." },
  ...
]
```

---

## ✅ Output Sample

```json
{
  "Hook": "Why your lab's results might be invalid 😱",
  "Insight": "ISO/IEC 17025 stresses that labs must plan and address risks to impartiality and validity.",
  "CTA": "Does your lab audit for these risks?"
}
```

---

## 📆 Schedule Control

- Uses **Schedule Trigger** to post daily at a set time.
- Ensures automation with LinkedIn and accurate Google Sheet syncing.

---

## 📝 Notes

- Posts remain **professional and concise** for a LinkedIn audience
- Works with **any PDF book**
- Supports multi-book pipelines
- You can filter and tag books by filename or folder for segmenting post styles

## 📊 Basic Information

- **Workflow ID:** 6198
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 682
- **Downloads:** 68
- **Created:** 2025/7/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6198)

## 👤 Author

- **Name:** Mohamed Abdelwahab
- **Username:** @mohelwah

## 🏷️ Categories

- Social Media
- AI RAG

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **googleDrive** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitOut** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **scheduleTrigger** 
- **limit** 
- **linkedIn** 
- **if** 
- **googleSheets** (×3)
- **stickyNote** (×5)
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
