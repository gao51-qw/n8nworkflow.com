# Convert RSS feeds into a podcast with Google Gemini, Kokoro TTS, and FFmpeg

> ## 🎧 Daily RSS Digest & Podcast Generation

This workflow automates the creation of a daily sports podcast from your favorite news sources. It fetches articles, uses AI to write a digest and a two-person dialogue, and produces a single, merged audio file with KOKORO TTS ready for listening.

## ✨ How it works:

### 📰 Fetch & Filter Daily News: The workflow triggers daily, fetches articles from your chosen RSS feeds, and filters them to keep only the most recent content.

### ✍️ Generate AI Digest & Script: 
Using Google Gemini, it first creates a written summary of the day's news. A second AI agent then transforms this news into an engaging, conversational podcast script between two distinct AI speakers.

### 🗣️ Generate Voices in Chunks: 
The script is split into individual lines of dialogue. The workflow then loops through each line, calling a Text-to-Speech (TTS) API to generate a separate audio file (an MP3 chunk) for each part of the conversation.

### 🎛️ Merge Audio with FFmpeg: 
After all the audio chunks are created and saved locally, a command-line script generates a list of all the files and uses FFmpeg to losslessly merge them into a single, seamless MP3 file. All temporary files are then deleted.

### 📤 Send the Final Podcast: 
The final, merged MP3 is read from the server and delivered directly to your Telegram chat with a dynamic, dated filename.

### You can modify:
- 📰 The RSS Feeds to any news source you want.
- 🤖 The AI Prompts to change the tone, language, or style of the digest and podcast.
- 🎙️ The TTS Voices used for the two speakers.
- 📫 The Final Delivery Method (e.g., send to Discord, save to Google Drive, etc.).


Perfect for creating a personalized, hands-free news briefing to listen to on your commute.

**Inspired by:** https://n8n.io/workflows/6523-convert-newsletters-into-ai-podcasts-with-gpt-4o-mini-and-elevenlabs/

## 📊 Basic Information

- **Workflow ID:** 6945
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 1828
- **Downloads:** 182
- **Created:** 2025/8/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6945)

## 👤 Author

- **Name:** Jonas
- **Username:** @jony-cornelio

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **stickyNote** (×6)
- **scheduleTrigger** 
- **rssFeedRead** (×2)
- **set** (×2)
- **merge** 
- **filter** 
- **code** (×6)
- **executeCommand** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **telegram** (×2)
- **splitInBatches** 
- **if** 
- **httpRequest** (×2)
- **readWriteFile** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
