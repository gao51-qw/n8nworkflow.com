# Automate AI news videos with GPT-4o, Heygen Avatars, and Blotato

> 
**Turn your ideas into engaging videos, talking avatars, and scheduled posts — all on autopilot.**

🚀 How It Works: 3 Steps to AI-Generated Video Posts

1. 🤖 AI Researches & Creates Your Video Script

Automatically fetches trending AI/LLM stories from Hacker News
Generates a 30-second viral video script with:
Attention-grabbing hook
Balanced analysis with statistics
Call-to-action ("Hit follow to stay ahead in AI!")
Writes two caption versions:
Long (50 words + hashtags)
Short (2 sentences for platforms like Twitter/Threads)
2. 🎥 Heygen Generates the AI Avatar Video

Uses your preferred Heygen avatar/voice (configure in "Setup Heygen")
Applies a professional background video (included)
Processes the video in ~8 minutes (wait time adjustable)
3. 📣 Auto-Publishes to 10+ Platforms via Blotato

Uploads video to Blotato’s CDN
Publishes natively to:
✅ Instagram | ✅ YouTube | ✅ TikTok | ✅ LinkedIn
✅ Twitter/X | ✅ Facebook | ✅ Threads (coming soon)
Platform-specific optimizations:
Instagram/YouTube: Long captions + hashtags
Twitter/Threads: Short captions
TikTok: Vertical video formatting
⏱️ Full Automation Timeline

AI Research → Scriptwriting → Video Generation → Multi-Platform Publishing
(Runs daily at 10 AM or your custom schedule)

🛠️ Key Features

No Manual Work: Fully hands-off after setup

Customizable: Adjust AI prompts, avatars, or add platforms


## 📊 Basic Information

- **Workflow ID:** 4080
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 847
- **Downloads:** 84
- **Created:** 2025/5/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4080)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×13)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **hackerNewsTool** (×2)
- **wait** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
