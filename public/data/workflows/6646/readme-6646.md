# Create YouTube video RSS feed with Redis caching and embedded video player

> ## Your Personal RSS Feed of YouTube Videos!
This workflow creates an RSS feed containing the most recent videos published by your favorite channels. Use it in combination with your favorite RSS reader and don't miss out on any of your favorite creators' content without all the distractions of YouTube. You can even play the video right from your RSS reader without ever having to visit YouTube itself!

### Who's it for
This workflow is for everyone who likes to keep updated about videos from their favorite creator through their preferred RSS app.

### How it works
1. The RSS client triggers the webhook of this workflow
2. The RSS feeds from your selected channels are pulled from YouTube
3. The resulting feeds are filtered so only the normal videos (no shorts), posted in the last week, remain
4. For each video, the video player and the full video description are pulled from the YouTube API
5. For each video, an RSS item is created containing this video player and the video description as the content
6. The RSS items are cached in a Redis database to prevent pulling the same information from the YouTube API on each webhook call
7. A full RSS feed is built and returned to the calling webhook

### How to set up
Follow the steps in the red notes (from 1 to 4) to configure the workflow:
1. Set the IDs of the channels you want to watch
2. Configure your Redis credentials
3. Configure your Google/YouTube API credentials
4. Copy the webhook URL and paste it into your RSS reader
5. Don't forget to activate the workflow!


Only the nodes inside a red node need configuration; all other nodes are good to go. You are, however, free to change those nodes to your liking!

### Requirements
This workflow has 2 requirements:
- A Redis database used to cache the RSS items (see the blue note on how to set up a Redis database yourself)
- Google API credentials to access the YouTube API

### Customizing this workflow
Add any YouTube channel you want by adding their channel ID in the "Set Channels" node at the start of this workflow. If you aren't afraid of some XML RSS code, you can dive into the code blocks and change the resulting RSS feed. You can change the feed's title, description, or image. Or go all in on text processing and process the video description before it is added to the RSS items (such as removing sponsors or links to social media). You can also extend this workflow by adding RSS items from other feeds or sources.

## 📊 Basic Information

- **Workflow ID:** 6646
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 531
- **Downloads:** 53
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6646)

## 👤 Author

- **Name:** Quinten Alexander
- **Username:** @qagovaerts

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **respondToWebhook** 
- **set** (×6)
- **stickyNote** (×10)
- **manualTrigger** 
- **webhook** 
- **splitOut** 
- **rssFeedRead** 
- **filter** 
- **redis** (×2)
- **if** 
- **youTube** 
- **code** (×3)
- **sort** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
