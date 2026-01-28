# Transcribe & summarize Telegram voice notes with OpenAI and DeepSeek Chat to Google Docs

> This workflow automates the process of transcribing voice notes from Telegram and then summarizing them, finally saving both the transcript and the summary to Google Drive.

Here's a step-by-step breakdown of what the workflow does:
* **Triggered by Telegram Message:** The workflow starts when a new message is received on Telegram.
* **Get Audio File from Telegram:** It then retrieves the audio file from the Telegram message.
* **Transcribe Audio with OpenAI:** The audio file is sent to OpenAI for transcription.
* **Save Transcript to Google Drive:** The generated transcript is saved as a new Google Doc in a designated "N8N Transcribes" folder within Google Drive. The document is named after the original audio file.
* **Summarize Transcript with AI:** The transcript is then sent to an AI agent (which uses DeepSeek Chat Model 1 as its language model) to generate a summary description. The prompt instructs the AI to create a plain text summary suitable for a report to a supervisor, expanding on the title and avoiding rich text formatting.
* **Save Summary to Google Drive:** Finally, the generated summary is saved as a new Google Doc in a "N8N Summaries" folder in Google Drive, also named after the original audio file.

## 📊 Basic Information

- **Workflow ID:** 4944
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 357
- **Downloads:** 35
- **Created:** 2025/6/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4944)

## 👤 Author

- **Name:** Wild Nomad
- **Username:** @rahimin3d

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **telegram** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.lmChatDeepSeek** 
- **@n8n/n8n-nodes-langchain.agent** 
- **telegramTrigger** 
- **googleDrive** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
