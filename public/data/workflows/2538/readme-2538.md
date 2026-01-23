# Demo workflow - how to use workflowStaticData()

> This workflow demonstrates how to use the `workflowStaticData()` function to set any type of variable that will persist within workflow executions. 

[https://docs.n8n.io/code/cookbook/builtin/get-workflow-static-data/](https://docs.n8n.io/code/cookbook/builtin/get-workflow-static-data/)

This can be useful for example when working with access tokens that expire after a certain time period. Using `staticData` we can keep a record of that access token and the expiry time and build our workflow logic around it. 


## Important

Static Data only persists across **_production_** executions, i.e. triggered by Webhooks or Schedule Triggers (not manual executions!)
For this the workflow will have to be activated. 

## Setup

- configure HTTP Request node to fetch access token from your API (optional)
- activate workflow
- test the workflow with the webhook production link
- you can check the population of the static data in the single executions

### Feedback

If you found this useful or want to report some missing information - I'd be happy to hear from you at [ria@n8n.io](mailto:ria@n8n.io)




## 📊 Basic Information

- **Workflow ID:** 2538
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 10955
- **Downloads:** 1095
- **Created:** 2024/11/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2538)

## 👤 Author

- **Name:** Ria
- **Username:** @riascho

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **webhook** 
- **noOp** 
- **httpRequest** 
- **code** (×2)
- **scheduleTrigger** 
- **stickyNote** (×2)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
