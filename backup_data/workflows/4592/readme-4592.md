# AI-powered lead scoring with Salesforce, GPT-4o, and Slack with data masking

> Boost your sales team’s efficiency with an end-to-end, privacy-first lead-scoring engine—ready to drop straight into your n8n instance.

🔹 What it does

Salesforce Trigger watches for new or updated Leads every hour.

HTTP Request fetches the full record so you never miss a field.

Mask Data (JS Code) automatically tokenises PII (name, email, address, etc.) before any external call—ideal for GDPR/SOC 2 compliance.

OpenAI (GPT-4o) scores each lead 0-100, assigns a grade A-F, lists key reasons, recommends one next action, and even drafts a personalised email template.

Unmask Data (JS Code) swaps the tokens back in only when you explicitly need them—so sensitive data never leaks to logs or AI prompts.

Slack Node delivers a concise, team-friendly summary (score, grade, reasons, next step, and draft email) right to the rep who needs it.

🔹 Why you’ll love it

Security by design – field-level masking with reversible tokens.

No-code friendly – clear sticky notes explain every step; swap Salesforce for any CRM in minutes.

AI you can trust – scoring rubric baked into the system prompt for consistent results.

Instant hand-off – reps get an actionable Slack message instead of another spreadsheet.

Perfect for rev-ops teams that want smarter prioritisation without rebuilding their stack—or exposing customer data. Plug it in, set your own masking list, and start converting the leads that matter most.

## 📊 Basic Information

- **Workflow ID:** 4592
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 652
- **Downloads:** 65
- **Created:** 2025/6/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4592)

## 👤 Author

- **Name:** Le Nguyen
- **Username:** @leeseifer

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **salesforceTrigger** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **slack** 
- **httpRequest** 
- **code** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
