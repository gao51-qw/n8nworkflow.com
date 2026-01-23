# Send Onfleet driver signup messages in Slack

> **Summary**

Onfleet is a last-mile delivery software that provides end-to-end route planning, dispatch, communication, and analytics to handle the heavy lifting while you can focus on your customers.

This workflow template listens to Onfleet **driver sign-up events** and automatically **notifies you on Slack**.

**Configurations**

- Update the Onfleet node with your own Onfleet credentials, to register for an **Onfleet API key**, please visit https://onfleet.com/signup to get started
- Update the Slack node with your own Slack credentials
- Update the Slack channel to something that exists in your Slack workspace, the default is set to `#new-driver-signup` in this example which may not apply to your workspace
- Update the Slack message to something customized, ideally with driver information such as phone number and name


## 📊 Basic Information

- **Workflow ID:** 1532
- **Complexity:** beginner
- **Node Count:** 2
- **Views:** 468
- **Downloads:** 46
- **Created:** 2022/3/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1532)

## 👤 Author

- **Name:** James Li
- **Username:** @ilsemaj

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **onfleetTrigger** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 2 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
