# Build a Telegram mental health support bot with GPT-4o

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

**n8n Workflow Template: AI‑Powered Mental Health Support Bot**

**Overview:**
This template enables you to build a Telegram bot that delivers real‑time, empathetic mental health support. Incoming messages tagged with `#vent`, `#insight`, or `#cope` are routed to GPT‑4o via the AI/ML API, which returns tailored, compassionate responses.

**How it works:**

1. **Telegram Trigger** listens for new chat messages or voice notes.
2. **Show Typing Indicator** immediately signals “typing…” in the chat.
3. **Switch Node** examines the text prefix and routes to one of four branches (`Vent`, `Insight`, `Cope`, or default).
4. **Set Prompt** nodes build a JSON payload with a specific role‑play prompt for each branch.
5. **AI/ML API** node (model `gpt-4o`) generates the response.
6. **Telegram** node sends the AI’s answer back to the user.

**Setup Steps:**

1. Connect your **Telegram** bot token in the Telegram credentials.
2. Add your **AI/ML API** key (GPT‑4o) in n8n’s credential settings.
3. Activate the workflow and deploy your n8n instance webhook URL to BotFather.
4. Test by sending `#vent I’m stressed`, `#insight Why do I feel…`, or any tag in your Telegram chat.

This plug‑and‑play workflow brings AI‑driven emotional support directly into Telegram.

## 📊 Basic Information

- **Workflow ID:** 6556
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 853
- **Downloads:** 85
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6556)

## 👤 Author

- **Name:** AI/ML API | D1m7asis
- **Username:** @d1m7asis

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **switch** 
- **stickyNote** (×6)
- **set** (×4)
- **n8n-nodes-aimlapi.aimlApi** 
- **telegram** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
