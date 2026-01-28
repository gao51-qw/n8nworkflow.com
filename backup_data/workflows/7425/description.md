*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

🌅 **Daily AI Inspiration (n8n + AI/ML API + Telegram)**
This n8n workflow sends a short, original AI‑generated quote and a matching cinematic image to your Telegram chat every morning. It auto‑captures your chat ID from the first message you send to the bot, then runs on a daily schedule.

**🚀 Key Features**

* Zero‑Friction Delivery — Just send any message once; the chat ID is saved for daily drops.
* AI Quote Writer — GPT‑4o crafts concise, uplifting quotes (no author, no quotes).
* Cinematic Visuals — `flux-pro` turns each quote into a mood‑rich illustration.
* Hands‑Off Scheduling — Runs at a set time every day via Schedule Trigger.
* Telegram Ready — Sends the image + caption directly to your chat.

**🛠 Setup Guide**

1. **Create AI/ML API Credentials**

* Get your API key in AI/ML API.
* In n8n → **Credentials**, add **AI/ML API** (Bearer token, Base URL `https://api.aimlapi.com/v1`).

2. **Create Telegram Credentials**

* In Telegram, open **@BotFather** → `/newbot` → save the bot token.
* In n8n → **Credentials → Telegram API**, paste the token.

3. **Capture Chat ID**

* Start the workflow, message your bot once (Telegram Trigger will store the chat ID automatically).

4. **Schedule & Test**

* Set your preferred time in **Schedule Trigger** (e.g., 07:30).
* Execute once to confirm delivery, then enable the workflow.

**💡 How It Works**

1. **Trigger** — Runs daily via Schedule Trigger (or manually after first chat message to capture chat ID).
2. **Quote Generation** — AI/ML API (GPT‑4o) produces a short, original, uplifting line.
3. **Image Creation** — AI/ML API (`flux-pro`) renders a cinematic image inspired by the quote.
4. **Telegram Delivery** — Sends the image to your chat with the quote as the caption (🌅 prefix).

Optional: tweak image size (`1024×1024` by default), add logging (Google Sheets), or extend with moderation, model switching, or multi‑chat routing.