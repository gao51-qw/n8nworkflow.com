# Qualify Calendly demo requests with GPT-4 & route to Saleshandy sequences with logs

> This n8n template captures every “Request a Demo” booking in Calendly, uses OpenAI to score and qualify leads in real time, routes them into the correct Saleshandy sequence, and logs all data in Google Sheets for full GTM visibility.

## Use cases include:

Empowering SDR teams to focus on high-value demos
Providing growth marketers with reliable funnel metrics
Automating triage for B2B AE teams overwhelmed by demo requests

## Good to know

OpenAI GPT-4 calls cost based on token usage—you can expect ~1,200 tokens per lead.
Calendly API rate-limits at 180 requests/min; consider batching if volume spikes.
Google Sheets writes are single-threaded; high-volume users may opt for Airtable or BigQuery.

## How it works
**Capture** – Webhook node listens for every new “Request a Demo” form submission in Calendly.

**Score** – AI Agent node sends job title, company size, domain quality, and custom questions to OpenAI; returns a 1–10 score plus label (Qualified/Semi-qualified/Unqualified).

**Verify meeting** – HTTP Request node confirms via the Calendly API that a slot was actually scheduled.

**Route** – Switch node selects the appropriate Saleshandy sequence ID (Qualified, Nurture, Disqualify).

**Send** – HTTP Request nodes add each prospect to the chosen Saleshandy sequence.

**Log** – Google Sheets nodes write to three tabs (Qualified, Semi-qualified, Unqualified) with lead data, score, routing path, and timestamp.

## Prerequisites

n8n workspace
Accounts & API credentials for:
Calendly
OpenAI (GPT-4 or GPT-3.5)
Google Sheets
Saleshandy

## Step-by-Step Setup

**1. Import the n8n Template**
Upload the JSON file into your n8n workspace.

**2. Add Required Credentials**
In n8n → Credentials, add:
Calendly: Personal Access Token (PAT)
OpenAI: API Key
Google Sheets: OAuth2 connection
Saleshandy: API Key

**3. Calendly Setup**
Go to Calendly Webhook Docs
Create a Routing Form in Calendly.
Generate your access token.
Use Postman or any API client to:
Make a POST request to create a webhook subscription.
Use your n8n webhook URL in the url field.
Add your Authorization token and extract the Organization ID.
Paste the webhook URL into the Calendly Routing Form.

**4. Set Your Saleshandy Sequences**
In n8n, locate the Set: Sequence IDs node.
Replace the placeholder text with:
Your actual Qualified
Semi-qualified
and Unqualified Saleshandy sequence step IDs.

**5. Configure Google Sheets**
Create a spreadsheet with the following tabs:
Qualified
Semi-qualified
Unqualified
In n8n, connect the three Google Sheets nodes to this file.


## Customising this workflow

**Adjust scoring logic** – Modify the OpenAI prompt in the AI Agent node to weight ARR, industry, or headcount differently.

**Refine thresholds** – Change the Switch node rules for score ranges (e.g., Qualified ≥8, Semi-qualified 5–7).

**Swap destinations** – Edit HTTP Request nodes to integrate with your CRM or email platform instead of Saleshandy.

**Enhance logging** – Replace Google Sheets with Airtable, BigQuery, or another analytics store.

**Add notifications** – Insert Slack or Microsoft Teams nodes after routing to alert reps instantly.



## 📊 Basic Information

- **Workflow ID:** 5830
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 179
- **Downloads:** 17
- **Created:** 2025/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5830)

## 👤 Author

- **Name:** Dhruv from Saleshandy
- **Username:** @saleshandy

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **switch** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **webhook** 
- **wait** 
- **httpRequest** (×4)
- **googleSheets** (×4)
- **stickyNote** (×11)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
