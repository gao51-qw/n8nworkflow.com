# Birthday and ephemeris notification (Google Contact, Telegram & Home Assistant)

> How it works:
- **Schedule Trigger** on a daily basis (configured at 7.30 am)
- **Connects Google Contacts** to get personal information from them
- **Field Checker** on birthday date & firstnames. And see if there is any celebration for today
- **Send a Telegram Notification** and display the message on a Google Home Speaker via Home Assistant if any celebration has matched

Set up steps:
- **Download** the workflow and **import** it into your n8n instance
- **Configure accounts** for Google Contacts, Telegram and Home Assistant
- And you will be good to go

## 📊 Basic Information

- **Workflow ID:** 4462
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 2817
- **Downloads:** 281
- **Created:** 2025/5/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4462)

## 👤 Author

- **Name:** Thibaud
- **Username:** @tderouze

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **googleContacts** 
- **set** (×8)
- **aggregate** (×3)
- **httpRequest** 
- **merge** (×2)
- **if** (×3)
- **telegram** 
- **scheduleTrigger** 
- **code** 
- **homeAssistant** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
