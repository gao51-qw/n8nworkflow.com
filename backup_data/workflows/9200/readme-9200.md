# Automate & publish video ad campaigns with NanoBanana, Seedream, GPT-4o, Veo 3

> ![Workflow Screenshot](https://www.dr-firas.com/n8n-Seedream.png)

# 💥 Automate video ads with NanoBanana, Seedream 4, ChatGPT Image and Veo 3

### Who is this for?
This template is designed for **marketers, content creators, and e-commerce brands** who want to automate the creation of professional ad videos at scale. It’s ideal for teams looking to generate consistent, high-quality video ads for social media without spending hours on manual design, editing, or publishing.

### What problem is this workflow solving? / Use case
Creating video ads usually requires multiple tools and a lot of time: writing scripts, designing product visuals, editing videos, and publishing them across platforms.  
This workflow **automates the entire pipeline** — from idea to ready-to-publish ad video — ensuring brands can quickly test campaigns and boost engagement without production delays.

### What this workflow does
1. **Generates ad ideas** from Telegram input (text + product image).  
2. **Creates product visuals** using multiple AI image engines:  
   - 🌊 **Seedream 4.0** (realistic visuals)  
   - 🍌 **NanoBanana** (image editing & enhancement)  
   - 🤖 **ChatGPT Image / GPT-4o** (creative variations)  
3. **Produces cinematic video ads** with **Veo 3** based on AI-generated scripts.  
4. **Merges multiple short clips** into a polished final ad.  
5. **Publishes automatically** to multiple platforms (TikTok, Instagram, LinkedIn, X, Threads, Facebook, Pinterest, Bluesky, YouTube) via **Blotato**.  
6. **Stores metadata and results** in Google Sheets & Google Drive for easy tracking.  
7. **Notifies you via Telegram** with the video link and copy.

### Setup
1. **Connect your accounts** in n8n:
   - Telegram API (for input and notifications)  
   - Google Drive + Google Sheets (storage & tracking)  
   - Kie AI API (Seedream + Veo 3)  
   - Fal.ai API (NanoBanana + video merging)  
   - OpenAI (for script and prompt generation)  
   - Blotato API (for social publishing)  
2. **Prepare a Google Sheet** with brand info and settings (product name, category, features, offer, website URL).  
3. **Deploy the workflow** and connect your Telegram bot to start sending ad ideas (photo + caption).  
4. **Run the workflow** — it will automatically generate images, create videos, and publish to your chosen channels.

### How to customize this workflow to your needs
- **Brand customization**: Adjust the Google Sheet values to reflect your brand’s offers and product features.  
- **Platforms**: Enable/disable specific Blotato nodes depending on which platforms you want to publish to.  
- **Video style**: Edit the AI agent’s system prompt to control tone, format, and transitions (cinematic, playful, modern, etc.).  
- **Notifications**: Adapt Telegram nodes to send updates to different team members or channels.  
- **Storage**: Change the Google Drive folder IDs to store generated videos and images in your preferred location.  

This workflow lets you **go from idea → images → cinematic ad video → auto-published content** in minutes, fully automated.

---
📄 **🎥 Watch This Tutorial**: [Step by Step](https://youtu.be/E-_8KZ_FSeY)

---
📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Automate-video-ads-with-NanoBanana-Seedream-4-ChatGPT-Image-and-Veo-3-27e3d6550fd9800dbe46e6192bae60a9?source=copy_link)

---

### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https:/https://www.youtube.com/@DRFIRASS)

## 📊 Basic Information

- **Workflow ID:** 9200
- **Complexity:** advanced
- **Node Count:** 63
- **Views:** 10750
- **Downloads:** 1075
- **Created:** 2025/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9200)

## 👤 Author

- **Name:** Dr. Firas
- **Username:** @drfiras

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **telegram** (×3)
- **telegramTrigger** 
- **googleDrive** (×2)
- **code** (×4)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.toolThink** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **httpRequest** (×10)
- **wait** (×5)
- **googleSheets** (×6)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@blotato/n8n-nodes-blotato.blotato** (×10)
- **merge** (×2)
- **set** (×2)
- **splitInBatches** 
- **splitOut** 
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 63 nodes with 56 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
