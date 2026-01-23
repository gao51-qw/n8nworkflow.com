# Transform Instagram reels into viral content with Mistral AI, AssemblyAI & Sheets

> **📍Overview**
This no-code workflow is built for creators, agencies, and operators who want to automate the repurposing of Instagram Reels. It runs end-to-end and outputs structured insights and content-ready scripts—without touching a single tool manually.

**🧰 What It Does**
- Triggered simply by sending an Instagram Reel URL via Telegram.
- Downloads the Reel automatically.
- Converts video to audio using FreeConvert API.
- Transcribes speech to text using AssemblyAI.
- Analyzes both transcript and description using a connected LLM (OpenAI or Mistral).

**Extracts:**

- Niche
- Core message
- 3 viral content hooks
- 3 ready-to-use short-form video scripts
- Saves all data to a Google Sheet for easy reuse by the creator or team.

**🧪 APIs & Integrations**
- Telegram Bot API (for triggering)
- FreeConvert API (MP4 to MP3 conversion)
- AssemblyAI (for transcription)
- OpenAI or Mistral (LLM for content analysis)
- Google Sheets API (for logging all outputs)

**✅ Requirements**
- An n8n instance (self-hosted or cloud)
- AssemblyAI API key
- FreeConvert API key
- Telegram Bot token
- Google service account credentials
- Your preferred LLM key (OpenAI or Mistral)

**💡 Why Use This Workflow**
- Runs entirely from Telegram—no dashboards required
- Helps you extract deep insights and reusable content from any Instagram Reel
- All tools used are free or very low cost
- Ideal for scaling personal brands or agency operations



## 📊 Basic Information

- **Workflow ID:** 6729
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 1084
- **Downloads:** 108
- **Created:** 2025/7/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6729)

## 👤 Author

- **Name:** Mirza Ajmal
- **Username:** @ajmalmirza

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **wait** (×3)
- **telegram** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** 
- **code** 
- **if** (×6)
- **httpRequest** (×9)
- **switch** 
- **@n8n/n8n-nodes-langchain.agent** 
- **googleSheets** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
