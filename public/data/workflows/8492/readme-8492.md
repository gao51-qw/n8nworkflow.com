# Create consistent AI characters with Google Nano Banana & upscaling via Kie.ai

> # Google NanoBanana Model Image Editor for Consistent AI Influencer Creation with Kie AI Image Generation & Enhancement Workflow

This n8n template demonstrates how to use Kie.ai's powerful image generation models to create and enhance images using AI, with automated story creation, image upscaling, and organized file management through Google Drive and Sheets.

**Use cases include:** AI-powered content creation for social media, automated story visualization with consistent characters, marketing material generation, and high-quality image enhancement workflows.

## Good to know

- The workflow uses Kie.ai's `google/nano-banana-edit` model for image generation and `nano-banana-upscale` for 4x image enhancement
- Images are automatically organized in Google Drive with timestamped folders
- Progress is tracked in Google Sheets with status updates throughout the process
- The workflow includes face enhancement during upscaling for better portrait results
- All generated content is automatically saved and organized for easy access

## How it works

1. **Project Setup**: Creates a timestamped folder structure in Google Drive and initializes a Google Sheet for tracking
2. **Story Generation**: Uses OpenAI GPT-4 to create detailed prompts for image generation based on predefined templates
3. **Image Creation**: Sends the AI-generated prompt along with 5 reference images to Kie.ai's nano-banana-edit model
4. **Status Monitoring**: Polls the Kie.ai API to monitor task completion with automatic retry logic
5. **Image Enhancement**: Upscales the generated image 4x using nano-banana-upscale with face enhancement
6. **File Management**: Downloads, uploads, and organizes all generated content in the appropriate Google Drive folders
7. **Progress Tracking**: Updates Google Sheets with status information and image URLs throughout the entire process

## Key Features

- **Automated Story Creation**: AI-powered prompt generation for consistent, cinematic image creation
- **Multi-Stage Processing**: Image generation followed by intelligent upscaling
- **Smart Organization**: Automatic folder creation with timestamps and file management
- **Progress Tracking**: Real-time status updates in Google Sheets
- **Error Handling**: Built-in retry logic and failure state management
- **Face Enhancement**: Specialized enhancement for portrait images during upscaling

## How to use

1. **Manual Trigger**: The workflow starts with a manual trigger (easily replaceable with webhooks, forms, or scheduled triggers)
2. **Automatic Processing**: Once triggered, the entire pipeline runs automatically
3. **Monitor Progress**: Check the Google Sheet for real-time status updates
4. **Access Results**: Find your generated and enhanced images in the organized Google Drive folders

## Requirements

- **Kie.ai Account**: For AI image generation and upscaling services
- **OpenAI API**: For intelligent prompt generation (GPT-4 mini)
- **Google Drive**: For file storage and organization
- **Google Sheets**: For progress tracking and status monitoring

## Customizing this workflow

This workflow is highly adaptable for various use cases:

- **Content Creation**: Modify prompts for different styles (fashion, product photography, architectural visualization)
- **Batch Processing**: Add loops to process multiple prompts or reference images
- **Social Media**: Integrate with social platforms for automatic posting
- **E-commerce**: Adapt for product visualization and marketing materials
- **Storytelling**: Create sequential images for visual narratives or storyboards

The modular design makes it easy to add additional processing steps, change AI models, or integrate with other services as needed.

## Workflow Components

- **Folder Management**: Dynamic folder creation with timestamp naming
- **AI Integration**: OpenAI for prompts, Kie.ai for image processing
- **File Processing**: Binary handling, URL management, and format conversion
- **Status Tracking**: Multi-stage progress monitoring with Google Sheets
- **Error Handling**: Comprehensive retry and failure management systems


## 📊 Basic Information

- **Workflow ID:** 8492
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 1483
- **Downloads:** 148
- **Created:** 2025/9/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8492)

## 👤 Author

- **Name:** Muhammad Farooq Iqbal
- **Username:** @mfarooqone

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×5)
- **set** (×3)
- **manualTrigger** 
- **switch** (×2)
- **googleDrive** (×4)
- **stickyNote** (×5)
- **googleSheets** (×4)
- **wait** (×2)
- **code** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
