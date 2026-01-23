# Generate product images & videos with Gemini AI, DeepSeek, and GoAPI for e-commerce

> This workflow is designed for e-commerce, marketing teams, or creators who want to automate the production of high-quality, AI-generated product visuals and ad creatives.

Here is what the workflow does:
* It accepts a product description and other creative inputs through a web form.
* It uses AI to transform your text input into a detailed, creative prompt.
* This prompt is then used to generate a product image.
* The workflow analyzes the generated image and creates a new prompt to generate a second image that includes a model, adding a human element to the visual.
* A final prompt is created from the model image to generate a short, cinematic video.
* All generated assets (images and video) are automatically uploaded to your specified hosting platform, providing you with direct URLs for immediate use.

This template is an efficient solution for scaling your content creation efforts, reducing time spent on manual design, and producing a consistent stream of visually engaging content for your online store, social media, and advertising campaigns.

**Prerequisites:**

* **OpenRouter Account:** Required for AI agents to generate image and video prompts.
* **GOAPI Account:** Used for the final video generation process.
* **Media Hosting Platform:** A self-hosted service like MediaUpload, or any alternative like Google Drive or a similar service that can provide a direct URL for uploaded images and videos. This is essential for passing the visuals between different steps of the workflow.

## 📊 Basic Information

- **Workflow ID:** 8148
- **Complexity:** advanced
- **Node Count:** 50
- **Views:** 1438
- **Downloads:** 143
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8148)

## 👤 Author

- **Name:** Dhruv Dalsaniya
- **Username:** @ddm21

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×8)
- **convertToFile** (×2)
- **set** (×5)
- **errorTrigger** 
- **discord** (×2)
- **stickyNote** (×13)
- **if** 
- **wait** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **html** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.googleGemini** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 50 nodes with 35 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
