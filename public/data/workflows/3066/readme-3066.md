# ✨🤖Automate Multi-Platform Social Media Content Creation with AI

> # Automate Multi-Platform Social Media Content Creation with AI

## Who is this for?  
**Social Media Managers** and **Digital Marketers** seeking to streamline content production across 7+ platforms (X/Twitter, Instagram, LinkedIn, Facebook, TikTok, Threads, YouTube Shorts) using AI-powered automation.

## What problem does this solve?  
Creating platform-optimized content at scale while maintaining brand consistency across multiple channels, reducing manual work by 80% through AI generation and automated publishing.

## What this workflow does  
1. **AI Content Generation**:  
   - Uses GPT-4/Gemini to create platform-specific posts  
   - Automatically generates hashtags, CTAs, and emoji placement  
   - Supports image/video suggestions and image creation using OpenAI or Pollinations.ai
   - Uses SERP api to search for relavent content

2. **Approval Workflow**:  
   - Sends formatted HTML emails for human review  
   - Implements double-approval system with Gmail integration  

3. **Cross-Platform Publishing**:  
   - One-click deployment to:  
     - Instagram/Facebook (via Graph API)  
     - X/Twitter (Official API)  
     - LinkedIn (Sales Navigator integration)  

## Setup  
1. **Credentials**:  
   - OpenAI API key  
   - Google Gemini API  
   - Social media platform tokens (X, LinkedIn, Facebook)  
   - ImgBB for image hosting  
   - Gmail
   - SERP API
   - Telegram

2. **Configuration**:  
   - Update all "your-unique-id" placeholders in API nodes  
   - Set email recipients in Gmail nodes  
   - Customize AI prompts 

3. **Customization**:  
   - Adjust character limits per platform  
   - Modify approval thresholds  
   - Add/remove social platforms as needed  

## How to customize  
- **Content Style**: Edit prompt templates in the "Social Media Content Factory" agent node  
- **Approval Process**: Modify email templates  
- **Analytics**: Connect to Google Sheets for performance tracking  
- **Image Generation**: Switch between Pollinations.ai/DALL-E/Midjourney  



## 📊 Basic Information

- **Workflow ID:** 3066
- **Complexity:** advanced
- **Node Count:** 57
- **Views:** 349632
- **Downloads:** 34963
- **Created:** 2025/3/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3066)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×18)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×5)
- **httpRequest** (×3)
- **merge** (×4)
- **facebookGraphApi** (×2)
- **twitter** 
- **linkedIn** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **aggregate** 
- **gmail** (×3)
- **if** (×2)
- **set** (×5)
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **form** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 57 nodes with 35 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
