# Monitoring job changes on LinkedIn with Airtop

> # Monitoring Job Changes on LinkedIn
## Use Case
This automation tracks job changes among your LinkedIn connections and extracts relevant details. It's ideal for triggering timely outreach, updating CRM records, or feeding lead scoring workflows based on new roles.

## What This Automation Does
It scrapes your LinkedIn "Job Changes" feed and returns:
- Name of the person
- Their new position
- LinkedIn profile URL
- Functional category (e.g., marketing, sales, HR, executive)

Each run processes 5 job changes at a time.

## How It Works
1. **Manual Trigger**: Starts the workflow when the user clicks "Test workflow."
2. **Airtop Enrichment**: Navigates to the LinkedIn job changes page and extracts:
   - `name`
   - `new_position`
   - `linkedin_profile_url`
   - `position_function` (classification such as marketing, sales, HR, etc.)
3. **Formatting**: Output is structured into clean JSON for use in further workflows.

## Setup Requirements
1. [Airtop Profile](https://portal.airtop.ai/browser-profiles) connected to LinkedIn
2. Airtop API key configured in n8n
3. A LinkedIn account with a populated “Job Changes” feed

## Next Steps
- **Automate Alerts**: Add Slack, email, or CRM integrations to notify your team.
- **Enrich and Score Leads**: Chain this with your ICP scoring workflow to evaluate new roles.
- **Customize Scope**: Expand extraction to more than 5 job changes or add filters based on job titles or functions.

Read more about [Monitoring Job Changes on Linkedin](https://www.airtop.ai/automations/monitor-job-changes-on-linkedin-n8n).


## 📊 Basic Information

- **Workflow ID:** 4207
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 711
- **Downloads:** 71
- **Created:** 2025/5/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4207)

## 👤 Author

- **Name:** Airtop
- **Username:** @cesar-at-airtop

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **airtop** 
- **set** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
