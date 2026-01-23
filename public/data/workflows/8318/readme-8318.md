# Transform product photos into social media videos with Gemini AI, Kling & LATE

> 
![shorti_cover2.png](fileId:2321)
![exemple.png](fileId:2322)

## 👥 Who is this for?

Creators, marketers, and brands that want to turn a single product photo into premium motion clips, then optionally publish to Instagram/TikTok/YouTube via LATE.
No editing skills required.

---

## ❓ What problem does it solve?

Producing short vertical ads from a static packshot takes time (retouching, motion design, soundtrack, publishing).
This workflow automates the entire process: image enhancement → cinematic motion → optional upscale → soundtrack → share.

---

## 🛠️ What this workflow does

* Collects a product photo via Telegram.
* Generates **two refined edit prompts** + **two motion prompts** using multi-agent Gemini orchestration.
* Creates **two edited images** with Fal.ai Gemini-Flash (image edit).
* Renders **two 5s vertical videos** with Kling (via fal.run queue).
* Auto-stitches them (FFmpeg API) and optionally **upscales** with Topaz.
* Generates a **clean ambient soundtrack** with MMAudio.
* Sends previews + final links back on Telegram.
* Optionally publishes to **Instagram, TikTok, YouTube Shorts, and more via LATE**.

---

## ⚡ Setup

* **Telegram**: Bot token (Telegram node).
* **Fal.ai**: HTTP Header Auth (`Authorization: Bearer &lt;FAL_API_KEY&gt;`) for Gemini-Flash edit, Kling queue, FFmpeg compose, Topaz upscale, and MMAudio.
* **Google Gemini** (PaLM credential) for AI agents.
* **ImgBB**: API key for uploading  original/edited images.
* **LATE**: create an account at **[getlate.dev](https://getlate.dev/)** and use your API key for publishing (optional).

---

## ▶️ How to use

1. Start the workflow and DM your bot a clear product photo (jpg/jpeg/webp).
2. Approve the two still concepts when prompted in Telegram.
3. The orchestrator generates cinematic motion prompts and queues Kling renders.
4. Receive two motion previews, then a stitched final (upscaled + soundtrack).
5. Choose to auto-publish to Instagram/TikTok/YouTube via **[LATE](https://getlate.dev/)** (optional).

---

## 🎨 How to customize

* **Art Direction** → tweak the “Art Director” system message (lighting, backgrounds, grading).
* **Motion Flavor** → adjust the “Motion Designer” vocabulary for different camera moves/dynamics.
* **Durations/Aspect** → default is 9:16, 5s; you can change Kling duration.
* **Soundtrack** → edit the MMAudio prompt to reflect your brand’s sonic identity.
* **Publishing** → enable/disable LATE targets; customize captions/hashtags.

---

## ✅ Prerequisites

* A **Telegram bot** created via @BotFather.
* A **Fal.ai account** + API key.
* An **ImgBB account** + API key.
* (Optional) a **LATE account** with connected social profiles — sign up at **[getlate.dev](https://getlate.dev/)**.

---

💡 Detailed technical notes, architecture, and step-by-step flow explanation are included as sticky notes inside this workflow.

## 🆘 Support

If you need help setting up or customizing this workflow:

* 📧 Email: [bilsimaging@gmail.com](mailto:bilsimaging@gmail.com)
* 🌐 Website: [bilsimaging.com](https://bilsimaging.com)

I can provide guidance, troubleshooting, or custom extra workflow adaptations.


## 📊 Basic Information

- **Workflow ID:** 8318
- **Complexity:** advanced
- **Node Count:** 83
- **Views:** 1621
- **Downloads:** 162
- **Created:** 2025/9/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8318)

## 👤 Author

- **Name:** Bilel Aroua
- **Username:** @bilsimaging

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **telegram** (×12)
- **if** (×3)
- **@n8n/n8n-nodes-langchain.agentTool** (×2)
- **telegramTrigger** 
- **set** (×3)
- **httpRequest** (×26)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.agent** 
- **merge** (×7)
- **splitOut** (×2)
- **aggregate** (×2)
- **wait** (×6)
- **@n8n/n8n-nodes-langchain.toolThink** 
- **code** (×2)
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 83 nodes with 65 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
