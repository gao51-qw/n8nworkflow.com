# Automate UniFi controller updates via SSH with Telegram notifications

> ## Overview
Automate UniFi Controller updates on self-hosted instances. This workflow checks the official UniFi Debian repo for a **fresh release in the last 24 hours** and, if found, upgrades the `unifi` package via SSH. It can also summarize changes and ping you on Telegram. Sticky notes are included to guide setup.

## How it works
- **Schedule** runs daily (default **13:13**).
- **HTTP Request** fetches `InRelease` and parses `Codename` + `Date`.
- **IF gate** continues only if the repo changed within 24h.
- **SSH** runs:
  ```bash
  apt-get --allow-releaseinfo-change update
  apt-get upgrade -y unifi
  ```
- **(Optional) LLM** creates a short summary → **Telegram** sends it.

## Setup
- Bind credentials: **SSH** (required), **OpenAI** (optional), **Telegram** (optional).
- Set env var **`TELEGRAM_CHAT_ID`** for notifications.
- Adjust the **Schedule Trigger** to your maintenance window.
- Import inactive, test once, then **activate**.

## Customize
- Change the 24h freshness window in the Code node.
- Swap Telegram for Slack/Email if preferred.
- Add pre/post steps (backups, restarts) around the upgrade.

## Safety
Test on a non-production controller first. No hardcoded secrets—uses n8n credentials and environment variables. If you want approval before upgrades, stop after the IF gate and notify only.


## 📊 Basic Information

- **Workflow ID:** 8599
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 362
- **Downloads:** 36
- **Created:** 2025/9/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8599)

## 👤 Author

- **Name:** Dominic Spatz
- **Username:** @dominic

## 🏷️ Categories

- DevOps
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** 
- **code** 
- **if** 
- **ssh** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **telegram** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
