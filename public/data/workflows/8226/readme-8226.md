# Generate unlimited e-commerce ad creative with Nano Banana Image Generator

> # AI Influencer Ad Creative Generator

Generate authentic-looking influencer marketing content by automatically combining your product images with reference photos of potential brand ambassadors. This workflow uses Google's Gemini AI to create realistic promotional images showing influencers naturally using your products in casual settings, perfect for social media campaigns and marketing materials.

## How it works

* **Upload your product image** through a simple web form interface
* **Automatically processes reference influencer photos** stored in your Google Drive folder
* **AI generates realistic promotional images** using Gemini 2.5 Flash, showing each influencer naturally holding/using your product in cafe settings
* **Saves all generated images** to your designated Google Drive output folder with organized naming
* **Batch processes multiple influencer images** to create a complete campaign asset library

The workflow creates candid, authentic-looking photos that appear as if a friend took a picture of the influencer enjoying your product - perfect for social media advertising that doesn't look overly promotional.

## Set up steps

1. **Connect Google Drive account** to n8n for accessing influencer reference images and saving outputs
2. **Set up Google Gemini API credentials** for AI image generation capabilities  
3. **Create two Google Drive folders**: one for storing your reference influencer photos, another for generated campaign assets
4. **Configure folder IDs** in the workflow nodes to point to your specific Drive locations
5. **Upload reference influencer images** to your source folder (headshots or casual photos work best)
6. **Deploy the form trigger** to get your webhook URL for product image uploads


**Requirements**: Google Drive account, Google Cloud account with Gemini API access, collection of reference influencer photos.

## 📊 Basic Information

- **Workflow ID:** 8226
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 3947
- **Downloads:** 394
- **Created:** 2025/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8226)

## 👤 Author

- **Name:** Lucas Walter
- **Username:** @lucaswalter

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **googleDrive** (×3)
- **splitInBatches** 
- **extractFromFile** (×2)
- **httpRequest** 
- **convertToFile** 
- **set** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
