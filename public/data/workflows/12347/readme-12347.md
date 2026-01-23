# Generate audio documentaries from web articles with ElevenLabs and BrowserAct

> # Generate audio documentaries from web articles to Telegram with ElevenLabs & BrowserAct

This workflow transforms any web article or blog post into a high-production-value audio documentary. It automates the entire production chain—from scraping content and writing an engaging narrative script to generating realistic voiceovers—delivering a listenable MP3 file directly to your Telegram chat.

## Target Audience
Commuters, podcast enthusiasts, content creators, and researchers who prefer listening to content over reading.

## How it works
1. **Analyze Intent**: The workflow receives a message via **Telegram**. An **AI Agent** (using Google Gemini) classifies the input to determine if it is a casual chat or a request to process a URL.
2. **Scrape Content**: If a valid link is detected, **BrowserAct** executes a background task to visit the webpage and extract the raw text.
3. **Write Script**: A **Scriptwriter Agent** (using Claude via OpenRouter) converts the dry article text into a dramatic, narrative-driven script optimized for audio, including cues for pacing and tone.
4. **Generate Audio**: **ElevenLabs** synthesizes the script into high-fidelity speech using a specific voice model (e.g., "Liam").
5. **Deliver Output**: The workflow sends the generated MP3 file and a formatted HTML summary caption back to the user on **Telegram**.

## How to set up
1. **Configure Credentials**: Connect your **Telegram**, **ElevenLabs**, **OpenRouter**, **Google Gemini**, and **BrowserAct** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **AI Summarization & Eleven Labs Podcast Generation** template is saved in your BrowserAct account.
3. **Select Voice**: Open the **Convert text to speech** node and select your preferred **ElevenLabs** voice model.
4. **Configure Model**: Open the **OpenRouter** node to confirm the model selection (e.g., Claude Haiku) or switch to a different LLM for scriptwriting.
5. **Activate**: Turn on the workflow and send a link to your Telegram bot to test it.

## Requirements
* **BrowserAct** account with the **AI Summarization & Eleven Labs Podcast Generation** template.
* **ElevenLabs** account.
* **OpenRouter** account (or access to an LLM like Claude).
* **Google Gemini** account.
* **Telegram** account (Bot Token).

## How to customize the workflow
1. **Change the Persona**: Modify the system prompt in the **Scriptwriter** node to change the narrative style (e.g., from "Documentary Host" to "Comedian" or "News Anchor").
2. **Switch Output Channel**: Replace the Telegram output node with a **Google Drive** or **Dropbox** node to archive the generated audio files for a podcast feed.
3. **Multi-Voice Support**: Add logic to split the script into multiple parts and use different **ElevenLabs** voices to simulate a conversation between two hosts.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://docs.browseract.com)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [How to Build an AI Podcast Generator: n8n, BrowserAct & Eleven Labs](https://youtu.be/YuxjfB87F0E)


## 📊 Basic Information

- **Workflow ID:** 12347
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 5
- **Downloads:** 0
- **Created:** 2026/1/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12347)

## 👤 Author

- **Name:** Madame AI Team | Kai
- **Username:** @madame-ai

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@elevenlabs/n8n-nodes-elevenlabs.elevenLabs** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **telegram** (×3)
- **stickyNote** (×6)
- **telegramTrigger** 
- **n8n-nodes-browseract.browserAct** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
