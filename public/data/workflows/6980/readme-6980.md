# Dynamic media library with on-demand downloads for Radarr/Sonarr and Plex

> ## n8n Placeholdarr for Plex (BETA)

 This flow creates **dummy files** for every item added in your *Arrs (Radarr/Sonarr) with the tag `unprocessed-dummy`.

It’s useful for maintaining a large Plex library **without needing the actual movies or shows to be present on your Debrid provider**.

---

### How It Works
- When a dummy file is played, the corresponding item is automatically **monitored in *Arr** and added to the download queue.
- This ensures that the content becomes available within **~3 minutes** for playback.
- If the content finishes downloading **while the dummy is still being played**, **Tautulli** triggers a webhook that **stops the stream** and notifies the user.

---

### Requirements

- Each n8n node must have the correct **URL** and **authorization headers** configured.
- The **SSH host** (used to create dummy files) must have **FFmpeg** installed.
- A **Trakt.TV API key** is required if you're using **Trakt collections**.

---

### Warning

&gt; ⚠️ This flow is currently in **BETA** and under active development.  
&gt; It is **not recommended** for users without technical experience.  
&gt; Keep an eye on the GitHub repository for updates.

https://github.com/arjanterheegde/n8n-workflows-for-plex

## 📊 Basic Information

- **Workflow ID:** 6980
- **Complexity:** advanced
- **Node Count:** 87
- **Views:** 363
- **Downloads:** 36
- **Created:** 2025/8/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6980)

## 👤 Author

- **Name:** Arjan ter Heegde
- **Username:** @arjanterheegde

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **respondToWebhook** (×5)
- **code** (×8)
- **httpRequest** (×38)
- **if** (×11)
- **webhook** (×4)
- **stickyNote** (×6)
- **switch** 
- **ssh** (×5)
- **splitOut** 
- **splitInBatches** (×2)
- **merge** (×4)
- **set** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 87 nodes with 73 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
