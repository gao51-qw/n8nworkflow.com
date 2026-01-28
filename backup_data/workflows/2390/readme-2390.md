# Automate company research using ProspectLens and Google Sheets

> 

This n8n workflow automates the process of researching companies by gathering relevant data such as traffic volume, foundation details, funding information, founders, and more.

The workflow leverages the [ProspectLens API](https://prospectlens.net), which is particularly useful for researching companies commonly found on Crunchbase and LinkedIn.

**ProspectLens** is an API that provides very detailed company data. All you need to do is supply the company's domain name.

You can obtain your ProspectLens API key here:
[https://apiroad.net/marketplace/apis/prospectlens](https://apiroad.net/marketplace/apis/prospectlens)

In n8n, create a new "HTTP Header" credential. Set `x-apiroad-key` as the "Name" and enter your APIRoad API key as the "Value". Use this credential in the HTTP Request node of the workflow.


![20240823 at 18.27.png](fileId:832)


## 📊 Basic Information

- **Workflow ID:** 2390
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 5069
- **Downloads:** 506
- **Created:** 2024/8/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2390)

## 👤 Author

- **Name:** Anthony
- **Username:** @scrapeninja

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **filter** 
- **stickyNote** 
- **googleSheets** (×2)
- **splitInBatches** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
