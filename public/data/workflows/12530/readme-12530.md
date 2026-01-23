# Send AI sales proposals and Stripe payment links after Calendly calls

> # Meeting → Proposal → Payment → Follow-up Automation

Categories: Sales Automation, AI Proposals, Revenue Ops

This workflow automatically turns a booked sales call into a customized proposal, a Stripe payment link, and a follow-up email — without manual work.

It’s designed to handle everything *after* a sales call so momentum doesn’t die.

Booked call → proposal → payment → done.

---

## What This Workflow Does

This automation runs the moment a sales call is booked and executes a complete post-call sales flow:

- Looks up the lead in a lightweight CRM
- Generates a tailored proposal using AI
- Creates a Google Slides proposal deck
- Creates a unique Stripe checkout link
- Sends a personalized follow-up email with proposal + payment

No manual copy-pasting. No delays. No forgotten follow-ups.

---

## Why This Exists

Most deals are lost **after** the call — not during it.

This system removes:
- Manual proposal writing
- Post-call follow-up delays
- Inconsistent sales ops
- Awkward “just following up” emails

It replaces all of that with a single, reliable close flow.

Human on the outside. Fully automated underneath.

---

## How It Works (High Level)

### 1. Calendly Trigger (Sales Call Booked)
- Workflow starts immediately after a meeting is scheduled
- Ensures proposals are sent while context is still fresh

### 2. CRM Lookup (Google Sheets)
- Finds the lead using email or company name
- Works even if the lead is unqualified or incomplete
- Simple, transparent CRM (no heavy tooling required)

### 3. AI Proposal Generation
- Uses structured inputs (problem, solution, scope, urgency, cost)
- Outputs a complete proposal as strict JSON
- Written in a clear, spartan, professional tone

### 4. Google Slides Proposal Creation
- Copies a proposal template
- Auto-fills all sections using AI output
- Generates one unique proposal per lead
- Shareable link created automatically

### 5. Stripe Checkout Session
- Creates a unique payment link per lead
- Attaches metadata (lead, company, package)
- No manual invoicing required

### 6. Follow-up Email
- Sends proposal + payment link immediately
- Personalized with name and company
- Keeps the close frictionless

---

## Tools Used

- **n8n** — workflow orchestration  
- **OpenAI** — proposal generation  
- **Google Sheets** — lightweight CRM  
- **Google Slides** — proposal delivery  
- **Stripe** — payment collection  
- **Email (Gmail / SMTP)** — follow-up delivery  
- **Calendly** — trigger source  

---

## Who This Is For

- Automation & no-code agencies  
- Consultants and service businesses  
- Freelancers selling repeatable offers  
- Sales-led teams that want speed + consistency  
- Anyone tired of manual proposals and follow-ups  

---

## Customization Notes

- Swap Google Sheets for Airtable, HubSpot, or Notion
- Proposal tone and structure are fully prompt-driven
- Stripe metadata can be extended for analytics or CRM sync
- Can support multiple triggers (Calendly, forms, manual intake)

---

## Difficulty & Cost

- **Difficulty:** Intermediate (conceptually simple, operationally solid)
- **Estimated setup time:** 30–45 minutes
- **Ongoing cost:** OpenAI + Stripe fees only

---

## Summary

This is not just a proposal generator.

It’s a **post-call revenue system** that turns intent into action automatically.

&gt; Meeting → proposal → payment → follow-up  
&gt; No manual steps. No dropped balls.

## 📊 Basic Information

- **Workflow ID:** 12530
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 0
- **Downloads:** 0
- **Created:** 2026/1/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12530)

## 👤 Author

- **Name:** Cliss Zhang
- **Username:** @clissz

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.openAi** 
- **httpRequest** 
- **googleDrive** 
- **googleSlides** 
- **googleSheets** 
- **calendlyTrigger** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
