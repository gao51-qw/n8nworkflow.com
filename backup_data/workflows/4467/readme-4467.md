# Generate enhanced AI images via Telegram with DALL-E and GPT

> # PromptCraft AI – Telegram Image Generator

## 🚀 How It Works

PromptCraft AI is an n8n automation that transforms simple image ideas sent through Telegram into stunning AI-generated images using OpenAI's DALL·E (or other image models).

### 🔁 Workflow Overview:

1. **Telegram Trigger**: Listens for messages from a user on Telegram.
2. **Prompt Expansion**: The message is transformed into a rich image description using GPT (OpenAI Chat Model).
3. **Image Generation**: The prompt is passed to OpenAI's image API to generate a high-quality image.
4. **Send Image**: The final image is sent back to the user on Telegram.
5. *(Optional)* Log image titles and links to Google Drive and Google Sheets.

---

## ⚙️ Setup Instructions

### 📋 Prerequisites

* [ ] n8n installed (Self-hosted or via n8n.cloud)
* [ ] Telegram bot token (via [@BotFather](https://t.me/botfather))
* [ ] OpenAI API key ([platform.openai.com](https://platform.openai.com/))
* [ ] Google Sheets & Drive OAuth2 credentials (optional)

---

### 🧠 Step-by-Step Configuration

#### 1. 📥 Import the Workflow

* Go to n8n → click **Import** → upload `PromptCraft_AI_Template.json`

#### 2. 🔐 Set Up Credentials

* In **Credentials**, add the following:

  * **Telegram API** → Paste your bot token
  * **OpenAI API** → Paste your OpenAI API key
  * *(Optional)* **Google Sheets OAuth2**, **Google Drive OAuth2**

#### 3. 🔄 Replace Placeholders

* Open each node that requires credentials:

  * Replace `REPLACE_OPENAI_API_KEY` with your actual OpenAI API key
  * Replace `REPLACE_TELEGRAM_API_ID` and credential names as needed
  * *(Optional)* Update Google Drive Folder ID & Sheet ID in respective nodes

#### 4. ✅ Activate the Workflow

* Turn on the Telegram Trigger node.
* Deploy and activate the full workflow.

#### 5. ✉️ Test It Out

* Send your Telegram bot a message like:

  &gt; a knight riding a robotic horse in the future

* Receive the generated image back in Telegram!

---

## 💡 Pro Tips

* Use detailed or imaginative inputs for better outputs.
* Fine-tune the GPT prompt for specific visual styles.
* Extend with Google Vision, image upscaling, or watermarking.

---

## 🛟 Support

For setup assistance or custom feature requests, feel free to contact me @dimejicole21@gmail.com

---

**Happy Prompting!** 🖼✨


## 📊 Basic Information

- **Workflow ID:** 4467
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 2006
- **Downloads:** 200
- **Created:** 2025/5/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4467)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **googleDrive** 
- **googleSheets** 
- **stickyNote** (×4)
- **telegram** 
- **telegramTrigger** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
