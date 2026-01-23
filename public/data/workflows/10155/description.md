## 🤯 Problem of Traditional Bookkeeping
- 🔀 **Context switch kills the habit**: Because bookkeeping lives outside the apps you use every day, you postpone it → **forget to log**.
- 🧱 **High input friction**: You’re forced to fill rigid fields (amount/category/date/notes…), which is slow and discouraging for quick capture.
- 🎙️💸 **Weak or pricey natural-language options**: A few tools support voice/chat, but they’re often **expensive**, and the experience is hit-or-miss.
- 🔒📦 **Limited data ownership**: Records live on third-party servers, so **privacy and control** are diluted.

## 📲 How This Workflow Fixes It
- 💬 **Put the capture back where you already are**: Log expenses directly inside **Telegram** (or other channels) in a **familiar chat**—no new app to learn.
- ⚡ **Ultra-low-friction, unstructured input**: Send **text**, a **voice note**, or a **receipt photo**—the flow extracts **amount · item · date**, supports multiple languages and relative dates, and can **split multiple expenses** from one message.
- 🗂️📝 **Your data, your sheet**: Final records are written to **your own Google Sheet** (columnar fields or a JSON column). You keep **full control**.

### 🔗 Demo Google Sheet: [click me](https://docs.google.com/spreadsheets/d/18PmxJov2VszEtUlK3IB4Jfbm37hRQbS8D90SSscvoW8/edit?usp=drive_link)


---

## 👥 Who Is This For
- 😤 **Anyone fed up with traditional bookkeeping** but curious about an AI-assisted, chat-based way to log expenses.
- 🤖 **People who tried AI bookkeeping apps** but found them pricey, inflexible, or clunky.
- 💵 **Bookkeeping beginners** who want frictionless capture first, simple review and categorize later.

---

## 🧩 How It Works
- 💬 Captures expenses from **Telegram** (text, voice note, or receipt photo).
- 🔎 Normalizes inputs into **raw text** (uses Gemini to transcribe voice and extract text from images).
- 🧠 Parses **amount · item · date** with an LLM expense parser.
- 📊 Appends tidy rows to **Google Sheets**.
- 🔔 Sends a **Telegram confirmation** summarizing exactly what was recorded.

---

## 🛠️ How to Set Up

### 1) 🔑 Connect credentials (once)
- TELEGRAM_BOT_TOKEN
- LLM_API_KEY
- GOOGLE_SHEETS_OAUTH


### 2) 🚀 Quick Start
- **Setup:** Create a Google Sheet to store **Log Expense** data and configure it in n8n.
- **Telegram:** Fill in and verify the **Telegram chatId**.
- ***Remember enable the workflow!***

---

## 🧰 How to Customize the Workflow
- 📝 **Other user interaction channels**: Add Gmail, Slack, or a website Webhook to accept email/command/form submissions that map into the same parser.
- 🌍 **Currency**: Extract and store **`currency`** in its own column (e.g., `MYR`, `USD`); keep **`amount` numeric** only (no symbols).
- 🔎 **Higher-accuracy OCR / STT to reduce errors**

---

### 📩 Help
**Contact:** owenlzyxg@gmail.com
