🎥 Telegram Image-to-Video Generator Agent (Veo3 / Seedance Integration)
⚠️ This template uses [community nodes] and some credential-based HTTP API calls (e.g. Seedance/Wavespeed). Ensure proper credentials are configured before running.

🛠️ In the accompanying video tutorial, this logic is built as two separate workflows:

Telegram → Image Upload + Prompt Agent
Prompt Output → Video Generation via API

Watch Full Video Tutorial: https://youtu.be/iaZHef5bZAc&list=PL05w1TE8X3baEGOktlXtRxsztOjeOb8Vg&index=1

✨ What This Workflow Does
This powerful automation allows you to generate short-form videos from a Telegram image input and user prompt — perfect for repurposing content into engaging reels.

From the moment a user sends a photo with a caption to your Telegram bot, this n8n workflow:

📸 Captures the image and saves it to Google Drive
🧠 Uses an AI Agent (via LangChain + OpenAI) to craft a Seedance/Veo3-compatible video prompt
📑 Logs the interaction to a Google Sheet
🎞️ Sends the prompt + image to the Seedance (Wavespeed) API to generate a video
🚀 Sends the resulting video back to the user on Telegram — fully automated

🔗 How It Works (Step-by-Step)
Telegram Bot Trigger
Listens for incoming images and captions
Conditional Logic
Filters out invalid inputs
AI Agent (LangChain)

Uses OpenAI GPT to:
Generate a video prompt
Attach the most recent image URL (from Google Sheet)
Google Drive Upload
Saves the Telegram image and logs the share link
Google Sheets Logging
Appends a new row with date + file link
Wavespeed (Seedance/Veo3) API
Calls the /bytedance/seedance-v1-pro-i2v-480p endpoint with image and prompt
Video Polling & Output
Waits for generation completion
Sends back final video file to Telegram user

🛠️ Tools & APIs Used
Telegram Bot (Trigger + Video Reply)
LangChain Agent Node
OpenAI GPT-4.1-mini for Prompt Generation
Simple Memory & Tools (Google Sheets)
Google Drive (Image upload)
Google Sheets (Log prompts + image URLs)
Wavespeed / Seedance API (Image-to-video generation)

🧩 Requirements
Before running this workflow:
✅ Set up a Telegram Bot and configure credentials
✅ Connect your Google Drive and Google Sheets credentials
✅ Sign up for Wavespeed / Seedance and generate an API key
✅ Replace placeholder values in:

HTTP Request nodes

Google Drive folder ID
Google Sheet document ID

📦 Suggested Use Cases
Generate short-form videos from image ideas
Reformat static images into dynamic reels
Repurpose visual content for TikTok/Instagram