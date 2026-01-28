# Assign Zammad users to organizations based on email domain

> This n8n workflow automates the assignment of existing users to organizations in Zammad based on their email domains, utilizing Zammad’s "domain-based assignment" feature.

## Use Case
Automate the post-hoc assignment of existing users to organizations in Zammad by leveraging their email domains. This ensures efficient management of user-organization relationships using Zammad’s "domain-based assignment" feature.

## Requirements
- An active Zammad account with API access.
- Existing users and organizations in Zammad with proper email and domain configurations.
- Zammad organizations must have domain-based assignment enabled.

## Credentials
- Set up your Zammad API credentials in n8n to allow the workflow to interact with your Zammad instance securely.

If you have found an error or have any suggestions, please report them here on [Github](GitHub).


## 📊 Basic Information

- **Workflow ID:** 2588
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 575
- **Downloads:** 57
- **Created:** 2024/11/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2588)

## 👤 Author

- **Name:** Sirhexalot
- **Username:** @sirhexalot

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **manualTrigger** 
- **if** (×2)
- **set** 
- **zammad** (×3)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
