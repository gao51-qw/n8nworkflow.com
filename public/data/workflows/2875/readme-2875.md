# An AI agent to create faceless YouTube videos

> ## Runthrough
[Video runthrough](https://www.youtube.com/watch?v=i3-MQQ0Z3Ow)

## Use Case
Create YouTube videos without on-camera presence:

- You want to generate passive content
- You need scalable video production
- You want to automate content creation
- You need consistent video output

## What this Workflow Does
The workflow automates video production:
- Generates audio narration
- Creates complementary stock imagery and turns static images into motion
- Syncs audio and visual elements
- Produces ready-to-upload YouTube content

## Setup
- Configure text-to-speech audio generation
- Set up AI image generation service
- Connect Shotstack API for video composition
- Define content parameters and themes

## How to Adjust it to Your Needs
- Modify audio generation parameters
- Customize image styles
- Adjust video composition

## Tools (requires API access & some are paid for tools)
- Elevenlabs for audio generation
- Leonardo for image generation and motion images (can be swapped out)
- Shotstack for syncing image to video
- OpenAI Whisper for transcription

## Cost of production
Around $0.80 per video at time of writing

## 📊 Basic Information

- **Workflow ID:** 2875
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 422
- **Downloads:** 42
- **Created:** 2025/2/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2875)

## 👤 Author

- **Name:** simonscrapes
- **Username:** @simonscrapes

## 🏷️ Categories

- AI
- Content Creation

## 🔗 Nodes Used

- **googleDrive** (×2)
- **merge** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **wait** (×3)
- **httpRequest** (×10)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **stickyNote** (×10)
- **set** (×2)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **splitOut** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
