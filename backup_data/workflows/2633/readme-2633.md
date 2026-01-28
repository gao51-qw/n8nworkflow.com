# INSEE company data enrichment for Agile CRM (For French companies only)

> ## How it works 
1) Extracts all company entries in Agile CRM
2) Search for company name in French INSEE OpenData database to extract address and government ID (SIREN)
3) Updates entries with data extracted from French Insee OpenData dabase

Workflow also has a readonly feature to make sure entry is not overwritten.

## Setup steps 
1. Add your AgileCRM credentials
2. Add your INSEE OpenData credentials
3. Add two company custom fields in your Agile CRM (for SIREN data and ReadOnly support)



## 📊 Basic Information

- **Workflow ID:** 2633
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1333
- **Downloads:** 133
- **Created:** 2024/12/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2633)

## 👤 Author

- **Name:** Johan Denoyer
- **Username:** @jdenoy

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **stickyNote** (×4)
- **code** 
- **set** 
- **scheduleTrigger** 
- **noOp** 
- **agileCrm** (×2)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
