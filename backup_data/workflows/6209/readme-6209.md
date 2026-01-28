# Extract text from images & PDFs via Telegram with Mistral OCR to Markdown

> This n8n template provides a complete solution for **Optical Character Recognition (OCR)** of image and PDF files directly within Telegram

---

Users can simply send **PNG, JPEG, or PDF** documents to your Telegram bot, and the workflow will process them, extract text using **Mistral OCR**, and return the content as a downloadable Markdown (`.md`) text file.

## Key Features & How it Works:

* **Effortless OCR via Telegram**: Users send a file to the bot, and the system automatically detects the file type (PNG, JPEG, or PDF).
* **File Size Validation**: The workflow enforces a **25 MB file size limit**, in line with Telegram Bot API restrictions, ensuring smooth operation.
* **Mistral-Powered Recognition**: Leveraging **Mistral OCR**, the template accurately extracts text from various document types.
* **Markdown Output**: Recognized text is automatically converted into a clean Markdown (`.md`) text file, ready for easy editing, storage, or further processing.
* **Secure File Delivery**: The processed Markdown file is delivered back to the user via Telegram. For this, the workflow ingeniously uses a **GET request to itself** (acting as a file downloader proxy). This generated link allows Telegram to fetch the `.md` file directly. **Please note: This download functionality requires the workflow to be in an `Active` status.**
* **Optional Whitelist Security**: Enhance your bot's security with an **optional whitelist feature**. You can configure specific Telegram User IDs to restrict access, ensuring only authorized users can interact with your bot.
* **Simplified Webhook Management**: The template includes dedicated utility flows for convenient management of your Telegram bot's webhooks (for both development and production environments).

This template is ideal for digitizing documents on the go, extracting text from scanned files, or converting image-based content into versatile, searchable text.

## Getting Started

To get this powerful OCR bot up and running, follow these two main steps:

1.  **Set Up Your Telegram Bot:** First, you'll need to configure your Telegram bot and its webhooks. Follow the instructions detailed in the **Telegram Bot Webhook Setup** section to create your bot, obtain its API token, and set up the necessary webhook URLs.

2.  **Configure Bot Settings:** Next, you'll need to define key operational parameters for your bot. Proceed to the **Settings Configuration** section and populate the variables according to your preferences, including options for whitelist access.

## 📊 Basic Information

- **Workflow ID:** 6209
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 1832
- **Downloads:** 183
- **Created:** 2025/7/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6209)

## 👤 Author

- **Name:** Rostislav
- **Username:** @bilup

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **if** (×5)
- **stickyNote** (×8)
- **httpRequest** (×4)
- **set** (×2)
- **switch** (×4)
- **telegram** (×10)
- **code** (×3)
- **convertToFile** 
- **manualTrigger** 
- **respondToWebhook** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
