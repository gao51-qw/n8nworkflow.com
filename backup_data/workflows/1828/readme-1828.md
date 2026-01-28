# Create or update Mautic contact on a new Calendly event

> This workflow creates or updates a Mautic contact when a new event is scheduled in Calendly. The first name and email address are the only two fields that get updated.

# Prerequisites

- Calendly account and [Calendly credentials](https://docs.n8n.io/integrations/builtin/credentials/calendly/).
- Mautic account and [Mautic credentials](https://docs.n8n.io/integrations/builtin/credentials/mautic/).

# How it works

1. Triggers on a new event in Calendly.
2. Creates a new contact in Mautic if the email address does not exist in Mautic.
3. Updates the contact's first name in Mautic if the email address exists in Mautic.

## 📊 Basic Information

- **Workflow ID:** 1828
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 1037
- **Downloads:** 103
- **Created:** 2022/11/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1828)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **calendlyTrigger** 
- **mautic** 
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
