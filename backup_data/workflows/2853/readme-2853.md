# Spotify to YouTube playlist synchronization

> # Spotify to YouTube Playlist Synchronization
## A workflow that maintains a YouTube playlist in sync with a Spotify playlist, featuring smart video matching and persistent synchronization.

## Key Features
- **One-way Sync**: Spotify playlist → YouTube playlist (additions and deletions)
- **Continuous Monitoring**: Automatic synchronization (every hour by default, but you can put any time you want)
- **Smart Video Matching**: Considers video length and content relevance
- **Auto-Recovery**: Automatically handles deleted YouTube videos
- **Database Backup**: Persistent storage using Supabase

## Prerequisites

1. Supabase project with the following table structure:
```sql
CREATE TABLE IF NOT EXISTS musics (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    duration INT8 NOT NULL,
    youtube_video_id TEXT,
    to_delete BOOLEAN DEFAULT FALSE
);
```
2. Empty YouTube playlist (recommended as duplicates are not handled)
3. Configured credentials for YouTube, Spotify, and Supabase APIs
4. Properly set variables in all "variables" nodes (variables, variables1, variables2, variables3, variables4 (all the same))
5. Activate the workflow !

## 📊 Basic Information

- **Workflow ID:** 2853
- **Complexity:** advanced
- **Node Count:** 54
- **Views:** 3127
- **Downloads:** 312
- **Created:** 2025/2/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2853)

## 👤 Author

- **Name:** Lugnicca
- **Username:** @lugnicca

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **spotify** (×3)
- **if** (×3)
- **supabase** (×11)
- **compareDatasets** (×3)
- **noOp** 
- **scheduleTrigger** (×5)
- **wait** 
- **set** (×7)
- **youTube** (×5)
- **splitInBatches** (×2)
- **discord** (×2)
- **aggregate** 
- **removeDuplicates** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 54 nodes with 38 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
