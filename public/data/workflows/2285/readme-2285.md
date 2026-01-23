# Download recently liked songs automatically with Spotify

> ## Purpose
This workflow enables you to listen to your recent favorites in very hight quality offline without sacrificing all of your storage.

## How it works
This workflow automatically creates a playlist in Spotify named "Downloads" which periodically gets updated so it always contains only a defined amount of the latest liked songs.

This enables only the Downloads playlist to set for automatic downloading and thus free up space on the device.

## Setup
- The workflow is ready to go. Just select your Spotify credentials and activate the workflow.
- In Spotify just enable automatic downloads on the automatically created Downloads folder after the first workflow run.

## Current limitations
This setup currently supports a maximum of 50 songs in the Downloads Playlist. This is due to the paylod limits defined by Spotify encountered in the *Get liked songs* node. Implementing batching would solve the issue.

## 📊 Basic Information

- **Workflow ID:** 2285
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 3307
- **Downloads:** 330
- **Created:** 2024/6/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2285)

## 👤 Author

- **Name:** Mario
- **Username:** @octionic

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **if** (×2)
- **spotify** (×7)
- **splitInBatches** 
- **aggregate** 
- **splitOut** 
- **code** (×2)
- **filter** 
- **scheduleTrigger** 
- **stickyNote** (×6)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
