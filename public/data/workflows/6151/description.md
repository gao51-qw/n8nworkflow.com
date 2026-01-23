![Untitled1.png](fileId:1794)

## Watch the video to better understand this workflow :
[ARRE-automation](https://youtu.be/LD60Kt4MEgg?si=Xzb0taY52lNgxmfR)

## Good to know:
This workflow automatically processes product images from Google Drive, generates AI-powered background prompts using multiple AI models (ChatGPT, Claude, or Groq), creates professional background scenes using Pixelcut.ai, and saves enhanced images back to your Google Drive. Perfect for e-commerce businesses and product photography workflows.

## Who is this for?

➖E-commerce store owners who need professional product backgrounds
➖Product photographers looking to automate background generation
➖Marketing teams creating consistent product imagery
➖Small businesses wanting to enhance their product photos without expensive studio setups
➖Anyone who needs to quickly transform transparent product images into commercial-ready photos

## What problem is this workflow solving?

This workflow solves the challenge of creating professional product photography backgrounds at scale. Instead of manually editing each product image or setting up expensive photo shoots, it automatically generates contextually appropriate backgrounds for your products using AI technology. It eliminates the time-consuming process of background creation while maintaining professional quality and consistency across your product catalog.

## What this workflow does:

✅Automatically fetches product images from your Google Drive folder
✅Downloads transparent/background-free product images
✅Uses advanced AI models (ChatGPT, Claude, or Groq) to generate intelligent background prompts based on product analysis
✅Creates professional backgrounds using Pixelcut.ai API with AI-generated or custom prompts
✅Saves enhanced product images back to Google Drive with organized naming
✅Processes multiple images in batch automatically

## How it works:

1️⃣Google Drive node searches for PNG product images in your specified folder
2️⃣Binary download node retrieves the actual image files for processing
3️⃣Optional AI agent analyzes products using your chosen AI model (OpenAI GPT-4, Claude, or Groq) and generates appropriate background prompts
4️⃣Pixelcut.ai API processes images and adds professional backgrounds using AI-generated or manual prompts
5️⃣Enhanced images are automatically saved back to Google Drive with "enhanced-" prefix

## How to use:

Set up Google Drive OAuth2 credentials in n8n
Create a Pixelcut.ai account and get your API key
Configure your source folder ID in the Google Drive nodes
Set up your output folder ID for enhanced images
Choose and configure your preferred AI model credentials (OpenAI for ChatGPT, Anthropic for Claude, or Groq)
Replace placeholder API keys with your actual credentials
Execute the workflow to process your product images

## Requirements:

✅n8n instance (cloud or self-hosted)
✅Google Drive account with OAuth2 access
✅Pixelcut.ai API account and key
✅Product images in PNG format (transparent backgrounds recommended)
✅AI API credentials for automatic prompt generation (choose from):
   - OpenAI API (for ChatGPT/GPT-4)
   - Anthropic API (for Claude)
   - Groq API (for fast inference)
✅Basic understanding of n8n workflows

## Customizing this workflow:

🟢Modify the image format filter to support JPG, WEBP, or other formats
🟢Switch between different AI models (ChatGPT, Claude, Groq) for prompt generation
🟢Customize background prompts for different product categories
🟢Add background removal step for products with existing backgrounds
🟢Switch to different AI background services (Deep-Image.ai, Remove.bg, etc.)
🟢Configure different AI model parameters for varied prompt creativity
🟢Add image resizing or quality optimization steps
🟢Create multiple output folders for different product categories
🟢Add error handling and retry mechanisms for failed processes
🟢Implement A/B testing with different AI models for prompt quality comparison