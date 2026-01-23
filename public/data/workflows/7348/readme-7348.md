# Auto-generate social media videos with GPT-5 and publish via Blotato

> ![Workflow Screenshot](https://www.dr-firas.com/Blotato-gpt5.png)

# Auto-Generate Social Media Videos with GPT-5 and Publish via Blotato

&gt; ⚠️ **Disclaimer**: This workflow uses Community Nodes (Blotato) and requires a self-hosted n8n instance with "Verified Community Nodes" enabled.

---

### 👥 Who is this for?

This workflow is perfect for:
- Content creators and influencers who post regularly on social media  
- Marketing teams that want to scale branded video production  
- Solo entrepreneurs looking to automate their video marketing  
- Agencies managing multi-client social media publishing  

---

### 💡 What problem is this workflow solving?

Creating high-quality video content and publishing consistently on multiple platforms is time-consuming.  
You often need to:  
- Write compelling captions and titles  
- Adapt content to fit each platform’s requirements  
- Publish manually or across disconnected tools  

This workflow automates the entire process — from idea to publishing — so you can focus on growth and creativity, not logistics.

---

### ⚙️ What this workflow does

1. Receives a video idea via **Telegram**  
2. Saves metadata to **Google Sheets**  
3. Transcribes the video using **OpenAI Whisper**  
4. Generates a catchy **title and caption** using **GPT-5**  
5. Uploads the final media to **Blotato**  
6. Publishes the video automatically to:
   - TikTok  
   - Instagram  
   - YouTube Shorts  
   - Facebook  
   - X (Twitter)  
   - Threads  
   - LinkedIn  
   - Pinterest  
   - Bluesky  
7. Updates the post status in **Google Sheets**  
8. Sends confirmation via **Telegram**

---

### 🧰 Setup

Before launching the workflow, make sure to:

1. Create a **Blotato Pro** account and generate your API Key  
2. Enable **Verified Community Nodes** in the n8n Admin Panel  
3. Install the **Blotato** community node in n8n  
4. Create your **Blotato credential** using the API key  
5. Make a copy of this [Google Sheet template](https://docs.google.com/spreadsheets/d/1zrfxthPoUhbf1Ae3cKsDrJKw-Stri7uM-d3-eO9CgA4/edit?usp=sharing)  
6. Ensure your **Google Drive folder** with videos is shared publicly (viewable by anyone with the link)  
7. Link your **Telegram Bot** and configure the trigger node  
8. Follow the **sticky note instructions** inside the workflow

---

### 🛠️ How to customize this workflow

- Modify the GPT-5 prompt to reflect your brand voice or campaign tone  
- Add/remove social platforms depending on your strategy  
- Include additional AI modules (e.g., for voiceover or thumbnails)  
- Insert review/approval steps (via Slack, email, or Telegram)  
- Connect Airtable, Notion, or your CRM to track results

---

This is your all-in-one **AI video publishing engine**, built for automation, scale, and growth across the social web.


---
📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Blotato-2473d6550fd980e19983f69611a80a0d?source=copy_link)

---

### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https:/https://www.youtube.com/@DRFIRASS)

## 📊 Basic Information

- **Workflow ID:** 7348
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 3028
- **Downloads:** 302
- **Created:** 2025/8/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7348)

## 👤 Author

- **Name:** Dr. Firas
- **Username:** @drfiras

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **@blotato/n8n-nodes-blotato.blotato** (×10)
- **merge** (×2)
- **stickyNote** (×3)
- **set** 
- **telegramTrigger** 
- **googleSheets** (×6)
- **telegram** (×2)
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **googleSheetsTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
