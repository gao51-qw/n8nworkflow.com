# Automated image editing with GPT-4 Vision & Gemini for Instagram posts from Airtable

> ## Who's it for
Content creators, social media managers, and marketing teams who want to automate image editing and Instagram posting workflows using AI-powered image analysis and generation.

## What it does
This workflow automatically processes images stored in Airtable, analyzes them using AI vision models, generates optimized editing prompts, creates new variations using Google's Gemini AI, and posts the results directly to Instagram. The entire process is triggered via webhook and includes comprehensive error handling and status tracking.

## How it works
The workflow begins when triggered via webhook with an Airtable record ID. It fetches the original image, analyzes its visual elements using GPT-4 Vision, then uses that analysis along with user-specified editing parameters (composition, lighting, style, atmosphere, color palette, text overlay) to generate an optimized prompt. Google Gemini AI then creates a new image based on these specifications, which gets uploaded back to Airtable and posted to Instagram via the Graph API.

## Requirements
- Airtable account with configured base and tables
- OpenAI API key for image analysis
- Google Gemini API key for image generation
- Meta Developer account with Instagram Graph API access
- Instagram Business account connected to Facebook Page

## How to set up
1. Configure your Airtable base with the required fields: Status, Picture, Core Subject, Setting, Composition, Lighting, Style, Atmosphere, Color Palette, Text Overlay, Post Description
2. Set up OpenAI credentials in n8n for the image analysis node
3. Configure Google Gemini API credentials for image generation
4. Set up Meta Graph API credentials for Instagram posting
5. Update the Airtable base IDs and table IDs in all Airtable nodes
6. Configure your Instagram Business Account ID in the Instagram posting nodes
7. Test the webhook URL and ensure proper connectivity

## How to customize
- Modify the image analysis prompt in the "Analyze image" node to focus on different visual elements
- Adjust the Gemini generation parameters (temperature, max tokens) for different creative outputs
- Add additional social media platforms by duplicating the Instagram posting logic
- Customize error handling and status updates based on your workflow needs
- Add image format conversion or resizing nodes if needed for Instagram requirements

## 📊 Basic Information

- **Workflow ID:** 8546
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 413
- **Downloads:** 41
- **Created:** 2025/9/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8546)

## 👤 Author

- **Name:** Jonathan Reeve
- **Username:** @kobol-automations

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **httpRequest** (×4)
- **airtable** (×4)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
