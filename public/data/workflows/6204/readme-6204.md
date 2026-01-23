# Human-in-the-loop post designer with Mistral AI, ImageKit, and LinkedIn publishing

> ## 📋 Description
This n8n workflow streamlines AI-powered post creation with image banners, includes manual approval steps, and publishes to LinkedIn — all dynamically.

It uses ImageKit.io to edit images, stores them on S3, and generates and revises posts through a Mistral AI Agent with human review.

## 🧠 How it Works (High-Level)
🔄 Triggered via incoming chat message

🧠 AI drafts a post and adds image instructions

🖼️ ImageKit API adds text overlay to image

☁️ Image is uploaded to S3 for public use

🧑‍⚖️ Human approval step via email

🔁 Optional revision loop

📢 Publishes approved content to LinkedIn

## 🛠️ Setup Requirements

🔑 API key for ImageKit.io

🧠 AI model via Mistral (or substitute like OpenAI)

📩 Email setup for Approval node

☁️ AWS S3 Bucket access

🔗 LinkedIn credentials for posting

## 📊 Basic Information

- **Workflow ID:** 6204
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 568
- **Downloads:** 56
- **Created:** 2025/7/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6204)

## 👤 Author

- **Name:** ResilNext
- **Username:** @rnair1996

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** (×2)
- **gmail** 
- **switch** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **merge** 
- **s3** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **linkedIn** 
- **httpRequest** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
