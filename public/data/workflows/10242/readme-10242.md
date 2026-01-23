# Personalize resumes & cover letters with AI, GitHub Pages and Google Drive

> # 🧠 Automated Resume & Cover Letter Generator

This project is an **automation workflow** that generates a **personalized resume and cover letter** for each job listing.

---

## 🚀 Features

### **Automated Resume Crafting**
- Generates an **HTML resume** from your data.  
- Hosts it live on **GitHub Pages**.  
- Converts it to **PDF** using **Gotenberg** and saves it to **Google Drive**.

### **Automated Cover Letter Generation**
- Uses an **LLM** to create a **tailored cover letter** for each job listing.

### **Simple Input Database Agent**
- Stores your experience in an **n8n Data Table** with the following fields:  
  `role`, `summary`, `task`, `skills`, `tools`, `industry`.  
- The main agent pulls this data using **RAG (Retrieval-Augmented Generation)** to personalize the outputs.

### **One-Time GitHub Setup**
- Initializes a **blank GitHub repository** to host HTML files online, allowing **Gotenberg** to access and convert them.

## 🧩 Tech Stack

- **Gotenberg** – Converts HTML to PDF  
- **GitHub Pages** – Hosts live HTML files  
- **n8n** – Handles data tables and workflow automation  
- **LLM (OpenAI / Cohere / etc.)** – Generates cover letters  
- **Google Drive** – Stores the final PDFs  

---

## ⚙️ Installation & Setup

### 1. Create a GitHub Repository
- This repo will host your HTML resume through **GitHub Pages**.

### 2. Set the Webhook URL
- In the `notify-n8n.yml` file, replace:
role | summary | task | skills | tools | industry

### 3. Create the n8n Data Table

Add the following columns:

role | summary | task | skills | tools | industry

### 4. Create a Google Spreadsheet
- Add these columns:  
company | cover_letter | resume

## 5. Install Gotenberg
- Follow the installation instructions on the **Gotenberg GitHub repository**: [https://github.com/thecodingmachine/gotenberg](https://github.com/thecodingmachine/gotenberg)

### 6. Customize the HTML Template
- Modify the HTML resume to your liking.  
- You can use an **LLM** to locate and edit specific sections.

### 7. Add Authentication and Link Your GitHub Repo
- Ensure your workflow has permission to **push updates** to your GitHub Pages branch.

### 8. Run the Workflow
- Once everything is connected, trigger the workflow to automatically generate and save **personalized resumes and cover letters**.

## 📝 How to Use

1. **Copy and paste the job listing description** into the Telegram bot.  
2. **Wait for the "Done" notification** before submitting another job.  
   - Do **not** use the bot again until the notification appears.  
   - The process usually takes a few minutes to complete.

---

## ✅ Notes

This workflow is designed to **save time and personalize your job applications** efficiently.  
By combining n8n automation, LLMs, and open-source tools like Gotenberg, you can maintain full control over your data while generating high-quality resumes and cover letters for every job opportunity.


## 📊 Basic Information

- **Workflow ID:** 10242
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 3708
- **Downloads:** 370
- **Created:** 2025/10/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10242)

## 👤 Author

- **Name:** Michael A Putra
- **Username:** @michael-ap

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **dataTable** 
- **dataTableTool** 
- **googleSheets** (×2)
- **googleDrive** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×5)
- **telegramTrigger** 
- **webhook** 
- **github** (×4)
- **html** 
- **code** 
- **manualTrigger** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
