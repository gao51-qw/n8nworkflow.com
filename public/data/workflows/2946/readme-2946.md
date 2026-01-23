# #️⃣Nostr #damus AI powered reporting + Gmail + Telegram

> The n8n Nostr Community Node is a tool that integrates Nostr functionality into n8n workflows, allowing users to interact with the Nostr protocol seamlessly. It provides both read and write capabilities and can be used for various automation tasks.

**Disclaimer**
This node is ideal for self-hosted n8n setups, as ++community nodes are not supported on n8n cloud++. It opens up exciting possibilities for integrating workflows with the decentralized Nostr protocol.

![image.png](fileId:961)

## n8n Community Node for Nostr 
[n8n-nodes-nostrobots](https://github.com/ocknamo/n8n-nodes-nostrobots)

![image.png](fileId:960)

## Features
- **Write Operations**: Send notes and events (kind1) to the Nostr network.
- **Read Operations**: Fetch events based on criteria such as event ID, public key, hashtags, mentions, or search terms.
- **Utility Functions**: Convert events into different formats like naddr or nevent and handle key transformations between bech32 and hex formats.
- **Trigger Events**: Monitor the Nostr network for specific mentions or events and trigger workflows automatically.

## Use Cases
- Automating note posting without exposing private keys.
- Setting up notifications for mentions or specific events.
- Creating bots or AI assistants that respond to mentions on Nostr.

## Installation
1. Install n8n on your system.
2. Add the Nostr Community Node to your instance.
3. Configure your credentials using a Nostr secret key (supports bech32 or hex formats).




## 📊 Basic Information

- **Workflow ID:** 2946
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 2507
- **Downloads:** 250
- **Created:** 2025/2/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2946)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **markdown** (×2)
- **gmail** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **aggregate** 
- **stickyNote** (×7)
- **merge** 
- **scheduleTrigger** 
- **telegram** (×2)
- **n8n-nodes-nostrobots.nostrobotsread** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
