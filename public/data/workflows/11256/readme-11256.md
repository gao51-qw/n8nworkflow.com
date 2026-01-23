# Monitor data quality with Notion rules, SQL checks & AI-powered alerts

> ## Description

This workflow continuously validates data quality using rules stored in Notion, runs anomaly checks against your SQL database, generates AI-powered diagnostics, and alerts your team only when real issues occur.

Notion holds all data quality rules (source, field, condition, severity).
n8n reads them on schedule, converts them into live SQL queries, and aggregates anomalies into a global run summary.

The workflow then scores data health, creates a Notion run record, optionally opens a Jira issue, and sends a Slack/email alert including AI-generated root cause & recommended fixes.

## Target users
Perfect for:
- DataOps
-  Analytics
-  Product Data
-  BI
-  Compliance
-  ETL/ELT pipelines
-  Platform reliability teams.

## Workflow steps
![image.png](fileId:3462)

## How it works
1) Notion → Rules Database
   Each entry defines a check (table, field, condition, severity).
2) n8n → Dynamic Query Execution
   Rules are converted into SQL and checked automatically.

3) Summary Engine
   Aggregates anomalies, computes data quality score.

4) AI Diagnostic Layer
   Root cause analysis + recommended fix plan.

5) Incident Handling
   Notion Run Page + optional Slack/Email/Jira escalation.
   Silent exit when no anomaly = zero noise.

## Setup Instructions 

- Create two Notion databases:
	- Data Quality Rules → source / field / rule / severity / owner
	![image.png](fileId:3460)

	- Data Quality Runs → run_id / timestamp / score / anomalies / trend / AI summary/recommendation
![image.png](fileId:3461)
- Connect SQL database (Postgres / Supabase / Redshift etc.)
- Add OpenAI credentials for AI analysis
- Connect Slack + Gmail + Jira for incident alerts
- Set your execution schedule (daily/weekly)

## Expected outcomes

- Fully automated, rule-based data quality monitoring with minimal maintenance and zero manual checking.
- When everything is healthy, runs remain silent.
- When data breaks, the team is notified instantly: with context, root cause insight, and a structured remediation output.

## Tutorial video
[Watch the Youtube Tutorial video](https://www.youtube.com/watch?v=3FKUET16dVk)

## About me :
I’m Yassin a Project & Product Manager  Scaling tech products with data-driven project management.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)


## 📊 Basic Information

- **Workflow ID:** 11256
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 89
- **Downloads:** 8
- **Created:** 2025/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11256)

## 👤 Author

- **Name:** Yassin Zehar
- **Username:** @yassinzehar

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **postgres** (×2)
- **code** (×3)
- **set** 
- **notion** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **splitInBatches** 
- **stickyNote** (×4)
- **scheduleTrigger** 
- **switch** 
- **if** (×2)
- **jira** 
- **slack** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
