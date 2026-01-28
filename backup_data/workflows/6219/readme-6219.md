# Multi-channel campaign messaging with GPT-4 and Salesforce

> ## How it works
1. **Fetch campaign & members** from Salesforce.
2. **GPT‑4** auto‑writes a channel‑appropriate, personalised outbound message.
3. **Switch** node sends via Twilio (SMS/WhatsApp), SMTP (Email).
4. **Mark** each member as processed to avoid double‑touches.
5. **Error trigger** notifies Slack if anything fails.

## Set‑up steps
1. **Time**: ~10‑15 min once credentials are ready.
2. **Prereqs**: Active Salesforce OAuth app, Twilio account, SMTP creds, Slack app.
3. **In‑flow sticky notes** walk you through credential mapping, environment variables, and optional tweaks (e.g., campaign SOQL filter).

&gt; Copy the workflow, add your keys, and run a quick manual test—after that you can place it on a cron or Salesforce trigger.

## 📊 Basic Information

- **Workflow ID:** 6219
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 393
- **Downloads:** 39
- **Created:** 2025/7/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6219)

## 👤 Author

- **Name:** Le Nguyen
- **Username:** @leeseifer

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **twilio** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **emailSend** 
- **httpRequest** 
- **salesforce** (×2)
- **stickyNote** (×5)
- **switch** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
