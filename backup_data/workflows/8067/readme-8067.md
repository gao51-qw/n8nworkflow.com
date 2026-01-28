# Personalized evening wind-down system with mood tracking via Telegram, Notion & Email

> 🌸 **The Quiet Evening Ritual — Wind-Down Automation (Telegram + Notion + Email)**

Create a calming **9PM evening** routine that runs itself. This n8n template checks in via Telegram with mood buttons, **delivers personalized support** (meditation when you’re tired, celebration when you’re thriving), logs reflections to a Notion “Evening Reflection Log,” and **sends a gentle goodnight email** with tomorrow’s affirmation.

**Who it’s for**

Homemakers, moms, and creators who feel “always on” and want a graceful, one-tap transition into rest.

**What it does**

**9:00 PM Telegram** mood check (I’m Tired 💤 / Felt Great ✨)

Personalized content (**5-min meditation or celebration prompt**)

Automatic Notion journaling (mood, reflection, wins, date, affirmation)

Goodnight email with a fresh morning affirmation

**Optional: GPT-4o mini for gentle reflection prompts**

**Why it’s different**

Not just logging—this is a ritualized, emotionally intelligent handoff from work to rest that protects your peace and builds consistency.

**Stack & Nodes**

Cron → Telegram → IF → Notion → Email (+ optional GPT)

## 📊 Basic Information

- **Workflow ID:** 8067
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 222
- **Downloads:** 22
- **Created:** 2025/8/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8067)

## 👤 Author

- **Name:** Shelly-Ann Davy
- **Username:** @SheCodesFlow

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×3)
- **set** (×5)
- **cron** 
- **telegram** (×3)
- **telegramTrigger** 
- **if** (×2)
- **openAi** 
- **code** (×2)
- **notion** (×2)
- **emailSend** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
