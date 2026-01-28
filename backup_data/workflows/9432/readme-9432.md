# Generate UGC marketing videos for eCommerce with Sora 2 and Gemini

> ## Overview & Setup

This n8n template demonstrates how to automatically generate authentic User-Generated Content (UGC) style marketing videos for eCommerce products using AI. Simply upload a product image, and the workflow creates multiple realistic influencer-style video ads complete with scripts, personas, and video generation.

## Use cases
* Generate multiple UGC video variations for A/B testing
* Create authentic-looking product demonstrations for social media
* Produce influencer-style content without hiring creators
* Quickly test different marketing angles for new products
* Scale video content creation for eCommerce catalogs

## Good to know
* Sora 2 video generation takes approximately 2-3 minutes per 12-second video
* Each video generation costs approximately $0.50-1.00 USD (check OpenAI pricing for current rates)
* The workflow generates multiple video variations from a single product image
* Videos are automatically uploaded to Google Drive upon completion
* Generated videos are in 720x1280 (9:16) format optimized for social media

## How it works
1. **Product Analysis**: OpenAI's vision API analyzes the uploaded product image to understand its features, benefits, and target audience
2. **Persona Creation**: The system generates a detailed profile of the ideal influencer/creator who would authentically promote this product
3. **Script Generation**: Gemini 2.5 Pro creates multiple authentic UGC video scripts (12 seconds each) with frame-by-frame breakdowns, natural dialogue, and camera movements
4. **Frame Generation**: For each script, Gemini generates a custom first frame that adapts the product image to match UGC aesthetic and aspect ratio
5. **Video Production**: Sora 2 API generates the actual video using the script and custom first frame as reference
6. **Status Monitoring**: The workflow polls the video generation status every 15 seconds until completion
7. **Upload & Storage**: Completed videos are automatically uploaded to Google Drive with organized naming

## How to use
1. Click the form trigger URL to access the submission form
2. Upload your product image (works best with clean product shots on white/neutral backgrounds)
3. Enter the product name
4. Submit the form and wait for the workflow to complete
5. Find your generated UGC videos in the specified Google Drive folder
6. Each run produces multiple video variations you can test

## Requirements
* **OpenAI API** account with Sora 2 access for video generation and GPT-4 Vision
* **Google Gemini API** account for script generation and image adaptation
* **Google Drive** account for video storage
* Sufficient API credits for video generation (budget accordingly)

## Customizing this workflow
* Adjust the **video duration** in the generate_video node (currently set to 12 seconds)
* Modify the **persona prompt** in analyze_product node to target different audience demographics
* Change the **script style** in set_build_video_prompts node for different UGC aesthetics (excited discovery, casual recommendation, etc.)
* Update the **Google Drive folder** in upload_video node to organize videos by campaign
* Add **additional processing** nodes for video editing, subtitle generation, or thumbnail creation
* Modify the **aspect ratio** in resize_image node for different platforms (1:1 for Instagram feed, 16:9 for YouTube, etc.)

## 📊 Basic Information

- **Workflow ID:** 9432
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 6819
- **Downloads:** 681
- **Created:** 2025/10/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9432)

## 👤 Author

- **Name:** Lucas Walter
- **Username:** @lucaswalter

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** (×3)
- **extractFromFile** 
- **convertToFile** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitOut** 
- **splitInBatches** 
- **httpRequest** (×5)
- **if** 
- **wait** 
- **editImage** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleDrive** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
