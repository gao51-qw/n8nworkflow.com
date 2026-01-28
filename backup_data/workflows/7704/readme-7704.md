# Extract transactions from images using unli.dev Vision API & Telegram

> [unli.dev](https://unli.dev) + [n8n](https://n8n.io) + Telegram

Image Analyzer turns images sent to your Telegram bot into clean, Markdown-formatted transaction text using [unli.dev Vision API](https://unli.dev). Instead of typing numbers and dates manually, the workflow downloads the photo, converts it to base64, analyzes it via API, and replies in-chat with extracted details, saving time and reducing errors. 


## 💡 Why Use Image Analyzer?

* **Save time:** Process images in seconds, cutting manual entry by up to 90%.
* **Solve pain points:** No more blurry screenshot frustration; get clean Markdown transactions.
* **Faster outcomes:** Per-image turnaround under 15s.
* **Competitive edge:** Give staff/customers structured feedback instantly 


## ⚡ Perfect For

* **Small business owners:** Capture receipts/payments quickly.
* **Accountants/bookkeepers:** Intake client receipts with fewer typos.
* **Ops/support teams:** Turn messy screenshots into actionable records.


## 🔧 How It Works

1. **Trigger:** Telegram bot receives photo.
2. **Process:** Convert to base64 & prepare request.
3. **Smart Logic:** Call [unli.dev Vision API](https://unli.dev) for text extraction.
4. **Output:** Send Markdown result back to Telegram.
5. **Optional:** Save structured data to Google Sheets, Airtable, or DB.


## 🛠 Quick Setup

1. Import workflow JSON to your [n8n](https://n8n.io) instance.
2. Add credentials: Telegram bot + unli.dev API key.
3. Customize the system prompt (default: *extract the transaction in Markdown*).
4. Test by sending a real photo to your bot.

## 🧩 You’ll Need

* [n8n](https://n8n.io) instance
* Telegram bot token
* [unli.dev Vision API](https://unli.dev) key
* Optional: Google Sheets / Airtable for storage


Made by: **[Khaisa Studio](https://khaisa.studio?utm_source=n8nofficial)**  
Category: `Image Analysis`

Contact: **[Get in touch](https://khmuhtadin.com/contact)**

## 📊 Basic Information

- **Workflow ID:** 7704
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 219
- **Downloads:** 21
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7704)

## 👤 Author

- **Name:** Khairul Muhtadin
- **Username:** @khmuhtadin

## 🏷️ Categories

- Invoice Processing
- Multimodal AI

## 🔗 Nodes Used

- **telegram** (×2)
- **code** 
- **set** 
- **telegramTrigger** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
