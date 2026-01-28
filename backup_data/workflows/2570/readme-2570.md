# Send a welcome private message to your new BlueSky followers

> ## Who is this for?

BlueSky users who are looking to send a "welcome message" to their new followers as a private message.

## What this workflow does

This worflow will check for new followers on BlueSky every 60 minutes and send a private message to the new ones. 

## Setup

1. You need to create a [BlueSky app password](https://bsky.app/settings/app-passwords) with private messages access.
2. Fill your credentials and the message text on the corresponding nodes (see sticky notes).
3. Manually run once the ``Save followers to file`` node to generate your initial followers list.
4. Enable the workflow

## How to customize this workflow to your needs

You can adjust the check frecuency, but be careful to avoid hitting the 100 createSession per day rate limit

## Feedback or comments

[You can leave comments, feedback or improvements about this workflow on the n8n forums](https://community.n8n.io/t/bluesky-send-a-welcome-message-to-new-followers/62890)


## 📊 Basic Information

- **Workflow ID:** 2570
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 1731
- **Downloads:** 173
- **Created:** 2024/11/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2570)

## 👤 Author

- **Name:** Nukeador
- **Username:** @nukeador

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **httpRequest** (×4)
- **convertToFile** 
- **extractFromFile** 
- **splitOut** 
- **splitInBatches** 
- **wait** 
- **code** 
- **readWriteFile** (×2)
- **set** 
- **stickyNote** (×4)
- **scheduleTrigger** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
