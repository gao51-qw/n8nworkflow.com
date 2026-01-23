# Create AI product images and marketing videos with NanoBanana Pro, Veo 3.1 and Blotato

> # 💥 Generate product images with NanoBanana Pro to Veo videos and Blotato

![Workflow Overview](https://www.dr-firas.com/nanobananaPro-veo.png)

### Who is this for?

This workflow is designed for:
- Content creators and marketers
- E-commerce and product-based businesses
- Agencies producing social media visuals and videos
- Automation builders looking for AI-powered creative pipelines

It is ideal for anyone who wants to automate product image and video creation using AI and publish content without manual work.

---

### What problem is this workflow solving? / Use case

Creating product visuals and marketing videos usually requires multiple tools, manual prompt writing, and repetitive steps.

This workflow solves:
- Manual image and video creation
- Inconsistent visual quality across assets
- Time-consuming prompt iteration
- Manual video publishing to social platforms

The workflow automates the entire process from **image generation to video publishing** using AI.

---

### What this workflow does

This workflow provides an end-to-end automation pipeline:

1. Generates high-quality product images using **NanoBanana Pro**
2. Applies **Contact Sheet Prompting** to explore multiple visual variations
3. Converts selected images into short marketing videos using **Veo 3.1**
4. Automatically publishes the final videos via **[BLOTATO](https://blotato.com/?ref=firas)**

The result is a fully automated creative workflow that turns AI prompts into ready-to-publish video content.

---

### Setup

To use this workflow, you need the following services and credentials:

- **OpenAI API**
  - Used for image analysis and prompt generation
- **NanoBanana Pro (fal.ai)**
  - Product image generation  
  - API: https://fal.ai/models/fal-ai/nano-banana-pro/edit/api
- **Veo 3.1 (fal.ai)**
  - Video generation  
  - API: https://fal.ai/models/fal-ai/veo3.1/first-last-frame-to-video
- **Blotato**
  - Video publishing to social platforms  
  - Sign up at [BLOTATO](https://blotato.com/?ref=firas)

All credentials must be added in n8n before running the workflow.

---

### How to customize this workflow to your needs

You can easily adapt this workflow by:
- Modifying AI prompts to match your brand style
- Adjusting image composition and realism parameters in NanoBanana Pro
- Changing video motion, pacing, and aspect ratio in Veo 3.1
- Selecting different social platforms or publishing rules in Blotato
- Replacing or extending individual steps while keeping the same architecture

The workflow is modular and can be reused for multiple products or campaigns.

### 🎥 [Watch This Tutorial](https://youtu.be/-xQFnB-htQY)

![SORA2 logo](https://www.dr-firas.com/Automation.png)

---
### 👋 Need help or want to customize this?
📩 Contact: [LinkedIn](https://www.linkedin.com/in/dr-firas/)  
📺 YouTube: [@DRFIRASS](https://www.youtube.com/@DRFIRASS)  
🚀 Workshops: [Mes Ateliers n8n](https://hotm.art/formation-n8n)

---
📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/NonoBanan-PRO-2-2b53d6550fd981a5acbecf7cf50aeb3c?source=copy_link)
### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https://www.youtube.com/channel/UCriIQI8uaoEro5FEnOpeidQ) / [🚀 Mes Ateliers n8n  ](https://hotm.art/formation-n8n)

## 📊 Basic Information

- **Workflow ID:** 12462
- **Complexity:** advanced
- **Node Count:** 76
- **Views:** 587
- **Downloads:** 58
- **Created:** 2026/1/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12462)

## 👤 Author

- **Name:** Dr. Firas
- **Username:** @drfiras

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **set** (×4)
- **httpRequest** (×11)
- **editImage** (×7)
- **googleDrive** (×7)
- **googleSheets** (×16)
- **scheduleTrigger** 
- **merge** (×7)
- **wait** (×8)
- **@blotato/n8n-nodes-blotato.blotato** (×2)
- **stickyNote** (×4)
- **formTrigger** 
- **if** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 76 nodes with 68 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
