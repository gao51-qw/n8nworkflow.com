# Automated compliance control scoring with CyberPulse, GPT-4o & Google Sheets

> **What this template does**

Batch-evaluates compliance controls from Google Sheets using the CyberPulse Compliance API. Each control is scored, mapped to selected frameworks, enriched with crosswalk mappings, and summarized with AI-generated findings and recommendations.

**How it works**

Read from Sheets → Build control text (response_text + implementation_notes) → CyberPulse Compliance (scoring, mapping, AI summary) → Normalize → Append results to Sheets.

**Setup (5–10 min)**

Add Google Sheets + CyberPulse HTTP Header Auth credentials.

Replace YOUR_SHEET_ID and sheet names.

Provide your Crosswalk JSON URL (raw GitHub or API endpoint) or use this url: https://www.cyberpulsesolutions.com/xw.json

Select frameworks to evaluate against.

Run a small test, then full batch.

**CyberPulse API (required for production)**

Use hosted scoring/mapping (no local ML code).

Create a CyberPulse HTTP Header Auth credential with API Key.

In the node: paste Crosswalk URL, select frameworks, set credential.

For large sheets, add a short Wait or reduce batch size.

**Input columns**

control_id

control_description

response_text

implementation_notes 

evidence_url_1 … evidence_url_4 

**Output columns**

status

evaluation

score

confidence

rationale

categories

evidence_count

mapped_count

mapping_flat

frameworks_selected

engine_version

ai_summary

ai_findings (3 per control)

ai_recommendations (3 per control)

**Troubleshooting**

No rows → check sheet ID and range.

Empty mappings → verify Crosswalk URL.

Write errors → confirm results sheet + permissions.

**Learn more about CyberPulse Compliance Agent:**

https://www.cyberpulsesolutions.com/solutions/compliance-agent

**Start free:**

https://www.cyberpulsesolutions.com/pricing

Email: info@cyberpulsesolutions.com

## 📊 Basic Information

- **Workflow ID:** 9397
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 53
- **Downloads:** 5
- **Created:** 2025/10/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9397)

## 👤 Author

- **Name:** Adnan Tariq
- **Username:** @adnantariq

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** 
- **splitInBatches** 
- **set** 
- **merge** 
- **n8n-nodes-cyberpulse-compliance-dev.cyberPulseCompliance** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
