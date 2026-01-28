# Create HubSpot contacts from LinkedIn post interactions

> This workflow automatically does the following:
- Scrapes comments and likes from a LinkedIn post.
- Adds contact data (nominative and verified email address,  gender, standardized first name and last name, all legal company information).
- Adds these contacts to Airtable.
- Sends an ultra-personalized cold email sequence.
- Sends a Linkedin invitation after the cold email sending.
- Pushes all contacts to HubSpot.

## Prerequisites

- A Phantombuster account and [credentials](https://docs.n8n.io/integrations/credentials/phantombuster/)
- A Lemlist account and [credentials](https://docs.n8n.io/integrations/credentials/lemlist/)
- A Dropcontact account and [credentials](https://docs.n8n.io/integrations/credentials/dropcontact/)
- A HubSpot account and [credentials](https://docs.n8n.io/integrations/credentials/hubspot/)

## How it works

- [Cron node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.cron/) executes the workflow every hour.
- [Phantombuster node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.phantombuster/) **(Launch agent)** launches the "LinkedIn Post Likers" phantom and the "LinkedIn Post Commenters" phantom. Note that you have to create these phantoms before setting your workflow automation.
- **Phantombuster node (Get Output agent)** gets results from the previous phantoms.
- [Dropcontact node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.dropcontact/) fetches the new contact information and returns the data of the person and the company associated with the email address, job function, and all legal information.
- [Airtable node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.airtable/) **(List)** lists all the records in the Contacts table.
- [IF node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.if/) routes the workflow based on whether a contact is in Airtable.
- [Set node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.set/) sets the required data for the following nodes.
- **Airtable node (Update)** updates the record's name.
- **Airtable node (Append)** creates a record if the account doesn't exist yet.
- [Lemlist node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.lemlist/) adds a contact to an existing campaign.
- **Phantombuster node (Launch agent)** launches the "LinkedIn Network Booster" phantom. Note that you have to create these phantoms before setting your automation.
- [Hubspot node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.hubspot/) creates or updates the contacts in the HubSpot CRM.

## 📊 Basic Information

- **Workflow ID:** 1323
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 6826
- **Downloads:** 682
- **Created:** 2021/11/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1323)

## 👤 Author

- **Name:** Pauline
- **Username:** @pauline

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **cron** 
- **if** 
- **airtable** (×3)
- **set** (×2)
- **lemlist** 
- **hubspot** 
- **phantombuster** (×5)
- **dropcontact** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
