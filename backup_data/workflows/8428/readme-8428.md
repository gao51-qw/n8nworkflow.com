# Create viral ads with AI: NanoBanana & publish on socials via upload-post

> # 💥 Create viral Ads with NanoBanana & Seedance, publish on socials via upload-post

![Workflow Screenshot](https://www.dr-firas.com/upload-postII.png)

### Who is this for?  
This workflow is designed for **marketers, content creators, and small businesses** who want to automate the creation of engaging social media ads without spending hours on manual design, video editing, or publishing.

---

### What problem is this workflow solving? / Use case  
Manually creating ads for multiple platforms is **time-consuming and repetitive**. You need to generate visuals, edit videos, add music, and then publish them across social channels.  
This workflow automates the **end-to-end ad production pipeline**, saving time while ensuring consistent, professional-quality output.

---

### What this workflow does  
- Receives ad ideas via **Telegram**.  
- Uses **NanoBanana** to generate and edit realistic product images.  
- Transforms images into engaging short videos with **Seedance**.  
- Generates background music with **Suno**.  
- Merges video and audio into a polished final ad.  
- Reads brand info and generates ad copy with **AI (OpenAI)**.  
- Publishes ads to **Instagram, TikTok, YouTube, Facebook, and X** via **upload-post**.  
- Stores media and campaign data in **Google Drive** and **Google Sheets** for tracking.  
- Sends back notifications and previews via **Telegram**.

---

### Setup  
1. **Connect your accounts**:  
   - Telegram  
   - Google Drive  
   - Google Sheets  
   - OpenAI API  
   - NanoBanana API  
   - Seedance API  
   - Suno API  
   - Upload-post  

2. **Prepare Google Sheets**:  
   - Add a sheet for **brand details** (name, category, features, website).  
   - Add another sheet for **video logs** (status, links, captions).  

3. **Configure upload-post**:  
   - Ensure your social accounts (TikTok, Instagram, YouTube, Facebook, X) are linked to upload-post.  

---

### How to customize this workflow to your needs  
- **Prompts** → Adjust the **image/video/music prompts** to better reflect your brand’s tone and products.  
- **Ad copy** → Modify the AI prompt inside the **Ads Copywriter Generator** to control wording, style, and structure.  
- **Publishing scope** → Choose only the platforms you want (TikTok, Instagram, etc.) inside the **upload-post** node.  
- **Storage** → Update Google Drive folder IDs and Google Sheets document IDs to match your own workspace.  

---

👉 With this template, you get a **fully automated viral ad production system** powered by **AI visuals, video rendering, and auto-publishing** across social platforms. Perfect for scaling your content strategy while saving time.


📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Welcome-to-Upload-Post-2683d6550fd980ffa23ee340fdb3285e?source=copy_link)

## Demo Video

🎥 Watch the full tutorial here: [YouTube Demo](https://youtu.be/4ec9WDCz9CY)
### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https:/https://www.youtube.com/@DRFIRASS)

## 📊 Basic Information

- **Workflow ID:** 8428
- **Complexity:** advanced
- **Node Count:** 43
- **Views:** 9834
- **Downloads:** 983
- **Created:** 2025/9/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8428)

## 👤 Author

- **Name:** Dr. Firas
- **Username:** @drfiras

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×8)
- **telegram** (×4)
- **telegramTrigger** 
- **googleDrive** (×2)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** (×9)
- **wait** (×4)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **n8n-nodes-upload-post.uploadPost** (×2)
- **set** (×2)
- **googleSheets** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 43 nodes with 33 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
