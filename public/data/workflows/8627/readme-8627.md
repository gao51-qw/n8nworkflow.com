# Automated product ad image creation with OpenAI, Gemini & Google Workspace

> ## How it works

This workflow automates the generation of ad-ready product images by combining product and influencer photos with AI styling. It runs on a scheduled trigger, fetches data from Google Sheets, and retrieves product and influencer images from Google Drive. The images are processed with OpenAI and OpenRouter to generate enhanced visuals, which are then saved back to Google Drive. Finally, the result is logged into Google Sheets with a ready-to-publish status.

## Step-by-step

**1. Trigger & Data preparation**  
- **Schedule Trigger** – Runs workflow automatically on a set schedule.  
- **Google Sheets (Get the Raw)** – Retrieves today’s product and model URLs.  
- **Google Drive (Download Product Image)** – Downloads the product image.  
- **Google Drive (Download Influencer Image)** – Downloads the influencer image.  
- **Extract from File (Binary → Base64)** – Converts both product and model images for AI processing.  

**2. AI analysis & image generation**  
- **OpenAI (Analyze Image)** – Creates an ad-focused visual description (lighting, mood, styling).  
- **HTTP Request (OpenRouter Gemini)** – Generates an AI-enhanced image combining product + influencer.  
- **Code Node (Cleanup)** – Cleans base64 output to remove extra prefixes.  
- **Convert to File** – Transforms AI output into a proper image file.  

**3. Save & update**  
- **Google Drive (Upload Image)** – Uploads generated ad image to target folder.  
- **Google Sheets (Append/Update Row)** – Stores the Drive link and updates publish status.  

## Why use this?

- Automates the entire ad image creation process without manual design work.  
- Ensures product visuals are consistent, styled, and ad-ready.  
- Saves final creatives in Google Drive for easy access and sharing.  
- Keeps campaign tracking organized by updating Google Sheets automatically.  
- Scales daily ad production efficiently for multiple products or campaigns.  


## 📊 Basic Information

- **Workflow ID:** 8627
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 700
- **Downloads:** 70
- **Created:** 2025/9/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8627)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **googleDrive** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 
- **scheduleTrigger** 
- **extractFromFile** (×2)
- **googleSheets** (×2)
- **httpRequest** 
- **code** 
- **convertToFile** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
