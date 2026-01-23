# AI-powered short-form video generator with OpenAI, Flux, Kling, and ElevenLabs

> ## Who is this for?
Content creators, digital marketers, and social media managers who want to automate the creation of short-form videos for platforms like TikTok, YouTube Shorts, and Instagram Reels without extensive video editing skills.
## What problem does this workflow solve?
Creating engaging short-form videos consistently is time-consuming and requires multiple tools and skills. This workflow automates the entire process from ideation to publishing, significantly reducing the manual effort needed while maintaining content quality.
## What this workflow does
This all-in-one solution transforms ideas into fully produced short-form videos through a 5-step process:

1. **Generate video captions** from ideas stored in a Google Sheet
2. **Create AI-generated images** using Flux and the OpenAI API
3. **Convert images to videos** using Kling's API
4. **Add voice-overs** to your content with Eleven Labs
5. **Complete the video production** with Creatomate by adding templates, transitions, and combining all elements

The workflow handles everything from sourcing content ideas to rendering the final video, and even notifies you on Discord when videos are ready.
## Setup (Est. time: 20-30 minutes)
Before getting started, you'll need:

- [n8n installation](https://n8n.partnerlinks.io/n8nTTVideoGenTemplate) (tested on version 1.81.4)
- [OpenAI API Key](https://platform.openai.com/api-keys) (free trial credits available)
- [PiAPI](https://piapi.ai/?via=n8n) (free trial credits available)
- [Eleven Labs](https://try.elevenlabs.io/n8n) (free account)
- [Creatomate API Key](https://creatomate.com/) (free trial credits available)
- Google Sheets API enabled in [Google Cloud Console](https://console.cloud.google.com/apis/api/sheets.googleapis.com/overview)
- Google Drive API enabled in [Google Cloud Console](https://console.cloud.google.com/apis/api/drive.googleapis.com/overview)
- OAuth 2.0 Client ID and Client Secret from your [Google Cloud Console Credentials](https://console.cloud.google.com/apis/credentials)

## How to customize this workflow to your needs

- Adjust the Google Sheet structure to include additional data like video length, duration, style, etc.
- Modify the prompt templates for each AI service to match your brand voice and content style
- Update the Creatomate template to reflect your visual branding
- Configure notification preferences in Discord to manage your workflow

This workflow combines multiple AI technologies to create a seamless content production pipeline, saving you hours of work per video and allowing you to focus on strategy rather than production.

## 📊 Basic Information

- **Workflow ID:** 3121
- **Complexity:** advanced
- **Node Count:** 41
- **Views:** 108706
- **Downloads:** 10870
- **Created:** 2025/3/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3121)

## 👤 Author

- **Name:** Cameron Wills
- **Username:** @camerondwills

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×8)
- **code** (×4)
- **wait** (×5)
- **if** (×3)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **stickyNote** (×7)
- **merge** (×2)
- **googleDrive** (×4)
- **discord** 
- **scheduleTrigger** 
- **googleSheets** (×2)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 41 nodes with 33 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
