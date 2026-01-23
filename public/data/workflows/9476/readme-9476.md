# Automate RSS News to Telegram with GPT AI & Image Watermarking

> ## 🤖 This **n8n workflow** automatically posts new articles from an RSS feed to your Telegram channel.
It enhances article text using AI, adds a branded watermark to the article image, and keeps your channel updated with fresh and consistent content.

---

### **Use Cases**

* Automatically publish RSS feed updates to **Telegram**.
* Use **AI** to rewrite, summarize, or stylize text.
* Add **watermarked visuals** to keep your content on-brand.
* Perfect for news aggregators, media channels, and content creators.

---

### **How It Works**

1. **RSS Trigger:** Monitors an RSS feed for new articles.
2. **Check Google Sheet:** Compares links to avoid reposting.
3. **Fetch Article:** Retrieves the full article content for new links.
4. **AI Enhancement:** Uses an AI agent to improve readability and engagement.
5. **Image Watermarking:** Fetches the main image and adds a watermark.
6. **Telegram Publishing:** Sends the final AI-enhanced post to your Telegram channel.

---

### **Setup Steps**

* **Google Sheet:** Create and share a sheet to store processed links.
* **RSS Source:** Add your feed URL to the RSS Trigger node.
* **AI Agent:** Configure a prompt and model (e.g., OpenRouter or Gemini).
* **Telegram Bot:** Add your bot token and chat ID for message delivery.
* **Test & Automate:** Run once manually, then let it update automatically.

---

### **Tips**

* You can tweak the AI prompt to match your tone (e.g., newsy, casual, concise).
* Adjust watermark placement, font, and color for brand consistency.
* AI models may have usage costs or regional restrictions.

---

✅ **Key Advantage:**
Fully automated — from RSS feed detection to AI-enhanced publishing with branded visuals.

## 📊 Basic Information

- **Workflow ID:** 9476
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 871
- **Downloads:** 87
- **Created:** 2025/10/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9476)

## 👤 Author

- **Name:** octik5
- **Username:** @octik5

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **rssFeedReadTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×4)
- **googleSheets** (×2)
- **if** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequest** 
- **editImage** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
