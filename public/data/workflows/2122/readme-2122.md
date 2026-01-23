# Automatically email great leads when they submit a form and record in HubSpot

> ## Use case
This workflow automatically qualifies great leads from a form and sends them an email 😮..
It also adds the user to Hubspot if not already added and records the outreach.

## How to setup
1. Add you **MadKudu**, **Hunter**, and **Gmail** credentials 
2. Setup your **HubSpot** Oauth2 creds using [n8n docs](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.hubspottrigger/)
3. Set the email content and subject
4. Click the Test Workflow button, enter your email and check the Slack channel
5. Activate the workflow and use the form trigger production URL to collect your leads in a smart way 

## How to adjust this template
You may want to raise or lower the threshold for your leads, as you see fit. 
You also need to update the content (the email and the subject), obviously 😅.

## 📊 Basic Information

- **Workflow ID:** 2122
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 3806
- **Downloads:** 380
- **Created:** 2024/2/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2122)

## 👤 Author

- **Name:** Mutasem
- **Username:** @mutasem

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **stickyNote** (×4)
- **formTrigger** 
- **if** (×2)
- **noOp** (×2)
- **httpRequest** 
- **hunter** 
- **gmail** 
- **set** 
- **hubspot** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
