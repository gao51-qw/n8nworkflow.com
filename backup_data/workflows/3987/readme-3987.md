# Send Telegram text and audio messages to Notion with DeepSeek summaries & OpenAI transcription

> Streamline Your Communication and Task Management with the Telegram to Notion Automation

This powerful automation effortlessly connects your Telegram messages with your Notion workspace, transforming how you capture information and manage tasks.

**What it does:**

Automatic Capture: Instantly captures messages, voice notes, and audio files sent to your designated Telegram chat.

**Intelligent Processing:**

Text messages are automatically summarized into clear, plain-text descriptions using advanced AI (DeepSeek).

Voice notes and audio files are transcribed into text using OpenAI's powerful transcription service.

**Organized in Notion:**

Text message summaries are added as new entries to your "Tasks Tracker" database in Notion, with the original message as the title and the summary as the description. The current date is also included.

Transcriptions of voice notes and audio files are saved to your "Transcribes" database in Notion, making them easily searchable and reviewable.

**Saves You Time:** Eliminates the manual effort of copying and pasting information, transcribing audio, and creating new entries in Notion.
Boosts Productivity: Keeps all your important communications and tasks organized in one central location.

This automation is perfect for anyone who uses Telegram for work or personal notes and wants to seamlessly integrate that information into their Notion workflow for better organization and productivity.

## 📊 Basic Information

- **Workflow ID:** 3987
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 839
- **Downloads:** 83
- **Created:** 2025/5/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3987)

## 👤 Author

- **Name:** Wild Nomad
- **Username:** @rahimin3d

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatDeepSeek** 
- **@n8n/n8n-nodes-langchain.agent** 
- **notion** (×3)
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

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
