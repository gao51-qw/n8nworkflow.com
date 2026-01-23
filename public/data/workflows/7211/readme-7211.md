# Download Instagram reels & videos with Telegram bot

> ![AI8.png](fileId:2014)
![ai9.png](fileId:2013)

**Description**

The Instagram Downloader workflow allows users to download Instagram videos or Reels directly through a Telegram Bot.
Simply send an Instagram link to the bot, and it will process the link via a third-party API to fetch the highest quality video, then send it back to your Telegram chat.

**How It Works**

1. Telegram Trigger
The workflow starts when the bot receives an Instagram link from a user.

2. HTTP Request – URL Download
The link is sent to the API https://www.mediadl.app/api/download to retrieve video metadata.

3. Delay
Waits a few seconds to ensure the API response is ready.

4. Filtering URL Only
Extracts the direct video file URL from the API result.

5. Delay
Adds a short pause to prevent connection errors during download.

6. HTTP Request – Proxy Download
Downloads the MP4 video file directly from the filtered URL.

7. Send Video to Telegram
Sends the downloaded video back to the user in Telegram.

**How to Set Up**

1. Create & Configure a Telegram Bot
- Open Telegram, search for BotFather.
- Send /newbot → choose a bot name & username.
- Copy the provided Bot Token.

2. Prepare Your n8n Environment
- Log in to n8n (self-hosted or n8n Cloud).
- Create Telegram API Credentials using your Bot Token.

3. Import the Workflow
- In n8n, click Import and select Instagram_Downloader.json.

4. Configure Telegram Nodes
- Connect your Telegram API credentials in the Telegram Trigger and Send Video nodes.

5. Configure HTTP Request Nodes
- Ensure the URL and headers in URL Download and Download nodes are correct (already pre-configured).
- Set responseFormat to file in the final download node.

6. Activate & Test
- Toggle Activate.
- Send an Instagram link to your bot to test.

## 📊 Basic Information

- **Workflow ID:** 7211
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 4039
- **Downloads:** 403
- **Created:** 2025/8/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7211)

## 👤 Author

- **Name:** Garri
- **Username:** @garri

## 🏷️ Categories

- File Management
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **stickyNote** (×4)
- **httpRequest** (×2)
- **telegram** 
- **set** 
- **wait** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
