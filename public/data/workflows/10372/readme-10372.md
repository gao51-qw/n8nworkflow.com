# Create & publish affiliate product videos with Sora-2, GPT & YouTube

> # 🚀 Affiliate AI-Powered Video Funnel Fully Automated Product Video Creation & Publishing

**Turn your affiliate links or product catalog into a 24/7 AI video marketing machine.**
This n8n workflow auto-creates human-presenter promo videos using AI and publishes them directly to YouTube with SEO — completely hands-free. ✅

---

## 🎯 What This Automation Does

* 🔄 **Fetches product or affiliate data** from Google Sheets / Airtable / Database
* 🎙️ **Generates human-presenter video prompts** (Sora-style) using AI Agents
* 🎬 **Renders promotional videos automatically** via AI video generation
* ⏳ **Polls render completion** & handles errors safely
* 📤 **Uploads videos to YouTube** (draft, unlisted, or public)
* 🧠 **Auto-generates SEO metadata** (titles, descriptions, tags, hashtags)
* ✅ **Human approval flow** before public publishing
* 📝 **Updates catalog status** to prevent duplicates
* ⏱️ **Runs daily, weekly, or per request** via form or trigger

This workflow eliminates all repetitive editing, uploading, and SEO work — **your channel grows while you sleep**. 😴📈

---

## 🧑‍🏫 Step-by-Step Video Tutorial

🎥 **Complete Implementation Demo**
👉 [https://youtu.be/pOxcVbYdr0w](https://youtu.be/pOxcVbYdr0w)

📌 Covers full setup, rendering, approval, publishing, and automation scheduling.

---

## 🌐 Useful Links

* 🛠️ n8n Hosting / Setup Support: [https://syncbricks.com](https://syncbricks.com)
* 📚 YouTube Data API Docs: [https://developers.google.com/youtube/v3](https://developers.google.com/youtube/v3)
* 🤖 Kai / AI Render Service: *(any Sora-style provider you choose)*
* 🧠 AI Prompt Docs (OpenAI etc.): [https://platform.openai.com/docs/api-reference](https://platform.openai.com/docs/api-reference)

---

## 🛠 Prerequisites

* ✅ n8n (Self-Hosted or Cloud)
* ✅ AI Agent inside n8n configured
* ✅ YouTube API credentials
* ✅ Product/Affiliate data source:

  * Google Sheets OR Airtable OR Database
* ✅ AI Video Rendering: Sora-style provider API

📝 Recommended product fields:

&gt; Title, Summary, Brand, Landing Page, Affiliate Link (if using monetization)

---

## 📋 How This Workflow Works — Step by Step

### 1️⃣ Product Input & Filtering

* Fetch unpublished product/item
* Skip rows marked “Published” or with error codes
* Ideal for **drip publishing** content every day

### 2️⃣ AI Promo Script + Presenter Prompt

* Converts product benefits → human script
* Adds overlays + camera movement + style cues
* Presenter looks professional, friendly & trusted

### 3️⃣ AI Video Rendering

* Send prompt, wait for result
* Retry & timeout safety built-in

### 4️⃣ YouTube Upload

* Uploads automatically as **Unlisted**
* ✅ Sends Human-In-The-Loop (HITL) approval
* After approval → **Public Publish**

### 5️⃣ SEO Enhancement

* Generates tags, hashtags & optimized titles
* Inserts affiliate link into description
* Updates video via YouTube API

### 6️⃣ Mark As Published

* Saves record in sheet/db
* Avoids duplicate publishing

---

## 💰 Affiliate / Monetization Features

* 🛒 Add PartnerStack / Amazon Associates links
* 🔗 Auto-insert affiliate URLs per product
* 🧩 Optional dynamic UTM tracking
* 📈 Ready for performance dashboards (CTR, views)

You create **zero videos**, yet grow **daily affiliate revenue**. 🔥

---

## 💡 Advanced Customizations

| Idea                            | Benefit                         |
| ------------------------------- | ------------------------------- |
| Multi-platform publishing       | Expand reach beyond YouTube     |
| Multi-language voice & captions | Increase global audience        |
| Category-based styles           | Better storytelling per product |
| Bulk overnight generation       | Boost weekly content output     |
| Analytics integration           | Track growth & ROI easily       |

---

## ⚠️ Troubleshooting

| Issue             | Fix                            |
| ----------------- | ------------------------------ |
| No video returned | Check AI render provider quota |
| Upload fails      | Verify YouTube OAuth scopes    |
| Duplicate uploads | Confirm Published tag update   |
| Video quality     | Adjust prompt style profile    |

---

## 🙌 Why This Template

You can scale affiliate & product-based video content **without editing tools**, **creators**, or **extra headcount**:

✅ Saves hours per video
✅ Builds traffic and trust automatically
✅ Generates recurring affiliate income
✅ Turns your product list into a money-making content engine

---

## 🚀 Get Started in Minutes

Import the workflow → Connect APIs → Approve → Publish → Earn 💸

👉 More AI + n8n Workflows & Support
[https://syncbricks.com](https://syncbricks.com)

👉 Subscribe for Tutorials
[https://youtube.com/@syncbricks](https://youtube.com/@syncbricks)

👉 Connect with the creator (Amjid Ali)
[https://linkedin.com/in/amjidali](https://linkedin.com/in/amjidali)

---

### 🔖 Knowledge Base Tags

`ai_video_automation`, `affiliate_marketing`, `youtube_api`, `handsfree_automation`, `ecommerce_video_marketing`, `n8n_ai_agents`, `social_video_automation`, `product_video_generator`, `workflow_automation`, `marketing_scaling`



## 📊 Basic Information

- **Workflow ID:** 10372
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 267
- **Downloads:** 26
- **Created:** 2025/10/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10372)

## 👤 Author

- **Name:** Amjid Ali
- **Username:** @amjid

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×9)
- **scheduleTrigger** 
- **googleSheets** (×3)
- **limit** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **set** (×2)
- **filter** 
- **httpRequest** (×4)
- **code** 
- **if** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **wait** (×2)
- **youTube** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
