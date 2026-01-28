# Obsidian notes read aloud using AI: available as a podcast feed

> **How it works:**

- Send notes from Obsidian via Webhook to start the audio conversion
- OpenAI converts your text to natural-sounding audio and generates episode descriptions
- Audio files are stored in Cloudinary and automatically attached to your notes in Obsidian
- A professional podcast feed is generated, compatible with all major podcast platforms (Apple, Spotify, Google)

**Set up steps:**

- Install and configure the [Post Webhook Plugin](https://github.com/Masterb1234/obsidian-post-webhook/) in Obsidian
- Set up Custom Auth credentials in n8n for Cloudinary using the following JSON:

```json
{
  "name": "Cloudinary API",
  "type": "httpHeaderAuth",
  "authParameter": {
    "type": "header",
    "key": "Authorization",
    "value": "Basic {{Buffer.from('your_api_key:your_api_secret').toString('base64')}}"
  }
}
```

- Configure podcast feed metadata (title, author, cover image, etc.)

Note: The second flow is a generic Podcast Feed module that can be reused in any '[...]-to-Podcast' workflow. It generates a standard RSS feed from Google Sheets data and podcast metadata, making it compatible with all major podcast platforms.

## 📊 Basic Information

- **Workflow ID:** 2699
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 2908
- **Downloads:** 290
- **Created:** 2025/1/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2699)

## 👤 Author

- **Name:** Obsidi8n
- **Username:** @derruttie

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **stickyNote** (×8)
- **webhook** (×2)
- **httpRequest** 
- **merge** 
- **aggregate** 
- **set** (×3)
- **respondToWebhook** (×2)
- **googleSheets** (×2)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
