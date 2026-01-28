# Manage calendar with voice & text using GPT-4, Telegram & Google Calendar

> # Manage Calendar with Voice & Text Commands using GPT-4, Telegram & Google Calendar

This n8n workflow transforms your Telegram bot into a **personal AI calendar assistant**, capable of understanding both **voice and text commands** in **Romanian**, and managing your Google Calendar using the **GPT-4 model** via LangChain.

Whether you want to create, update, fetch, or delete events, you can simply speak or write your request to your Telegram bot — and the assistant takes care of the rest.

## 🚀 Features

- Voice command support using **Telegram voice messages** (.ogg)
- Transcription using **OpenAI Whisper**
- Natural language understanding with **GPT-4 via LangChain**
- Google Calendar integration:
  - ✅ Create Events
  - 🔁 Update Events
  - ❌ Delete Events
  - 📅 Fetch Events
- Responses sent back via Telegram

## 🛠️ Step-by-Step Setup Instructions

### 1. Create a Telegram Bot
- Go to [@BotFather](https://t.me/BotFather) on Telegram.
- Send `/newbot` and follow the instructions.
- Save the **Bot Token**.

### 2. Configure Telegram Trigger Node
- Paste the Telegram token into the **Telegram Trigger** and **Telegram nodes**.
- Set **updates** to `["message"]`.

### 3. Set up OpenAI Credentials
- Get an OpenAI API key from https://platform.openai.com
- Create a credential in n8n for **OpenAI**.
- This is used for both **transcription** and **AI reasoning**.

### 4. Set up Google Calendar
- In Google Cloud Console:
  - Enable **Google Calendar API**
  - Set up OAuth2 credentials
  - Add your n8n redirect URI (usually `https://yourdomain/rest/oauth2-credential/callback`)
- Create a credential in n8n using **Google Calendar OAuth2**
- Grant access to your calendar (e.g., "Family" calendar).

## ⚙️ Customization Options

### 🗣️ Change Language or Locale
- The transcription node uses `"en"` for English. Change to another locale if needed.

### ✏️ Edit Prompt
- You can modify the prompt in the **AI Agent** node to include your name, work schedule, or specific behavior expectations.

### 📆 Change Calendar Logic
- Adjust time ranges or filters in the `Get Events` node
- Add custom logic before `Create Event` (e.g., validation, conflict checks)

## 📚 Helpful Tips

- Make sure n8n has HTTPS enabled to receive Telegram updates.
- You can test the flow first using only text, then voice.
- Use AI memory or vector stores (like Supabase) if you want context-aware planning in the future.


## 📊 Basic Information

- **Workflow ID:** 4102
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 8756
- **Downloads:** 875
- **Created:** 2025/5/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4102)

## 👤 Author

- **Name:** Marian Tcaciuc
- **Username:** @mariantk

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **googleCalendarTool** (×4)
- **telegramTrigger** 
- **if** 
- **telegram** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
