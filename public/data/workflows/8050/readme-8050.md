# Generate & publish AI news avatar videos with HeyGen and Blotato

> ![Generate Photo.png](fileId:2288)
How it works

Schedule Trigger — runs daily at 10:00 (adjustable).

RSS Feed Read — collects fresh AI/LLM news from multiple feeds.

AI Agent — analyzes news, picks the most viral story, and drafts a 30-second script.

OpenAI nodes — create:

a short, catchy video title

a short caption for social media

a long caption with hashtags

HeyGen API — generates a vertical avatar video (9:16) using your selected avatar_id, voice_id, and optional background video.

Wait node — checks the processing status of the video.

Blotato API — uploads the video and captions for publishing.

Optional publish nodes — preconfigured for TikTok, Instagram, YouTube, Facebook, etc. (disabled by default).

Requirements

n8n v1.105.4+ (cloud or self-hosted)

HeyGen account with API key + avatar_id + voice_id

Blotato account with API key and platform IDs

Setup steps

Import the workflow into n8n.

Create credentials in n8n (⚠ do not hardcode keys):

HeyGen API Key

Blotato API Key

Open the Setup Heygen node:

Paste your heygen_api_key

Add your avatar_id and voice_id

Optionally change background_video_url

Open the Prepare for Publish node:

Paste your blotato_api_key

Add IDs for TikTok, YouTube, Instagram, etc.

Adjust the Schedule Trigger to your preferred time/frequency.

(Optional) Enable the publish nodes if you want direct uploads to your platforms.

Customization

Topic — edit the AI Agent’s prompt to switch from AI/LLM news to any topic (crypto, marketing, tech, etc.).

Language — update prompts for different output languages.

Visuals — replace the HeyGen avatar, voice, or background video for a different look.

Publishing — connect only the social platforms you actually use.



## 📊 Basic Information

- **Workflow ID:** 8050
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 544
- **Downloads:** 54
- **Created:** 2025/8/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8050)

## 👤 Author

- **Name:** Ivan Maksiuta
- **Username:** @zodiac

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **httpRequest** (×11)
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **wait** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **rssFeedReadTool** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
