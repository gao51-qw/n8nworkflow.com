# Transcribe & translate audio between languages with OpenAI & S3 storage

> This workflow automatically transcribes audio files, translates the content between languages, and generates natural-sounding speech from the translated text - all in one seamless process.

## Who's it for

Content creators, educators, and businesses needing to make their audio content accessible across language barriers. Perfect for translating podcasts, voice messages, lectures, or any audio content while preserving the spoken format.

## How it works

The workflow receives an audio file through a webhook, transcribes it using OpenAI's Whisper, translates and structures the text with GPT-4, generates new audio in the target language, and stores it in S3 for easy access. The entire process takes seconds and returns both the transcribed/translated text and a URL to the translated audio file.

## How to set up

1. **Configure OpenAI credentials** - Add your OpenAI API key for Whisper transcription and GPT-4 translation
2. **Set up AWS S3** - Create a bucket with public read permissions for audio storage
3. **Update configuration** - Replace 'YOUR-BUCKET-NAME' with your actual S3 bucket name
4. **Activate webhook** - Deploy and copy your webhook URL for receiving audio files

Send a POST request with:
- Binary audio file (as 'audiofile')
- Languages parameter (e.g., "English, Spanish")

## Requirements

- OpenAI API account with access to Whisper and GPT-4
- AWS account with S3 bucket configured
- Basic understanding of webhooks and API requests

## How to customize

- **Add language detection** - Automatically detect source language if not specified
- **Customize voice settings** - Adjust speech speed, pitch, or select different voices
- **Add file validation** - Implement size limits and format checks
- **Enhance security** - Add webhook authentication and rate limiting
- **Extend functionality** - Add subtitle generation or multiple output formats

## 📊 Basic Information

- **Workflow ID:** 6419
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 532
- **Downloads:** 53
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6419)

## 👤 Author

- **Name:** Vadym Nahornyi
- **Username:** @vadym-nahornyi

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **stickyNote** (×6)
- **respondToWebhook** 
- **set** 
- **awsS3** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
