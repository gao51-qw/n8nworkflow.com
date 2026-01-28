# Generate UGC videos from product images with GPT-4, Fal.ai & KIE.ai via Telegram

> **Transform any product image into engaging UGC (User-Generated Content) videos and images using AI automation. This comprehensive workflow analyzes uploaded images via Telegram, generates realistic product images, and creates authentic UGC-style videos with multiple scenes.**

### **Key Features:**
- **📱 Telegram Integration**: Upload images directly via Telegram bot
- **🔍 AI Image Analysis**: Automatically analyzes and describes uploaded images using GPT-4 Vision
- **🎨 Smart Image Generation**: Creates realistic product images using Fal.ai's nano-banana model with reference images
- **🎬 UGC Video Creation**: Generates 3-scene UGC-style videos using KIE.ai's Veo3 model
- **📹 Video Compilation**: Automatically combines multiple video scenes into a final output
- **📤 Instant Delivery**: Sends both generated images and final videos back to Telegram

### **Perfect For:**
- E-commerce businesses creating authentic product content
- Social media marketers needing UGC-style content
- Influencers and content creators
- Marketing agencies automating content production
- Anyone looking to scale UGC content creation

### **What It Does:**
1. Receives product images via Telegram
2. Analyzes image content with AI vision
3. Generates realistic product images with UGC styling
4. Creates 3-scene video prompts (Hook → Product → CTA)
5. Generates individual video scenes
6. Combines scenes into final UGC video
7. Delivers both image and video results

### **Technical Stack:**
- OpenAI GPT-4 Vision for image analysis
- Fal.ai for image generation and video merging
- KIE.ai Veo3 for video generation
- Telegram for input/output interface

**Ready to automate your UGC content creation? This workflow handles everything from image analysis to final video delivery!**

Updated

## 📊 Basic Information

- **Workflow ID:** 8811
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 1324
- **Downloads:** 132
- **Created:** 2025/9/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8811)

## 👤 Author

- **Name:** Muhammad Farooq Iqbal
- **Username:** @mfarooqone

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **telegramTrigger** 
- **set** 
- **httpRequest** (×7)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **wait** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitOut** 
- **aggregate** 
- **telegram** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
