# Summarize YouTube videos with transcription, DeepSeek AI and Google Sheets

> Tired of manually watching long YouTube videos just to extract the main points?

With our YouTube Transcript & Summary Automation, you can instantly turn any video into an actionable, AI-generated summary — all from a simple Google Sheet.

What this automation does:
Reads video URLs from Google Sheets (just add your links!)

Generates accurate transcripts using Supadata.ai — with 100 free uses/month

Creates a smart summary using DeepSeek AI:

🔹 Short summary of the video

🔹 Key points

🔹 Main topics

Youtube tutorial:
https://www.youtube.com/watch?v=uj7KaFSh95Y


Automatically updates your Google Sheet with the transcript and the AI-generated summary

How to set it up:
Create a simple Google Sheet with these columns:

Url – link to the YouTube video

Status – set to pending to trigger the automation, updated to done after completion

Transcript – filled automatically

Summary – filled automatically

Once your sheet is ready, the automation takes care of the rest — no technical skills needed.

Why you'll love it:
This is the perfect tool for content creators, researchers, marketers, and educators who want to save time, extract insights faster, and never miss key ideas from long videos.

Want something custom?
Got feedback or want to build your own custom automation or workflow?
We’d love to hear from you! Reach out to us at jacobmarketingservice@gmail.com — let’s bring your idea to life.

## 📊 Basic Information

- **Workflow ID:** 5412
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 2048
- **Downloads:** 204
- **Created:** 2025/6/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5412)

## 👤 Author

- **Name:** Jacob
- **Username:** @jacobgad

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatDeepSeek** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **googleSheets** (×3)
- **stickyNote** (×2)
- **httpRequest** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
