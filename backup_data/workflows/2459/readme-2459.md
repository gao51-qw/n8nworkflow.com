# Overlay or watermark images by merging with another image

> ## Instructions

This automation *overlays* a `background` image with another image, making it easy to add watermarks or logos.

You can use this automation to **watermark** your images by overlaying them with a transparent version of your logo. If you'd like to **place your logo in a specific corner**, feel free to _adjust the position_ of the overlay image in the code node.

## How it Works

1. Both images are downloaded, so we can process binary files (you can modify the source, tho.)
2. We extract metadata, focusing on the dimensions of each image.
3. The position of the overlay image is calculated (default: dead center of the background image).
4. The two images are *composited* together.

## Limitations and Optimisation Opportunities

1. The overlay image must be the same size or smaller than the background image for proper alignment.
2. The overlay image does not automatically scale to match the proportions of the background image.

![Image](https://cloud.let-the-work-flow.com/logo-64.png)  
Enjoy the workflow! ❤️  
[let the work flow](https://let-the-work-flow.com) — Workflow Automation & Development

## 📊 Basic Information

- **Workflow ID:** 2459
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 6477
- **Downloads:** 647
- **Created:** 2024/10/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2459)

## 👤 Author

- **Name:** Marcel Claus-Ahrens
- **Username:** @geckse

## 🏷️ Categories

- Content Creation

## 🔗 Nodes Used

- **manualTrigger** 
- **editImage** (×3)
- **set** (×2)
- **code** (×3)
- **httpRequest** (×2)
- **merge** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
