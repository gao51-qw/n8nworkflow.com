# Track OpenAI Admin API usage and costs automatically with Google Sheets

> ## Overview
This  workflow aims to help you and your team track your expenses with OpenAI
It automatically collects your OpenAI organization’s API usage and cost data every few days and saves it to a ready-to-use Google Sheets template. 
It pulls detailed metrics for every project and API key, including token usage, model breakdowns, and costs per line item, making it easy for your team to analyze and track spend over time!

## Who is it for
* Finance or ops teams tracking AI usage and spend
* Data/analytics teams needing detailed project-level breakdowns
* Technical leads or admins managing OpenAI organization usage and cost
* Anyone needing a simple audit trail or historical record of OpenAI API activity

## How to get started
* Access to your organization’s [OpenAI Admin API key](https://platform.openai.com/settings/organization/admin-keys) -&gt; Note: **it's a different API than the one you use to call the models.**
* Add your credentials in all `OpenAI Admin` nodes as Predefined Credentials &gt; OpenAI.
* Create your [Google Sheets credentials](https://docs.n8n.io/integrations/builtin/credentials/google/)
* Get the [Google Sheets template](https://docs.google.com/spreadsheets/d/1n7P9tsi3s8Y3Z_zErjxyRu5fyGaHByMEJMeYT2jHrhg/edit?usp=sharing) (copy to your Drive)

## How it works
1. **Trigger:** The workflow runs automatically on a schedule (every 3 days by default, but you can adjust).
2. **Fetch Data:** Calls OpenAI’s Admin API to get all token usage and cost details for the reporting window.
3. **Enrich Data:** Resolves project names and API key names for clarity in reports.
4. **Write to Sheets:** Appends new usage and cost data to your Google Sheet, with one row per project/key/period.

## Google Sheets Template
* Use our [template to track OpenAI's cost and usage](https://docs.google.com/spreadsheets/d/1n7P9tsi3s8Y3Z_zErjxyRu5fyGaHByMEJMeYT2jHrhg/edit?usp=sharing)

## Notes
* All data is appended, so your sheet keeps historical records. But ⚠️ if you run the workflow manually or change the schedule, you could end up with duplicated rows
* API key and project enrichment makes reports easier to read.
* You can adapt the workflow to save results anywhere: BigQuery, Airtable, DB, or even another spreadsheet.
* Easy to change schedule or reporting window to fit your team’s needs.

## Extra
* Depending on your internal processes, you could also generate monthly files and automatically send the report to your finance team via email or Slack, for example. The possibilities are endless!
* Note that we intended to do the same with Anthropic and Gemini via API and n8n built-in methods. At this stage, it is not possible to do it, but it could probably be done using Browser Agents!

## Service
If you need help implementing the template or modifying it, [just reach out 💌](mailto:hello@agentstudio.io?subject=Store%20OpenAI%20API%20Cost%20and%20Usage)

## 📊 Basic Information

- **Workflow ID:** 6002
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 200
- **Downloads:** 20
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6002)

## 👤 Author

- **Name:** Agent Studio
- **Username:** @agentstudio

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×4)
- **removeDuplicates** 
- **stickyNote** (×14)
- **set** (×7)
- **code** (×3)
- **merge** (×3)
- **splitOut** (×5)
- **googleSheets** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
