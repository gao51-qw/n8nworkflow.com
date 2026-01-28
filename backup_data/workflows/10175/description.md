🎥 Veo Machine Reels Factory — Full User Guide
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