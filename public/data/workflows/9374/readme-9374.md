# Generate social media ad images for FB/IG/Pinterest with Google Gemini Imagen

> ## **Purpose & Audience**  
Perfect for **marketing teams, agencies, solopreneurs, and e-commerce brands** who need fast, professional-quality ad creatives — without hiring designers or using Canva. This workflow automates image generation for Facebook, Instagram, and Pinterest using **Google’s Imagen 3.0** (via Gemini API).

## **What It Does**  
1. Presents a user-friendly form to collect:  
   - Business context  
   - Offer/message  
   - Brand colors  
   - Target platform (FB/IG/Pinterest)  
   - Desired ad dimensions (7 formats supported)  
2. Uses **Google Gemini’s Imagen 3.0 model** to generate platform-optimized images  
3. Delivers each image directly to your **Telegram chat** with clear captions  

✅ Supports **7 ad formats**:  
- Facebook Feed (1200×630)  
- Facebook Story (1080×1920)  
- Instagram Feed (1080×1080)  
- Instagram Story & Reel (1080×1920)  
- Pinterest Pin (1000×1500)  
- Pinterest Story (1080×1920)  

## **How to Set Up**  
1. **Get a Google Gemini API key** at [ai.google.dev](https://ai.google.dev/) (enable Imagen API)  
2. **Create a Telegram bot** via [@BotFather](https://t.me/BotFather) and note your **Bot Token + Chat ID**  
3. In n8n:  
   - Import this workflow  
   - Add **Google Gemini credentials** (use your API key)  
   - Add **Telegram credentials** (use your Bot Token)  
   - Replace `={{ $json.telegramChatId }}` in Telegram nodes with your actual **numeric Chat ID**  
4. Activate the workflow and share the **Form Trigger URL** with your team!

💡 **Pro Tip**: Enhance prompts in Gemini nodes with style keywords (e.g., “minimalist”, “vibrant”, “corporate”) for better results.

✨ **100% free to use** — only pay for Google Imagen API usage. Telegram delivery is free forever.



## 📊 Basic Information

- **Workflow ID:** 9374
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 145
- **Downloads:** 14
- **Created:** 2025/10/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9374)

## 👤 Author

- **Name:** Malik Hashir
- **Username:** @malikx

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **switch** 
- **@n8n/n8n-nodes-langchain.googleGemini** (×7)
- **telegram** (×7)
- **stickyNote** (×16)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
