# Handle pagination in HTTP requests

> This example workflow demonstrates how to handle pagination. 

This example assumes that the API you are making the request to has pagination, and returns a cursor (something that points to the next page).

This example workflow makes a request to the HubSpot API to fetch contacts. You will have to modify the parameters based on your API.

![workflow-screenshot](fileId:520)

**Config URL node:** This node sets the URL that the HTTP Request node calls.

**HTTP Request node:** This node makes the API call and returns the data from the API. Based on your API, you will have to modify the parameters of the node.

**NoOp node and Wait node:** These nodes help me avoiding any rate limits. If you're API has rate limits, make sure you configure the correct time in the Wait node.

**Check if pagination:** This IF node checks if the API returns any cursor. If the API doesn't return any cursor, it means that there is no data to be fetched, and the node returns false. If the API returns a cursor, it means that there is still some data that needs to be fetched. In this case, the node returns true.

**Set next URL:** This Set node is used to set the URL. In the next cycle, the HTTP Request node makes a call to this URL.

**Combine all data:** This node combines all the data that gets returned by the API calls from the HTTP Request node.


## 📊 Basic Information

- **Workflow ID:** 1169
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 12983
- **Downloads:** 1298
- **Created:** 2021/7/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1169)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **noOp** 
- **function** (×3)
- **if** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
