# Automate ASMR glass fruit video creation & publishing with Veo, Shotstack & Postiz

> 🎥 Veo Machine Reels Factory — Full User Guide
🧭 Introduction

The Veo Machine Reels Factory is an automated content creation system built in n8n that turns creative ideas into fully rendered ASMR-style glass fruit reels, ready to post on TikTok, YouTube Shorts, and Instagram Reels.

This template connects multiple AI and automation services into a single, repeatable pipeline. It eliminates manual steps — from concept brainstorming to posting — allowing creators or marketing teams to produce viral short-form videos hands-free.

⚙️ How It Works (In Short)

The workflow starts automatically every 8 hours (or manually when triggered).

It checks a Google Sheet to see which fruits have already been used.

An AI “Idea Agent” selects a new, unique glass fruit concept.

Another AI “Prompt Agent” writes a cinematic Google Veo 3 prompt describing the video.

The system sends that prompt to Google Veo, which generates the actual video file.

The video is automatically:

Converted to 9:16 vertical format via Shotstack

Uploaded to Google Cloud Storage

Posted to TikTok, YouTube, and Instagram through Postiz API

🧱 Requirements

Before running this workflow, make sure you have the following ready:

Category	Requirement
- Google Cloud:	Project ID, Service Account Email, and Storage Bucket (e.g., veo_courses)
- Veo Access:	Access to Google Veo 3.0 API (through Vertex AI or similar endpoint)
- Google Sheets:	A sheet with previous fruit ideas (used for avoiding duplicates)
- OpenAI Account:	API key configured in n8n credentials
- Shotstack Account:	API key (for cropping to 9:16)
- Postiz Account:	Active integrations for TikTok, YouTube, and Instagram

🧩 Workflow Structure Overview

The workflow can be divided into five main parts:

🕒 Automation & Data Input

🧠 AI Generation (Idea + Prompt Creation)

🎬 Video Generation with Google Veo

📱 Video Conversion & Upload

🚀 Auto-Publishing to Social Media

## 📊 Basic Information

- **Workflow ID:** 10175
- **Complexity:** advanced
- **Node Count:** 37
- **Views:** 566
- **Downloads:** 56
- **Created:** 2025/10/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10175)

## 👤 Author

- **Name:** Ayoub Boutouil
- **Username:** @alphbravotheg

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **googleSheets** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **aggregate** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **jwt** 
- **httpRequest** (×11)
- **switch** (×2)
- **wait** (×2)
- **convertToFile** 
- **googleCloudStorage** 
- **if** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 37 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
