# Sync leads from Webflow to Pipedrive CRM using n8n

> This n8n template automates the process of capturing leads from Webflow form submissions and syncing them with your Pipedrive CRM. It ensures that each submission is accurately associated with the correct organization and contact in Pipedrive, streamlining lead management and minimizing duplicates.

## Use cases include:
Sales teams that want to automate CRM data entry, marketing teams capturing qualified leads from landing pages, or any business looking to improve their Webflow-to-CRM integration workflow.

## Good to know
- The workflow assumes that Webflow form submissions include the lead’s email address.

- The domain is extracted from the email to match or create the organization in Pipedrive.

- This template does not handle lead scoring or enrichment, but can be extended for such use-cases.

## How it works

1. Extract website from email
The email is split to extract the domain (e.g., jane@company.com → company.com), which is used to search for existing organizations.

2. Check if the organization exists
The Pipedrive API is queried using the domain. If the organization exists, we proceed. If not, a new organization is created.

3. Check if the person exists
-- If the person already exists in Pipedrive, a note is added to their activities to log the form submission.
-- If the person does not exist, a new person is created, a note is added to the person, and a new lead is created.

4. (Optional) Add your own actions
You can extend this workflow to trigger Slack notifications, email follow-ups, or internal dashboards.

## How to use
Start with the manual trigger node, or replace it with a webhook to connect directly to Webflow form submissions in real-time.

## Requirements
- Webflow form integration (via webhook or other method)
- Pipedrive account and API key

## Customising this workflow
You can add enrichment services to auto-fill job titles or LinkedIn profiles. Perfect for growing sales pipelines without manual CRM input.

## 📊 Basic Information

- **Workflow ID:** 5166
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 820
- **Downloads:** 82
- **Created:** 2025/6/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5166)

## 👤 Author

- **Name:** PixelMakers
- **Username:** @pixelmakers

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **webflowTrigger** 
- **pipedrive** (×7)
- **if** (×2)
- **stickyNote** (×4)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
