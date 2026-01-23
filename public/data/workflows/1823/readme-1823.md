# Create Monday item on a new Mautic contact

> This workflow creates a new item in a [Monday.com](http://monday.com/) board when a new contact is created in Mautic. Additional fields can be added to the workflow to send more data to [Monday.com](http://monday.com/).

## Prerequisites

- Monday account and [Monday credentials](https://docs.n8n.io/integrations/builtin/credentials/mondaycom/).
- Mautic account and [Mautic credentials](https://docs.n8n.io/integrations/builtin/credentials/mautic/).

## How it works

When a new contact is created in Mautic, the workflow creates a new item in the [Monday.com](http://monday.com/) board. By default the workflow will send the contact's email address to [Monday.com](http://monday.com/) and name the item after the contact's first and last name.

## Setup

This workflow requires that you set up a [Monday.com](http://monday.com/) board. To do so, follow the steps below:

1. In [Monday.com](http://monday.com/), create a new item board.
2. In the board, add the following columns:
    - Email (with type "Email")
    - Any other fields you require to the board.
3. If more columns are created, you will need to find out what their ID's are by turning on developer mode as explained in this [Monday article](https://support.monday.com/hc/en-us/articles/360000225709-Board-item-column-and-automation-or-integration-ID-s).
4. With these new IDs, you can add them to the `Create item` [Monday.com](http://monday.com/) node, this is explained further in the workflow as a sticky note.

## 📊 Basic Information

- **Workflow ID:** 1823
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 1286
- **Downloads:** 128
- **Created:** 2022/11/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1823)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **mondayCom** 
- **mauticTrigger** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
