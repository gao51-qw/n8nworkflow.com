# E-commerce product mockups from images with OpenAI DALL-E, remove.bg and G-Drive

> ## Who it's for
This **n8n workflow** automatically generates professional e-commerce product mockups from product images. The workflow is perfect for e-commerce store owners, product marketers, and content creators who need to create consistent, high-quality product visuals for their online stores, social media, and marketing materials.

## Features
* **Dual Input Methods**: Accepts product images via file upload or URL
* **Background Removal**: Automatically removes backgrounds from product images using remove.bg API
* **AI-Powered Mockups**: Generates premium e-commerce mockups using OpenAI's DALL-E
* **Professional Prompts**: Uses detailed design prompts for luxury e-commerce aesthetics
* **Google Drive Integration**: Automatically saves both PNG files and final mockups to Google Drive

## How It Works
1. The workflow starts with a form submission where users provide:
   - Product image (file upload or URL)
   - Product name/title
2. System detects whether the image is a file or a URL.
3. For uploaded files:
   - Processed through remove.bg to remove the background
   - Transparent PNG is uploaded to Google Drive
   - OpenAI generates a professional mockup based on product image
   - Final mockup uploaded on Drive & notify user
4. For URL inputs:
   - Image downloaded from the URL
   - Background removal and mockup generation process is applied
   - Results are delivered back to the user

## Requirements
- **remove.bg API credentials** for background removal
- **OpenAI API credentials** for DALL-E image generation
- **Google Drive OAuth2 credentials** for file storage

## Important Notes
- **Image Processing**: All images are processed with professional-grade background removal
- **AI Prompting**: The workflow uses detailed prompts designed for luxury e-commerce aesthetics
- **File Storage**: Both PNG files and final mockups are stored in a designated Google Drive folder
- **Conditional Logic**: The workflow intelligently routes based on input type (file vs. URL)
- **Error Handling**: Includes retry logic for AI image generation

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 📊 Basic Information

- **Workflow ID:** 12193
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 24
- **Downloads:** 2
- **Created:** 2025/12/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12193)

## 👤 Author

- **Name:** SpaGreen Creative
- **Username:** @spagreen

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×5)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **formTrigger** 
- **if** (×2)
- **form** (×3)
- **googleDrive** (×4)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
