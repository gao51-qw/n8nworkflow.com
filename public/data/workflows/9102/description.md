# 🎨 Anime Image Generator with LLM-Enhanced Prompts

This workflow turns a **short text idea** into **stunning, AI-generated anime-style images**, all from **Telegram**.  
It combines a **chat LLM for prompt enhancement** with **Gemini (free)** or **Leonardo.AI (paid)** image models.

---

## 🌟 What It Does
- Accepts a text prompt sent via Telegram.  
- Uses an LLM (DeepSeek via OpenRouter) to **expand and enrich the idea** into several **anime-ready prompts**.  
- Lets you **choose the image engine**:
  - **Gemini** (90-day free trial with a GCP account).
  - **Leonardo.AI** (paid, higher-fidelity anime rendering).
- Generates 4 images per query, converts them to files, and **delivers the images back to your Telegram chat**.

---

## ⚙️ How It Works
1. **Telegram Trigger** — waits for a text message from you.  
2. **Image-count Node** — stores your prompt & sets how many images to create (default: 4).  
3. **Prompt Generator (LLM)** — transforms your simple prompt into multiple detailed, visually rich anime prompts.  
4. **Split & Loop** — sends each refined prompt to the chosen image generator.  
5. **Image Generator**:
   - Default: **HTTP-Gemini** node.
   - Alternative: **HTTP-Leonardo AI** node (swap in for better quality).
6. **Convert to File & Send** — decodes the generated images and sends them back to you on Telegram.

---

## 🔑 Setup
- **Telegram Bot**
  - Create a bot using [BotFather](https://t.me/BotFather).
  - Add your Bot Token & your Telegram User ID to the workflow (look for “Configure Me!” sticky notes).
- **LLM Provider**
  - Default: **DeepSeek via OpenRouter** — used to expand prompts.
  - You can swap this with any other chat LLM you prefer.
- **Image Engine**
  - Default: **Gemini** (free trial, good baseline quality).
  - Optional: **Leonardo.AI** for anime-focused, premium-quality images.  
    Replace the `HTTP-Gemini` node with the `HTTP-Leonardo AI` node and set up your Leonardo API key as a Header Auth credential.
- **Optional Adjustments**
  - Change default **number of images** in the `Image-count` node.
  - Tweak the LLM prompt template for different artistic styles (e.g., pastel slice-of-life, fantasy, action, cyberpunk).

---

## 💡 Tips
- Start with **short, plain prompts** — e.g.,  
  `girl with umbrella in neon city street at night`  
  The LLM will enrich it automatically.
- If images look flat, try **Leonardo.AI** or adjust the prompt style and guidance scale.
- Avoid NSFW or copyrighted character prompts — follow the providers’ usage policies.
- Keep your API keys **private** and never share them in screenshots.

---

## 👥 Who Is This For
- **Anime creators & hobbyists** who want to visualize characters or scenes quickly.  
- **Content creators & social posters** who want to share unique anime-style visuals.  
- Anyone who wants **easy AI image generation via Telegram**, without needing to master prompt engineering.

---

✨ **Ready to go:**  
Run the workflow, send a prompt to your Telegram bot, and watch it turn into **beautiful anime images**.
