# Automated generation of AI advertising photos for product marketing

> **How it works**

This workflow automates the transformation of standard product images into professional product photography featuring human models
It uses AI to analyze product images, create tailored photography prompts, and generate high-quality enhanced versions

**Set up steps**

- You'll need an OpenAI API key and access to gpt-image-1 (verify your organization)
- Set up a Google Sheets spreadsheet with columns: Image-URL, Prompt, Output
- Create a Google Drive folder to store the generated images

**Requirements:**

- OpenAI API access (for image generation and analysis)
- Google Sheets and Google Drive accounts
- Basic product images (URLs) as input
The spreadsheet must contain a column named "Image-URL" with links to the product images

**This workflow automatically:**

- Reads product image URLs from your Google Sheet
- Downloads the images for processing
- Analyzes each image to understand what product it contains
- Creates specialized photography prompts ensuring each product is shown with a human model
- Generates professional product photography using OpenAI's image generation capabilities
Uploads results to Google Drive and updates your spreadsheet with links

**Extra:**
- You can also use the included simple image generation workflow to directly create images via prompt without product image input. This option lets you quickly generate images through the OpenAI API using just text prompts

## 📊 Basic Information

- **Workflow ID:** 3700
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 5663
- **Downloads:** 566
- **Created:** 2025/4/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3700)

## 👤 Author

- **Name:** Julian Ivanov
- **Username:** @julian-ivanov

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **merge** 
- **googleSheets** (×2)
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **convertToFile** (×2)
- **googleDrive** 
- **stickyNote** (×5)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
