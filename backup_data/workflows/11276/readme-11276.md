# Generate & publish AI videos with Sora 2, Veo 3.1, Gemini & Blotato

> ## Overview

This workflow automatically generates short-form AI videos using both OpenAI Sora 2 Pro and Google Veo 3.1, enhances your idea with Google Gemini, and publishes content across multiple platforms through Blotato.
It’s perfect for creators, brands, UGC teams, and anyone building a high-frequency AI video pipeline.

You can turn a single text idea into fully rendered videos, compare outputs from multiple AI models, and publish everywhere in one automated flow.

---

## Good to know

* Generating Sora or Veo videos may incur API costs depending on your provider.
* Video rendering time varies by prompt complexity.
* Sora & Veo availability depends on region and account access.
* Blotato must be connected to your social accounts before publishing.
* The workflow includes toggles so you can turn Sora, Veo, or platforms on/off easily.

---

## How it works

* Your text idea enters through the Chat Trigger.
* Google Gemini rewrites your idea into a detailed, high-quality video prompt.
* The workflow splits into two branches:

  * **Sora Branch**: Generates video via OpenAI Sora 2 Pro, downloads the MP4, and uploads/publishes to YouTube, TikTok, and Instagram.
  * **Veo Branch**: Generates a video using Google Veo 3.1 (via Wavespeed), retrieves the output link, emails it to you, and optionally uploads it to Blotato for publishing.
* A Config – Toggles node lets you enable or disable models and platforms.
* Optional Google Sheets logging can store video history and metadata.

---

## How to use

* Send a message to the Chat Trigger to start the workflow.
* Adjust toggles to choose whether you want Sora, Veo, or both.
* Add or remove publishing platforms inside the Blotato nodes.
* Check your email for Veo results or monitor uploads on your social accounts.
* Ideal for automation, batch content creation, and AI-powered video workflows.

---

## Requirements

* **Google Gemini** API key (for prompt enhancement)
* **OpenAI Sora 2** API key
* **Wavespeed (Veo 3.1)** API key
* **Blotato** account + connected YouTube/TikTok/Instagram channels
* **Gmail OAuth2** (for sending video result emails)
* **Google Sheets** (optional logging)

---

## Customizing this workflow

* Add a title/description generator for YouTube Shorts.
* Insert a thumbnail generator (image AI model).
* Extend logging with Sheets or a database.
* Add additional platforms supported by Blotato.
* Use different prompt strategies for cinematic, viral, or niche content styles.


## 📊 Basic Information

- **Workflow ID:** 11276
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 746
- **Downloads:** 74
- **Created:** 2025/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11276)

## 👤 Author

- **Name:** Amit Kumar
- **Username:** @amitxd

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** 
- **if** (×2)
- **httpRequest** (×4)
- **@blotato/n8n-nodes-blotato.blotato** (×6)
- **gmail** (×2)
- **googleSheets** 
- **wait** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
