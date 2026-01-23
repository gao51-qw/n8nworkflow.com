## Description 
Turn Telegram voice messages into AI-generated videos and send the video link back to the chat. This workflow listens for messages, downloads the file, transcribes the audio, generates a video via HeyGen, and returns the final URL. Fast, automated UGC creation right inside Telegram. ✨

## What This Template Does 
- Listens for new Telegram messages and triggers the flow.
- Downloads attached files (e.g., voice memos).
- Transcribes the voice memo to text.
- Generates a video via HeyGen using the transcription.
- Polls HeyGen for video status, waits with a short buffer, and sends the final video URL back.

## Key Benefits 
- Automates UGC creation from Telegram messages ⚡
- Reduces manual steps from file handling to final video delivery 🧩
- Keeps users in Telegram for a smooth, chat-native experience 📲
- Modular nodes make it easy to customize or extend 🔧

## Features 
- Telegram message trigger and message updates 🛎️
- File download and retrieval for processing 📥
- Voice transcription step for audio-to-text 🎙️➡️📝
- HeyGen video generation via POST and status checks via GET 🌐
- 10-second buffer to allow external processing ⏱️
- Automatic return of the video URL to the chat 🔗

## Requirements 
- n8n instance (cloud or self-hosted) ⚙️
- Telegram Bot credentials configured in n8n (to receive messages and send replies) 🤖
- HeyGen API key for:
- POST https://api.heygen.com/v2/video/generate
- GET https://api.heygen.com/v1/video_status.get
- A transcription step configured in n8n for converting voice memos to text (node present in this workflow) 🗣📝

## Target Audience 
- Teams creating AI UGC directly from chat workflows 📢
- Marketing and social teams capturing quick briefs via voice 🧑
- Agencies standardizing UGC production pipelines 🏢
- Ops and support teams needing rapid content responses 🚀

## Step-by-Step Setup Instructions (Concise) 
- Connect Telegram Bot credentials in n8n and select the chat/channel for Message Trigger 🤝
- Add your HeyGen API key in n8n Credentials and map it in the HTTP Request nodes 🔑
- Ensure the transcription node is configured to convert audio to text and map output to video generation 🧭
- Import the workflow, assign credentials to all nodes, and replace any placeholders 🧩
- Run once to test end-to-end; adjust the 10s buffer if videos take longer ⏳