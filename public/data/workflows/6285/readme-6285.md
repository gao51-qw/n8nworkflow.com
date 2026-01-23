# Generate professional product images | AI marketing campaign generator

> 🚀 AI Marketing Campaign Generator

Upload product image + details → Get complete professional marketing campaign with 5 custom-generated assets automatically. 🤖 AI Model

GPT-4o Mini (OpenAI) - For campaign strategy | Prompt Image generation GPT Image-1 (OpenAI) - For visual asset generation

🔑 Required API Keys

OpenAI API - AI analysis & image generation

Google Drive API - Asset storage & organization

🎯 What It Generates

5 Marketing Assets: Instagram Post, Instagram Story, Website Banner, Ad Creative, Testimonial Graphic Brand Strategy: Colors, tone, positioning from your product image Campaign Strategy: Messaging, target audience, objectives Visual Analysis: Extracts colors, materials, styling from uploaded image

⚙️ Setup

Import JSON to n8n Add OpenAI & Google Drive credentials Configure Google Drive folder for asset storage Deploy form webhook Test with product image upload

📱 How It Works Upload product image → AI analyzes visual + text → Generates complete campaign → Creates 5 custom marketing assets → Saves to Google Drive

## 📊 Basic Information

- **Workflow ID:** 6285
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 1544
- **Downloads:** 154
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6285)

## 👤 Author

- **Name:** Rami Cole
- **Username:** @ramicole-ai

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **code** (×2)
- **googleDrive** (×6)
- **switch** 
- **convertToFile** (×5)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **httpRequest** (×5)
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
