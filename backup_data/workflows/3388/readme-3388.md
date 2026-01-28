# Transcribe audio files with Google Gemini and Telegram

> Transcribe audio messages from Telegram using **Google Gemini** for free.

Send an audio file to your Telegram bot and get a full transcription using Gemini’s free model.

![image.png](fileId:1076)

### Who is this template for?

Anyone who needs quick and accurate transcriptions of audio messages.

Perfect for:

- Creators and podcasters
- Coaches or educators
- People who receive a lot of audio on Telegram

You can also adapt this workflow to transcribe audio from other sources, like WhatsApp, Google Drive, or direct uploads.

### How it works

1. You send an audio file to your Telegram bot
2. n8n downloads the file and converts it to text using Google Gemini
3. The transcript is sent back to you on Telegram

### How to set up

You’ll just need:

- A Telegram bot token
- A Google Gemini API key (free tier supported)

The rest works out by itself.

### Check out my other templates

👉 [**https://n8n.io/creators/solomon/**](https://n8n.io/creators/solomon/)

## 📊 Basic Information

- **Workflow ID:** 3388
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 3881
- **Downloads:** 388
- **Created:** 2025/4/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3388)

## 👤 Author

- **Name:** Solomon
- **Username:** @solomon

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **switch** 
- **telegram** (×2)
- **telegramTrigger** 
- **httpRequest** (×4)
- **merge** 
- **stickyNote** (×7)
- **noOp** 
- **readWriteFile** 
- **googleDrive** 
- **googleDriveTrigger** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
