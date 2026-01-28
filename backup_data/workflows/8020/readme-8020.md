# Client nurture & testimonial auto-pilot for Gumroad with Notion and Email

> 

## ✨ Client Nurture & Testimonial Auto-Pilot (Gumroad → Notion → Email)

### TL;DR

Every **Gumroad sale** becomes a gentle, on-brand experience: instant delivery 💌, a Day-3 check-in 🌷, and a Day-7 **1-click testimonial** ⭐ — all saved to **Notion** for your “Wall of Love.” Install in \~15 minutes.

---

## Who It’s For

Soft-tech creators, solopreneurs, women-led businesses, and busy homemakers who want **kind, reliable** automation without dev headaches. If you sell templates/courses on Gumroad and want *hands-off onboarding* + *real social proof*, this is for you.

---

## What It Does (in plain English)

* **Listen for sales** from Gumroad (webhook)
* **Create a Client** record in Notion 📇
* Send **3 friendly emails**:

  1. **Delivery** right away (access + quick start)
  2. **Tips** on Day 3 (mini wins + troubleshooting)
  3. **Testimonial ask** on Day 7 with a **1-click rating link**
* When they click the rating → **log testimonial** in Notion + **notify you**

---

## What You Get

* n8n workflow (JSON import)
* Notion DB templates (Clients, Testimonials)
* 3 pre-written email drafts (delivery, tips, ask)
* A short Loom script for your demo 🎥

---

## Requirements

* n8n (Cloud or self-hosted with public URL)
* Gumroad account (Sale webhook)
* Notion workspace
* Email (SMTP, Gmail, or Outlook node)

&gt; ✅ **No hard-coded secrets.** Use n8n Credentials + the env vars below.

---

## Environment Variables

* `PUBLIC_N8N_URL` → e.g. `https://your-n8n.example.com`
* `NOTION_CLIENTS_DB_ID` → Notion **Clients** DB
* `NOTION_TESTIMONIALS_DB_ID` → Notion **Testimonials** DB

---

## Notion Database Fields

**Clients** → `Name (title)`, `Email`, `Product`, `Sale ID`, `Purchased At (date)`, `Status (select)`
**Testimonials** → `Email`, `Rating (number)`, `Quote (text)`, `Permission (checkbox)`, `Published (checkbox)`

---

## Setup (5 Steps)

1. **Import** the JSON into n8n.
2. **Connect credentials**: Notion + Email (no keys in nodes).
3. **Create/Import** the Notion databases (CSV templates included).
4. **Set env vars** above in n8n Settings → Variables.
5. In **Gumroad → Settings → Advanced → Webhooks**, add **Sale** → `POST https://&lt;your-n8n&gt;/webhook/gumroad-sale`.

Run a **\$0 test purchase** → watch the Client appear in Notion → Delivery email lands → after waits, Tips + Testimonial emails send → click the rating link → testimonial saves in Notion ✨

---

## How It Flows (node map)

Gumroad Webhook → Function (map payload) → Notion (create client) → Email (Delivery) → Wait 3d → Email (Tips) → Wait 7d → Function (build testimonial link) → Email (Ask)
Testimonial Webhook → Function (map rating) → Notion (create testimonial) → Email (owner notify) → Respond (thank-you)

---

## Testing & Troubleshooting

* Emails not sending? Attach Email credentials + set **From**.
* Testimonial not saving? Check `PUBLIC_N8N_URL` + Notion DB IDs.
* Long delays use **Wait** nodes; keep **Save Execution Progress** ✅.

---

## Privacy & Safety

* Stores only the fields shown above; you control the Notion workspace.
* Buyers can be removed on request; simply delete rows from Notion.
* Works with \$0 products for early feedback (great for soft launches).

---

## Suggested Tags

`gumroad`, `notion`, `email`, `onboarding`, `crm`, `testimonials`, `soft-tech`, `creators`

---

## Changelog

* **v1.0** — First release: delivery + tips + 1-click testimonials, Notion logging, owner alerts.



## 📊 Basic Information

- **Workflow ID:** 8020
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 35
- **Downloads:** 3
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8020)

## 👤 Author

- **Name:** Shelly-Ann Davy
- **Username:** @SheCodesFlow

## 🏷️ Categories

- Social Media
- Lead Nurturing

## 🔗 Nodes Used

- **stickyNote** 
- **webhook** (×2)
- **function** (×3)
- **notion** (×2)
- **emailSend** (×5)
- **wait** (×2)
- **respondToWebhook** 
- **errorTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
