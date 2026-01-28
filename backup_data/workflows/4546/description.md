Automate Blog Creation and Publishing with Ultra-Low Cost AI

This n8n workflow — **BlogBlizt: Runaware Edition** — automates the creation, enrichment, and publishing of SEO-optimized blog posts for WordPress using **entirely free OpenRouter AI models** for text and metadata generation, plus **ultra-low-cost Runware AI** for realistic featured images (as low as $0.0016 per image).

It’s triggered every 3 hours or manually via Telegram. Each run generates 1,500–3,500-word articles on trending topics in Technology, AI, Tech Facts, History, or Tips — all complete with catchy titles, slugs, meta descriptions, and visuals.

---
### 💰 Why This Is So Cost-Efficient

- ✅ **Free** metadata + article generation (OpenRouter free-tier models)
- 💸 **Only cost** is for image generation via Runware:
  - Image generation: ~$0.0016/image (the cheapest model could be $0,00065)

This is **ideal for scale** — generating dozens of high-quality blog posts with minimal expense.

---

### ⚡ Who Is This For?

- Bloggers who want high-quality content without writing
- SEO marketers seeking fresh, long-form articles
- WordPress site owners automating publishing workflows
- Growth hackers targeting high-volume content generation

---

### ❓ What Problem Does It Solve?

Creating SEO-rich blog content is time-consuming, expensive, and requires expertise. BlogBlizt eliminates this friction by using free models (OpenRouter) to generate text and metadata — making this workflow **nearly free to operate**, with the **only cost being the featured image (~$0.0016/image)**.

---

### 🔧 What This Workflow Does

- ⏱ **Triggers**: Every 3 hours (or via Telegram command: `generate`)
- 🧠 **Generates Metadata**: Title, slug, category, focus keyphrase, and meta description using OpenRouter
- ✍️ **Writes SEO Article**: 1,500–3,500 words with headings, H2/H3s, CTA, and outbound links
- 🖼️ **Creates Image**: Generates realistic 1024×1024 blog image with Runware AI
- 📤 **Publishes to WordPress**: Auto-publishes with category ID, featured image, and Yoast SEO fields
- 📣 **Notifies**: Sends publish link to Discord and Telegram (optional)

---

### 🔐 Setup Instructions

- Import `.json` into n8n
- Add credentials:
  - OpenRouter API (free LLMs like LLaMA-3, Nemotron)
  - Runware API key ([get it here](https://docs.runware.ai/docs/api-access))
  - (Optional) Telegram Bot + Discord Webhook
- Test by sending the word `generate` via Telegram

---

### 🧩 Pre-Requirements

- Self-hosted or cloud-based **[n8n instance](https://n8n.partnerlinks.io/khaisastudio)**
- WordPress with category IDs configured:
  - Technology → `3`
  - AI → `4`
  - Tech Fact → `7`
  - Tech History → `8`
  - Tech Tips → `9`
- OpenRouter API Key (free)
- Runware API Key (for images)
- WordPress user ID (admin, default is `1`)
- Telegram bot (optional)
- Discord webhook (optional)

---

### 🛠️ Customize It Further

- Change writing tone or prompt in `✍️ Compose SEO Article Content` node
- Cofigure the category
- Swap free LLMs (Claude, Gemini, GPT, etc.) in OpenRouter settings
- Adjust schedule (every 6h, daily, etc.)
- Extend alerts (email, Slack, Notion)

---

### 🧠 Nodes Used

- Schedule Trigger
- Telegram Trigger
- @n8n/n8n-nodes-langchain (OpenRouter)
- WordPress Node
- HTTP Request (Runware API)
- Discord Webhook
- Sticky Notes (Documentation inside canvas)

---

### 📞 Support

Created by: [Khaisa Studio](https://khaisa.studio)  
Tag: youtube, summarizer, telegram, openai  
Category: AI Automation, Video Tools
Need a custom? contact me on **[LinkedIn](https://www.linkedin.com/in/khmuhtadin/)** or **[Web](khmuhtadin.com)**

