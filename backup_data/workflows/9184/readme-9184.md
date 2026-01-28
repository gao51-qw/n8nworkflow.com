# Generate viral CCTV animal videos using GPT and Veo3 AI for TikTok

> ### **Overview**
This n8n workflow automates the creation of viral CCTV-style animal videos using AI, perfect for TikTok content creators looking to capitalize on the popular security camera animal footage trend. The workflow generates realistic surveillance-style videos featuring random animals in humorous situations, complete with authentic CCTV aesthetics.

### **How It Works**
The workflow runs on a 4-hour schedule and automatically:

1. **AI Prompt Generation**: Uses GPT-5 to create hyper-realistic CCTV-style prompts with random animals, locations, and funny actions
2. **Video Creation**: Generates videos using Veo3 AI with authentic security camera aesthetics (black & white, grainy, timestamp overlay)
3. **Content Optimization**: AI creates viral TikTok titles and hashtags optimized for maximum engagement
4. **Multi-Platform Publishing**: Automatically uploads to TikTok via Blotato and sends to Telegram
5. **Data Tracking**: Stores all content in a data table for analytics and management

### **Key Features**
- **Authentic CCTV Style**: Black & white, grainy quality, timestamp overlays, night vision effects
- **Random Content**: 50+ animals, 30+ locations, 50+ hilarious actions for endless variety
- **AI-Powered Titles**: GPT-4 generates compelling, SEO-optimized titles and viral hashtags
- **Automated Publishing**: Direct TikTok posting with proper AI-generated content labeling
- **Multi-Channel Distribution**: TikTok + Telegram for maximum reach
- **Content Management**: Built-in data tracking and status management

### **Perfect For**
- TikTok content creators
- Social media managers
- AI automation enthusiasts
- Viral content strategists
- Pet/animal content creators

### **Requirements**
- OpenAI API key (for GPT-5 and GPT-4)
- Veo3 AI API access
- Blotato account (for TikTok posting)
- Telegram bot token
- n8n Cloud or self-hosted instance

### **Customization Options**
- Modify animal lists, locations, and actions
- Adjust scheduling frequency
- Change video aspect ratios
- Add more social platforms
- Customize AI prompts for different styles

## **Categories**
- Content Creation
- AI Automation
- Social Media
- Multimodal AI

## **Tags**
`#AI` `#TikTok` `#VideoGeneration` `#CCTV` `#Animals` `#ViralContent` `#Automation` `#SocialMedia`

## 📊 Basic Information

- **Workflow ID:** 9184
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 1387
- **Downloads:** 138
- **Created:** 2025/10/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9184)

## 👤 Author

- **Name:** Muhammad Farooq Iqbal
- **Username:** @mfarooqone

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.openAi** 
- **wait** 
- **httpRequest** (×2)
- **if** 
- **telegram** 
- **scheduleTrigger** 
- **@blotato/n8n-nodes-blotato.blotato** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **dataTable** (×2)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
