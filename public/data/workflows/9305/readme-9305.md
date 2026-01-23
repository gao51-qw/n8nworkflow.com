# Auto-Translate & Recreate TikTok Carousels with Gemini Vision & Midjourney

> ## 🎨 TikTok Carousel Replicator & Translator
An end-to-end automation system that monitors TikTok accounts for new 3-image carousel posts, extracts text overlays and visual layouts using AI vision analysis, translates content into English, and automatically regenerates brand-new carousel images ready for review and posting.

### What It Does
This workflow eliminates the manual process of:
- Daily monitoring for new carousel content
- Screenshot capture and image extraction
- Text transcription and translation
- Layout recreation in design tools
- Manual formatting and brand consistency checks

Instead, it delivers **3 production-ready images to your inbox every morning**—complete with translated text, matched composition, and side-by-side comparisons for quick approval.

### Key Features
- **Automated Daily Monitoring** - Checks target TikTok accounts on schedule
- **AI-Powered Vision Analysis** - Extracts text, layout, and composition with Gemini Vision
- **Smart Translation** - Converts text to natural English while preserving intent
- **Intelligent Image Generation** - Recreates carousels with Midjourney/DALL-E based on analyzed layouts
- **Review Dashboard** - Organized Google Sheets with original vs. new comparisons
- **Email Notifications** - Morning digest with clickable previews

### Who It's For
Content creators, social media managers, and marketing teams who need to adapt high-performing carousel content from other languages into English—without spending hours in Canva every day.

### Time Saved
**From 3+ hours of manual work → 2 minutes of review** per carousel set.

### Workflow Breakdown
**Monitor** → **Extract & Analyze** → **Translate** → **Generate** → **Review & Deliver**

Each section runs automatically, processing images sequentially and delivering organized results to your review dashboard with email notifications.

## 🚀 SETUP INSTRUCTIONS
### Required Credentials:
1. **Google Gemini API** - For vision analysis
2. **Midjourney API** (or alternative: DALL-E, Stable Diffusion)
3. **OpenAI API** - For prompt generation and translation enhancement
4. **Google Sheets** - For review dashboard
5. **Gmail** - For notifications

### Configuration Steps:
1. Replace `@USERNAME` in TikTok RSS node with target account
2. Set your Google Sheet ID in "Save to Review Sheet" node
3. Update email addresses in notification node
4. Test with a single post before enabling daily schedule

### Alternative Approaches:
- Can use TikTok API instead of RSS (if available)
- Can use Canva API instead of Midjourney for generation
- Can integrate with Airtable for more advanced review workflows
- Can add approval workflow with interactive buttons

## 📊 Basic Information

- **Workflow ID:** 9305
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 244
- **Downloads:** 24
- **Created:** 2025/10/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9305)

## 👤 Author

- **Name:** Xavier Tai
- **Username:** @xaviertai

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×3)
- **moveBinaryData** 
- **if** 
- **splitOut** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **wait** 
- **aggregate** 
- **googleSheets** 
- **gmail** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
