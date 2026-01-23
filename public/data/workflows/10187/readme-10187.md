# Voice translator bridge (Telegram → Slack) with GPT-4o-mini + Whisper

> ## 🧠 How it works  
This workflow automatically **transcribes and translates voice messages from Telegram to Slack**, enabling seamless communication between **Japanese** and **English** speakers.  

In our real-world use case, our distributed team often sends short voice updates on Telegram — but most discussion happens on Slack.  
Before this workflow, we constantly asked:  
- “Can someone write a summary of that voice message?”  
- “I can’t understand what was said — is there a transcript?”  
- “Can we translate this audio for our English-speaking teammates?”  

This workflow fixes that problem **without changing anyone’s communication habits**.  
Built with **n8n**, **OpenAI Whisper**, and **GPT-4o-mini**, it automatically:  
- Detects when a voice message is posted on Telegram  
- Downloads and transcribes it via Whisper  
- Translates the text with GPT-4o-mini  
- Posts the result in Slack — with flags 🇯🇵→🇺🇸 and username attribution  


## ⚙️ Features  
- 🎧 **Voice-to-text transcription** using **OpenAI Whisper**  
- 🌐 **Automatic JA ↔ EN detection and translation** via **GPT-4o-mini**  
- 💬 Clean Slack message formatting with flags, username, and original text   
- 🔧 Easy to customize: adjust target languages, tone, or message style  
- ⚡ Typical end-to-end time: under 10 seconds for short audio clips  


## 💼 Use Cases  
- **Global teams** – Send quick voice memos in Telegram and share readable translations in Slack  
- **Project coordination** – Record updates while commuting and post bilingual notes automatically  
- **Remote check-ins** – Replace daily written reports with spoken updates  
- **Cross-language collaboration** – Let English and Japanese teammates stay perfectly synced  


## 💡 Perfect for  
- **Bilingual creators and managers** working across Japan and Southeast Asia  
- **AI automation enthusiasts** who love connecting voice and chat platforms  
- **Teams using Telegram for fast communication** and Slack for structured workspaces  


## 🧩 Notes  
- Requires three credentials:  
  - `TELEGRAM_BOT_TOKEN`  
  - `OPENAI_API_KEY_HEADER`  
  - `SLACK_BOT_TOKEN_HEADER`  
- Slack scopes: `chat:write`, `files:write`, `channels:history`  
- You can **change translation direction or add languages** in the “Detect Language” → “Translate (OpenAI)” nodes.  
- Keep audio files under **25 MB** for Whisper processing.  
- Always export your workflow with **credentials OFF** before sharing or publishing.  


### ✨ Powered by  
**OpenAI Whisper** × **GPT-4o-mini** × **n8n** × **Telegram Bot API** × **Slack API**  
A complete multilingual voice-to-text bridge — connecting speech, translation, and collaboration across platforms. 🌍


## 📊 Basic Information

- **Workflow ID:** 10187
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 164
- **Downloads:** 16
- **Created:** 2025/10/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10187)

## 👤 Author

- **Name:** Tomohiro Goto
- **Username:** @taoo

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **if** 
- **set** (×3)
- **httpRequest** (×4)
- **function** (×3)
- **code** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
