# Auto-repost TikTok videos to YouTube Shorts with Google Sheets & Telegram alerts

> # **TikTok to YouTube Parser Video**


Generate traffic and grow your audience effortlessly with this plug-and-play n8n automation template.
Automatically fetch TikTok videos, upload them to YouTube Shorts, save logs to Google Sheets, and trigger uploads via Telegram — no coding required.
Perfect for creators, marketers, and automation enthusiasts.

## **What This Workflow Does**

This complete n8n automation:

✅ Fetches the latest TikTok videos from any user
✅ Avoids duplicate uploads with intelligent filtering
✅ Uploads to YouTube Shorts via OAuth2
✅ Saves video metadata to Google Sheets
✅ Sends Telegram notifications on completion
✅ Lets you trigger uploads directly from Telegram
✅ Supports custom titles, tags, descriptions, and privacy settings

## **Use Cases**

📈 Repurpose TikTok content to grow your YouTube channel
📲 Automate content curation from influencers
🕐 Schedule regular syncing (daily/hourly)
👩‍💼 Perfect for agencies, content managers, or solo creators

## **What’s Included**


- Intelligent filter to avoid re-uploading already-processed videos (via staticData)
- Dynamic title extraction from TikTok video
- You control the video description (use for ads, credits, or SEO)
- Upload scheduling (via Schedule Trigger or Telegram Trigger)
- Append upload logs to a connected Google Sheets document
- Telegram Trigger support — send a username to your bot and watch the magic happen
- Easily adjustable through Set nodes (number of uploads, tags, etc.)

## 🎥 See It in Action

Want to know exactly how it works?

Watch the video demo https://www.youtube.com/watch?v=Aci40EpeGvA to see the workflow in action — from fetching TikToks to uploading YouTube Shorts and logging everything in Google Sheets.

📲 Telegram trigger included — you'll see how easy it is to run the whole process from your phone.

## Requirements

- An n8n instance (self-hosted or cloud)
- YouTube API credentials (OAuth2 setup included)
- Google Sheets API enabled
- Telegram bot token (optional)


## 📊 Basic Information

- **Workflow ID:** 4199
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 1082
- **Downloads:** 108
- **Created:** 2025/5/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4199)

## 👤 Author

- **Name:** Arkady Reveinz
- **Username:** @pineapplesqueez

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×5)
- **function** 
- **googleSheets** 
- **set** (×2)
- **stickyNote** (×8)
- **scheduleTrigger** 
- **telegram** 
- **telegramTrigger** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
