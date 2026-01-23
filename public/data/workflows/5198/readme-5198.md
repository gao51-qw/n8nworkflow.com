# 🛠️ Auto n8n updater (Docker)

> ## How it works

This workflow automates the process of checking for and applying updates to a self-hosted n8n instance running on Docker. It runs on a schedule, checks for new versions, summarizes the release notes with AI, and asks for your approval via Telegram before updating.

1.  **Scheduled Check:** The workflow runs hourly, triggered by a `Schedule` node.
2.  **Version Discovery:**
    *   It first confirms it's running in a Docker environment.
    *   It uses SSH to connect to the host machine and inspects the running n8n container to find its current version tag (e.g., `latest` or `next`).
    *   It then queries the Docker Hub API to compare the image `digest` (a unique ID for an image version) of the running version against the latest available version for that tag.
3.  **Update Detection:** If the digests do not match, it means a new image has been pushed for your version tag (e.g., a new `latest` image is available), and an update is needed.
4.  **AI-Powered Release Notes:**
    *   It fetches the official release notes for the new version from the GitHub API.
    *   An AI model (LLM) summarizes these technical notes into a concise, human-readable overview of the key features and fixes.
5.  **Manual Approval:** It sends a message to a Telegram chat with the AI-generated summary and two buttons: "✅ Update" and "❌ Ignore". The workflow then pauses and waits for your response.
6.  **Execute Update:** If you approve the update, the workflow uses SSH to run a `docker compose` command on your server, which pulls the new image, stops the old containers, and starts the new ones.

## Set up steps

**Setup time: ~5-10 minutes**

1.  **SSH Credentials:**
    *   Go to **Credentials** and create a new **SSH** credential with the username, host, and password/private key for the server where your n8n Docker instance is running.
    *   Select this credential in the **`Get n8n Current Version`** and **`Update Docker`** nodes.
2.  **Telegram Bot Credentials:**
    *   Create a Telegram Bot and get its API token.
    *   Go to **Credentials** and create a new **Telegram** credential with your bot's token.
    *   Select this credential in the **`Send a text message`** node.
3.  **AI Model Credentials:**
    *   Ensure you have credentials for an AI provider (like Google AI, OpenAI, etc.) set up.
    *   Select your desired credential in the **`Google Gemini Chat Model`** node (or replace it with your preferred LLM node).
4.  **Configure Paths and Commands:**
    *   Open the **`Docker Path`** node. Set the `docker_path` to the absolute path of your `docker-compose.yml` file on the server (e.g., `/root/n8n`).
    *   If you use workers, adjust the `worker_command` to include the correct `--scale` argument for your setup. If not, you can leave it blank.
5.  **Set Your Chat ID:**
    *   Open the **`Approve Update`** Telegram node and enter your personal Telegram Chat ID in the `Chat ID` field. This ensures the approval message is sent to you.
6.  **Activate the workflow.** It will now check for updates every hour.

**To enable fully automatic updates (without manual approval):** Delete the nodes from `Get n8n Releases` to `Approved ?` and connect the `Needs Update ?` node directly to the `Update Docker` node.

## 📊 Basic Information

- **Workflow ID:** 5198
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 3236
- **Downloads:** 323
- **Created:** 2025/6/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5198)

## 👤 Author

- **Name:** Lucas Peyrin
- **Username:** @lucaspeyrin

## 🏷️ Categories

- DevOps
- AI Summarization

## 🔗 Nodes Used

- **set** (×2)
- **ssh** (×2)
- **httpRequest** (×4)
- **if** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **stickyNote** (×10)
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **telegram** 
- **removeDuplicates** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
