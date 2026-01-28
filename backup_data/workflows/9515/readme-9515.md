# Sync Attio CRM with Jotform & Slack for deal updates & sales alerts

> This workflow streamlines your lead management process by automatically capturing form submissions from **Jotform**, updating **Attio CRM**, and notifying your **team (sales team for example) via Slack** — all without manual work.

## How it works
1. **Receive Lead:**
- A new submission is captured from Jotform (name, email, message).

2. **Prepare CRM:**
- Checks if the `Pending` and `Urgent` deal stages exist in Attio CRM and creates them if they don’t exist.
- Checks if the `Message` column exists in Attio CRM and creates it if it doesn't exist.

3. **Lead Handling:**
- If the lead **doesn't exist** in Attio CRM, the contact is created, a new deal is added to the `Pending` stage, and a Slack notification is sent.
- If the lead **exists but has no deal**, a new deal is added to `Pending`, and Slack is notified.
- If the **lead exists with a deal**, the deal is moved to the `Urgent` stage, and Slack is notified.

4. **Slack Notification:**
- Your team (sales team for example) receives an instant Slack message whenever a new or existing lead is processed, so they can act fast.


## Requirements
Make sure to have **Jotform**, **Attio CRM** and **Slack** accounts, then follow this [video guide](https://www.youtube.com/watch?v=FCGmVZsGYWk) on how to start using this template.

## 📊 Basic Information

- **Workflow ID:** 9515
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 37
- **Downloads:** 3
- **Created:** 2025/10/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9515)

## 👤 Author

- **Name:** AppUnits AI
- **Username:** @appunitsai

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **switch** 
- **set** 
- **dataTable** (×13)
- **httpRequest** (×10)
- **code** 
- **if** 
- **stickyNote** (×5)
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
