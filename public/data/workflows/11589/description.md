# **POV Faceless Video Generator**

Create viral POV-style faceless videos automatically — from topic → visuals → sounds → rendered video → upload.
This workflow is built for creators, YouTubers, automation agencies, and content studios that want to scale short-form content production without showing their face.

---

## 🧾 Overview

This n8n automation takes a video topic as input and generates:

* Titles
* Scripts
* Visuals
* AI video clips
* Background audio
* Final rendered POV-style faceless video

A Publishing Agent module can even upload the final output directly to YouTube.
Everything — prompts, images, videos, audio, transitions, and uploads — is generated end-to-end with **zero manual editing**.

---

## ⚙️ Key Features

* 🎯 **Topic-based generation** → Just input your niche or daily idea
* ✍️ **LLM-generated scripts & prompts** using high-quality OpenAI models
* 🖼️ **AI visual generation** (image & video clips)
* 🔊 **Text-to-speech narration** with MP3 export
* 🎬 **Automated video renderer** (assemble clips, audio & overlays)
* 📤 **Auto-upload to YouTube** via Publishing Agent
* 🧱 **Modular design** — easily replace or upgrade image/video/sound models

---

## 🧱 Workflow Breakdown

### **1️⃣ INPUT: Video Topic**

**Nodes:**

* Schedule Trigger / Google Sheets → pull new topics automatically
* Generate Titles → produces 5–10 title variations
* OpenAI Model → Title Parser → formats selected title

This section generates the creative foundation for the entire video.

---

### **2️⃣ Generate Prompts (Script & Shot List)**

Produces:

* A cinematic POV-style script
* Camera directions
* Image prompts
* Video prompts

All outputs are optimized for AI image/video generators.
Uses: **OpenAI / OpenRouter LLM**

---

### **3️⃣ Generate Images (AI Art Module)**

**Nodes:**

* Text-to-Image
* Wait
* Get Image

Generates multiple POV-style still images (hands, walking scenes, object interactions). Good for:

* Intro shots
* Cutaways
* Thumbnails

---

### **4️⃣ Generate Videos (AI Video Clips)**

**Nodes:**

* Image-to-Video / Prompt-to-Video
* Wait
* Get Video

Creates 3–6 second POV clips for each step in the script. Examples:

* Walking through a hallway
* Opening a door
* Typing
* Grabbing an object

All clips flow into the rendering module.

---

### **5️⃣ Generate Sounds (Narration + Background Audio)**

**Nodes:**

* Text-to-Speech
* Upload MP3
* Update Access

This module handles:

* Full voiceover narration
* Ambient background audio / SFX
* Preparing audio files for final video rendering

---

### **6️⃣ OUTPUT: Final Video Assembly**

**Nodes:**

* Merge
* List Elements
* Render Video
* Final Video Link

This stage assembles:

* AI-generated clips
* Narration audio
* Background ambiance
* Text overlays
* Intro/outro elements

Outputs a polished MP4 file ready for publishing.

---

### **7️⃣ Publishing Agent (YouTube Auto-Upload)**

**Nodes:**

* Schedule Trigger → Get Video Link
* Get Video File
* YouTube Upload

This module:

* Pulls the latest generated videos
* Uploads automatically to your YouTube channel
* Supports title, description, tags, visibility, thumbnails
* Perfect for scheduled daily posting

---

## 🧰 Setup Instructions

### Connect OpenAI / OpenRouter

* One credential for script/prompt generation
* Another optional credential for image/video models

### Choose your AI image/video providers

Compatible with:

* DALL·E
* Midjourney API
* Stability
* RunwayML
* Pika
* Luma Dream Machine
* Flux models

### Connect Google Sheets (optional)

For:

* Topic management
* Content tracking

### Enable YouTube OAuth

Required for auto-upload.

### Customize styles:

* POV type
* Video duration
* Voice style
* Background music
* Prompt templates

Run a test to confirm all connections and render timing.

---

## 🧩 Customization Options

| Goal                         | How to Modify                                          |
| ---------------------------- | ------------------------------------------------------ |
| Change POV style             | Edit prompt templates in “Generate Prompts”            |
| Use different video model    | Replace video nodes (Pika, RunwayML, Luma, Flux, etc.) |
| Add subtitles                | Use Whisper/OCR + FFmpeg overlays                      |
| Add transitions              | Add FFmpeg transitions in Render Video                 |
| Generate vertical videos     | Set output to 1080×1920                                |
| Auto-publish to Shorts/Reels | Duplicate Publishing Agent and configure platforms     |

---

## 🧠 Example Use Case

A faceless creator wants to upload daily **POV Motivation** or **POV Business Advice** videos.
The workflow generates:

* Titles
* Visuals
* Voiceover
* Full edit
* YouTube upload

100% automated — no editing required.

---

## ✅ Benefits

* Produce **10× more faceless videos daily**
* Fully automated end-to-end pipeline
* Consistent POV aesthetic
* No camera or studio required
* Instant upload to YouTube
* Ideal for agencies selling bulk video packages
* Perfect for Shorts, Reels, TikTok & YouTube videos
