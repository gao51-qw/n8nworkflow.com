
## 📌 **Overview**

This workflow allows users to send any **newspaper or article link** to a Telegram bot.
The workflow then:

1. Validates the URL
2. Scrapes the webpage (title, description, full text, images, OG metadata)
3. Processes it using a Vision-Language Model (VLM)
4. Generates structured summaries & highlights
5. Downloads images (if available)
6. Sends a formatted report + document back to Telegram
7. Stores the summary in a vector database
8. Allows users to **chat with the article** using semantic search

Perfect for:
✔ News researchers
✔ Students
✔ Journalists
✔ Telegram-based AI assistants
✔ Automated media monitoring

---

## 🧠 **What the Workflow Does**

### **1. Telegram Trigger**

* Listens for messages from the user.
* Detects if the message contains a valid link.

### **2. URL Scraper**

A custom n8n Code node fetches the webpage and extracts:

* Meta description
paragraph text
* All image sources
* Open Graph metadata (og:title, og:image)

Returns everything as structured JSON.

### **3. VLM Run – Highlighter**

A Vision-Language Model analyzes the scraped content and outputs:

```json
{
  "news_summary": {
    "headline": "",
    "source_url": "",
    "published_date": "",
    "key_points": "",
    "summary": "",
    "extracted_images_url": ""
  }
}
```

### **4. Image Validation & Download**

* Checks if image URLs are valid.
* Downloads them (if any).
* Sends them to Telegram as documents.

### **5. Summary File Generation**

* Converts VLM output into a `.txt` report.
* Sends the report back to the user.

### **6. Vector Store + Q&A Agent**

* Converts the summary into embeddings.
* Stores the vector in an in-memory store.
* Provides the user with a **chat interface**:

  * Ask anything about the newspaper article.
  * The AI agent retrieves information using the vector store.

---

## 📤 **Outputs**

You receive:

✔ Telegram message summary
✔ Downloadable summary `.txt` file
✔ Extracted images (if available)
✔ Chat-based Q&A agent to explore the newspaper details

---


## 🚀 **Use Cases**

* News summarization bots
* Media intelligence agents
* Educational news explorers
* Topic-based daily digest creators

