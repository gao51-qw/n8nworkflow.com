# Transcribe long audio files beyond 25MB limit with FileFlows and OpenAI Whisper

> ## Who's it for

This template is designed for content creators, podcasters, businesses, and researchers who need to transcribe long audio recordings that exceed OpenAI Whisper's 25 MB file size limit (~20 minutes of audio).

## How it works

This workflow combines n8n, FileFlows, and OpenAI Whisper API to transcribe audio files of any length:

1. User uploads an MP3 file through a web form and provides an email address
2. n8n splits the file into 4 MiB chunks and uploads them to FileFlows
3. FileFlows uses FFmpeg to segment the audio into 15-minute chunks (safely under the 25 MB API limit)
4. Each segment is transcribed using OpenAI's Whisper API (configured for French by default)
5. All transcriptions are merged into a single text file
6. The complete transcription is automatically emailed to the user

**Processing time:** Typically 10-15 minutes for a 1-hour audio file.

## Requirements

- n8n instance (self-hosted or cloud)
- FileFlows with Docker and FFmpeg installed
- OpenAI API key (Whisper API access)
- Gmail account for email delivery
- Network access between n8n and FileFlows

## Setup

Complete setup instructions, including FileFlows workflow import, credentials configuration, and storage setup, are provided in the workflow's sticky notes.

## Cost

OpenAI Whisper API: $0.006 per minute. A 1-hour recording costs approximately $0.36.

## 📊 Basic Information

- **Workflow ID:** 10870
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 604
- **Downloads:** 60
- **Created:** 2025/11/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10870)

## 👤 Author

- **Name:** Julien DEL RIO
- **Username:** @juliendelrio

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **code** (×3)
- **httpRequest** (×2)
- **noOp** (×4)
- **if** 
- **wait** (×2)
- **splitInBatches** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **convertToFile** 
- **set** 
- **filter** 
- **gmail** (×3)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
