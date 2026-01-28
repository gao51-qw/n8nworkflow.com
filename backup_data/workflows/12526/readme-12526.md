# Automate outbound AI sales calls with double-dial using Airtable and Vapi AI

> 
## 🚀 The Ultimate AI Sales Outbound Engine

*Stop wasting hours on manual dialing and listening to ringtones. This workflow transforms your **Airtable** into a high-velocity **AI Call Center** using **Vapi AI***.

### ⚡ TL;DR

Automate lead qualification calls, handle voicemails like a pro, and sync every transcript back to your CRM without lifting a finger.

### 🧠 How it Works

1. **The Scout:** Every minute, n8n scans your Airtable for leads marked `TBC`.
2. **The Dialer:** It triggers a personalized **Vapi AI** call, passing along the lead’s name and context.
3. **The Reporter:** Once the call ends, a Webhook catches the data, including the **recording, transcript, and AI summary**.
4. **The Strategist:** * **Success?** Updates the lead to `Called` and logs the summary.
* **Voicemail?** Automatically triggers a **double-dial** retry after 1 minute.
* **Still nothing?** Schedules a final follow-up for the next day at the **optimal time (`your time`)**.



### 🛠️ Setup Guide

* **Airtable:** Create a "Leads" table with fields for `Status`, `Mobile`, `Attempt`, and `Summary`.
* **Vapi:** Plug in your Assistant ID and set the Webhook URL to this workflow's address.
* **n8n:** Use the **Header Auth** credential for your Vapi API key to keep things secure.

### 💎 Why This Wins

* **Aggressive Retries:** Includes a built-in "Double-Dial" strategy to increase connection rates.
* **Clean CRM:** No more messy notes; get structured AI summaries for every call.
* **Plug-and-Play:** Designed to be easily customized for any industry—from real estate to SaaS.


## 📊 Basic Information

- **Workflow ID:** 12526
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 18
- **Downloads:** 1
- **Created:** 2026/1/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12526)

## 👤 Author

- **Name:** zahir khan
- **Username:** @mr-khan

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×3)
- **scheduleTrigger** 
- **airtable** (×12)
- **set** 
- **httpRequest** (×3)
- **webhook** 
- **if** (×6)
- **wait** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
