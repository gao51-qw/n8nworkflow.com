# Midjourney Image Generator via Telegram and GoAPI

> This workflow connects Telegram to Midjourney through GoAPI, enabling automated image generation and upscaling directly from chat.

### How it Works
* **Telegram Command Trigger**: The workflow activates upon receiving a message in Telegram.
* **Image Generation**: Your prompt is sent to GoAPI, which then generates an image using Midjourney.
* **Upscale Selection**: You receive the generated image and select an option for upscaling.
* **Image Upscaling**: The selected image is upscaled via GoAPI.
* **Notifications and Logs**: Progress updates are sent to Telegram, and all images are logged in Discord.

### Set Up Steps
1.  Create a Telegram Bot and update credentials in Telegram nodes.
2.  Create a GoAPI account, obtain an API key, and update the three HTTP nodes: "Get Generation Task," "Upscale," and "Get Upscale Task".
3.  (Optional) Configure the Discord node for logging if desired.

Setup takes approximately 10-15 minutes. Detailed descriptions are available in sticky notes within the workflow.

## 📊 Basic Information

- **Workflow ID:** 5097
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 2646
- **Downloads:** 264
- **Created:** 2025/6/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5097)

## 👤 Author

- **Name:** Dhruv Dalsaniya
- **Username:** @ddm21

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **set** 
- **wait** (×2)
- **httpRequest** (×4)
- **if** (×3)
- **telegram** (×4)
- **discord** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
