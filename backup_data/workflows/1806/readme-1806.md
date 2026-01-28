# Send Zendesk tickets to Pipedrive contacts and assign tasks

> This workflow automatically sends Zendesk tickets to Pipedrive contacts and makes them task assignees. The automation is triggered every 5 minutes, with Zendesk checking and collecting new tickets which are then individually assigned to a Pipedrive contact.

## Prerequisites
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/builtin/credentials/pipedrive/)
- Zendesk account and [Zendesk credentials](https://docs.n8n.io/integrations/builtin/credentials/zendesk/)

*Note: The Pipedrive and the Zendesk accounts need to be created by the same person / with the same email.*

## How it works
1. Cron node triggers the workflow every 5 minutes.
2. Zendesk node collects all the tickets received after the last execution timestamp.
3. Set node passes only the requester`s email and ID further to the Merge node.
4. Merge by key node merges both inputs together, the tickets and their contact emails.
5. Pipedrive node then searches for the requester.
6. HTTP Request node gets owner information of Pipedrive contact.
7. Set nodes keep only the requester owner's email and the agent`s email and id.
8. Merge by key node merges the information and adds the contact owner to ticket data.
9. Zendesk node changes the assignee to the Pipedrive contact owner or adds a note if the requester is not found.
10. The Function Item node sets the new last execution timestamp.


## 📊 Basic Information

- **Workflow ID:** 1806
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1033
- **Downloads:** 103
- **Created:** 2022/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1806)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **functionItem** (×2)
- **zendesk** (×5)
- **set** (×3)
- **cron** 
- **merge** (×3)
- **pipedrive** 
- **httpRequest** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
