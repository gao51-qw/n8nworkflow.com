# AI image generator from text built on fal.ai

> ## Who this template is for

This template is for developers, content creators, or application builders who want to integrate an AI-powered text-to-image generation service into their applications or systems via an API endpoint.

## Use case

Creating a secure API endpoint that converts text prompts into AI-generated images, with built-in content moderation to prevent inappropriate content generation. This can be used for creative applications, content creation tools, prototyping interfaces, or any system that needs on-demand image generation.

## How this workflow works

1. Receives text prompt through a webhook endpoint
2. Filters the prompt for inappropriate content using AI moderation
3. Submits valid prompts to the Fal.ai Flux image generation service
4. Polls for completion status and retrieves the generated image when ready
5. Returns the image results in a structured JSON format to the client

## Set up steps

1. Create a Fal.ai account and obtain API credentials
2. Configure the HTTP Header Auth credentials with your Fal.ai API key
3. Set up an OpenAI API key for the content moderation component
4. Deploy the workflow and note the webhook URL for your API endpoint
5. Test the endpoint by sending a POST request with a JSON body containing a "prompt" field

## 📊 Basic Information

- **Workflow ID:** 4108
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 26683
- **Downloads:** 2668
- **Created:** 2025/5/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4108)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **httpRequest** (×3)
- **wait** 
- **if** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **respondToWebhook** (×2)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
