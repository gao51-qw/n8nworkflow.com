# Automated content & promo tweet scheduler with Gemini AI and Google Sheets

> # Twitter Automation (n8n Template)

## 🚀 What it does
- Posts a **unique tweet every 2 hours**
- **70% content tweets** (10 proven templates)  
- **30% promo tweets** pulled from Google Sheets  
- Logs past tweets to avoid **duplicates**  

---

## ✅ Requirements
- **n8n** 
- **Google Sheets** with 2 tabs:  
  - `posts` → log of past tweets (`PAST TWEETS`, `Date`)  
  - `promo` → promo source (`name`, `last_posted`, optional extra fields)  
![twitterinfluencerexcel.png](fileId:2340)
- **Twitter (X)** account with OAuth2 write access  
- **Gemini API key** (for text generation)  

---

## ⚡ Results
1. Automated motivational posts
![twitterautomation1.png](fileId:2338)

2. Automated promo posts
![twitterautomation2.png](fileId:2339)
---

## 🔄 How It Works
1. Triggers **every 2 hours** (optional: random delay up to 120 min).  
2. Randomly selects **content (70%)** or **promo (30%)**.  
3. **Content path:** checks `posts`, generates tweet, logs new one.  
4. **Promo path:** picks row from `promo`, generates tweet, updates `last_posted`.  
5. Posts to **Twitter** automatically.  

---

## 🎯 Content Templates
Transformation · Hook–List–Takeaway · Interesting Fact · Metaphor · Contrast · Motivation · Triad · Comparison · 80/20 Rule · Callout  

---

## ⚙️ Customization
| Setting | Where | Example |
|---------|-------|---------|
| Ads probability | Code node | Change `Math.random() &lt; 0.3` → `0.2` for 20% |
| Templates | Code node | Edit the `templates` array |
| Cadence | Schedule Trigger | Cron or fixed hours |
| Random delay | Time randomizer | Enable node (0–120 mins) |

---

## 🛠️ Troubleshooting
| Issue | Fix |
|-------|-----|
| Repeated tweets | Ensure `posts` has column `PAST TWEETS` |
| Not posting | Reconnect Twitter creds with write access |
| Promo never used | Increase ads probability (e.g., `0.4`) |


## 📊 Basic Information

- **Workflow ID:** 8435
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 346
- **Downloads:** 34
- **Created:** 2025/9/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8435)

## 👤 Author

- **Name:** Jay Emp0
- **Username:** @jay-emp0

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **googleSheetsTool** (×4)
- **if** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **scheduleTrigger** 
- **stickyNote** (×7)
- **set** 
- **twitter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
