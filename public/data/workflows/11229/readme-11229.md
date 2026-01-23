# Automatically add watermarks to images with Telegram Bot and ImageKit.io

> # Purpose and Audience
This n8n workflow creates an automated Telegram bot that adds watermarks to images. When users send photos to the bot, it automatically processes them by applying a logo overlay and returns the watermarked version. The workflow is designed for content creators, businesses, or individuals who need a quick, automated way to brand their images without manual editing software.

## 1. How It Works
The workflow operates through a series of connected steps:

- Message Reception: A Telegram trigger listens for incoming messages from users
- Image Validation: The system checks whether the message contains a photo; if not, it sends a friendly error message asking the user to send an image
- Image Retrieval: When a photo is detected, the workflow fetches the file path from Telegram's servers and downloads the full-resolution image
- Upload & Watermarking: The downloaded image is uploaded to ImageKit.io, where a transformation is applied to overlay a logo watermark at 70% opacity
- Delivery: The watermarked image is automatically sent back to the user via Telegram

The entire process happens in seconds, providing users with instant watermarked images through a simple chat interface.

## 2. Who Is It For
This workflow is ideal for:

- Social media managers who need to quickly brand images before posting
- Small business owners protecting their product photos with company logos
- Content creators who want an easy way to watermark their work on the go
- Marketing teams requiring consistent branding across visual content
- Photographers offering quick preview watermarking for client galleries
- Anyone looking for a mobile-friendly, automated watermarking solution without installing desktop software

The bot requires minimal technical knowledge to use—simply send an image and receive it back watermarked—making it accessible to non-technical users while being built on a powerful automation platform.

## 📊 Basic Information

- **Workflow ID:** 11229
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 23
- **Downloads:** 2
- **Created:** 2025/11/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11229)

## 👤 Author

- **Name:** Malik Hashir
- **Username:** @malikx

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×4)
- **telegramTrigger** 
- **if** 
- **telegram** (×2)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
