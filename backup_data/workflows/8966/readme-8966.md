# AI call summary to HubSpot + follow-up task

> This n8n template turns raw call transcripts into clean HubSpot call logs and a single, actionable follow-up task—automatically. Paste a transcript and the contact’s email; the workflow finds the contact, summarizes the conversation in 120–160 words, proposes the next best action, and (optionally) updates missing contact fields.

Perfect for reps and founders who want accurate CRM hygiene without the manual busywork.

---

## How it works

* A **form trigger** collects two inputs:

  * **Contact email**
  * **Plain-text call transcript**
* The workflow **looks up the HubSpot contact** by email to pull known properties.
* An **AI agent** reads the transcript (plus known fields) to:

  * Extract participants, role, problem/opportunity, requirements, blockers, timeline, and metrics.
  * Write a **120–160 word** recap a teammate can skim.
  * Generate **one concrete follow-up task** (title + body).
  * Suggest updates for missing contact properties (city, country, job title, job function).
* The recap is **logged to HubSpot** as a completed **Call** engagement.
* The follow-up is **created in HubSpot** as a **Task** with subject and body.
* (Optional) The **contact record is updated** using AI-suggested values if the transcript clearly mentions them.

---

## How to use

1. **Connect HubSpot (OAuth2)** on all HubSpot nodes.
2. **Connect OpenAI** on the AI nodes.
3. Open **Form: Capture Transcript**, submit the **email + transcript**.
4. (Optional) In **AI: Summarize Call & Draft Task**, tweak prompt rules (word count, date normalization).
5. (Optional) In **Update Contact from Transcript**, review the mapped fields before enabling in production.
6. Activate the workflow and paste transcripts after each call.

---

## Requirements

* **HubSpot** (OAuth2) for contact search, call logging, and tasks
* **OpenAI** for summarization and task drafting

---

## Notes & customization ideas

* Swap the form for a **Google Drive** or **S3** watcher to ingest saved transcripts.
* Add a speech-to-text step if you store **audio recordings**.
* Extend **Update Contact** to include additional fields (timezone, department, seniority).
* Post the summary to **Slack** or **email** the AE for quick handoffs.
* Gate updates with a confidence check, or route low-confidence changes for **manual approval**.


## 📊 Basic Information

- **Workflow ID:** 8966
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 3633
- **Downloads:** 363
- **Created:** 2025/9/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8966)

## 👤 Author

- **Name:** Miha
- **Username:** @miha

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **hubspot** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **hubspotTool** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
