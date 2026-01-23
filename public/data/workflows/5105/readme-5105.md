# Automatically Post Latest Reddit Content to Discord with Image Extraction

> # Reddit Poster to Discord
This workflow checks Reddit every 15 minutes for new posts and sends selected posts to a Discord channel via webhook.

## Flow Overview:
Schedule Trigger
Runs every 15 minutes.

### Fetch Latest Posts
Retrieves up to 3 new posts from any subreddit.

### Filter Posts
Skips moderator or announcement posts based on author ID.

### Fetch Full Post Data
Gets full details for the remaining post.

### Extract Image URL
Parses the post to extract a direct image link.

### Send to Discord
Sends the post title, image, and link to a Discord webhook.

## Setup Notes:
- Create a Reddit app and connect credentials in n8n.

- Add your subreddit name to both Reddit nodes.

- Connect a Discord webhook for posting.

## 📊 Basic Information

- **Workflow ID:** 5105
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1430
- **Downloads:** 143
- **Created:** 2025/6/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5105)

## 👤 Author

- **Name:** ikbendion
- **Username:** @ikbendion

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **scheduleTrigger** 
- **stickyNote** (×5)
- **reddit** (×2)
- **if** 
- **code** 
- **discord** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
