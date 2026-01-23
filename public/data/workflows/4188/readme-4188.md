# Save Telegram text, voice & audio to Notion with DeepSeek & OpenAI summaries

> Tired of manually copying and pasting Telegram messages into Notion? This n8n workflow solves that!

**What it does:**

This powerful workflow automates the process of saving your Telegram activity to Notion. Whether it's text chats, important voice memos, or shared audio files, "TeleNotion Scribe" captures it all.  But it doesn't stop there!  It also leverages AI to generate clear, concise summaries of your messages, giving you instant context and saving you time.

**Key Features:**

* **Seamless Telegram Integration:** Automatically triggers on new Telegram messages.
* **Versatile Content Capture:** Saves text messages, voice notes, and audio files.
* **AI-Powered Summarization:** Get instant summaries of your chats with advanced language models.
* **Notion Database Automation:** Creates organized entries in your Notion database.
* **Customizable:** Easily adapt the workflow to your specific Notion database structure.
* **Time-Saving:** Eliminate manual data entry and streamline your workflow.
* **Improved Organization:** Keep all your Telegram information neatly organized in Notion.

**Who is this for?**

* **Project Managers:** Track team communications and decisions.
* **Researchers:** Log observations and data from chat groups.
* **Note-Takers:** Capture meeting discussions and action items.
* **Anyone who wants to save and organize their Telegram chats!**

**What you'll get:**

* The complete n8n workflow JSON file.

Stop letting valuable information slip through the cracks.  Invest in "TeleNotion Scribe" and transform your Telegram chats into actionable data!

**Requirements:**

* n8n instance (cloud or self-hosted)
* Telegram API credentials
* Notion API integration token
* OpenAI API key
* DeepSeek API key


## 📊 Basic Information

- **Workflow ID:** 4188
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 852
- **Downloads:** 85
- **Created:** 2025/5/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4188)

## 👤 Author

- **Name:** Wild Nomad
- **Username:** @rahimin3d

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatDeepSeek** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **notion** (×5)
- **switch** 
- **telegram** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
