# Create AI-powered 3D product videos from images with VEO3 for Shopify

> ## Who Is This For?
This **n8n workflow** is designed for e-commerce businesses, digital marketers, and content creators who want to automatically generate professional 3D product videos from product images. It's perfect for online stores, marketing agencies, and product managers who need to create engaging product showcase videos without manual video editing.

## What This Workflow Does
- Accepts product image submissions through a web form
- Creates a dedicated folder for each product in Google Drive
- Removes background from product images using AI
- Analyzes product images to generate optimized video prompts
- Creates 3D cinematic product videos using Veo3 AI
- Tracks all product data in a Google Sheets spreadsheet
- Provides access to generated resources through shareable links

## Features
- Web form submission for product images and titles
- Automatic folder creation in Google Drive for each product
- AI-powered background removal from product images
- Image analysis for generating detailed video prompts
- 3D video generation using Veo3 AI model
- Progress tracking with status checks and retry mechanisms
- Comprehensive data storage in Google Sheets
- Public sharing of generated resources

## Requirements
- Remove.bg API credentials for background removal
- Google Drive and Google Sheets API access
- OpenAI API credentials for image analysis
- Fal.ai credentials for Veo3 video generation
- HTTP authentication credentials for video status checking

### Notification Integration
You can extend the workflow to send notifications when videos are ready, using platforms like email, Slack, or Telegram.

## Useful Links
- **Remove.bg API**: [https://www.remove.bg/api](https://www.remove.bg/api)
- **Google Drive API**: [https://developers.google.com/drive](https://developers.google.com/drive)
- **OpenAI API**: [https://platform.openai.com](https://platform.openai.com)
- **Veo3 Documentation**: [https://docs.fal.ai](https://docs.fal.ai)

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 📊 Basic Information

- **Workflow ID:** 12122
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 26
- **Downloads:** 2
- **Created:** 2025/12/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12122)

## 👤 Author

- **Name:** SpaGreen Creative
- **Username:** @spagreen

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **googleDrive** (×3)
- **code** 
- **httpRequest** (×4)
- **googleSheets** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **noOp** 
- **n8n-nodes-rapiwa.rapiwa** 
- **gmail** 
- **discord** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **if** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
