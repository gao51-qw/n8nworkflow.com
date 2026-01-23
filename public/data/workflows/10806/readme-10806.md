# Voice-to-Ideas: Transcribe Telegram Voice Notes with OpenAI Whisper to Google Sheets

> ## Voice-to-Ideas: Auto-Transcribe Telegram Voice Notes to Google Sheets

### Who it's for
Creators, entrepreneurs, writers, and anyone who wants to capture ideas quickly without typing. This workflow is ideal for storing thoughts, content ideas, brainstorms, reminders, or voice memos on the go.

### What it does
This workflow listens for Telegram voice messages, sends the audio to OpenAI Whisper for transcription, and saves the raw text directly into a Google Sheet. No formatting or additional processing is applied. The exact transcription from the audio is stored as-is.

### How it works
1. A Telegram Trigger detects when you send a voice message to your bot.  
2. The Telegram node downloads the audio file.  
3. OpenAI Whisper transcribes the voice note into text.  
4. The raw transcription is appended to Google Sheets along with the current date.

### Requirements
- Telegram bot token (created via BotFather)  
- OpenAI API key with Whisper transcription enabled  
- Google Sheets credentials connected in n8n  
- A Google Sheet with **two columns**:
  - **Notes** (stores the transcription text)  
  - **Date** (timestamp of the voice note)

### Setup steps
1. Create a Telegram bot with BotFather and connect Telegram credentials in n8n.  
2. Add your OpenAI API key to the OpenAI node.  
3. Connect Google Sheets credentials in n8n.  
4. Create a Google Sheet with two columns: **Notes** and **Date**.  
5. Send a voice message to your Telegram bot to test the workflow.

## 📊 Basic Information

- **Workflow ID:** 10806
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 134
- **Downloads:** 13
- **Created:** 2025/11/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10806)

## 👤 Author

- **Name:** Chris Jadama
- **Username:** @chrisjadama

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×12)
- **telegramTrigger** 
- **switch** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleSheets** (×2)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
