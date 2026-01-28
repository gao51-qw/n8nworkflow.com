# Generate newsletter images with Nano Banana & Post Human-Approved Tweets to X

> ## What this is
A ready-to-use **n8n workflow** that turns new Google Sheets rows (title + summary) into **brand-safe images** using **Nano Banana (via KIE.ai)**, writes the **image URL** back to your sheet, generates a **tweet text**, requests **human approval** in Telegram, and—on approval—**posts to X (Twitter)** automatically.

## Why you need it
- **Save time**: no more waiting for ad-hoc graphics—get on-brand visuals in seconds.
- **Stay consistent**: one prompt style, predictable output, brand-safe negative prompts.
- **Ship daily**: scale newsletter/blog distribution without ballooning costs or headcount.
- **Human in the loop**: you keep creative control before anything goes live.

## How it works (high level)
1. New/updated row in Google Sheets (e.g., `title`, `blogpost_summary`, `status=pending`).  
2. Prompt builder creates a **short, safe image prompt** (CI friendly).  
3. **Nano Banana (KIE.ai)** generates the image (PNG) → URL saved back to the sheet.  
4. A **tweet** (&lt;280 chars) is generated from the row.  
5. Telegram sends **image + text** for **approval** (Approve/Reject).  
6. On **Approve**, the image is uploaded and the tweet is posted to X → `tweet_url` + `status=posted` saved to the sheet.

## Who it’s for
- Content & marketing teams, solo creators, agencies, and founders running lean editorial calendars.

## Extend it (ideas)
- **Multi-variant** images (A/B) with auto-selection based on CTR.  
- **Brand controls**: fixed color palettes, fonts, or stylistic anchors in prompts.  
- **Auto-publish** to LinkedIn/Instagram (via Buffer/Hootsuite or native APIs).  
- **Asset storage**: push originals to S3/Drive and auto-rename by slug/date.  
- **Analytics**: log posts + clicks to a database and feed learnings back into prompts.

## Pricing & Advantage
- **Nano Banana (via KIE.ai)** is typically **~$0.02–$0.04 per image** (plan-dependent).  
- **Posting to X** has no per-post cost (API plan limits may apply).  
- **Why KIE.ai vs “classic” Google API?** Lower practical unit costs for this image-gen use case, **simpler integration** (same vendor for image + video), and task/status flows that fit **n8n polling** perfectly.  
&gt; Always check your KIE.ai dashboard for current pricing/limits.

## Quick setup (Step-by-Step)
1. **Accounts/credentials**: create a KIE.ai account & API key; set up Google Sheets access; create a Telegram bot with @BotFather (copy token & get Chat ID); enable X (Twitter) API (OAuth).  
2. **Import the n8n template** and connect credentials (KIE.ai header: `Authorization: Bearer {{ $env.KIE_API_KEY }}`).  
3. Point the **Google Sheets Trigger** at your sheet/tab; use `status=pending` as the starting condition.  
4. Verify the **Prompt Generator** (short, brand-safe prompt + negative prompt).  
5. Test **Image Gen** → ensure `image_url` is written back to the sheet.  
6. Test **Telegram approval** (image + tweet text).  
7. On approve, confirm the **tweet** posts and `tweet_url` + `status` update in the sheet.

## Quick usage (Step-by-Step)
1. Add a row in your sheet with `title`, `blogpost_summary`, (`status=pending`).  
2. Wait for the bot: you’ll get **image + tweet text** in Telegram.  
3. **Approve** to post to X, or **Reject/Regenerate** to try a new style.  
4. Find `tweet_url` and `status` updated in your sheet.

---

**Questions?** Email: suliemansaid.business@gmail.com

## 📊 Basic Information

- **Workflow ID:** 8655
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 138
- **Downloads:** 13
- **Created:** 2025/9/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8655)

## 👤 Author

- **Name:** SuS
- **Username:** @sulieman-said

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×5)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **wait** 
- **if** (×2)
- **stickyNote** (×6)
- **googleSheetsTrigger** 
- **googleSheets** (×3)
- **telegram** (×2)
- **twitter** 
- **@n8n/n8n-nodes-langchain.agent** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
