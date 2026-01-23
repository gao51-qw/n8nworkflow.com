# Create an image enhancement API endpoint with Nero AI Business API

> ## How it works
This template uses the n8n AI agent node as an orchestrating agent that decides which tool (knowledge graph) to use based on the user's prompt.

## How to use
- Create an account and apply for an API key on [https://ai.nero.com/ai-api?utm_source=n8n-base-workflow](https://ai.nero.com/ai-api?utm_source=n8n-base-workflow).
![image.png](fileId:1486)
- Fill your key into the `Create task` and `Query task status` nodes.
- Select an AI service and modify `Create task` node parameters, the API doc: [https://ai.nero.com/ai-api/docs](https://ai.nero.com/ai-api/docs).
- Execute the workflow so that the webhook starts listening.
- Make a test request by postman or other tools, the test URL from the `Webhook` node.
 
You will receive the output in the webhook response.

## Our API doc
Please create an account to access our API docs.
[https://ai.nero.com/ai-api/docs](https://ai.nero.com/ai-api/docs).

## Use cases
- Large Scale Printing
	- Upscale images into ultra-sharp, billboard-ready masterpieces with 300+ DPI and billions of pixels.
![Iamge Upscaler Nero AI.jpg](fileId:1505)

- Game Assets Compression 
	- Improve your game performance with AI-Image Compression: Faster, Better & Lossless.
![Game Assets compression Nero AI.jpg](fileId:1503)

- E-commerce Image Editing 
	- Remove & replace your product image backgrounds, create virtual showrooms.
![Background Generator Nero AI.jpg](fileId:1498)

- Photo Retouching 
	- Remove & reduce grains & noises from images.
![Image Denoiser Nero AI.jpg](fileId:1499)

- Face Animation 
	- Transform static images into dynamic facial expression videos or GIFs with our cutting-edge Face Animation API
![face animation for web.gif](fileId:1487)

- Photo Restoration 
	- Our Al-driven Photo Restoration API offers advanced scratch removal, face enhancement, and image upscaling.
![Photo Resoration Nero AI.jpg](fileId:1500)

- Colorize Photo 
	- Transform black & white images into vivid colors.
![Colorize Image Nero AI.jpg](fileId:1504)

- Avatar Generator 
	- Turn your selfie into custom avatars with different styles and backgrounds
![Avatar Gemerator Nero AI.jpg](fileId:1502)

- Website Compression
	- Speed up your website, compress your images in bulk.
![website Compression Nero AI.jpg](fileId:1501)


## 📊 Basic Information

- **Workflow ID:** 4682
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 435
- **Downloads:** 43
- **Created:** 2025/6/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4682)

## 👤 Author

- **Name:** nero
- **Username:** @nero

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **respondToWebhook** 
- **wait** 
- **if** 
- **httpRequest** (×2)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
