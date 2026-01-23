## 🤖 This **n8n workflow** automatically posts new articles from an RSS feed to your Telegram channel.
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