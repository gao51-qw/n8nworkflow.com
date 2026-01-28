# 🎥 End-to-End YouTube Video Automation Workflow with n8n, HeyGen & AI

**Automate the entire YouTube content creation pipeline — from video idea to AI-generated avatar video, upload, metadata generation, and publishing — with zero manual intervention!**

---

### Who is this for?

This template is perfect for:

* **Affiliate marketers** (e.g., PartnerStack, SaaS products)
* **YouTube creators** scaling video production
* **Agencies** managing client content
* **Educators and coaches** delivering automated video lessons
* **Entrepreneurs** running faceless YouTube channels

---

### 🧠 What problem does it solve?

Publishing consistent, high-quality video content is essential for audience growth and monetization. But manually creating each video — researching, writing, recording, uploading, and optimizing — is slow, repetitive, and unsustainable at scale.

This workflow solves that by automating:

* ✅ Content sourcing from Google Sheets
* ✅ Script generation with AI
* ✅ Avatar video creation via HeyGen
* ✅ YouTube upload and metadata
* ✅ Final publishing and status update

All done without touching a single button. Schedule it weekly and watch videos go live while you sleep.

---

### ⚙️ What this workflow does

* 📥 Reads video ideas from a Google Sheet (e.g., PartnerStack affiliate product)
* 🌐 Fetches product details from the web using HTTP Request
* 🧠 Generates a promotional video transcript using an AI agent
* 🎙 Converts the script to an avatar video using HeyGen API
* ⏳ Waits for the video to render and fetches download URL
* ⬆️ Uploads the video to YouTube via API
* 🧠 Generates title, description, tags, and hashtags using AI
* 🔄 Updates video metadata and changes visibility to **Public**
* 📊 Logs publication details back to Google Sheets
* 👤 Optional human-in-the-loop step before publishing

---

### 🛠 Setup

1. 🔌 Connect the following integrations:

   * Google Sheets (or Airtable)
   * HeyGen API
   * YouTube Data API (OAuth 2.0)
   * OpenAI / Gemini / Ollama

2. 🧾 Add your video ideas to Google Sheets:

   * Include product name, link, and "To Do" status

3. 📂 Import the n8n template and configure API credentials

4. 🧠 Customize your AI prompt for tone, format, and industry

5. 🕒 Schedule it to run weekly (1 video per week)

---

### ✏️ How to customize this workflow

* Swap Google Sheets with Airtable, Notion, or API feeds
* Modify AI prompts for different use cases: reviews, explainers, tutorials
* Use D-ID, Synthesia, or your preferred avatar platform
* Add analytics, thumbnails, or comment automation
* Localize content for multi-language channels
* Integrate with Slack, Discord, or Telegram for notifications

---

### 📌 Sticky Notes Included

* 📊 Get Partner Idea: Pulls one item from the Google Sheet
* 🌐 Fetch Content: Extracts product details via HTTP request
* 🧠 AI Script: Generates video transcript using GPT or Gemini
* 🎥 Video Generation: Sends script to HeyGen, waits for rendering
* ⬆️ Upload to YouTube: Uploads video file
* 🧠 Metadata Generator: Creates optimized title, tags, description
* 🗓 Metadata Update: Updates YouTube metadata and sets video to Public
* 📋 Sheet Update: Marks video as published in the Google Sheet
* 🧑 Human Approval (Optional): Pause & resume on manual review

---

### 🌐 Useful Links

* 🧠 [Mastering n8n on Udemy](https://www.udemy.com/course/mastering-n8n-ai-agents-api-automation-webhooks-no-code/?referralCode=0309FD70BE2D72630C09)
* 📘 [n8n Learning Guidebook](https://lms.syncbricks.com/books/n8n)
* 🚀 [Sign Up for n8n Cloud (Use Code: AMJID10)](https://n8n.syncbricks.com)
* 🔧 [SyncBricks Automation Blog](https://syncbricks.com)
* 📺 [YouTube Channel – SyncBricks](https://www.youtube.com/channel/UC1ORA3oNGYuQ8yQHrC7MzBg?sub_confirmation=1)

---

### 🔗 Why this workflow?

This advanced automation setup is ideal for users exploring:

* YouTube automation via n8n and API
* AI-powered content pipelines with OpenAI/Gemini
* Avatar video generation (HeyGen / D-ID / Synthesia)
* Workflow automation for affiliate marketing
* Full-stack video publishing using no-code tools
* Enterprise-grade publishing for brands and creators

Built with modularity, customization, and full control in mind — whether you’re using n8n Cloud or a self-hosted instance.
