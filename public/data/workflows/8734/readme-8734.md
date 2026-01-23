# Nano Banana/Gemini 2.5 Telegram bot with multi-modal functionality

> ## How it works
* Multi-modal AI Image Generator powered by Google's **Nano Banana (Gemini 2.5 Flash Image)** - the latest state-of-the-art image generation model
* Accepts text, images, voice messages, and PDFs via Telegram for maximum flexibility
* Uses OpenAI GPT models for conversation and image analysis, then Nano Banana for stunning image generation
* Features conversation memory for iterative image modifications ("make it darker", "change to blue")
* Processes different input types: analyzes uploaded images, transcribes voice messages, extracts PDF text
* All inputs are converted to optimized prompts specifically tuned for Nano Banana's capabilities

## Set up steps
* Create Telegram bot via @BotFather and get API token
* Set up Google Gemini API key from Google AI Studio for **Nano Banana** image generation (~$0.04/image)
* Configure OpenAI API key for GPT models (conversation, image analysis, voice transcription)
* Import workflow and configure all three API credentials in n8n
* Update bot tokens in HTTP request nodes for file downloads
* Test with text prompts, image uploads, voice messages, and PDF documents

## 📊 Basic Information

- **Workflow ID:** 8734
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 1085
- **Downloads:** 108
- **Created:** 2025/9/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8734)

## 👤 Author

- **Name:** Denis
- **Username:** @denisholc7

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **httpRequest** (×6)
- **extractFromFile** 
- **if** 
- **set** (×5)
- **stickyNote** (×9)
- **switch** (×2)
- **telegram** (×3)
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
