# Summarize youtube videos from transcript for social media

> # 🎥 YouTube Video Summarizer for Social Media

Turn any YouTube video into a short, structured summary using AI — perfect for content creators, marketers, or social media managers.

---

## 🔧 What We Built

We created a no-code automation in **n8n** that:

- Accepts a YouTube Video ID via a form
- Fetches the video transcript using an external API
- Summarizes the transcript using AI (Google Gemini)
- Automatically saves the summary to Google Docs for team use

---

## 🧩 Flow Overview

| Step | Description |
|------|-------------|
| ✅ **Form Trigger** | User submits a YouTube video ID using an n8n form |
| 🔁 **Set Node** | Maps the YouTube video ID for use in the API request |
| 🌐 **HTTP Request (External API)** | Calls the `YouTube Transcriptor AI API` via [RapidAPI](https://rapidapi.com/PrineshPatel/api/youtube-transcriptor-ai) to fetch transcript |
| 🧹 **Formatter (Code Node)** | Joins transcript lines into a readable text block |
| 🧠 **AI Agent + Google Gemini (via Langchain)** | Summarizes the full transcript into bullet points and tone |
| 🧽 **Optimizer (Code Node)** | Extracts just the summary from the AI response |
| 📝 **Google Docs Node** | Appends the clean summary to a shared Google Doc |

---

## 🌍 Real-World Problem Solved

### ❌ The Challenge

- Creators and marketers waste hours watching full videos just to extract the key points.
- Manual summarization is inconsistent, repetitive, and delays content planning.

### ✅ Our Solution

- ⏱️ **Reduces time** spent watching videos
- 🧠 **AI-powered summaries** keep tone consistent and structured
- 📄 **Auto-sync with Google Docs** makes summaries instantly available for teams

🔥 Bonus: This uses the [YouTube Transcriptor AI API](https://rapidapi.com/PrineshPatel/api/youtube-transcriptor-ai), so no need to manually scrape captions or use browser extensions.

---

## 🚀 Ideal Use Cases

- Repurpose YouTube content into Instagram Reels, LinkedIn posts, or blog content
- Build a video summary library for your editorial team
- Quickly extract talking points from podcast episodes

---

## 🛠️ Tech Stack

- **n8n** – workflow automation engine  
- **YouTube Transcriptor AI API** – via [RapidAPI](https://rapidapi.com/PrineshPatel/api/youtube-transcriptor-ai)  
- **Google Gemini (via Langchain)** – AI summarization  
- **Google Docs** – stores the final summary  
- **JavaScript nodes** – custom text parsing & formatting

---

💡 Want to customize it? Add Slack, Airtable, Notion, or Tweet auto-posting to expand the flow.

Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

Save time, stay consistent, and grow your LinkedIn presence effortlessly!

## 📊 Basic Information

- **Workflow ID:** 5292
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 2591
- **Downloads:** 259
- **Created:** 2025/6/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5292)

## 👤 Author

- **Name:** Evoort Solutions
- **Username:** @evoortsolutions

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleDocs** 
- **set** 
- **httpRequest** 
- **code** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
