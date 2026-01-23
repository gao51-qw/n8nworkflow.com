# Generate AI avatar videos with GPT-5 & publish to social media platforms

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

![Workflow Screenshot](https://www.dr-firas.com/HEYGEN.png)

# Automate Social Media with HeyGen and GPT-5: Publish Videos to TikTok, YouTube & Instagram

---

### 👥 Who is this for?

This workflow is designed for:  
- Content creators who want to scale their short-form video production  
- Marketing teams seeking consistent and automated publishing pipelines  
- Agencies managing multiple social accounts for clients  
- Entrepreneurs looking to save time by automating repetitive content tasks  

---

### 💡 What problem is this workflow solving?

Publishing on **multiple platforms** like YouTube Shorts, TikTok, and Instagram is often:  
- Time-consuming (manual editing, caption writing, uploads)  
- Inconsistent (different requirements for each platform)  
- Prone to delays (switching between tools)  

This workflow solves these issues by creating a **fully automated video pipeline** powered by GPT-5, HeyGen, and Blotato.  

---

### ⚙️ What this workflow does

1. **Capture voice idea via Telegram**  
2. **Transcribe voice to text** using OpenAI Whisper  
3. **Generate a catchy title and caption** with GPT-5  
4. **Create an AI avatar video** with HeyGen  
5. **Save and organize assets** in Google Drive and Google Sheets  
6. **Upload final video** to Blotato  
7. **Auto-publish** to:  
   - YouTube Shorts  
   - TikTok  
   - Instagram  
   - (Optional: Facebook, X/Twitter, LinkedIn, Pinterest, Threads, Bluesky)  
8. **Update logs in Google Sheets**  
9. **Send a Telegram confirmation** once published  

---

### 🧰 Setup

Before using this workflow, ensure you have:  
1. A **Telegram Bot** connected to n8n for voice input  
2. An **OpenAI API key** for transcription (Whisper) and GPT-5 processing  
3. A **HeyGen account & API key** for avatar video generation  
4. A **Google Drive & Google Sheets integration** for storing assets and logs  
5. A **Blotato account (Pro plan)** with API access enabled  
6. **Verified Community Nodes** enabled in n8n Admin Panel  
7. Blotato node installed and credentials configured  

---

### 🛠️ How to customize this workflow

- **Prompts** → Adjust GPT-5 prompts to match your brand voice and niche  
- **Avatars** → Use custom avatars or voices via HeyGen configuration  
- **Platforms** → Activate only the social nodes you need (e.g., focus on TikTok & YouTube Shorts)  
- **Approval steps** → Add Telegram or Slack confirmation before publishing  
- **Analytics** → Extend the workflow to track engagement data in Google Sheets, Airtable, or Notion  

---

This workflow turns a **simple spoken idea** into a **viral-ready video** — automatically generated, styled, and posted across your most important platforms.  

---
📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/HeyGen-2563d6550fd980ee8e56c064c42177a3?source=copy_link)

---

### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https:/https://www.youtube.com/@DRFIRASS)

## 📊 Basic Information

- **Workflow ID:** 7715
- **Complexity:** advanced
- **Node Count:** 41
- **Views:** 2592
- **Downloads:** 259
- **Created:** 2025/8/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7715)

## 👤 Author

- **Name:** Dr. Firas
- **Username:** @drfiras

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **set** (×2)
- **@blotato/n8n-nodes-blotato.blotato** (×10)
- **merge** 
- **googleSheets** (×5)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **googleSheetsTool** 
- **stickyNote** (×5)
- **telegramTrigger** 
- **telegram** (×3)
- **googleDrive** (×2)
- **httpRequest** (×5)
- **wait** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 41 nodes with 34 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
