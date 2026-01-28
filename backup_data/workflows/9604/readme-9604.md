# Automated meta token renewal system with Graph API and data storage

> Meta long-lived user tokens typically expire after ~60 days. If a token expires, any workflows that rely on it start failing. Manual renewal is easy to forget and time consuming.
**This template monitors the token you store in an n8n Data Table and refreshes it automatically before expiration, so your social automations keep running without surprises or late-night fire drills.**

### Who’s it for

* Agencies, marketing team, creators managing Meta apps or scheduled social automations
* Anyone tired of “token expired” errors breaking flows at 2 a.m.

### How it works / What it does

* Triggers: scheduled every 10 days, plus a Manual Trigger for testing.
* Reads: pulls the current token row from your "Meta credential" Data Table (fields: token and expires_at).
* Decides: IF the token expires in ≤ 15 days, proceed to renewal; otherwise do nothing.
* Calls the Graph API to get a new access token
* Updates: computes the new ISO expires_at from expires_in and writes the fresh token + expires_at back to the Data Table. Note: Meta typically issues ~60-day long-lived tokens; confirm for your app.

### Requirements

* A Meta app with an initial (short-lived or long-lived) user access token
* n8n Data Tables enabled (you might need to update your instance to see the option) and a table named "Meta credential" with:
** token (string)
** expires_at (datetime)

### How to set up

* Create the data table: name it "Meta credential" with columns "token" and "expires_at". Insert one row with your current token and its expiration date.
* Configure the IF node "Needs renewal?": keep (or tweak) the 15-day threshold logic.
* Run once with the Manual Trigger to validate, then enable the Schedule Trigger (10-day cadence by default).

### How to customize the workflow

* Change the Schedule Trigger interval and hour.
* Notify on renewal: Add a Slack/Email node after "Update Record" to alert on token refreshes.

## 📊 Basic Information

- **Workflow ID:** 9604
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 147
- **Downloads:** 14
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9604)

## 👤 Author

- **Name:** Geoffroy
- **Username:** @jojoq42

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **scheduleTrigger** 
- **noOp** 
- **dataTable** (×2)
- **if** 
- **set** (×2)
- **httpRequest** 
- **stickyNote** (×4)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
