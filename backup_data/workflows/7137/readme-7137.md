# Automate IT support with Telegram voice to JIRA tickets using Whisper & GPT-4.1 Mini

> # 🎧 IT Voice Support Automation Bot – Telegram Voice Message to JIRA ticket with OpenAI Whisper

&gt; Automatically process IT support requests submitted via Telegram voice messages by transcribing, extracting structured data, creating a JIRA ticket, and notifying relevant parties.

## 🧑‍💼 Who’s it for

- Internal teams that handle IT support but want to streamline voice-based requests.
- Employees who prefer using mobile/voice to report incidents or ask for support.
- Organizations aiming to integrate conversational AI into existing support workflows.

## ⚙️ How it works / What it does

1. A user sends a voice message to a Telegram bot.
2. The system checks whether it’s an audio message.
3. If valid, the audio is:
   - Downloaded
   - Transcribed via OpenAI Whisper
   - Backed up to Google Drive
4. The transcription and file metadata are merged.
5. The merged content is processed through an **AI Agent** (GPT) to extract structured request info.
6. A JIRA ticket is created using the extracted data.
7. The IT team is notified via Slack (or other channels).
8. The requester receives a Telegram confirmation message with the JIRA ticket link.
9. If the input is not audio, a polite rejection message is sent.

## 📌 Key Features

- Supports voice-based ticket creation
- Accurate transcription using Whisper
- Context-aware request parsing using GPT-4.1 mini
- Fully automated ticket creation in JIRA
- Notifies both IT and the original requester
- Cloud backup of original voice messages (Google Drive)

## 🛠️ Setup Instructions
### Prerequisites

| Component | Required |
|----------|----------|
| Telegram Bot & API Key | ✅ |
| OpenAI Whisper / Transcription Model | ✅ |
| Google Drive Credentials (OAuth2) | ✅ |
| Google Sheets or other storage (optional) | ⬜ |
| JIRA Cloud API Access | ✅ |
| Slack Bot or Webhook | ✅ |

### Workflow Steps

1. **Telegram Voice Message Trigger**: Starts the flow when a user sends a voice message.

2. **Is Audio Message?**: If false → reply "only voice is supported"

3. **Download Audio**: Download `.oga` file from Telegram.

4. **Transcribe Audio**: Use OpenAI Whisper to get text transcript.

5. **Backup to Google Drive**: Upload original voice file with metadata.

6. **Merge Results**: Combine transcript and metadata.

7. **Pre-process Output**: Clean formatting before AI extraction.

8. **Transcript Processing Agent**: GPT-based agent extracts:
   - Requester name, department
   - Request title & description
   - Priority & request type

9. **Submit JIRA Request Ticket**: Create ticket from AI-extracted data.

10. **Setup Slack / Email / Manual Steps**: Optional internal routing or approvals.

11. **Inform Reporter via Telegram**: Sends confirmation message with JIRA ticket link.

## 🔧 How to Customize

- Replace JIRA with Zendesk, GitHub Issues, or other ticketing tools.
- Change Slack to Microsoft Teams or Email.
- Add Notion/Airtable logging.
- Enhance agent to extract department from user ID or metadata.

## 📦 Requirements

| Integration | Notes |
|-------------|-------|
| Telegram Bot | Used for input/output |
| Google Drive | Audio backup |
| OpenAI GPT + Whisper | Transcript & Extraction |
| JIRA | Ticketing platform |
| Slack | Team notification |

Built with ❤️ using [n8n](https://n8n.io)

## 📊 Basic Information

- **Workflow ID:** 7137
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 521
- **Downloads:** 52
- **Created:** 2025/8/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7137)

## 👤 Author

- **Name:** Trung Tran
- **Username:** @trungtran

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **slack** 
- **stickyNote** (×10)
- **set** 
- **jira** 
- **telegramTrigger** 
- **if** 
- **telegram** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **merge** 
- **googleDrive** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
