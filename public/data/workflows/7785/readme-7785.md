# Automate security incident triage with GPT-4o-mini and Gmail notifications

> What this workflow does
-----------------------

Automatically triages inbound security findings (e.g., from AWS Security Hub via EventBridge → SNS → Webhook), classifies them with an LLM, generates a 3-step remediation plan, and emails a compact incident brief.

**Pipeline:** Webhook → Clean_Finding (normalize) → Classify (LLM) → Plan (LLM) → Gmail (email). You can substitute Microsoft Teams, Slack, etc.

-   Normalizes the incoming finding JSON (title, description, account, resource id/type, updated_at).

-   Uses an LLM to assign **incident_type**, **severity (P0--P3)**, **urgency**, **short_title**, and **why** (concise rationale).

-   Produces a **3-step remediation plan** with **owner_hint** and **success_criteria**---kept atomic and practical.

-   Sends a clean HTML email with all details (subject line includes short title, resource, and account).

**Category:** Security / Cloud / Incident Management\
**Time to set up:** ~10--15 minutes\
**Difficulty:** Beginner--Intermediate\
**Cost:** Mostly free (n8n CE; OpenAI usage + Gmail/SMTP as used)

* * * * *

What you'll need
----------------

-   An n8n instance reachable over **HTTP** (for the Webhook node).

-   OpenAI (or compatible) credentials set in n8n.

-   Gmail OAuth2 credentials (or swap Gmail node for SMTP).

-   A source that can POST a Security-Hub-style finding to your webhook (EventBridge/SNS, a SIEM, or curl).

**Output (Email)**

-   Subject: `&lt;short_title&gt; - &lt;resource_id&gt; in &lt;account_id&gt;`

-   Body: HTML summary with **Type**, **Account**, **Urgency**, **Why**, **Next Actions (3 steps)**, **Owner**, **Success criteria**.


## 📊 Basic Information

- **Workflow ID:** 7785
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 206
- **Downloads:** 20
- **Created:** 2025/8/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7785)

## 👤 Author

- **Name:** Calistus Christian
- **Username:** @ca7ai

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **gmail** 
- **set** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
