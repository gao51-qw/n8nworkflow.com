# Text-to-video generator & social media publisher with Fal.ai and Telegram approval

> ## AI Video Generator & Social Media Publisher (Telegram Bot)

Turn a single text message into a fully produced video and publish it across 5 social media platforms automatically. This workflow combines AI video generation (Fal.ai) with a "Human-in-the-loop" approval system via Telegram, ensuring you never post content without checking it first.

## Who is this for?
- Social Media Managers who want to automate Short/Reel creation.
- Content Creators looking to scale their output on Instagram, TikTok, and YouTube.
- Brands that need consistent, on-brand video content generated from simple text prompts.

## How it works
1. **Trigger:** Send a text message to your Telegram bot (e.g., "A futuristic city with neon lights").
2. **AI Drafting:** An AI Agent (GPT-4o) converts your message into a detailed cinematic video prompt based on your brand guidelines.
3. **Generation:** Fal.ai (Veo3 model) generates a high-quality 9:16 video.
4. **Approval Loop:** The bot sends you the video preview. 
   - Reply **"Great"**: The workflow proceeds to publishing.
   - Reply with **feedback** (e.g., "Too dark, make it brighter"): The AI refines the prompt and regenerates the video.
5. **Publishing:** Once approved, the workflow generates platform-specific captions and hashtags, logs the post to Google Sheets, and uploads the video to Blotato to publish on Instagram, Facebook, LinkedIn, TikTok, and YouTube Shorts.

## Requirements
- **OpenAI API Key**
- **Fal.ai API Key** (for video generation)
- **Telegram Bot Token**
- **Google Sheets** (for logging posts)
- **Blotato Account** (for multi-channel publishing)

## How to set up
1. **Credentials:** configure your credentials for OpenAI, Fal.ai, Telegram, Google Sheets, and Blotato.
2. **Fal.ai Setup:** Create a **Header Auth** credential named `Authorization` with value `Key &lt;YOUR_FAL_KEY&gt;`.
3. **Google Sheets:** In the "Log to Google Sheets" node, select the specific Sheet you want to use for tracking.
4. **Blotato:** In the 5 publishing nodes (Instagram, Facebook, etc.), select your specific Account IDs from the dropdowns.
5. **Brand Customization:** Open the "Draft Video Prompt" and "Generate Caption" nodes to edit the System Prompt with your specific brand voice and aesthetic guidelines.

## 📊 Basic Information

- **Workflow ID:** 12128
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 73
- **Downloads:** 7
- **Created:** 2025/12/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12128)

## 👤 Author

- **Name:** Vasu Gupta
- **Username:** @chetangupta11

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **httpRequest** (×4)
- **wait** (×2)
- **telegram** (×3)
- **if** 
- **googleSheets** 
- **@blotato/n8n-nodes-blotato.blotato** (×6)
- **@n8n/n8n-nodes-langchain.toolThink** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
