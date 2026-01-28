## 📊 Description
Automate your entire content-to-audio workflow by converting new blog articles into fully produced podcast episodes using AI scriptwriting and ElevenLabs narration. 🎙🤖 This automation monitors an RSS feed for new posts, rewrites each article into a human-sounding podcast script, generates natural-sounding audio, uploads the MP3 file to Google Drive, builds an RSS-compatible episode entry, and notifies your team on Slack when the episode is ready. Perfect for brands, creators, and teams looking to scale multi-format content distribution without manual recording or editing. ⚡🎧

## 🔁 What This Template Does
1️⃣ Runs daily (10 AM) to check your RSS feed for new blog posts. ⏰
 2️⃣ Fetches newly published articles and loops through each one. 🌐
 3️⃣ Sends the article text to an AI agent to rewrite it into a natural, conversational podcast script. 📝🤖
 4️⃣ Ensures clean AI output using a structured JSON schema. 📐
 5️⃣ Converts the rewritten script into high-quality MP3 audio using ElevenLabs. 🎙🎧
 6️⃣ Uploads the MP3 file into a Google Drive folder. ☁️
 7️⃣ Generates RSS XML markup for a new podcast episode entry. 📰
 8️⃣ Extracts title, MP3 link, and metadata for feed publishing. 🔗
 9️⃣ Sends a Slack notification that the new episode is ready. 💬
 🔟 Outputs episode URL and metadata for further automations. 🔁

## ⭐ Key Benefits
✅ Automatically turns written blog content into high-quality audio episodes
 ✅ Produces natural, human-like narration using ElevenLabs
 ✅ Maintains consistent podcast formatting with automated script structuring
 ✅ Uploads finished episodes directly to Google Drive for distribution
 ✅ Generates ready-to-publish RSS entries for podcast hosting
 ✅ Notifies your team instantly when new episodes go live
 ✅ Saves time for marketing, content, and podcast production teams

## 🧩 Features
- RSS feed triggering and content ingestion
- Azure OpenAI GPT-4o script rewriting
- Structured JSON output parser for stable results
- ElevenLabs text-to-speech generation
- Google Drive MP3 upload
- Automated RSS feed item builder
- Slack notifications for episode release
- Batch processing for multiple new posts
- Consistent schedule-based automation

## 🔐 Requirements
- Azure OpenAI API credentials (GPT-4o)
- ElevenLabs API key
- Google Drive OAuth2 credentials
- Slack API token
- Public or private RSS feed URL
- Configured Google Drive folder for MP3 storage

## 🎯 Target Audience
- Content teams repurposing blog posts into audio
- Podcasters wanting automated episode creation
- Marketing and media companies scaling content
- Creators expanding into multi-format distribution
- Teams using blogs as primary input for podcasts
