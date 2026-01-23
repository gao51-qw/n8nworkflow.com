# 7-day Pinterest content planner with Notion integration and email delivery

> ## 🗓️ 7-Day Pinterest Content Planner  
Plan a full week of scroll-stopping pins in under two minutes! 🚀  

### 🧩 What you get  
📌 **7 ready-to-post pins** (title, description, keywords, UTM-tagged link)  
🗂️ **Notion Ideas DB** integration *(optional)* or use the built-in sample list  
🔁 **Smart rotation** of boards & keywords so no two pins feel the same  
💌 **One clean email** with everything you need—just copy & paste into your scheduler  
🛟 **Built-in error alerts** so you never miss a post  

### 🔄 How it flows  
Manual Trigger → **Set User Config** →  
*(Notion enabled?)* Pull Ideas / Else use sample list →  
Build 7-Day Plan → Build Email → **Send Email** →  
*(On failure)* Error Trigger → **Email Owner**

### 🛠️ Prerequisites  
- Email credentials (SMTP or Gmail)  
- *(Optional)* Notion database `Ideas` with:  
  - **Title** (title)  
  - **URL** (url)  
  - **Board** (select)  
  - **Keywords** (rich text)

### ⚙️ Quick setup  
Update these in **Set: User Config**  
`FROM_EMAIL, EMAIL_TO_SELF, ENABLE_NOTION, NOTION_DB_ID, BRAND_SITE_URL, UTM_SOURCE, UTM_MEDIUM, UTM_CAMPAIGN, BOARD_NAMES, KEYWORDS`

### ⏰ Schedule  
Default: **Every Monday 08:00 (Asia/Ho_Chi_Minh)**  
Tweak the cron whenever you like.

### ✅ Test in 60 seconds  
1. Fill in `BRAND_SITE_URL` + UTM fields → hit **Manual Trigger**  
2. *(Optional)* Enable Notion, add DB ID → run again  
3. Flip on the weekly cron → relax!

### 📋 Compliance  
✅ Stickies  
✅ Manual path  
✅ No secrets in JSON  
✅ Timezone-aware Cron

## 📊 Basic Information

- **Workflow ID:** 7792
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 95
- **Downloads:** 9
- **Created:** 2025/8/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7792)

## 👤 Author

- **Name:** Shelly-Ann Davy
- **Username:** @SheCodesFlow

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **cron** 
- **manualTrigger** 
- **set** 
- **if** 
- **notion** 
- **function** (×4)
- **emailSend** (×2)
- **errorTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
