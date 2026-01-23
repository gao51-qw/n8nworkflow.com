# Generate AI songs + music videos using Suno API, Flux, Runway and Creatomate

> This automation is designed to help you generate AI-powered music tracks, cover art, and fully rendered music videos — all triggered from a simple Telegram chat and managed via Google Sheets.

Sample Audio Generated: [Youtube Link](https://youtu.be/61MEf6MJEAM)

⚠️ **Note:** This is only a summary. The full setup guide (with detailed steps, API setup, code snippets, and integrations) is included in a **PDF** on the Gumroad **download page**. Follow it to configure everything seamlessly.

---

## ⚙️ What This Workflow Does

- Lets users interact with an AI agent on Telegram to submit song ideas.
- Automatically logs ideas in Google Sheets.
- Generates lyrics, music, cover images, and looping video backgrounds using AI APIs.
- Merges audio + video into a polished final clip.
- Uploads everything to Google Drive and sends a final video link back to the Telegram user.

---

## 🔗 Built with 3 Modular Workflows

1. **Telegram & Sheet Logger**  
   Collects ideas from users, stores them in a Google Sheet, and saves their chat ID for later notifications.

2. **AI Generation Engine**  
   Handles lyrics creation, music generation, image prompts, artwork, video background generation, and uploads.

3. **Final Render + Delivery**  
   Merges audio and video, uploads to cloud storage, updates the Sheet, and sends the finished video to Telegram.

---

## 🧩 Integrations Used

- Google Sheets  
- Telegram Bot API  
- Multiple AI APIs (for music, images, video, and compression)  
- Google Apps Script  
- Creatomate for video rendering  
- Cloud storage (via Google Drive)

---

## 🚀 How to Set It Up

- Import the `.json` file into your n8n instance.
- Copy the included Google Sheets and Creatomate templates.
- Set up the Google Apps Script using the included code.
- Replace all placeholder API keys and folder IDs.
- Test everything end-to-end using your Telegram bot.

---

✅ **Tip:** No coding experience needed — just follow the step-by-step documentation PDF provided in your Gumroad download. Everything is laid out clearly to get you running fast.

💰**Costs** Song generation costs (suno): $5 gets you 1000 credits, 1 song generation costs 12 credits, every api call for one song generates two versions by default. Check the song generation node to see the two versions. You can update the GSheet to append the two versions and send back to you to choose one. Flux Image gen cost is $0.04 per image. Runway cost is $0.16 per 10 seconds of video.

---

## 📊 Basic Information

- **Workflow ID:** 3814
- **Complexity:** advanced
- **Node Count:** 60
- **Views:** 2592
- **Downloads:** 259
- **Created:** 2025/5/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3814)

## 👤 Author

- **Name:** Joseph
- **Username:** @mjomba

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **wait** (×7)
- **httpRequest** (×15)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **merge** 
- **telegramTrigger** 
- **switch** (×3)
- **telegram** (×4)
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **googleSheetsTool** (×2)
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **googleSheetsTrigger** (×2)
- **googleSheets** (×5)
- **googleDrive** (×4)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 60 nodes with 54 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
