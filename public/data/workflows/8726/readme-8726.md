# Enhance real-estate photos with Google Nano Banana AI via Telegram bot

> **🤖 Telegram Image Editor with Nano Banana**

Send an image to your Telegram bot, and this workflow will automatically enhance it with Google’s Nano Banana (via Wavespeed API), then return the polished version back to the same chat—seamlessly.

👉 Watch step-by-step video tutorials of workflows like these on www.youtube.com/@automatewithmarc

**What it does**

- Listens on Telegram for incoming photo messages
- Downloads the file sent by the user
- Uploads it to Google Drive (temporary storage for processing)
- Sends the image to Nano Banana API with a real-estate style cleanup + enhancement prompt
- Polls until the job is complete (handles async processing)
- Returns the edited image back to the same Telegram chat

**Perfect for**

Real-estate agents previewing polished property photos instantly

Social media managers editing on-the-fly from Telegram

Anyone who wants “send → cleaned → returned” image flow without manual edits

Apps & Services

Telegram Bot API (Trigger + Send/Receive files)

Google Drive (Temporary file storage)

Wavespeed / Google Nano Banana (AI-powered image editing)

**Setup**

Connect your Telegram Bot API token in n8n.

Add your Wavespeed API key for Nano Banana.

Link your Google Drive account (temporary storage).

Deploy the workflow and send a test photo to your Telegram bot.

**Customization**

Adjust the Nano Banana prompt for different styles (e.g., ecommerce cleanup, portrait retouching, color correction).

Replace Google Drive with another storage service if preferred.

Add logging to Google Sheets or Airtable to track edits.

## 📊 Basic Information

- **Workflow ID:** 8726
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 977
- **Downloads:** 97
- **Created:** 2025/9/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8726)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×2)
- **wait** (×2)
- **if** 
- **stickyNote** (×6)
- **telegramTrigger** 
- **telegram** (×2)
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
