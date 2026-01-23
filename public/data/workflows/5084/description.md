

## 🧠 Overview
This n8n automation turns any RSS feed into a spoken podcast episode, using OpenAI for summarization and ElevenLabs for voice generation. The final audio is then sent straight to your Telegram for instant publishing or listening.

📌 Works with both self-hosted and cloud-based n8n instances. No-code podcasting made simple.
👥 Who is this for?
Podcasters & creators who want to automate content
News curators or newsletter writers
Agencies turning articles into daily voice updates
Anyone who wants to voice AI-generated summaries and distribute via Telegram
🚀 What this workflow automates
📡 Pulls the latest article from your chosen RSS feed
🧠 Uses OpenAI to summarize or rewrite the article
🗣️ Generates a natural-sounding podcast using ElevenLabs
📲 Sends the audio file to your Telegram inbox
## 🧰 What You’ll Need
🔗 RSS feed link (any source of fresh content)
🔑 ElevenLabs API key (for voice generation)
🧠 OpenAI API key (for summarization or rewriting)
💬 Telegram Bot Token & your personal Chat ID (to receive the audio)
🛠️ Setup Instructions
Step 1: Get Your Chat ID & Telegram Bot Token

Open Telegram
Search for @BotFather
Create a new bot → Copy the token
Search for @userinfobot → Copy your chat ID
Save both for use in the Telegram node
Step 2: Create/Open an ElevenLabs Account

Go to https://www.elevenlabs.io
Copy your API key from the dashboard
Choose your voice (the voice ID will be used in the workflow)
Ensure your plan supports audio generation (free tier includes monthly usage)
Step 3: Generate an OpenAI API Key

Log in to https://platform.openai.com
Generate your API key
Use GPT-4 or GPT-3.5 for best results
Step 4: Configure Credentials in n8n

In n8n → Settings → Credentials, set up:

OpenAI API → Add your key
HTTP Header Auth → For ElevenLabs
Telegram Bot → Add your token
Step 5: Import and Configure the Workflow

Go to n8n → Workflows → Import
Upload your .json file
In the RSS node, replace the default link with your own feed
Update the ElevenLabs node with:
Your API key
Voice ID
Update Telegram node with:
Your bot token
Your personal chat ID
🧩 Customization Tips
Change the Feed Source

Swap out the RSS feed URL to pull from different blogs, news sites, or content platforms.

Control Script Style

Edit the OpenAI prompt to:

Make it more casual or formal
Add a call-to-action or intro line
Include a sign-off (e.g., “Thanks for listening!”)
Use Different Voices

In ElevenLabs, you can:

Create a custom voice
Choose one with a specific accent or tone
Adjust stability or clarity for better results
Add Distribution Channels

Send the audio to:

Email
Notion
Google Drive
A podcast host with API support (e.g. Podbean, Buzzsprout)
## 🧪 Troubleshooting
Problem	Solution
Audio not generating	Check ElevenLabs voice ID and credit limits
Telegram not sending	Ensure bot token and chat ID are correct
RSS not pulling content	Verify feed URL and test in browser
Summary is too short/long	Adjust prompt or temperature in OpenAI node
📣 Getting Support
n8n Docs
ElevenLabs API Docs
OpenAI API Reference
n8n Community
💌 Need help or customization? Email: dimejicole21@gmail.com
🌟 Enjoyed this template?
Give it a ⭐ in the library and help creators automate their podcast workflow with AI and voice tech!

“From RSS feed to voiced podcast in minutes — fully automated.”
