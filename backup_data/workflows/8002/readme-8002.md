# Create e-commerce promotional carousels with Gemini 2.5 & social publishing

> ![Captura de pantalla 20250828 a las 20.56.55.png](fileId:2279)

This automation workflow is designed for e-commerce businesses, digital marketers, and entrepreneurs who need to create high-quality promotional content for their products quickly and efficiently. From a single product image and description, the system automatically generates 4 promotional carousel-style images, perfect for social media, advertising campaigns, or web catalogs.

***Note: This workflow uses Gemini 2.5 Flash API for image generation, imgbb for image storage, and upload-post.com for automatic Instagram, Tiktok, Facebook and Youtube publishing***

## Who Is This For?
- **E-commerce Owners:** Transform basic product photos into professional promotional content featuring real people using products in authentic situations.
- **Digital Marketers & Agencies:** Generate multiple advertising content variations for Facebook Ads, Instagram Stories, and digital marketing campaigns.
- **Small Businesses & Entrepreneurs:** Create professional promotional material without expensive photo shoots or graphic designers.
- **Social Media Managers:** Produce engaging and authentic content that drives engagement and conversions across all social platforms.

## What Problem Does This Workflow Solve?
Creating quality promotional content requires time, resources, and design skills. This workflow addresses these challenges by:
- **Automatic Carousel Generation:** Converts a single product photo into 4 promotional images featuring people using the product naturally.
- **Authentic & Engaging Content:** Generates images showing real product usage, increasing credibility and conversions.
- **Integrated Promotional Text:** Automatically includes visible offers, benefits, and call-to-actions in the images.
- **Social Media Optimization:** Produces vertical 9:16 format images, perfect for Instagram, TikTok, and Facebook Stories.
- **Automatic Publishing:** Optionally publishes the complete carousel directly to Instagram with AI-generated optimized descriptions.

## How It Works
1. **Product Upload:** Upload a product image and provide detailed description through the web form.
2. **Smart Analysis:** The AI agent analyzes the product and creates a storyboard of 4 different promotional images.
3. **Image Generation:** Gemini 2.5 Flash generates 4 variations showing people using the product in authentic contexts.
4. **Automatic Processing:** Images are automatically processed, optimized, and stored in imgbb.
5. **Promotional Description:** GPT-4 generates an attractive, social media-optimized description based on the created images.
6. **Optional Publishing:** The system can automatically publish the complete carousel to Instagram.

## Setup
1. **fal.ai Credentials:** Sign up at [fal.ai](https://fal.ai) and add your API token to the Gemini 2.5 Flash nodes.
2. **imgbb API:** 
   - Create an account at [imgbb.com](https://imgbb.com)
   - Get your API key and configure it in the "Set APIs Vars" node
3. **Upload-Post (Optional):** For automatic Instagram publishing:
   - Register your account at [upload-post.com](https://upload-post.com)
   - Connect your Instagram business account
   - Configure credentials in the "Upload Post" node
4. **OpenAI API:** Configure your OpenAI API key for promotional description generation.

## Requirements
- **Accounts:** n8n, fal.ai, imgbb.com, OpenAI, upload-post.com (optional), Instagram business (optional).
- **API Keys:** fal.ai token, imgbb API key, OpenAI API key, upload-post.com credentials.
- **Image Format:** Any standard image format (JPG, PNG, WebP) of the product to promote.

## Features
- **Advanced Generative AI:** Uses Gemini 2.5 Flash to create realistic images of people using products
- **Smart Storyboard:** Automatically creates 4 different concepts to maximize engagement
- **Integrated Promotional Text:** Includes offers, benefits, and CTAs directly in the images
- **Optimized Format:** Generates vertical 9:16 images perfect for social media
- **Parallel Processing:** Generates all 4 images simultaneously for maximum efficiency
- **Automatic Publishing:** Option to publish directly to Instagram with optimized descriptions

Use this template to transform basic product photos into complete promotional campaigns, saving time and resources while generating high-quality content that converts visitors into customers.

## 📊 Basic Information

- **Workflow ID:** 8002
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 1082
- **Downloads:** 108
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8002)

## 👤 Author

- **Name:** Juan Carlos Cavero Gracia
- **Username:** @carlosgracia

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** (×2)
- **httpRequest** (×13)
- **splitOut** (×4)
- **code** (×4)
- **@n8n/n8n-nodes-langchain.openAi** 
- **merge** (×2)
- **aggregate** 
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **n8n-nodes-upload-post.uploadPost** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 32 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
