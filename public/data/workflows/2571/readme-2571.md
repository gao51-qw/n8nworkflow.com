# Post new RSS feed items as BlueSky posts

> ## Who is this for?

BlueSky users looking to automate the publication of new posts based on new items from a RSS feed.

## What this workflow does

This will create a BlueSky post with each new RSS feed item, including the feed title, post image, link and content (up to 200 characters)

## Setup

1. You'll need to generate a [BlueSky app password](https://bsky.app/settings/app-passwords)
2. Configure your feed URL in the first node
3. Configure your credentials in the second node

## How to customize this workflow to your needs

You can modify the message posted in the ``Create post`` node, changing the JSON ``text`` value, in case you want to include only the feed item title instead of the content.

If you RSS feed doesn't provide an image, you can define a static one on the ``Download image`` node.

## 📊 Basic Information

- **Workflow ID:** 2571
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 2206
- **Downloads:** 220
- **Created:** 2024/11/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2571)

## 👤 Author

- **Name:** Nukeador
- **Username:** @nukeador

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **httpRequest** (×4)
- **rssFeedReadTrigger** 
- **stickyNote** (×4)
- **dateTime** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
