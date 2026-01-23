# Create UGC style product ad video via Telegram + Gemini + Kie.ai’s Veo3.1 API

> # Create UGC Style Product Ad Video via Telegram + Gemini + Kie.ai’s Veo3.1 API

## Who’s it for
- For creators, marketers, and e-commerce sellers who want to instantly generate short UGC-style product videos from a simple Telegram message — no manual editing or video skills required.

## How it works / What it does
- This workflow automatically turns a Telegram photo and caption into a 30-second UGC-style video ad using AI.

1. A user sends a photo + caption on Telegram. 
2. Gemini AI reads the caption and image to generate a realistic UGC script with tone, benefits, and call-to-action. 
3. The photo and script are sent to Kie.ai’s Veo3.1 API, which creates a high-quality vertical video (9:16) using the image and narration.
4. Once rendered, the finished video ad is automatically sent back to the Telegram chat. 

## How to set up
- Connect your Telegram Bot credentials.
- Add your Google Gemini API key in the Gemini node.
- Create a Kie.ai account and obtain your Veo3.1 API key.
- Paste the key in the HTTP Request nodes where required.
- Activate the workflow — send a Telegram message with a product photo + caption to test.

## Requirements
- Telegram Bot API key
- Google Gemini API key
- Kie.ai Veo3.1 API key

## How to customize the workflow
- Change Gemini prompt style (e.g., humorous, professional, emotional).
- Adjust Kie.ai model parameters (aspect ratio, duration, voice, or style).
- Add branding overlays or logos after video generation.
- Integrate with Google Drive, Notion, or Airtable to save results automatically.
- Modify the Telegram response to include both the video and the AI-generated script

## 📊 Basic Information

- **Workflow ID:** 10393
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 956
- **Downloads:** 95
- **Created:** 2025/10/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10393)

## 👤 Author

- **Name:** Parth Pansuriya
- **Username:** @parthpansuriya

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **telegramTrigger** 
- **set** 
- **telegram** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequest** (×5)
- **if** 
- **wait** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
