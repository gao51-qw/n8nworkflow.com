# Translate audio using AI

> ### Overview

This workflow takes some French text, and translates it into spoken audio.

It then transcribes that audio back into text, translates it into English and generates an audio file of the English text.

To do so, it uses ElevenLabs (which has a free tier) and OpenAI.

### Setup

These steps should only take a few minutes:

1. In ElevenLabs, add a voice to your [voice lab](https://elevenlabs.io/voice-lab) and copy its ID. Add it to the 'Set voice ID' node
2. Get your ElevenLabs API key (click your name in the bottom-left of [ElevenLabs](https://elevenlabs.io/voice-lab) and choose ‘profile’)
3. In the 'Generate French audio' node, create a new header auth cred. Set the name to `xi-api-key` and the value to your API key
4. In the 'credential' field of the 'Transcribe audio' node, create a new OpenAI cred with your [OpenAI API key](https://platform.openai.com/api-keys)
5. Run the workflow by clicking the orange button at the bottom of the canvas

## 📊 Basic Information

- **Workflow ID:** 2083
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 10782
- **Downloads:** 1078
- **Created:** 2024/2/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2083)

## 👤 Author

- **Name:** David Roberts
- **Username:** @davidn8n

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×5)
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
