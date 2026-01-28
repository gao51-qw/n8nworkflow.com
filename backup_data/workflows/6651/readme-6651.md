# Generate AI images in Telegram with GPT-4o enhancement and Flux Pro

> # 🧠 AI Image Generator Bot — Telegram + AI/ML API

This n8n workflow allows users to generate AI-generated images by sending messages to a Telegram bot. Each request is logged in Google Sheets and limited by a **daily quota** per user. Image prompts are enhanced by LLM before generation.

---

## 🚀 Features

- 📩 Telegram-based input
- 🧠 Prompt enhancement with GPT-4o
- 🎨 AI image generation via `flux-pro` model (AIMLAPI)
- 🖋 Auto-caption generation
- 📊 Usage tracked per user daily in Google Sheets
- 🔒 Daily request limits
- ✅ Graceful UX for over-limit cases

---

## 🛠 Setup Guide

### 1. 📲 Create Telegram Bot
- Talk to [@BotFather](https://t.me/BotFather)
- Use `/newbot` → Choose a name and username
- Save the **bot token**

### 2. 🔐 Set Up Credentials in n8n
- `Telegram API`: Use your bot token
- `Google Sheets`: Set up via OAuth2 or Service Account
- `AI/ML API`: Set up with your API key from [aimlapi.com](https://aimlapi.com/?utm_source=aimlapi-n8n-readme&utm_medium=github&utm_campaign=integration)

### 3. 📗 Prepare Google Sheet
- Name: Any (e.g., `Image bot usage statistic`)
- Sheet: `Sheet1`
- Columns:
 ```
  user_id | date | query | result_url
```

* Share the sheet with the email of your service/OAuth2 account

### 4. 🔧 Configure the Workflow

* Open the n8n editor and import the JSON
* Update:

  * Telegram credential
  * Google Sheets credential and Sheet ID
  * AI/ML API credentials

---

## ⚙️ Flow Summary

| Node                           | Function                             |
| ------------------------------ | ------------------------------------ |
| `📩 Receive Telegram Message`  | Triggered by user message            |
| `📊 Fetch Usage Logs`          | Reads today's entries from Sheet     |
| `📈 Count Today’s Requests`    | Counts how many generations today    |
| `🔢 Set Daily Limit`           | Sets default limit (5)               |
| `🚦 Check Limit Exceeded?`     | If over limit → notify               |
| `🧠 Enhance Prompt`            | Uses GPT-4o to improve user's prompt |
| `🎨 Generate Image`            | Sends to AIMLAPI to generate         |
| `🖋 Describe Image`            | Generates caption for the image      |
| `📤 Send Image to User`        | Sends back to Telegram               |
| `📝 Log Successful Generation` | Writes to Google Sheets              |

---

## 📁 Data Logging

Each successful generation is stored in Google Sheets:

| user\_id | date | query | result\_url |
| -------- | ---- | ----- | ----------- |

---

## 💡 Example Prompt Flow

1. User sends:

   ```
   astronaut cat floating in space
   ```

2. Bot replies:

   &gt; **Here’s your image:**
   &gt; A majestic feline astronaut drifts through a glittering cosmic void, its helmet reflecting starlight.

3. The image is sent with the caption

---

## 🔄 Daily Limit

* Default: `5` generations/day per Telegram user
* You can change this in the `🔢 Set Daily Limit` node

---

## 🧪 Testing

* Use `/execute workflow` in Telegram — not "Execute Node" in editor
* Log test results to sheet
* Add extra `Set` nodes for debugging as needed

---

## 📎 Resources

* 🔗 [AI/ML API Docs](https://docs.aimlapi.com/?utm_source=aimlapi-n8n-readme&utm_medium=github&utm_campaign=integration)
* 🖼️ [flux-pro Model UI](https://aimlapi.com/models?utm_source=aimlapi-n8n-readme&utm_medium=github&utm_campaign=integration)


## 📊 Basic Information

- **Workflow ID:** 6651
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 1122
- **Downloads:** 112
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6651)

## 👤 Author

- **Name:** AI/ML API | D1m7asis
- **Username:** @d1m7asis

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **googleSheets** (×2)
- **aggregate** 
- **set** 
- **if** 
- **telegram** (×2)
- **httpRequest** 
- **n8n-nodes-aimlapi.aimlApi** (×2)
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
