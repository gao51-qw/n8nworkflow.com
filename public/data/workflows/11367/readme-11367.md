# Convert websites to Instagram Reels with Gemini Veo, OpenAI TTS, and JsonCut

> ⚠️ Important: This workflow uses community nodes (JsonCut, Blotato) and requires a self-hosted n8n instance.

This n8n template automates the **entire process of transforming blog articles and any kind of other websites into short-form informational videos for Instagram**. It scrapes content, generates AI-powered video clips, adds voiceover and subtitles, and publishes directly to social media—all with proper source attribution and branding.

## Who's it for

Content creators, digital marketers, and social media managers who want to repurpose quality blog content into engaging video formats. Perfect for those running content marketing operations who need to maintain consistent social media presence without manual video editing.

## What it does

The workflow takes a blog article URL as input and produces a fully composed Instagram-ready video with:
- AI-generated background video clips matching the content
- Professional text-to-speech narration
- Auto-generated subtitles with word-by-word animations
- Background music from Creative Commons sources
- Branding overlay and source attribution
- Smooth transitions between scenes
- Direct publishing to Instagram

## How it works

1. **Content Extraction**: [Firecrawl](https://www.firecrawl.dev/) scrapes the blog article and extracts clean markdown content
2. **Content Summarization**: An LLM via [OpenRouter](https://openrouter.ai/) condenses the article into digestible talking points (max 1,000 characters)
3. **Script Generation**: A second LLM generates 3-5 video prompts, narration text, and social media caption in structured JSON format
4. **Video Generation**: [Google Veo API](https://aistudio.google.com/models/veo-3) creates 8-second background clips in 9:16 format for each prompt
5. **Audio Creation**: [OpenAI TTS](https://platform.openai.com/docs/guides/text-to-speech) converts the narration to speech, while [Openverse API](https://openverse.org/) fetches royalty-free background music
6. **File Upload**: All assets (videos, voice, music) are uploaded to [JsonCut's](https://jsoncut.com) storage
7. **Video Composition**: JsonCut merges everything together with auto-subtitles, transitions, branding overlays, and source attribution
8. **Publishing**: [Blotato](https://my.blotato.com/signup?plan=starter-monthly) uploads the final video to Instagram as a reel with the generated caption

## Setup requirements

### Required accounts and credentials:
- **[Firecrawl API](https://www.firecrawl.dev/)** - for web scraping
- **OpenRouter API** - for LLM access (uses GPT-4 Mini in this template)
- **Google Gemini API** - for Veo video generation (note: 10 requests/day free tier limit)
- **OpenAI** - for text-to-speech generation
- **[JsonCut account](https://jsoncut.com)** - for video composition and file hosting
- **[Blotato account](https://my.blotato.com/signup?plan=starter-monthly)** - for Instagram publishing
- **Instagram Business account** connected to Blotato

### Installation steps:

1. Install community nodes:
   - `@mendable/n8n-nodes-firecrawl`
   - `n8n-nodes-jsoncut`
   - `@blotato/n8n-nodes-blotato`

2. Configure all API credentials in n8n's credential manager

3. Update the Blotato Instagram account ID in the "Create Instagram post" node

4. Replace the branding overlay image URL in the JsonCut "Generate media" node config:
   ```json
   "path": "https://your-logo-url.png"
   ```
5. Test with the chat trigger by entering a blog article URL

### Good to know

**Cost considerations:**
- Blotato costs $29 (there are many cheaper alternatives available)
- JsonCut is free (but the Pro subscription is required for the auto caption feature)
- Veo 3 fast costs approximately $0.15 per second

**Rate limits:** Google Veo free tier is limited to 10 requests per day, which means ~2-3 complete workflows daily

**Processing time:** Full workflow takes 5-10 minutes depending on Veo API response times

**Source attribution:** The workflow automatically extracts the domain from the input URL and displays it on the first video clip

**Video quality:** Output depends heavily on input quality. The workflow is designed for repurposing legitimate content

## 📊 Basic Information

- **Workflow ID:** 11367
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 89
- **Downloads:** 8
- **Created:** 2025/11/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11367)

## 👤 Author

- **Name:** 8Automator
- **Username:** @kesim0

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **splitOut** 
- **merge** 
- **aggregate** (×2)
- **@mendable/n8n-nodes-firecrawl.firecrawl** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **n8n-nodes-jsoncut.jsonCut** (×4)
- **@blotato/n8n-nodes-blotato.blotato** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
