# AI email reply based on HubSpot data + Slack approval

> This n8n template drafts customer-ready email replies using Google Gemini, enriched with HubSpot context (contact, deals, companies, tickets). Each draft is routed to Slack for one-click approval before it’s sent from Gmail—so you move fast without losing control.

Ideal for support and sales teams that want speedy, personalized responses while keeping humans in the loop.

---

## How it works

* **Gmail Trigger** watches for new inbound emails.
* **Sender filter** excludes internal domains (e.g., `n8n.io`) to avoid auto-replying to teammates.
* **HubSpot contact lookup** finds the sender and fetches associated **deals/companies/tickets** via association + batch read.
* **CRM context is normalized** into clean, LLM-friendly fields (no IDs or sensitive noise).
* **Gemini (Google AI Studio)** generates a concise, friendly reply using:

  * Sender name, subject, and message snippet
  * Safe, relevant HubSpot context (e.g., top 1–2 deals or an open ticket)
  * Style constraints (≤ \~150 words, single CTA, optional clarifying question)
* **Slack approval** posts the draft to a channel; if **approved**, n8n **replies via Gmail** in the original thread.

---

## How to use

1. **Gmail:** Connect the same account for the trigger and reply nodes.
2. **HubSpot:** Connect OAuth on the search + HTTP request nodes.
3. **Gemini:** Add your **Google AI Studio** API key to the **Google Gemini Chat Model** node.
4. **Slack:** Connect and select the channel for draft approvals.
5. (Optional) **Filter:** Adjust the Allowed Sender filter before going live.
6. (Optional) **Prompt:** Edit “Draft Reply (AI Agent)” tone/length or how much CRM detail to include.
7. Activate the workflow. New emails will produce Slack-approved replies automatically.

---

## Requirements

* **Gmail** (trigger + send)
* **HubSpot** (OAuth2) for contact + associations
* **Slack** for approval step
* **Google Gemini** (Google AI Studio API key)

---

## Notes & customization

* **Safety rails:** The prompt avoids exposing IDs/raw JSON and caps CRM details to what’s useful.
* **Auto-send mode:** Skip Slack if you want fully automated replies for specific senders/labels.
* **Richer context:** Extend the batch read to pull more properties (e.g., next step, renewal date).
* **Triage:** Branch on subject/labels to route billing vs. technical requests to different prompts.
* **QA queue:** If the model asks a clarifying question, keep it to **one**—the node enforces that.

## 📊 Basic Information

- **Workflow ID:** 8967
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 2214
- **Downloads:** 221
- **Created:** 2025/9/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8967)

## 👤 Author

- **Name:** Miha
- **Username:** @miha

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **gmail** 
- **gmailTrigger** 
- **filter** 
- **@n8n/n8n-nodes-langchain.agent** 
- **hubspot** 
- **code** (×3)
- **httpRequest** (×2)
- **slack** 
- **if** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
