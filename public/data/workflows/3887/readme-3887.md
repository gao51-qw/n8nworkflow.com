# Auto-generate & publish SEO articles to WordPress with GPT-4 + Postgres tracking

> 🚀 What this flow does
• 🔎 Selects the least-used WordPress category (tracked in PostgreSQL)
• 🤖 Uses GPT (4-mini or better) to generate a fully formatted SEO article with headings, TOC, lists, CTA, and Yoast blocks
• 🖼️ Creates a placeholder cover image and uploads it to WordPress Media
• 📬 Publishes the final post via /wp-json/wp/v2/posts with correct category + featured image
• 🧠 Logs the used category for future rotation (zero duplicates!)

⚙️ Setup in 3 mins

🏷️ Add your WordPress domain with a simple Set node:
    domain=https://yourdomain.com

🔐 Create these 3 credentials in n8n:
    YOUR_WORDPRESS_CREDENTIAL — for /media, /posts
    YOUR_POSTGRES_CREDENTIAL — for category tracking
    YOUR_OPENAI_CREDENTIAL — GPT-4-mini or better

🧱 Run the SQL from docs to create the used_categories table

✅ Manually test first 3–5 nodes to check WP auth, OpenAI response, and DB connection

🕒 Then just schedule it and let the bot write for you.

🎯 Why it's awesome
This is your personal AI content writer + publisher — perfect for:
• 📰 SEO content farms
• 📈 Affiliate blogs
• 🧰 Micro niche sites
• 🤫 PBNs with rotation-safe automation

No more manual uploads, broken categories, or GPT spam. Every post is structured, beautiful, and intelligently categorized.



## 📊 Basic Information

- **Workflow ID:** 3887
- **Complexity:** advanced
- **Node Count:** 46
- **Views:** 3993
- **Downloads:** 399
- **Created:** 2025/5/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3887)

## 👤 Author

- **Name:** AlexWantMoreB
- **Username:** @alexwmb

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **httpRequest** (×4)
- **code** (×7)
- **merge** (×2)
- **stickyNote** (×23)
- **postgres** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **noOp** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 46 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
