# Telegram chatbot with voice recognition and message batching using OpenAI

> This Telegram workflow batches rapid-fire messages from the same user into one prompt (20–30s debounce), then sends a single AI reply.

It uses **two Google Sheets**:
- **Message Retention** (`date | user_id | message`) — queues incoming messages.
- **Message  Checkup** (`user_id | is_waiting | last_updated`) — debounces per user.

Flow per message:
1. Log to **Message Retention**.
2. Read **Message  Checkup** for that `user_id`. If empty, synthesize `{ is_waiting:false }`.
3. IF (**OR**):
   - `last_updated` is **older than 30s**, **or**
   - `is_waiting` is **false**  
   → Start wait window: set `is_waiting=true`, update `last_updated`, **Wait** (e.g., 30s).
4. After Wait: fetch all queued messages for the user, merge them, delete those rows, send one AI answer to Telegram, then clear the Waiting row.
5. If a new message arrives while waiting, we only refresh `last_updated` (extend the window) — we do **not** start another wait.

Copy/paste:
- Older-than-30s: `{{ new Date(Date.now() - 30000).toISOString() }}`
- “No Rows” normalizer (Code node) ensures the IF always has data to check.

Supports text and voice (voice via Whisper). Works reliably on Telegram once the webhook is registered and Sheets are shared with the service account.

## 📊 Basic Information

- **Workflow ID:** 8314
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 707
- **Downloads:** 70
- **Created:** 2025/9/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8314)

## 👤 Author

- **Name:** Kirill Zolygin
- **Username:** @rushtechhub

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **set** (×4)
- **if** (×2)
- **merge** 
- **telegram** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleSheets** (×7)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **wait** 
- **code** (×2)
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** 
- **telegramTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
