# Convert image files (JPG, PNG) to URLs and reduce file size for FREE

> ## Use Case
Transform and optimize images for web use:
- You need to host local images online
- You want to reduce image file sizes automatically
- You need image URLs for web content
- You want to generate and optimize AI-created images

## What this Workflow Does
The workflow processes images through two services:
- Uploads images to ImgBB for hosting and URL generation (free but need API key)
- Optimizes images using ReSmush.it to reduce file size (free)
- Optional: Creates images using OpenAI's image generation
- Returns optimized image URLs ready for use

## Setup
1. Create an [ImgBB account](https://api.imgbb.com/) and get your API key
2. Add your ImgBB API key to the HTTP Request node (key parameter)
3. Optional: Configure OpenAI credentials for image generation
4. Connect your image input source

## How to Adjust it to Your Needs
- Skip OpenAI nodes if using your own image files
- Adjust image optimization parameters
- Customize image hosting settings
- Modify output format for your needs


More templates and n8n workflows &gt;&gt;&gt; [@simonscrapes](https://www.youtube.com/@simonscrapes?sub_confirmation=1)

## 📊 Basic Information

- **Workflow ID:** 2513
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 17954
- **Downloads:** 1795
- **Created:** 2024/10/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2513)

## 👤 Author

- **Name:** simonscrapes
- **Username:** @simonscrapes

## 🏷️ Categories

- File Management
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×3)
- **stickyNote** (×5)
- **set** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
