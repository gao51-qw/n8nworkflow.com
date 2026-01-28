# Web content to Telegram publisher with AI enhancement & image watermarking

> ## 🤖 This **n8n workflow** automatically parses news articles from a webpage, enhances them with AI, and publishes them to a Telegram channel with a watermarked image.
Unlike the RSS-based setup, this workflow directly fetches and processes content from any specified webpage.

---

### **Use Cases**

* Automatically post new website articles to your **Telegram channel**.
* Use **AI** to rewrite or summarize text for better readability.
* Add branded watermarks to images and keep your channel visually consistent.

---

### **How It Works**

1. **Schedule Trigger:** Runs the workflow on a custom schedule.
2. **Fetch Web Page:** Retrieves the HTML content of your chosen website.
3. **Extract Links:** Parses article links from the HTML source.
4. **Check & Update Google Sheet:** Skips already processed links and records new ones.
5. **Fetch & Clean Article:** Retrieves, extracts, and formats the article text.
6. **AI Text Customization:** Uses an AI agent to enhance the text.
7. **Image Watermarking:** Fetches the article image and applies a watermark.
8. **Telegram Publishing:** Posts the final image and AI-enhanced text to your channel.

---

### **Setup Steps**

* **Google Sheet:** Create and share a sheet to track processed links.
* **Web URL:** Enter your target webpage in the HTTP Request node.
* **AI Agent:** Choose a model and prompt for text customization (e.g., OpenRouter or Gemini).
* **Telegram Bot:** Add your bot token and chat ID.
* **Run & Test:** Execute once manually, then let it run on schedule.

---

### **Tips**

* AI usage may incur costs depending on the model provider.
* Some AI models can be geo-restricted — check availability if you get “model not found.”
* Customize watermark style (font, color, size) to match your branding.
* Use Telegram Markdown for rich message formatting.

---

✅ **Key Advantage:**
No RSS required — the workflow directly parses websites, enhances content with AI, and automates publishing to Telegram.



## 📊 Basic Information

- **Workflow ID:** 9441
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 215
- **Downloads:** 21
- **Created:** 2025/10/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9441)

## 👤 Author

- **Name:** octik5
- **Username:** @octik5

## 🏷️ Categories

- Social Media
- AI Chatbot

## 🔗 Nodes Used

- **noOp** 
- **scheduleTrigger** 
- **httpRequest** (×3)
- **html** (×2)
- **code** (×2)
- **if** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **telegram** 
- **stickyNote** (×5)
- **editImage** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
