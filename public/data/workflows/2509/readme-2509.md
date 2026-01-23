# TwentyCRM event based updates on selective messaging channels with logs

> # Who is this template for?

This workflow template is designed for **DevOps**, **Engineering**, and **Managed Service Provider** professionals seeking alerts on various channels, with each channel being logically chosen based on the severity of the event.

## How it works

- Each time a new event occurs, the workflow runs (powered by TwentyCRM's native Webhooks feature).
- After filtering for the required data from the webhook, the filtered data is logged using Google Sheets.
- Based on the `eventType` from the webhook, we conditionally select a predefined messaging channel and send updates or alerts through it.

## Set up instructions

1. Complete the `Set up credentials` step when you first open the workflow. You'll need a Google-OAuth2.0 with Gmail API & Google Sheets Scope, Slack with OAuth2.0 - `chat:write` scopes.
2. Set up the Webhook in TwentyCRM, linking the `On new TwentyCRM event` Trigger with your TwentyCRM App.
3. Set the correct channel to send to in the `Post message in channel` step.
4. After testing your workflow, swap the Test URL to Production URL in TwentyCRM and activate your workflow.

Template was created in n8n `v1.63.4`.


## 📊 Basic Information

- **Workflow ID:** 2509
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1325
- **Downloads:** 132
- **Created:** 2024/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2509)

## 👤 Author

- **Name:** sateshcharan
- **Username:** @sateshcharan

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **stickyNote** (×5)
- **set** 
- **googleSheets** 
- **if** 
- **webhook** 
- **gmail** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
