# 🎵 Sync YouTube and Spotify music playlists

> ## Workflow Overview

This workflow automates the process of updating a Spotify playlist with tracks from a YouTube playlist, ensuring no duplicates are added.

## Key Components

1. **Manual Trigger**: Starts the workflow when you click ‘Test workflow’.
   
2. **Spotify Integration**: Retrieves tracks from a specified Spotify playlist.

3. **YouTube Integration**: Fetches tracks from a designated YouTube playlist.

4. **Batch Processing**: Processes tracks in batches to handle multiple items efficiently.

5. **Track Search**: Searches for YouTube tracks on Spotify to find corresponding IDs.

6. **Comparison**: Compares existing Spotify tracks with YouTube tracks to identify which ones to add.

7. **Track Addition**: Adds new Spotify tracks to the playlist that are not already included.

If you have any questions or need clarification, feel free to ask!


## 📊 Basic Information

- **Workflow ID:** 2518
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 2593
- **Downloads:** 259
- **Created:** 2024/11/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2518)

## 👤 Author

- **Name:** Louis
- **Username:** @louisdl

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **compareDatasets** 
- **set** (×2)
- **spotify** (×3)
- **youTube** 
- **splitInBatches** 
- **manualTrigger** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
