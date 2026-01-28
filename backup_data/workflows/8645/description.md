# 📄 AI-Powered Document Summarizer & Notifier  

This workflow monitors a Google Drive folder for new files (Google Docs or PDFs), extracts text, summarizes content with OpenAI, and sends results to Slack or Email.  

---

## 🔧 How It Works  

1. **Monitors** a Google Drive folder for new files.  
2. **Detects file type** → Google Doc vs PDF.  
3. **Extracts text** (via Google Docs API or PDF extractor).  
4. **Summarizes & analyzes** content using OpenAI.  
5. **Sends results** to Slack and/or Email.  

---

## 👤 Who Is This For?  

- Business teams → Quick digests of reports, proposals, contracts.  
- Educators / researchers → Summaries of long study materials.  
- Founders / managers → Daily summaries without opening every file.  
- Operations teams → Compliance and documentation tracking.  

---

## 💡 Use Case / Problem Solved  

- Reading long documents is time-consuming.  
- Sharing key points across teams requires manual effort.  
- Important context (sentiment, action items) is often missed.  

👉 This workflow solves it by **auto-summarizing documents and notifying teams instantly**.  

---

## ⚙️ What This Workflow Does  

- Monitors Google Drive for new Google Docs or PDFs.  
- Extracts text automatically.  
- Uses OpenAI to generate:  
  - Title  
  - Summary  
  - Key Points  
  - Suggested Action Items  
  - Language detection  
  - Sentiment (positive, neutral, negative)  
- Pushes output to Slack channel and/or Email inbox.  

---

## 🛠️ Setup Instructions  

### **Prerequisites**  
- [Google Drive (OAuth2)](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service)  
- [Google Docs (OAuth2)](https://docs.n8n.io/integrations/builtin/credentials/google/)  
- [OpenAI API Key](https://docs.n8n.io/integrations/builtin/credentials/openAi/)  
- Slack (OAuth2) or Gmail (OAuth2)  

### **Steps to Configure**  

1. **Connect Google Drive**  
   - Choose the folder you want to monitor.  

2. **Set up file type routing**  
   - Use an `IF` node to split Docs vs PDFs.  

3. **For Google Docs**  
   - Use **Google Docs Get** → extract text.  

4. **For PDFs**  
   - Use **Google Drive Download** → **Extract PDF**.  

5. **Send text to OpenAI**  
   - Connect to your OpenAI model.  
   - Customize the system prompt to generate title, summary, sentiment, etc.  

6. **Notify**  
   - Send output to Slack channel or Gmail.  

7. **Save & activate** your workflow.  

---

## 📌 Notes  
- Adjust OpenAI prompt to suit your context.  
- For large PDFs, consider splitting into smaller chunks.  
