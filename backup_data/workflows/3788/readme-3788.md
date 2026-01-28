# AI-powered YouTube meta generator with GPT-4o, Gemini & content enrichment

> # 🎯 AI-Powered Advanced YouTube Meta Generator in n8n

**Automatically generate SEO-optimized YouTube Titles, Descriptions, Tags & Hashtags – enriched with blog articles, affiliate links, and product recommendations!**

---

### Who is this for?

This workflow is built for **content creators, affiliate marketers, educators, and agencies** who want to instantly enhance their YouTube videos with smart metadata and contextual linking — without wasting hours on research or copywriting.

---

### 🧠 What problem does it solve?

Writing compelling, keyword-rich video metadata is essential for discoverability, engagement, and monetization. But doing this manually for every video is time-consuming. This workflow automates:

- Title & description writing
- Tag & hashtag generation
- Transcript analysis
- Affiliate link embedding
- Internal link recommendations (related blogs & videos)

All in one flow — saving hours per video.

---

### ⚙️ What this workflow does

- 🔗 Accepts a YouTube video link + optional keywords
- 🧠 Uses Gemini or GPT-4o to analyze the transcript
- 📝 Auto-generates:
  - SEO-friendly Title (under 70 chars)
  - Catchy, benefit-focused Description with timestamps
  - Tags (450+ chars)
  - Hashtags (5–10 optimized)
- 🔁 Fetches your blog sitemap and matches relevant articles
- 📹 Finds similar past videos using AI
- 🛍 Embeds recommended affiliate links via Airtable
- 🔧 Updates YouTube video with new metadata via API

---

### 🛠 Setup

1. 🔌 Connect APIs:
   - YouTube Data API (OAuth 2.0)
   - Gemini or OpenAI GPT-4o
   - Airtable (for affiliate links)
   - Kome AI for transcripts
   - WordPress sitemap (for internal links)

2. 📋 Deploy this workflow and open the **form URL** to input:
   - YouTube Video Link
   - (Optional) Focus Keywords

3. 💬 Connect your accounts and authorize required scopes

4. 🧠 AI will handle the rest: from fetching data to publishing metadata.

---

### ✏️ How to customize this workflow

- Replace Gemini with OpenAI / Claude / DeepSeek in the AI nodes
- Point the sitemap node to your own blog
- Modify the Airtable structure for affiliate links:
  - Name, Type, Platform, URL, Keywords
- Change tag/hashtag formatting
- Modify prompt instructions in AI nodes for brand tone

---

### 📌 Sticky Notes Included

- ⚡ Form: “Enter Video Link + Optional Keywords”
- 🔍 Sitemap Extraction: “Get blog URLs for related links”
- 🧠 AI Logic: “Generate Metadata”
- ✅ Update Metadata: “Publish updated title/description/tags”
- 🧾 Completion Confirmation + Attribution to [Amjid Ali](https://amjidali.com)

---

### 🌐 Useful Links

- 🧠 [Learn n8n Automation](https://www.udemy.com/course/mastering-n8n-ai-agents-api-automation-webhooks-no-code/?referralCode=0309FD70BE2D72630C09)  
- 🎓 [n8n Learning Guidebook](https://lms.syncbricks.com/books/n8n)  
- 🚀 [n8n Cloud Signup](https://n8n.syncbricks.com)  
- 🔧 [SyncBricks Tools & Blog](https://syncbricks.com)  
- 🛍 [Affiliate Product Hub](https://n8n.syncbricks.com)
---

### 🔗 Why this workflow?
This workflow is ideal for users exploring n8n AI, working with the n8n API, building AI agents in n8n, deploying via Docker or MCP, integrating with GitHub, automating processes using n8n automation, leveraging tools like n8n chat extension, enhancing YouTube metadata with AI, and incorporating cutting-edge platforms such as Context7, Blotato, and OpenAI, whether using n8n Cloud or setting up self-hosted n8n installations.

## 📊 Basic Information

- **Workflow ID:** 3788
- **Complexity:** advanced
- **Node Count:** 37
- **Views:** 714
- **Downloads:** 71
- **Created:** 2025/4/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3788)

## 👤 Author

- **Name:** Amjid Ali
- **Username:** @amjid

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **form** 
- **set** (×3)
- **youTube** (×3)
- **stickyNote** (×7)
- **httpRequest** (×2)
- **xml** 
- **splitOut** 
- **aggregate** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **code** (×9)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **airtableTool** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 37 nodes with 29 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
