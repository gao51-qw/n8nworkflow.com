# Triage product UAT feedback with OpenAI, Notion, Slack and Gmail

> ## Description
Automatically triage Product UAT feedback with AI, deduplicate it against your existing Notion backlog, create/update the right Notion item, and close the loop with the tester (Slack or email).

This workflow standardizes incoming UAT feedback, runs AI classification (type, severity, summary, suggested title, confidence), searches Notion to prevent duplicates, and upserts the roadmap entry for product review. It then confirms receipt to the tester and returns a structured webhook response.

## Context
Feature requests often arrive unstructured and get lost across channels. Product teams waste time re-triaging the same ideas, creating duplicates, and manually confirming receipt.

This workflow ensures:

- Faster feature request triage

- Fewer duplicates in your roadmap/backlog

- Consistent structure for every feedback item

- Automatic tester acknowledgement

- Full traceability via webhook response

## Who is this for?

- Product Managers running UAT or beta programs

- Product Ops teams managing a roadmap backlog

- Teams collecting feature requests via forms, Slack, or internal tools

- Anyone who wants AI speed with clean backlog hygiene

## Requirements

- Webhook trigger (form / Slack / internal tool)

- OpenAI account (AI triage)

- Notion account (roadmap/backlog database)

- Slack and/or Gmail (tester notification)

## How it works
![image.png](fileId:3835)
- Trigger: feedback received via webhook

- Normalize & Clean: standardizes fields and cleans message

- AI Triage: returns structured JSON (type, severity, title, confidence…)

- Notion Dedupe & Upsert: search by suggested title → update if found, else create

- Closed Loop: notify tester (Slack or email) + webhook response payload

## What you get

- One workflow to capture and structure feature requests

- Clean Notion backlog without duplicates

- Automatic tester confirmation

- Structured output for downstream automation

## About me :
I’m Yassin a Product Manager  Scaling tech products with a data-driven mindset.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)


## 📊 Basic Information

- **Workflow ID:** 12208
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 13
- **Downloads:** 1
- **Created:** 2025/12/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12208)

## 👤 Author

- **Name:** Yassin Zehar
- **Username:** @yassinzehar

## 🏷️ Categories

- Project Management
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **code** (×3)
- **notion** (×3)
- **gmail** 
- **slack** 
- **if** (×2)
- **set** (×2)
- **stickyNote** (×5)
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
