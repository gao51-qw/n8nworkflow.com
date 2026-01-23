# Automate Multi-Platform Social Media Content Creation with AI

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

