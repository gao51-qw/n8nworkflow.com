# Automated viral content engine for LinkedIn & X with AI generation & publishing

> # Social Media Spark (SMS) — Automated Viral Content Engine

Automate your entire **content workflow**: discover viral ideas, generate posts in your tone, repurpose for X, and auto-publish — reducing **90% of manual effort**.

---

## 🚀 What it Does
- Scrapes competitors or niche profiles on LinkedIn to find **high-performing posts**.
- Classifies and saves **evergreen content ideas** for later use.
- Generates **fresh posts** in your own voice with **matching images**.
- Repurposes content for **X (Twitter)** in a platform-optimized style.
- Automatically **publishes content** to LinkedIn and X on your schedule.
- Allows **on-demand commands** via Telegram for research or instant content generation.

---

## 🧩 Why Use It
- **Save time:** no more manual scraping, idea collection, or formatting.
- **Stay consistent:** maintain a daily content pipeline.
- **Multi-platform leverage:** create once, adapt for LinkedIn and X.
- **Creative control:** mix automation with optional human review.
- **Scalable:** extend to more platforms, analytics, and workflows as you grow.

---

## 🔧 Prerequisites & Setup
Before importing or activating the workflow, prepare these:

- **AI Provider (OpenAI / Gemini / OpenRouter)**  
  For classifying posts, generating new content, repurposing for X.

- **Google Sheets**  
  Central database for competitors, ideas, generated posts, and posting status.

- **Google Drive**  
  Stores generated images.

- **Apify & Browseract**  
  Scrapes LinkedIn profiles, posts, and performs research tasks.

- **LinkedIn API**  
  Needed for automated LinkedIn publishing.

- **X (Twitter) API**  
  Requires **OAuth 1.0a** for image uploads and **OAuth 2.0** for text posting.

- **Telegram Bot**  
  Enables on-demand commands and notifications.  
  Set your Telegram User ID in the trigger node.

&gt; 🔎 In each sub-workflow, look for nodes marked **“Configure Me!”** to replace example prompts, search keywords, sheet IDs, etc.

---

## ⚙️ How It Works (Simplified Flow)
1. **Scrape & Classify:** Collect high-engagement posts → keep evergreen ones.  
2. **Generate Content:** Rewrite ideas into new posts in your voice → create images.  
3. **Repurpose for X:** Adapt LinkedIn posts for short-form, high-impact tweets.  
4. **Auto-Publish:** Post daily on LinkedIn and X.  
5. **Control via Telegram:** Manually trigger scraping, research, or post generation.

---

## 💡 Best Practices & Tips
- Keep all **API keys private** — never share them in public repos or screenshots.
- Adjust **cron schedules** (e.g., scraping on weekends, posting on weekdays) to fit your content rhythm.
- Add **Human-in-the-Loop** review steps for brand-sensitive content.
- Extend to other platforms (Instagram, TikTok, YouTube Shorts) as needed.
- Experiment with **prompt variations** for different tones or creative styles.
- Add **analytics logging** (likes, comments, clicks) to measure content performance.

---

## 🙋‍♂️ Who is This For
- **Solo creators & founders** who want to post consistently but don’t have time for daily ideation.
- **Small marketing teams** that need to keep up with trends without spending hours on research.
- **Consultants & thought leaders** who want to amplify their personal brand on LinkedIn and X.
- **Startups & bootstrapped businesses** that need a lean but reliable content engine.
- **Content strategists** who want a data-driven, repeatable pipeline for finding and using what works.

Or anyone who wants to boost social presence by 300%

---

## 💡 Why SMS Stands Out
- **Authentic voice:** Uses your own tone and style (defined in prompts and examples), so posts feel personal — not generic AI fluff.
- **Data-driven:** Pulls from real, viral posts in your niche to inspire fresh content.
- **Quality over quantity:** Focuses only on proven viral ideas instead of churning random posts.
- **Consistent growth:** Keeps your posting regular, so you stay visible and relevant.
- **Efficient workflow:** Minimizes manual work while letting you step in when needed (e.g., for approvals or special campaigns).

&gt; ⚡ SMS combines **real market data** with your **unique voice** — so you post smarter, not just more often.


## 📊 Basic Information

- **Workflow ID:** 9100
- **Complexity:** advanced
- **Node Count:** 156
- **Views:** 3370
- **Downloads:** 337
- **Created:** 2025/9/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9100)

## 👤 Author

- **Name:** Diptamoy Barman
- **Username:** @diptamoy-barman

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×13)
- **googleSheets** (×14)
- **filter** (×2)
- **httpRequest** (×10)
- **aggregate** (×4)
- **stickyNote** (×41)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×5)
- **removeDuplicates** 
- **executeWorkflowTrigger** 
- **scheduleTrigger** (×5)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×8)
- **convertToFile** (×3)
- **telegram** (×11)
- **if** (×7)
- **splitInBatches** (×2)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **googleDrive** (×5)
- **extractFromFile** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×4)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **linkedIn** 
- **twitter** (×2)
- **wait** 
- **switch** (×2)
- **telegramTrigger** 
- **executeWorkflow** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 156 nodes with 93 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
