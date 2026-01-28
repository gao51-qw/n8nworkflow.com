# Create personal notes with voice transcription using local LLaMA and Telegram

> ## PersonalNotesAssistant – Organize and Understand Your Thoughts with Local AI

## PersonalNotesAssistant is an offline-capable, AI-powered agent that helps you store, summarize, retrieve, and reflect on your personal notes and voice memos — all processed locally and sent via Telegram. Built to run efficiently on a Raspberry Pi 5, this agent supports a variety of note-taking styles and acts as your private memory extension.

## 🧠 What It Can Do
Accept voice or text notes via Telegram

Transcribe audio messages into clean, structured text (using Whisper)

Automatically summarize or categorize notes with a local LLM

Answer questions based on your past notes

Retrieve relevant entries by topic, date, or keyword

Help you journal or reflect by asking follow-up questions

Work completely offline — no cloud or external APIs

## 🔧 How It Works
Capture Notes via Telegram
You send a voice message or text to your Telegram bot. The assistant supports both quick thoughts and long-form content.

## Transcription with Whisper (Local)
If the input is a voice message, it is transcribed into text using Whisper running locally on your Raspberry Pi.

## AI Summarization & Tagging
The transcribed or typed note is sent to LLaMA 3.2 via Ollama, which summarizes it, suggests tags, and stores it with metadata (e.g., timestamp, mood, theme).

## Storage & Retrieval
Notes are stored in a local database (e.g., SQLite or JSON). You can later query the assistant with prompts like:

“What did I say about stress last week?”

“Summarize my ideas from this month.”

“Show notes tagged with 'travel'.”

Follow-Up & Reflection
The agent can optionally engage with reflective prompts to help you deepen your thoughts or gain insight from what you’ve recorded.

## 💡 Use Cases
Track personal growth, habits, or therapy progress

Create voice memos while walking or commuting

Maintain a structured journal without typing

Use as a second brain to help you remember and revisit important thoughts

## 🔐 Privacy by Default
Everything runs locally:

No notes are uploaded to cloud platforms

No audio is sent to third-party transcription services

No LLM processing happens outside your device

Ideal for privacy-minded users, psychologists, researchers, or digital minimalists who want AI assistance without surveillance.

## ⚙️ Technical Stack
Raspberry Pi 5: Low-power edge device

Whisper (local): For voice-to-text conversion

Ollama + LLaMA 3.2: For summarization, classification, and retrieval

Telegram Bot API: For input/output

Custom Database (e.g., JSON/SQLite): For storing and querying notes

## 🧪 Real-Life Use
This agent is actively used daily by the developer to log ideas, emotions, and plans. It has proven effective for lightweight journaling and context-aware memory assistance, even when offline.

## 📊 Basic Information

- **Workflow ID:** 6013
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1879
- **Downloads:** 187
- **Created:** 2025/7/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6013)

## 👤 Author

- **Name:** Alberto
- **Username:** @albertob12

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **telegram** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.lmOllama** (×2)
- **switch** 
- **if** 
- **httpRequest** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
