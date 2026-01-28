# Daily affirmations & weekly gratitude digest with Notion, Email & Telegram

> 🌸 **Affirmation Sender + Weekly Gratitude Digest v2**  
### *A gentle, automated wellness ritual for high-impact women who scale with grace.*

📌 **What it does**  
- **Every morning at 7 a.m.** (your timezone) → a *fresh* affirmation lands in **Email, Telegram, or both**.  
- **Every Sunday at 6 p.m.** → a *beautiful recap* of your last-7-day gratitude notes is delivered.  
- **Logs everything** to a simple Notion hub so you can revisit, review, or share.

✨ **Out-of-the-box experience**  
| Channel | Morning Affirmation | Sunday Digest |
|---------|---------------------|---------------|
| **Email** | Styled HTML + tasteful Unsplash hero image | Scroll-ready digest with blush-gold imagery |
| **Telegram** | Minimal text + emoji sparkle | Same digest, perfectly mobile-formatted |

🛠️ **30-second setup**  
1. **Fork the template** in n8n.  
2. **Fill four fields** in `Set: User Config` (email, Telegram chat ID, Notion DB ID, channel).  
3. **Connect credentials** (Email SMTP, Telegram Bot, Notion, *optional* Slack/Discord).  
4. **Activate** — your future self will thank you.

🧩 **Notion schema you’ll create** (copy-paste once)
| Property | Type | Example |
|----------|------|---------|
| **Name** | Title | “I choose grace and ease today.” |
| **Type** | Select | `Affirmation` or `Gratitude` |
| **Date** | Date | 2025-08-19 |
| **Channel** | Multi-select | `email`, `telegram` |
| **Message** | Rich text | Full text or note |

🆕 **v2 upgrades**  
- **Timezone-aware** – respects the workflow’s TZ setting.  
- **Filtered queries** – digest only fetches `Type = Gratitude` from the last 7 days (faster, lighter).  
- **Rich media** – every email includes an Unsplash banner (keywords you choose, **no API key**).  
- **Observability** – global error handler pings Slack or Discord within **5 seconds** if anything breaks.  

✅ **No hidden data, no secrets**  
- Zero hard-coded keys.  
- Test with a sandbox Notion DB first.  
- Ready for **solo founders, coaches, or community managers** who want to gift their members a daily dose of calm.

🚀 **One-click install**  
Clone → configure → activate.  
**Your gentlest growth system is now on autopilot.**

## 📊 Basic Information

- **Workflow ID:** 7555
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 74
- **Downloads:** 7
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7555)

## 👤 Author

- **Name:** Shelly-Ann Davy
- **Username:** @SheCodesFlow

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×2)
- **cron** (×2)
- **set** (×3)
- **function** (×5)
- **if** (×4)
- **emailSend** (×2)
- **telegram** (×2)
- **notion** (×2)
- **errorTrigger** 
- **wait** 
- **slack** 
- **discord** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
