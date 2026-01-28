## 📰 Reddit to Newsletter (Automated Curation with Open AI 4o Mini )

Turn the best posts from a subreddit into a **ready-to-send HTML newsletter** — no copy-pasting, no wasted time.  
This workflow **fetches new posts**, filters by **topic of interest**, **analyzes comments**, **summarizes insights**, and composes a **clean HTML email** delivered straight to your inbox with Gmail.

---

### 💡 What this workflow does
- ✅ **Fetches posts** from your chosen subreddit (default: `r/microsaas`, sorted by “new”)  
- 🏆 **Selects the Top 10** by upvotes, comments, and recency  
- 🧭 **Defines a topic of interest** and runs a lightweight AI filter (`true/false`) without altering the original JSON  
- 💬 **Pulls and flattens comments** into a clean, structured list  
- 🧠 **Summarizes each post + comments** into *main_post_summary*, *comment_insights*, and *key_learnings*  
- ✍️ **Generates a newsletter in HTML** (not Markdown) with headline, outline, sections per post, quotes, and “by the numbers”  
- 📤 **Sends the HTML email via Gmail** with subject “Reddit Digest” (editable)

---

### 🛠 What you’ll need
- 🔑 **Reddit OAuth2** connected in n8n  
- 🔑 **OpenAI API key** (e.g., `gpt-4o-mini`) for filtering and summarization  
- 🔑 **Gmail OAuth2** to deliver the newsletter  
- 🧵 A **target subreddit** and a clearly defined **topic of interest**

---

### 🧩 How it works (high-level)
1. **Manual Trigger** → **Get many posts** (from subreddit)  
2. **Select Top 10** (Code node, ranking by ups + comments + date)  
3. **Set topic of interest** → **AI filter** → **String to JSON** → **If topic of interest**  
4. **Loop Over Items** for each valid post  
5. **Fetch post comments** → **Clean comments (Code)** → **Merge comments** → **Merge with post**  
6. **Summarize post + comments** (AI) → **Merge summaries** → **Create newsletter HTML**  
7. **Send Gmail message** with the generated HTML  

---

### ⚙️ Key fields to adjust
- **Subreddit name** and “new” filter in *Get many posts*  
- **Ranking logic** inside *Top 10 Code node*  
- **Text inside Set topic of interest**  
- **Prompts** for *AI filter*, *Summarize*, and *Create newsletter* (tone & structure)  
- **Recipient & subject line** in *Send Gmail message*

---

### ✨ Use cases
- **Weekly digest** of your niche community  
- **Podcast or newsletter prep** with community insights  
- **Monitoring specific themes** (e.g., “how to get first customers”) and delivering insights to a team or client  

---

### 🧠 Tips & gotchas
- ⏱️ **Reddit API limits**: tune batch size and rate if the subreddit is very active  
- 🧹 **Robust JSON parsing**: the *String to JSON* node handles clean, fenced, or escaped JSON; failures return `error` + `raw` for debugging  
- 📨 **Email client quirks**: test long newsletters; some clients clip lengthy HTML  
- 💸 **AI cost**: the two-step (summarization + HTML generation) improves quality but can be merged to reduce cost  

---

## 🧭 Quick customization
- Change `microsaas` to your target subreddit  
- Rewrite the **topic of interest** (e.g., “growth strategies”, “fundraising”, etc.)  
- Adapt the **newsletter outline** prompt for a different tone/format  
- Schedule with a **Cron node** for daily or weekly digests  

---

### 📬 Contact & Feedback
Need help tailoring this workflow to your stack?  

📩 **Luis.acosta@news2podcast.com**  
🐦 **@guanchehacker**

If you’re building something more advanced with **curation + AI** (like turning the digest into a podcast or video), let’s connect — I may have the missing piece you need.
