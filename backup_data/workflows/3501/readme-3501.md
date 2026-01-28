# Generate & auto-post social videos to multiple platforms with GPT-4 and Kling AI

> ![Workflow Screenshot](https://www.dr-firas.com/Workflow-AI_Social_Video_Generator.png)

# AI-Powered Social Video Generator with Auto-Posting to Instagram, TikTok, YouTube, Facebook, LinkedIn, Threads, Pinterest, Twitter (X), and Bluesky

## Who is this workflow for?

This workflow is ideal for content creators, marketers, social media managers, and automation enthusiasts who want to generate, customize, and publish short-form videos across multiple platforms without manual editing or posting. If you use tools like ChatGPT, Kling, or Blotato and want to streamline your content creation process, this workflow is made for you.

## What problem does this workflow solve?

Publishing regular video content on multiple platforms is time-consuming—especially when adding voice-overs, captions, and managing distribution. This workflow solves that by:

- Automating video generation using AI (Kling + GPT-4)
- Adding realistic voice narration
- Styling subtitles for social media
- Creating titles and social captions
- Auto-posting to Instagram, TikTok, YouTube, Facebook, Threads, Twitter (X), LinkedIn, Pinterest, and Bluesky

All of this is triggered by a simple message sent via Telegram.

## How the workflow works

This end-to-end automation transforms a short Telegram message into a fully produced and published social video:

1. Receives a text prompt from Telegram  
2. Transforms it into a detailed video scene using GPT-4  
3. Generates a cinematic video with Kling  
4. Creates a voice-over script and converts it to audio  
5. Merges the video and the audio  
6. Adds styled captions  
7. Writes a social caption and an SEO-optimized title  
8. Saves metadata to Google Sheets  
9. Sends a preview via Telegram  
10. Publishes the video to 9 social platforms using Blotato

## Setup

1. Connect your Telegram bot to the "Telegram Trigger" node  
2. Add your OpenAI API key to all GPT-related nodes  
3. Configure Kling API access in the "Generate Video" node  
4. Link your Cloudinary account for audio upload  
5. Connect JSON2Video to handle video merging and captioning  
6. Set up Google Sheets with your preferred spreadsheet ID  
7. Connect your Blotato API key and fill in the platform IDs (Instagram, TikTok, etc.)  
8. Test by sending a Telegram message like:  
   `generate video A robot exploring Mars, Why AI will reshape humanity`
&gt; **Disclaimer:** This workflow uses Community Nodes, which are only available on self-hosted instances of n8n.

## How to customize this workflow to your needs

- **Change the visual style**: Adjust the GPT-4 prompt formatting to reflect your brand tone  
- **Edit voice style**: Replace the TTS provider or tweak OpenAI's voice settings  
- **Revise captions or titles**: Fine-tune the system prompts in the "Create Description" or "Create Title" nodes  
- **Target fewer platforms**: Disable or remove nodes for platforms you don’t use  
- **Add approval steps**: Insert a Telegram confirmation step before auto-publishing

📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/AI-powered-social-video-creation-and-auto-posting-to-Instagram-TikTok-LinkedIn-more-1cf3d6550fd98038a91edbdd3022d37f?pvs=4)

## Demo Video

🎥 Watch the full tutorial here: [YouTube Demo](https://youtu.be/lpfe0joyNL4)


## 📊 Basic Information

- **Workflow ID:** 3501
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 17470
- **Downloads:** 1747
- **Created:** 2025/4/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3501)

## 👤 Author

- **Name:** Dr. Firas
- **Username:** @drfiras

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **telegramTrigger** 
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** (×17)
- **wait** (×4)
- **@n8n/n8n-nodes-langchain.openAi** (×4)
- **googleSheets** 
- **telegram** (×2)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
