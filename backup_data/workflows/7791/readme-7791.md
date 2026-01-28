# Curate RSS feeds into daily content ideas via email with Notion & Telegram options

> **Graceful Content Sparks — RSS → Notion (n8n)**

---

📰 Curate RSS Feeds into Daily Content Ideas via Email with Optional Notion Storage
Wake up to a burst of inspiration every morning! 🌞
🚀 What it does
🔄 Polls unlimited RSS feeds (blogs, YouTube, Substack, podcasts, you name it)
✍️ Re-writes each new headline into 5–10 scroll-stopping content angles
📧 Delivers a tidy email digest at 9 AM sharp (or whenever you choose)
🗂️ Auto-saves every idea into a Notion database (toggle on/off)
🛟 Self-healing error alerts keep the pipeline bullet-proof
📐 Angles? Think “ready-made tweets”
An angle is a bite-sized spin on the original post.
Example:
Original RSS headline: “TikTok Rolls Out 15-Minute Videos”
Angle: “3 product-demo formats you can finally fit into TikTok’s new 15-min limit (+ templates)”
🎯 Use-cases
🧑‍💻 Social media managers who need fresh posts daily
🖋️ Newsletter writers hunting for curated news blurbs
📈 Growth teams mining competitor blogs for campaign sparks
🏝️ Solopreneurs who’d rather sip coffee than scroll feeds
⚙️ 30-second setup
Drop your RSS URLs into the list node 🪄
Add SMTP or Gmail creds 📧
(Optional) Flip on Notion mode → paste your Ideas DB ID
Hit Manual Trigger to test → switch to daily cron when you’re happy 🎉
✅ Compliance checklist
✅ Stickies
✅ Manual trigger path
✅ Zero secrets in JSON
✅ Timezone-aware cron

## 📊 Basic Information

- **Workflow ID:** 7791
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 72
- **Downloads:** 7
- **Created:** 2025/8/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7791)

## 👤 Author

- **Name:** Shelly-Ann Davy
- **Username:** @SheCodesFlow

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **cron** 
- **manualTrigger** 
- **set** 
- **function** (×4)
- **rssFeedRead** 
- **if** (×2)
- **notion** 
- **emailSend** (×2)
- **telegram** 
- **errorTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
