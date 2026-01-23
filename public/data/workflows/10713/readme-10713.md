# Telegram to Google Drive: auto upload & track videos with Gemini AI assistant

> 🚀 Overview

This workflow automates video uploads from Telegram directly to Google Drive, complete with smart file renaming, Google Sheets logging, and AI assistance via Google Gemini. It’s perfect for creators, educators, or organizations that want to streamline video submissions and file management.

⚙️ How It Works

1. Telegram Trigger -&gt; Start the workflow when a user sends a video file to your Telegram bot.
2. Switch Node -&gt; Detects file type or command and routes the flow accordingly.
3. Get File -&gt; Downloads the Telegram video file.
4. Upload to Google Drive -&gt; Automatically uploads the video to your chosen Drive folder.
5. Smart Rename -&gt; The file name is auto-formatted using dynamic logic (date, username, or custom tags).
6. Google Sheets Logging -&gt; Appends or updates upload data (e.g., filename, sender, timestamp) for easy tracking.
7. AI Agent Integration -&gt; Uses Google Gemini AI connected to Data Vidio memory to analyze or respond intelligently to user queries.
8. Telegram Notification -&gt; Sends confirmation or status messages back to Telegram.

🧠 Highlights

- Seamlessly integrates Telegram → Google Drive → Google Sheets → Gemini AI
- Supports file update or append mode
- Auto-rename logic via the Code node
- Works with custom memory tools for smarter AI responses
- Easy to clone and adapt, just connect your own credentials

🪄 Ideal Use Cases

- Video assignment submissions for schools or academies
- Media upload management for marketing teams
- Automated video archiving and AI-assisted review
- Personal Telegram-to-Drive backup assistant

🧩 Setup Tips

1. Copy and use the provided Google Sheet template (SheetTemplate)
2. Configure your Telegram Bot token, Google Drive, and Sheets credentials
3. Update the AI Agent node with your Gemini API key and connect the Data Vidio sheet
4. Test with a sample Telegram video before full automation

## 📊 Basic Information

- **Workflow ID:** 10713
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 220
- **Downloads:** 22
- **Created:** 2025/11/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10713)

## 👤 Author

- **Name:** AbSa~
- **Username:** @absa07

## 🏷️ Categories

- File Management
- AI Chatbot

## 🔗 Nodes Used

- **googleDrive** (×2)
- **telegram** (×4)
- **googleSheets** (×2)
- **switch** 
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleSheetsTool** 
- **stickyNote** (×5)
- **telegramTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
