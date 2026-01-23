
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
