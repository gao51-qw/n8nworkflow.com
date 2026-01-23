# Monitor YouTube channels and send daily updates to Discord via RSS (no API key)

> Automatically track your favorite YouTube creators and get a daily summary of new videos delivered to Discord.

Unlike complex YouTube API integrations, this workflow uses efficient RSS feeds, meaning **you don't need a Google Cloud API Key** or worry about quota limits.

## How it works
The workflow is scheduled to run daily (default 8:30 AM) to:
1. **Define Channels:** It takes a list of "Channel IDs" you want to monitor.
2. **Fetch RSS:** It retrieves the latest video feed for each channel.
3. **Filter:** It applies a strict date filter to pass only videos published in the last 24 hours.
4. **Notify:** Sends a notification to your Discord server with the Video Title, Date, and Link.

## Setup steps
### 1. Add your Channels
1. Open the node named **"Define Channel IDs"**.
2. Replace the example IDs with the Channel IDs you want to track.
   * *Note: The template comes pre-loaded with some Spanish AI channels as a demo. Feel free to remove them!*
   * *Tip: If you don't know a Creator's Channel ID (e.g. UC...), use a free online "YouTube Channel ID Finder".*

### 2. Connect Discord
1. Create a Webhook in your Discord Server (Server Settings &gt; Integrations &gt; Webhooks).
2. Open the **"Discord Notification"** node.
3. Create a new credential and paste your Webhook URL.

*Note: This template is a lightweight alternative to database-backed trackers. It relies on the daily trigger frequency to avoid duplicates.*

## 📊 Basic Information

- **Workflow ID:** 11212
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 207
- **Downloads:** 20
- **Created:** 2025/11/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11212)

## 👤 Author

- **Name:** Vasyl Pavlyuchok
- **Username:** @vasylpavlyuchok

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **stickyNote** (×8)
- **splitOut** 
- **set** 
- **rssFeedRead** 
- **scheduleTrigger** 
- **filter** 
- **discord** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
