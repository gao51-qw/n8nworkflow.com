# Play RPG with Groq Dungeon Master via Telegram voice messages

> ## Dungeons and Goblins — AI Telegram Voice Adventure with Persistent Memory

This n8n template demonstrates how to use an AI agent with persistent memory to run a structured, rules-driven fantasy role-playing game entirely through Telegram voice messages. The workflow acts as a Dungeon Master, narrating scenes, resolving mechanics, performing dice rolls when authorized, and explicitly saving game state between turns.

## How it works

- A player actions are provided to Telegram bot via voice messages.

- The AI agent loads the current game state from n8n memory.

- A strict system prompt enforces rules, turn flow, and narration.

- When an action requires a dice roll, the agent waits for player authorization.

- Once authorized, the AI rolls, resolves the outcome, and applies changes.

- All state updates are emitted as structured data and saved to memory.

- The request and response are processed in Groq's STT and TTS.

## Use cases

- Solo text-based fantasy campaigns

- Persistent AI-driven adventures

- Testing stateful AI agents in n8n

- Educational examples of memory-aware workflows

## Requirements

- Groq API token (free tier supported)

- Telegram bot API token

## 📊 Basic Information

- **Workflow ID:** 11787
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 134
- **Downloads:** 13
- **Created:** 2025/12/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11787)

## 👤 Author

- **Name:** Anton Bezman
- **Username:** @nefar1an

## 🏷️ Categories

- Miscellaneous
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×5)
- **telegram** (×2)
- **set** 
- **telegramTrigger** 
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
