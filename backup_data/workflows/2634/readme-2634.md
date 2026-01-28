# Spotify sync liked songs to playlist

> # Short an simple:
This Workflow will sync (add and delete) your Liked Songs to an custom playlist that can be shared.

## Setup:
1. Create an app on the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard).
2. Create Spotify Credentials - Just click on one of the Spotify Nodes in the Workflow an click on "create new credentials" and follow the guide.
3. Create the Spotify Playlist that you want to sync to.
4. Copy the exact name of you playlist, go into Node "Edit set Vars" and replace the value "CHANGE MEEEE" with your playlist name.
5. Set your Spotify Credentiels on every Spotify Node. (Should be marekd with Yellow and Red Notes)

### Do you use Gotify?
#### - No: Delete the Gotify Nodes (all the way to the right end of the Workflow)
#### - Yes: Customize the Gotify Nodes to your needs.

## 📊 Basic Information

- **Workflow ID:** 2634
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 815
- **Downloads:** 81
- **Created:** 2024/12/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2634)

## 👤 Author

- **Name:** Dustin
- **Username:** @dh2io

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **manualTrigger** 
- **scheduleTrigger** 
- **sort** (×2)
- **gotify** (×2)
- **splitInBatches** (×2)
- **spotify** (×5)
- **set** (×5)
- **filter** 
- **compareDatasets** 
- **summarize** (×2)
- **stickyNote** (×16)
- **merge** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
