# Upload leads with custom fields from Typeform to Pipedrive

> This automated workflow takes a Typeform form, and once it is filled out, it is automatically uploaded as a Lead in Pipedrive.  There is an option for custom fields (this workflow works with company size), and leaves notes in the note section based on questions answered. 

## Prerequisites
- Typeform account and [Typeform credentials](https://docs.n8n.io/integrations/credentials/typeform/) and a form for people to fill out
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/credentials/pipedrive/)

## Nodes
- Typeform node gets the data after the survey is completed
- Set node extracts data from the Typeform node and keeps only relevant data
- Function node maps the company size 
- Pipedrive node populates a pipeline with a deal and adds custom fields



## 📊 Basic Information

- **Workflow ID:** 1758
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1264
- **Downloads:** 126
- **Created:** 2022/8/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1758)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **set** 
- **stickyNote** 
- **pipedrive** (×4)
- **typeformTrigger** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
