# Weekly business & home task planner with Notion, email digests and Telegram

> 

**🪄Weekly Home & Business Task Planner with Notion DB and n8n Email Digests**
One calm Sunday email that aligns your business priorities and household rhythm—deep-work blocks, gentle home resets, and optional Notion import. *Automate with grace. Scale with power.*

---

## ✨ Concise Description
Design your week with intention in minutes. This n8n workflow collects your Business + Home tasks (optionally from Notion), generates a soft but decisive weekly plan, and emails it to you (and your partner if you’d like). It also suggests protected deep-work blocks and can send a Telegram ping. Import, fill 3 fields, hit Manual Trigger—done.

---

## 🧰 Full Description 

**What it does**

* Runs on **Sundays 17:00** (customizable) or **Manual Trigger**
* Pulls tasks from **Notion** (optional) or uses the built-in sample list
* Builds a **single, elegant email** with sections for **Business**, **Home**, and **Protected Focus** (2× two-hour deep-work blocks by default)
* Optionally **CCs your partner** and sends a **Telegram** confirmation

**Perfect for**
Women founders, creators, and homemakers who want a weekly plan that respects both the business and the home—without decision fatigue.

**Why it works**

* Reduces mental load with a **single ritual** and a **single email**
* Protects your **focus windows** while honoring household anchors
* “Soft power” tone that’s motivating, not overwhelming

**What’s included**

* **Workflow JSON**: `Weekly_Rhythm_Planner_v1.json` (submission-friendly stickies)
* **Quick Start (PDF)**: 5–minute setup
* **Implementation Checklist (PDF)**
* **Troubleshooting (PDF)**
* **Notion Tasks CSV** template
* **README** (what’s inside + defaults)

**Requirements**

* Email credentials (SMTP/Gmail)
* Optional: Notion database for tasks (CSV provided), Telegram bot + chat ID

**Setup in 3 steps**

1. Import JSON → open **Set: User Config**
2. Fill `FROM_EMAIL`, `EMAIL_TO_SELF` (and partner if desired)
3. Attach credentials → **Manual Trigger** to preview → enable **Weekly Cron**

**Customization toggles**

* `ENABLE_NOTION`, `ENABLE_PARTNER`, `ENABLE_TELEGRAM`
* `DAYS_AHEAD` (default 7), `DEEP_WORK_BLOCKS` (default 2)
* `CRON_EXPRESSION` & `CRON_TIMEZONE`

**FAQ**

* *Do I need Notion?* No—sample tasks are built in.
* *Can I change the send time?* Yes—edit the Cron node or `CRON_EXPRESSION`.
* *Is my data safe?* Credentials live in n8n; no secrets in the JSON.

**Motto**
*Automate with grace. Scale with power.*




## 📊 Basic Information

- **Workflow ID:** 7789
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 89
- **Downloads:** 8
- **Created:** 2025/8/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7789)

## 👤 Author

- **Name:** Shelly-Ann Davy
- **Username:** @SheCodesFlow

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **cron** 
- **manualTrigger** 
- **set** 
- **function** (×3)
- **if** (×3)
- **notion** 
- **emailSend** (×3)
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
