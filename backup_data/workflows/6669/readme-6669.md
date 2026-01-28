# Generating AI videos with VEO3 and distributing with Blotato across multiple platforms

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

![Workflow Screenshot](https://www.dr-firas.com/Videos-with-VEO3-and-Blotato.png)

# Create and Auto-Post Viral AI Videos with VEO3 and Blotato to 9 Platforms

### Who is this for?

This template is ideal for content creators, growth marketers, e-commerce entrepreneurs, and video-first brands who want to automate the creation and multi-platform distribution of viral short-form ads using AI.

If you're looking to scale video production without editing tools or posting manually, this is for you.

### What problem is this workflow solving?

Creating high-converting video content is time-consuming. You need to:
- Come up with ideas
- Write compelling scripts
- Generate visuals
- Adapt content for each platform
- Manually publish and track results

This workflow automates that entire process and turns a single idea into a ready-to-publish video campaign across 9 platforms.

### What this workflow does

1. **Triggers** via Telegram when a new video idea is submitted  
2. **Fetches parameters** (style, tone, duration) from Google Sheets  
3. **Generates the video script** using GPT-4 and a master AI prompt  
4. **Creates the video** using Google’s VEO3 video generation model  
5. **Downloads the final video** once rendering is complete  
6. **Rewrites the caption** with GPT-4o for platform-optimized posting  
7. **Logs the result** in Google Sheets for tracking  
8. **Sends preview links** to Telegram for review  
9. **Auto-posts** the video to 9 platforms using Blotato (TikTok, YouTube, Instagram, Threads, Facebook, X, LinkedIn, Pinterest, Bluesky)

### Setup

1. Install **n8n (self-hosted)** with Community Nodes enabled  
2. Connect your **Telegram Bot Token** to the trigger node  
3. Add your **OpenAI API Key** for GPT-4 and GPT-4o models  
4. Configure your **VEO3 API access** (Google AI Studio)  
5. Set up **Blotato** with your platform tokens & IDs  
6. Link your **Google Sheets** and set the expected column structure (idea, style, caption, etc.)  
7. Adjust the Telegram trigger format (e.g., `idea: ...`) to your team’s input style

### How to customize this workflow to your needs

- Edit the **master prompt** to match your brand voice or industry  
- Replace the **caption prompt** to generate more marketing-style hooks  
- Modify the **platform list** if you only publish to a few specific channels  
- Add approval steps (Slack, email, Telegram) before publishing  
- Integrate tracking by pushing published URLs to your analytics or CRM  


📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Create-and-Auto-Post-Viral-AI-Videos-with-VEO3-and-Blotato-to-9-Platforms-23f3d6550fd98037ab1ee9f803400666?source=copy_link)

---

### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https:/https://www.youtube.com/@DRFIRASS)

## 📊 Basic Information

- **Workflow ID:** 6669
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 4788
- **Downloads:** 478
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6669)

## 👤 Author

- **Name:** Dr. Firas
- **Username:** @drfiras

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **set** (×2)
- **httpRequest** (×12)
- **stickyNote** (×4)
- **telegram** (×2)
- **telegramTrigger** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **wait** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
