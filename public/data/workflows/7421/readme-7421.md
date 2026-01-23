# Scheduled daily affirmations via email and Telegram using Cron

> ## Description

Wake up gently. This elegant workflow runs every morning at 7 AM, picks one uplifting affirmation from a curated list, and delivers it to your inbox (with optional Telegram). Zero code, zero secrets—just drop in your SMTP and Telegram credentials, edit the affirmations, and activate. Perfect for creators, homemakers, and entrepreneurs who crave intention and beauty before the day begins.

## How it works (high-level steps)
- Cron wakes the flow daily at 7 AM.
- Set: Configuration stores your email, Telegram chat ID, and affirmations.
- Code node randomly selects one affirmation.
- Email node sends the message via SMTP.
- IF node decides whether to forward it to Telegram as well.
- 
## Set-up time
- 2 – 3 minutes
- 30 s: add SMTP credential
- 30 s: add Telegram Bot credential (optional)
- 1 min: edit affirmations & email addresses
- 30 s: activate

## Detailed instructions

All deep-dive steps live inside the yellow and white sticky notes on the canvas—no extra docs needed.

## Requirements

- SMTP account (SendGrid, Gmail, etc.)
- Telegram Bot account (optional)
- Customisation tips
- Change Cron time or frequency
- Swap affirmation list for quotes, verses, or mantras
- Add Notion logger branch for journaling

## 📊 Basic Information

- **Workflow ID:** 7421
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 126
- **Downloads:** 12
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7421)

## 👤 Author

- **Name:** Shelly-Ann Davy
- **Username:** @SheCodesFlow

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×2)
- **cron** 
- **set** 
- **code** 
- **if** 
- **emailSend** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
