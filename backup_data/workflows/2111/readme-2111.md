# Enrich new Hubspot contacts with contact and company data from ExactBuyer

> ## Use Case 

This workflow aims to enrich new contacts in HubSpot. The more relevant the HubSpot profile, the more useful it is. Once active, this n8n workflow will update the social profiles, contact data (phone, email) as well as location data from ExactBuyer.

## Setup
1. Add HubSpot trigger credential (be careful, scopes must be exactly as in [n8n docs](https://docs.n8n.io/integrations/builtin/credentials/hubspot/) )
2. Add your Exact Buyer API key
3. Add HubSpot credential for update node (be careful, scopes must be same as [n8n docs](https://docs.n8n.io/integrations/builtin/credentials/hubspot/) for this. This is different from the trigger cred)
4. Activate workflow


## How to adjust this template
There's plenty of interesting info that ExactBuyer returns that could be helpful. Take a look and update this workflow to add what you need.

## 📊 Basic Information

- **Workflow ID:** 2111
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 1779
- **Downloads:** 177
- **Created:** 2024/2/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2111)

## 👤 Author

- **Name:** Mutasem
- **Username:** @mutasem

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **noOp** 
- **stickyNote** (×5)
- **httpRequest** 
- **set** 
- **if** 
- **hubspot** (×2)
- **hubspotTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
