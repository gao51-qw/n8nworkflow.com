# Post unassigned Zendesk tickets to Slack

> &gt; This has been updated to support the Query feature added to the Zendesk node in [0.144.0](0.144)

This workflow will post all New and Open tickets without an agent assigned to a Slack channel on a schedule.

![workflow-screenshot](fileId:550)

The function node is used in this example to merge multiple inputs into one output message which is then used as the Slack message.

The output in Slack will be similar to the below message, The "TICKET_ID" will be a link to the ticket.

&gt; **Unassigned Tickets**
[TICKET_ID](#) [STATUS] - TICKET_SUBJECT

**Usage**
Update the Cron schedule, The default value is 16:30 daily.
Update the Credentials in the Zendesk nodes
Update the Credentials and Channel in the Slack Node
Grab a coffee and enjoy!

**Zendesk Query**
In the Zendesk node we are using the query `assignee:none status&lt;pending` this returns all New and Open tickets with no assignee allowing us to remove the extra nodes.

## 📊 Basic Information

- **Workflow ID:** 1265
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 961
- **Downloads:** 96
- **Created:** 2021/10/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1265)

## 👤 Author

- **Name:** Jonathan Bennetts
- **Username:** @8688

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **manualTrigger** 
- **cron** 
- **function** 
- **slack** 
- **zendesk** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
