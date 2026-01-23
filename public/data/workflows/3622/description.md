[![Watch on YouTube](https://img.youtube.com/vi/AqVSLj7qb2Q/maxresdefault.jpg)](https://www.youtube.com/watch?v=AqVSLj7qb2Q)

# 🚀 Automated Upwork Cover Letter Generator with n8n + MacOS Shortcut + Pinecone Context Retrieval

This `n8n` automation is designed to streamline the Upwork proposal process by generating highly personalized, context-aware cover letters using your own skills and project data stored in a Pinecone vector store.

With the help of an AI Agent powered by **Groq’s Qwen LLM**, and triggered instantly via a **MacOS Shortcut**, this system takes job descriptions from your clipboard and returns a ready-to-use HTML cover letter—right on your desktop.

---

## ⚙️ Workflow Breakdown

### 🔹 MacOS Shortcut – Trigger the Workflow Instantly
The process begins with a **MacOS Shortcut** that captures job description text from your clipboard and sends it to a custom webhook in `n8n`.

### 🔹 Webhook Node – Receive and Process Input
The **webhook node** receives the clipboard data, along with the required credentials for authentication. This node serves as the entry point to the full automation.

### 🔹 Field Mapping & Pre-Processing
A series of basic logic nodes map and clean up the input fields. These are then passed to an **LLM Chain** to generate specific questions related to the job description.

### 🔹 Question Answer Chain + Vector Search (Pinecone)
Using your previously stored skills and project data in a **Pinecone vector store**, the system retrieves relevant information to answer the generated questions and builds a rich context around the job description.

### 🔹 AI Agent Node – Generate Personalized Cover Letter
With both the job post and contextual data, the **AI Agent** (powered by **Groq’s Qwen LLM**) creates a tailored cover letter.  
The agent is equipped with:

- 🔍 Google Search Tool  
- 🧠 Vector Store Retriever Tool  
- 🗃️ Buffer Memory  

This ensures the generated proposal is **insightful**, **relevant**, and **professional**.

### 🔹 Markdown to HTML – Clean Output Conversion
The markdown output from the AI is converted into **HTML** using a **Markdown node**, making it easy to paste directly into Upwork or emails.

### 🔹 Return to Shortcut – Display Final Result
The final HTML response is sent back to the **MacOS Shortcut**, which displays it in a **modal window** for easy review and copy-paste.

---

## 💼 Use Case

This automation is built specifically for freelancers on **Upwork** (or any freelance platform) who want to:

- ✅ Save time on repetitive proposal writing  
- ✅ Create job-specific cover letters with context  
- ✅ Stand out with better personalization  
- ✅ Reduce manual effort with automation  

Whether you’re a beginner or a seasoned pro, this tool **elevates your workflow** while staying simple to use.

---

## 📦 Setup Instructions

1. **Import Workflow** to your `n8n` instance  
2. **Create and Configure MacOS Shortcut** (drag-and-drop ready)  
3. **Prepare and Embed Your Skills/Project Data** into Pinecone  
4. **Add API Credentials:**
   - Groq (for Qwen LLM)  
   - Pinecone  
   - n8n Webhook (Basic Auth if needed)  
5. **Run the Workflow & Submit Smarter Proposals**

&gt; **Note:** This workflow is designed for building and returning Upwork cover letters using job descriptions copied to your clipboard. All generation is context-aware and tailored per submission.
