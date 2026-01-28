# Generate character-consistent AI images with KIE.AI Nano Banana API

> ## Generate Character-Consistent Images with KIE.AI Nano Banana API
### Overview
Generate high-quality, character-consistent AI images using KIE.AI's Nano Banana API through an intuitive form interface. This n8n workflow supports both text-to-image and image-to-image generation modes, delivering professional results at 50% lower cost than mainstream platforms.
**Key Benefits:**
- �� Dual generation modes (text-to-image & image-to-image).
- 💰 20 free generations + $0.02 per additional request.
- 🔄 Maintains character consistency across generations.
- ⚡ Automated processing with 5-second polling.
### Perfect for
Content creators, designers, marketers, developers, and anyone who needs to quickly create diverse AI visual content while maintaining consistent character identity across multiple generations.
### Prerequisites
- KIE.AI account and API key ([Sign up here](https://kie.ai/nano-banana)).
- Active n8n instance with form submission capabilities.
- AI prompts for image generation.
- Reference images (optional, for image-to-image mode).
### Quick Setup
#### 1. **Get API Key**
Register at [kie.ai/nano-banana](https://kie.ai/nano-banana) and generate your API key.
#### 2. **Configure Form Fields**
Set up these fields in your "On Form Submission" node:
- **`model`** (Required): Choose between `google/nano-banana` for text-to-image or `google/nano-banana-edit` for image-to-image generation.
- **`prompt`** (Required): Text description for your image generation.
- **`img_url`** (Optional): Reference image URLs for image-to-image mode (up to 5 images, separate multiple URLs with commas).
- **`api_key`** (Required): Your KIE.AI API key for authentication.
#### 3. **Test & Use**
1. Execute the workflow
2. Access the generated form URL
3. Fill in your details and submit
4. Wait for processing (10-20 seconds)
5. Results will be displayed automatically.
### Usage Tips
**Better Prompts:**
Include style (realistic, anime, cyberpunk), composition (close-up, wide shot), lighting (dramatic, soft), and mood (cheerful, mysterious).
**Example:** "Realistic cyberpunk character with neon blue lighting, close-up composition, dramatic shadows"
**Common Uses:**
- Character design for games/stories
- Social media content
- Marketing materials
- Product mockups
### Troubleshooting
- **API Key Invalid**: Verify key is correct and active.
- **Generation Fails**: Check prompt length and content.
**Keywords:** Nano Banana API, character-consistent images, text-to-image, image-to-image, KIE.AI, AI image generation, n8n template

## 📊 Basic Information

- **Workflow ID:** 8019
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 3042
- **Downloads:** 304
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8019)

## 👤 Author

- **Name:** damo
- **Username:** @zengyichao

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **httpRequest** (×2)
- **formTrigger** 
- **wait** 
- **if** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
