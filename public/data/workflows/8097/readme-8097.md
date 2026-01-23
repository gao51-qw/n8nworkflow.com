# Send organized security CVE digests from NVD with AI-polished summaries to Gmail

> Summary
-------

Turns the latest CVEs from NVD into a clean, sortable email digest (table + plaintext) and sends it via Gmail. The flow pulls the newest CVEs, extracts **Vendor / Product / Version**, severity & CVSS, highlights public exploit references, drafts an HTML table, then asks OpenAI to tighten the copy before emailing it. Optionally, you can swap the Gmail node to Signal, Slack, Microsoft Teams, etc. 

**Perfect for:** SecOps leads who want a low-noise digest of what changed recently, grouped and ranked by severity.

* * * * *

What this workflow does
-----------------------

-   Triggers on a schedule (every 30 minutes by default).

-   Calls the **NVD 2.0 API** to fetch recent CVEs.

-   Parses each CVE to extract:

    -   **Vendor / Product / Version(s)** (from CPE 2.3 where available, with a text fallback)

    -   **Severity + CVSS** (V3.1/V3.0/V2 fallback) and vector string

    -   **Exploit signal** (tags/links like Exploit‑DB, GitHub PoCs, etc.)

    -   **Short English summary** + direct **NVD link**

-   Builds an **HTML email** (and a plaintext fallback) ranked by severity then score.

-   Uses **OpenAI** to polish the subject line and copy into a concise, professional digest (JSON‑only contract).

-   Sends the digest with the **Gmail** node.

* * * * *

Prerequisites
-------------

-   **NVD API key** (free) --- create at https://nvd.nist.gov/developers/request-an-api-key

-   **OpenAI API key** with access to `gpt-4o-mini` (or change the model)

-   **Email sending**:

    -   Gmail node with OAuth2 (recommended), **or** swap to the generic **Email Send (SMTP)** node if you prefer.

Quick start
-----------

1.  **Import** the workflow JSON below.

2.  Open **HTTP Request → Headers** and confirm `apiKey` uses `{{$env.NVD_API_KEY}}`.

3.  Open **Send a message (Gmail)** and set **To** to `{{$env.RECIPIENT_EMAIL}}` (or your address).

4.  Open **OpenAI Email Crafter** and connect your OpenAI credential (or change model if needed).

5.  Hit **Execute** to test, then **Activate** when happy.

Credits
-------

Created by **ca7ai** (n8n Creator).

* * * * *

Tags
----

security, cve, cisa, nvd, email, monitoring, openai, gmail, automation

## 📊 Basic Information

- **Workflow ID:** 8097
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 506
- **Downloads:** 50
- **Created:** 2025/9/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8097)

## 👤 Author

- **Name:** Calistus Christian
- **Username:** @ca7ai

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **gmail** 
- **httpRequest** 
- **scheduleTrigger** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
