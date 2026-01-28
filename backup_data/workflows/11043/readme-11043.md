# Transform videos with FAL AI avatar swaps & voice and publish to TikTok with Blotato

> # Convert Viral Videos into AI Avatar Swaps and Publish on TikTok with Blotato

![Workflow Overview](https://www.dr-firas.com/wan.png)

### Who is this for?
This workflow is designed for content creators, agencies, influencers, and automation builders who want to transform viral videos into personalized avatar-based edits — and automatically publish them on TikTok (and other platforms) without manual editing or video software.

### What problem is this workflow solving?
Replacing a character in a video, transforming the voice, merging audio/video, and publishing to social networks typically requires multiple tools, editing skills, and a lot of time.  
This workflow automates the entire pipeline end-to-end:

- No manual video editing  
- No audio processing  
- No API debugging  
- No uploading/publishing hassles  

It’s a full AI-powered transformation system that produces ready-to-post content in minutes.

### What this workflow does
This workflow receives an avatar image + a viral video URL and automatically:

1. Extracts the audio using Replicate  
2. Replaces the character in the video using **FAL WAN Replace**  
3. Transforms the voice using **FAL Chatterbox Speech-to-Speech**  
4. Merges the new video and audio using **FAL FFmpeg**  
5. Saves results to Google Sheets for tracking  
6. Publishes the final video to **TikTok** via Blotato (and optionally to Instagram, Facebook, LinkedIn, X, and YouTube)  
7. Sends a confirmation message when publishing is complete

Everything runs automatically, in parallel, for maximum speed.

### Setup
1. **Telegram Bot**  
   - Add your Telegram Bot credentials in the **Telegram Trigger** node.  
   - Send an avatar photo + video URL in one message (URL in the caption).

2. **Workflow Configuration**  
   - Add your **FAL API key**  
   - Add your **Replicate API key**  
   - Add your **targetVoiceAudioUrl** (this is the voice the output will use)

3. **Google Sheets**  
   - Connect your Google Sheets OAuth credentials  
   - Select your sheet and ensure columns exist (e.g. original URL, output URL)

4. **Blotato Publishing**  
   - Install community node `@blotato/n8n-nodes-blotato`  
   - Connect your [Blotato](https://blotato.com/?ref=firas) API credentials  
   - Select the TikTok account (and optional other accounts)

5. **Test the workflow**  
   - Send a Telegram message with:
     - A photo (avatar)
     - Video URL in the caption  
   - The workflow will process everything automatically.

### How to customize this workflow to your needs
- **Change platforms**: remove or add publishing outputs (TikTok, Instagram, LinkedIn, Facebook, YouTube, X).  
- **Change voice style**: update the `targetVoiceAudioUrl` in the Workflow Configuration node.  
- **Use your own avatar**: send any image in Telegram — the workflow automatically makes it public and ready for AI processing.  
- **Adjust video logic**: swap FAL models, update merg

---
### 👋 Need help or want to customize this?
📩 Contact: [LinkedIn](https://www.linkedin.com/in/dr-firas/)  
📺 YouTube: [@DRFIRASS](https://www.youtube.com/@DRFIRASS)  
🚀 Workshops: [Mes Ateliers n8n](https://hotm.art/formation-n8n)

---
📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Convert-viral-videos-into-AI-avatar-swaps-and-publish-on-TikTok-with-Blotato-2b13d6550fd9809d98d4c8b7bac85e20?source=copy_link)
### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https://www.youtube.com/channel/UCriIQI8uaoEro5FEnOpeidQ) / [🚀 Mes Ateliers n8n  ](https://hotm.art/formation-n8n)

## 📊 Basic Information

- **Workflow ID:** 11043
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 1103
- **Downloads:** 110
- **Created:** 2025/11/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11043)

## 👤 Author

- **Name:** Dr. Firas
- **Username:** @drfiras

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **telegram** (×3)
- **code** 
- **httpRequest** (×10)
- **wait** (×4)
- **set** 
- **googleSheets** 
- **merge** (×3)
- **stickyNote** (×6)
- **@blotato/n8n-nodes-blotato.blotato** (×7)
- **@n8n/n8n-nodes-langchain.openAi** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 32 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
