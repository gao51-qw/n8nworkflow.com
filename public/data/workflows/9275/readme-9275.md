# Stripe → Pipedrive: Auto create contacts and deals from payments

> # Stripe → Pipedrive (Automatic Person + Deal Creation)

## Prerequisites / Requirements
- n8n instance (cloud or self-hosted) with HTTPS reachable webhook endpoint
- Stripe account and secret API key
- Pipedrive account with API access and custom fields defined
- Users should create custom fields in Pipedrive and copy their field IDs (e.g. amount, payment method, status, Stripe Event ID)

## How it works (Step-by-Step)
**Stripe Webhook:** n8n triggers on payment events from Stripe via an HTTP POST.

**Edit / Set node:** Extracts eventId, eventType, and payload.

**HTTP Request:** Confirms Stripe event via Stripe API (adds security).

**Search Person:** Looks up Pipedrive contact by email from the Stripe payload.

**IF:** Checks whether the person exists.
    - If exists → skip to deal creation.
        - If node - Check if Event id is not the same
            - If same - Skip the deal creation
            - If different - Create a deal linked to that person with the payment amount
    - If not → create new Person.

**Create Person:** Adds new Pipedrive contact, populates custom fields (amount, payment method, status, source).

**Create Deal:** Creates a deal linked to that person with the payment amount.

## Description 
**This workflow connects Stripe to Pipedrive. Whenever a new payment (or checkout success) occurs in Stripe, this automation will:
- Fetch the full Stripe event data
- Find or create a customer (“Person”) in Pipedrive
- Create a “Deal” record corresponding to that payment
- Log custom fields like amount, source, payment method, status

### It’s ideal for 
- SaaS 
- Subscription businesses
- Agencies, or 
- Teams who want payments mirrored inside their CRM without manual work.

## Modification Notes / Extensions

You can extend this workflow by:
- Adding Slack or Gmail notifications after deal creation.
- Logging every event in Google Sheets or Notion for audit.
- Enriching the customer using OpenAI / CRM data.
- Handling refunds, subscription cancellations, etc.


## 📊 Basic Information

- **Workflow ID:** 9275
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 109
- **Downloads:** 10
- **Created:** 2025/10/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9275)

## 👤 Author

- **Name:** Krishna Sharma
- **Username:** @triggerall

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **webhook** 
- **pipedrive** (×4)
- **set** 
- **httpRequest** 
- **if** (×2)
- **stickyNote** (×6)
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
