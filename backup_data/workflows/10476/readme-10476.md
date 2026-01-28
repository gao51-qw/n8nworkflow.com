# Monitor & manage Docker containers with Telegram bot & AI log analysis

> Monitor and manage Docker containers from Telegram with AI log analysis

This workflow gives you a smart Telegram command center for your homelab. It lets you monitor Docker containers, get alerts the moment something fails, view logs, and restart services remotely. When you request logs, they're automatically analyzed by an LLM so you get a clear, structured breakdown instead of raw terminal output.

**Who it's for**

Anyone running a self-hosted environment who wants quick visibility and control without SSHing into a server. Perfect for homelab enthusiasts, self-hosters, and DevOps folks who want a lightweight on-call assistant.

**What it does**

Receives container heartbeat alerts via webhook

Sends Telegram notifications for status changes or failures

Lets you request logs or restart services from chat

Analyzes logs with GPT and summarizes them clearly

Supports manual “status” and “update all containers” commands

**Requirements**

- Telegram Bot API credentials

- SSH access to your Docker host

**How to set it up**

1. Create a Telegram bot and add its token as credentials
2. Enter your server SSH credentials in the SSH node
3. Deploy the workflow and set your webhook endpoint
4. Tailor container names or heartbeat logic to your environment

**Customize it**

Swap SSH commands for Kubernetes if you're on k8s

Change the AI model to another provider

Extend with health checks or auto-healing logic

## 📊 Basic Information

- **Workflow ID:** 10476
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 2637
- **Downloads:** 263
- **Created:** 2025/11/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10476)

## 👤 Author

- **Name:** Malte Sohns
- **Username:** @macoso

## 🏷️ Categories

- DevOps
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **telegramTrigger** 
- **switch** (×2)
- **merge** (×2)
- **if** 
- **telegram** (×10)
- **ssh** (×4)
- **code** (×2)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
