# Send outreach/cold email using Gmail to new HubSpot contacts

> ## Use case

This workflow uses Gmail to send outreach emails to new Hubspot contacts that have yet to be contacted (usually unknown contacts), and records the outreach in Hubspot. 


## Setup
1. [Setup HubSpot Oauth2 creds](https://docs.n8n.io/integrations/builtin/credentials/hubspot/) (Be careful with scopes. They have to be exact, not less or more. Yes, it's not simple, but it's well documented in the n8n docs. Be smarter than me, read the docs)
2. Setup Gmail creds. 
3. Change the from email and from name in the `Record outreach in HubSpot` node

## How to adjust this template to your needs
- Change the email message in the `Set keys` node
- Think about your criteria to reach out to new contacts. Here we simply filter for only contacts with unknown dates.




## 📊 Basic Information

- **Workflow ID:** 2112
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 3632
- **Downloads:** 363
- **Created:** 2024/2/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2112)

## 👤 Author

- **Name:** Mutasem
- **Username:** @mutasem

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **gmail** 
- **hubspot** (×2)
- **scheduleTrigger** 
- **stickyNote** (×3)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
