# Automated meeting recording & AI summaries with Google Calendar, Vexa & Llama 3.2

> Transform your meetings into actionable insights automatically! This workflow captures meeting audio, transcribes conversations, generates AI summaries, and emails the results to participants—all without manual intervention.

## What's the Goal?
- **Auto-record meetings** when they start and stop when they end
- **Transcribe audio** to text using Vexa Bot integration
- **Generate intelligent summaries** with AI-powered analysis
- **Email summaries** to meeting participants automatically
- **Eliminate manual note-taking** and post-meeting admin work
- **Never miss important discussions** or action items again

## Why Does It Matter?
- **Save 90% of Post-Meeting Time**: No more manual transcription or summary writing
- **Never Lose Key Information**: Automatic capture ensures nothing falls through cracks  
- **Improve Team Productivity**: Focus on discussions, not note-taking
- **Perfect Meeting Records**: Searchable transcripts and summaries for future reference
- **Instant Distribution**: Summaries reach all participants immediately after meetings

## How It Works

### Step 1: Meeting Detection & Recording
- **Start Meeting Trigger**: Detects when meeting begins via Google Meet webhook
- **Launch Vexa Bot**: Automatically joins meeting and starts recording
- **End Meeting Trigger**: Detects meeting end and stops recording

### Step 2: Audio Processing & Transcription  
- **Stop Vexa Bot**: Ends recording and retrieves audio file
- **Fetch Meeting Audio**: Downloads recorded audio from Vexa Bot
- **Transcribe Audio**: Converts speech to text using AI transcription

### Step 3: AI Summary Generation
- **Prepare Transcript**: Formats transcribed text for AI processing
- **Generate Summary**: AI model creates concise meeting summary with:
  - Key discussion points
  - Decisions made
  - Action items assigned
  - Next steps identified

### Step 4: Distribution
- **Send Email**: Automatically emails summary to all meeting participants

## Setup Requirements

### **Google Meet Integration:**
- Configure Google Meet webhook and API credentials
- Set up meeting detection triggers
- Test with sample meeting

### **Vexa Bot Configuration:**
- Add Vexa Bot API credentials for recording
- Configure audio file retrieval settings
- Set recording quality and format preferences

### **AI Model Setup:**
- Configure AI transcription service (e.g., OpenAI Whisper, Google Speech-to-Text)
- Set up AI summary generation with custom prompts
- Define summary format and length preferences

### **Email Configuration:**
- Set up SMTP credentials for email distribution
- Create email templates for meeting summaries
- Configure participant list extraction from meeting metadata

## Import Instructions

1. **Get Workflow JSON**: Copy the workflow JSON code
2. **Open n8n Editor**: Navigate to your n8n dashboard
3. **Import Workflow**: Click menu (⋯) → "Import from Clipboard" → Paste JSON → Import
4. **Configure Credentials**: Add API keys for Google Meet, Vexa Bot, AI services, and SMTP
5. **Test Workflow**: Run a test meeting to verify end-to-end functionality

Your meetings will now automatically transform into actionable summaries delivered to your inbox!

## 📊 Basic Information

- **Workflow ID:** 5197
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 3810
- **Downloads:** 381
- **Created:** 2025/6/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5197)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **googleCalendarTrigger** (×2)
- **httpRequest** (×4)
- **set** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmOllama** 
- **emailSend** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
