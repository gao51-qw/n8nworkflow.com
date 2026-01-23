# Auto-create TikTok videos with VEED.io AI avatars, ElevenLabs & GPT-4

> # 💥 Viral TikTok Video Machine: Auto-Create Videos with Your AI Avatar

![Workflow Overview](https://www.dr-firas.com/workflow-veed.png)

---

### 🎯 Who is this for?
This workflow is for **content creators, marketers, and agencies** who want to use **Veed.io’s AI avatar technology** to produce short, engaging TikTok videos automatically.  
It’s ideal for creators who want to appear on camera without recording themselves, and for teams managing multiple brands who need to generate videos at scale.

---

### ⚙️ What problem this workflow solves
Manually creating videos for TikTok can take hours — finding trends, writing scripts, recording, and editing.  
By combining **Veed.io**, **ElevenLabs**, and **GPT-4**, this workflow transforms a simple Telegram input into a **ready-to-post TikTok video** featuring your **AI avatar powered by Veed.io** — speaking naturally with your cloned voice.

---

### 🚀 What this workflow does
This automation links Veed.io’s video-generation API with multiple AI tools:
- Analyzes TikTok trends via **Perplexity AI**  
- Writes a 10-second **viral script** using **GPT-4**  
- Generates your **voiceover** via **ElevenLabs**  
- Uses **Veed.io (Fabric 1.0 via FAL.ai)** to animate your avatar and sync the lips to the voice  
- Creates an engaging **caption + hashtags** for TikTok virality  
- Publishes the video automatically via **Blotato TikTok API**  
- Logs all results to **Google Sheets** for tracking

---

### 🧩 Setup
1. **Telegram Bot**
   - Create your bot via [@BotFather](https://t.me/BotFather)
   - Configure it as the trigger for sending your **photo** and **theme**

2. **Connect Veed.io**
   - Create an account on [Veed.io](https://www.veed.io)  
   - Get your **FAL.ai API key** (Veed Fabric 1.0 model)  
   - Use HTTPS image/audio URLs compatible with Veed Fabric  

3. **Other APIs**
   - Add **Perplexity**, **ElevenLabs**, and **Blotato TikTok** keys  
   - Connect your Google Sheet for logging results  

---

### 🛠️ How to customize this workflow
- **Change your Avatar:** Upload a new image through Telegram, and **Veed.io** will generate a new talking version automatically.  
- **Modify the Script Style:** Adjust the GPT prompt for tone (educational, funny, storytelling).  
- **Adjust Voice Tone:** Tweak **ElevenLabs** stability and similarity settings.  
- **Expand Platforms:** Add Instagram, YouTube Shorts, or X (Twitter) posting nodes.  
- **Track Performance:** Customize your Google Sheet to measure your most successful Veed.io-based videos.

---

### 🧠 Expected Outcome
In just a few seconds after sending your photo and theme, this workflow — powered by **Veed.io** — creates a **fully automated TikTok video** featuring your AI avatar with natural lip-sync and voice.  
The result is a continuous stream of **viral short videos**, made without cameras, editing, or effort.

---

✅ **Import the JSON file in n8n**, add your API keys (including Veed.io via FAL.ai), and start generating viral TikTok videos starring your AI avatar today!

### 🎥 [Watch This Tutorial](https://youtu.be/EOe7h1resHk)

![VEED logo](https://www.dr-firas.com/VEED.png)

---
📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Viral-TikTok-Video-Machine-Auto-Create-Videos-with-Your-AI-Avatar-2943d6550fd9804a947ae762d60d76f5?source=copy_link)

### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https://www.youtube.com/channel/UCriIQI8uaoEro5FEnOpeidQ)

## 📊 Basic Information

- **Workflow ID:** 10000
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 34466
- **Downloads:** 3446
- **Created:** 2025/10/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10000)

## 👤 Author

- **Name:** Dr. Firas
- **Username:** @drfiras

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **set** (×2)
- **perplexity** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **httpRequest** (×5)
- **googleSheets** (×2)
- **stickyNote** (×7)
- **telegram** (×2)
- **code** 
- **wait** 
- **@blotato/n8n-nodes-blotato.blotato** (×10)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
