# AI-enhanced image generation with GPT-4.1, Google Drive & Slack notifications

> # Text-to-Image Generator with OpenAI

## What It Is

This is an automated text-to-image generation system that converts simple subject descriptions into AI-generated photos using OpenAI's image generation technology.

## Setup

The system works through a streamlined workflow:

1. You input a subject or brief description into a designated note field
2. The system automatically expands your simple subject into a detailed, comprehensive prompt
3. This enhanced prompt is sent to OpenAI's image generator
4. Once the image is created, it is automatically saved to your Google Drive for easy access and storage
5. You receive a notification in Slack to view it

## 📊 Basic Information

- **Workflow ID:** 11459
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 41
- **Downloads:** 4
- **Created:** 2025/12/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11459)

## 👤 Author

- **Name:** Kean
- **Username:** @kean

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **convertToFile** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stickyNote** (×7)
- **manualTrigger** 
- **set** 
- **slack** 
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
