# Automated email follow-up system with CentralStationCRM, Gmail and Slack alerts

> How it works
* time trigger using the cron format, every weekday at 5pm
* gets CentralStationCRM people updates of today
* checks for tag "Outreach"
* if true, sends message on gmail (predefine in node)
* waits 7 days, checks for answers
* alerts user if an answer is there
* if not, repeats process with second mail

How to set up
* get credentials for CentralStationCRM, Slack and GMail
* set up the respective nodes with the credentials
* define text for your automated mails
* test without wait nodes

## 📊 Basic Information

- **Workflow ID:** 10121
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 32
- **Downloads:** 3
- **Created:** 2025/10/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10121)

## 👤 Author

- **Name:** CentralStationCRM
- **Username:** @centralstationcrm

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **gmail** (×4)
- **scheduleTrigger** 
- **removeDuplicates** (×2)
- **httpRequest** 
- **if** (×3)
- **slack** (×2)
- **stickyNote** (×5)
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
