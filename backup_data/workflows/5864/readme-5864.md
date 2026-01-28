# Extract text from images with Telegram Bot & Gemini 2.0 Flash OCR

> **Description**
Turn your Telegram bot into a powerful OCR (Optical Character Recognition) tool. This workflow allows you to send any image (like a screenshot, a photo of a document, or a picture of a sign) to your bot, and it will instantly extract and send back the text from that image.

Powered by Google's advanced Gemini AI, this automation is perfect for quickly digitizing notes, saving important snippets, or avoiding manual typing.

**How it works**

This workflow performs a few high-level steps:

1. It triggers when a new image is sent to your Telegram bot.
2. It sends the image to the Google Gemini Vision API to be analyzed.
3. It extracts the text found in the image.
4. It sends the extracted text back to you as a message in Telegram.

**Set up steps**

Estimated set up time: Less than 5 minutes.

The setup is straightforward. You only need to configure two credentials:

1. Telegram Bot Credentials: To connect your bot.

2. Google Gemini API Credentials: To use the OCR feature. You can get a free API key from Google AI Studio.




## 📊 Basic Information

- **Workflow ID:** 5864
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 5074
- **Downloads:** 507
- **Created:** 2025/7/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5864)

## 👤 Author

- **Name:** Rudi Afandi
- **Username:** @fanfanra

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **set** 
- **telegram** (×2)
- **stickyNote** (×2)
- **httpRequest** 
- **extractFromFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
