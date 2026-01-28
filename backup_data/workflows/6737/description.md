# 🎬 AI Cinematic Quote Reels Generator – Turn Quotes into Viral Videos Automatically

Transform a single quote into a fully-rendered cinematic short video — with voice-over, visuals, and music — then publish it directly to TikTok, Instagram Reels, and YouTube Shorts.  
This isn’t just automation. It’s a full-stack AI video content engine built entirely in **n8n**.

---

## ⚙️ What It Does

- Converts any quote into an **8-second cinematic video** (vertical, 1080x1920)
- Adds **AI-generated voice-over, music, and visuals**
- Generates viral-ready captions for TikTok, Reels, and Shorts
- Publishes automatically via Postiz API
- Pulls content from Google Sheets — updates status after posting (no duplicates)

---

## 🔍 How It Works

1. Triggers daily or manually
2. Fetches one unposted quote row from Google Sheets
3. Uses **Google Gemini + GPT** to write scene + captions
4. Converts quote to voice with **ElevenLabs**
5. Renders video via **Google VEO3**
6. Merges audio + video + text in **Creatomate**
7. Upscales the final video via **Cloudinary**
8. Publishes directly to all 3 platforms via **Postiz**
9. Marks the quote as “Posted” in the sheet ✅

---

## 📊 Where the Data Comes From

All input (quote, tone, mood, style, voice ID) is stored in a Google Sheet.  
The workflow processes one new row per run — no duplicates, no missed posts.

---

## 🚀 Why It Matters

- Save **hours of creative work** every week  
- Deliver **high-quality, daily content** with zero effort  
- Create **consistent brand presence** across all major short-form platforms  
- Ideal for **creators, agencies, solopreneurs, SaaS founders, and content marketers**

---

## 📦 What's Included

- ✅ Full n8n JSON workflow (Cloud & Self-hosted compatible)  
- ✅ Google Sheets template with ready-to-use structure  
- ✅ Platform-specific post generator (TikTok, IG, YouTube Shorts)  
- ✅ Gemini + GPT prompt structure built-in  
- ✅ Voice-over via ElevenLabs  
- ✅ Complete documentation (PDF + inline sticky notes)  
- ✅ Setup instructions for all APIs and tokens

---

## 📈 What Results It Delivers

Clients have used it to:

- Launch daily video content channels on autopilot  
- Get 30k+ organic views from quote-based Shorts  
- Turn Notion/Sheet ideas into professional, scroll-stopping content  
- Deliver AI-powered video services to clients with **zero editing**

---

💡 If you're serious about scaling content with AI,  
this is the workflow that gets you there — without lifting a finger.

Let me know if you'd like a walkthrough or need help adapting it to your use case.
