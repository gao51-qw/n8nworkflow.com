# Auto-create & post social media reels with Google Veo-3 AI and GPT

> 🚀 GPT-5 + Veo-3 Instagram Reel Auto-Creator & Auto-Poster

Description:
This n8n workflow is a fully automated short-form video content engine that takes your creative idea, turns it into a cinematic video using Google Veo-3 via Wavespeed API, writes an engaging Instagram caption with GPT-5, and instantly posts it to Instagram via Postiz—all without lifting a finger.

It’s designed for content creators, social media managers, and brands who want to produce high-quality, on-brand reels at scale without manual editing or posting.

Watch Step-by-step build:
www.youtube.com/@automatewithmarc

💡 Key Features:
💬 Chat-Triggered Automation (You can replace this with On Schedule trigger for automated generation) – Start the workflow with a simple message describing your video idea.

🧠 GPT-5 Video Prompt Agent – Transforms your concept into a visually rich, cinematic prompt optimized for Veo-3.

🎥 Veo-3 AI Video Generation – Creates a polished short-form reel with cinematic motion, effects, and branding.

✍️ GPT-5 Caption Writer – Crafts an impactful, scroll-stopping caption tailored for Instagram engagement.

📤 Auto-Posting with Postiz – Uploads and schedules (or instantly posts) your reel to Instagram without manual steps.

⏳ Automated Progress Checking – Wait & retry logic ensures posting only happens when the video is fully generated.

🔧 Tech Stack:
GPT-5 via OpenAI API – AI for prompt engineering & caption creation.

Google Veo-3 (via Wavespeed API) – Next-gen text-to-video model for short-form content.

Postiz API – Multi-platform social media posting automation.

n8n – Orchestration & automation engine.

📌 Ideal Use Cases:
Instagram Reels / TikTok Creators who want to post daily without editing.

Fitness, Fashion, Travel & Lifestyle Brands looking for high-quality, thematic reels.

Social Media Agencies producing client content at scale.

Event Marketers creating same-day recap videos.

🛠 Setup Instructions:
Add your API keys for OpenAI (GPT-5), Wavespeed (Veo-3), and Postiz.

Connect Postiz to your Instagram account.

Trigger the workflow with a chat message describing your desired video.

Watch your idea transform into a reel—fully captioned and posted automatically.

🎯 Why This Workflow Stands Out:
End-to-end automation from idea → video → caption → Instagram post.

AI-driven creative consistency for brand identity.

Scales your content production without hiring editors.

SEO & engagement-ready captions crafted for social virality.

## 📊 Basic Information

- **Workflow ID:** 7287
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 3094
- **Downloads:** 309
- **Created:** 2025/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7287)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **wait** (×2)
- **if** 
- **httpRequest** (×5)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
