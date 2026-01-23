# Display YouTube subscriber count on Ulanzi AWTRIX Smart Clock

> ## Overview:
This n8n workflow fetches the subscriber count of a specific YouTube channel using the YouTube Data API and displays the compacted count on an AWTRIX 3 / Ulanzi Smart Clock via its local HTTP API.

💡 You can run this every hour (or adjust the schedule), and it pushes a custom notification with a YouTube-style icon to your AWTRIX screen.

## 🔧 Setup Instructions:
### 1. 🧩 Requirements
- A working AWTRIX 3 (e.g., Ulanzi Smart Clock) on the same local network.
- A valid YouTube Data API v3 key.
- A channel ID for the YouTube channel you want to track.
- Upload a YouTube-style icon to your AWTRIX before running this flow:
- Go to AWTRIX Icon Gallery
- Search for a YouTube icon or upload your own
- Get the corresponding icon ID (e.g., 26963)

### 2. 🧠 How It Works
- Triggers every hour
- Makes a GET request to YouTube API to fetch subscriberCount
- Formats the number using compact notation (e.g., 1.2M)
- Sends a POST request to AWTRIX at your specified local IP with the count and icon

### 3. 🔧 Required Replacements:
Replace the following placeholder values in the HTTP Request nodes:

**Placeholder**  - Replace With
**YOUR_YOUTUBE_CHANNEL_ID**	- Your YouTube channel ID
**YOUR_YOUTUBE_API_KEY**	- Your API key from Google Developer Console
**YOUR_AWTRIX_IP**	- Your AWTRIX local IP address (e.g., 192.168.1.108)
**YOUR_ICON_ID**	- Icon ID from AWTRIX Icon Gallery (e.g., 26963)

## 📊 Basic Information

- **Workflow ID:** 6591
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 255
- **Downloads:** 25
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6591)

## 👤 Author

- **Name:** Faisal F Rafat
- **Username:** @ffrafat

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
