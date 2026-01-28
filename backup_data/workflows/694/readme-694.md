# Transform data in Google Sheets

> 
This workflow appends, lookup, updates, and reads data from a Google Sheet spreadsheet.

![workflow-screenshot](fileId:468)

**Set node:** The Set node is used to generate data that we want to add to Google Sheets. Depending on your use-case you might have data coming from a different source. For example, you might be fetching data from a WebHook call. Add the node that will fetch the data that you want to add to the Google Sheet.
Use can then use the Set node to set the data that you want to add to the Google Sheets.

**Google Sheets node:** This node will add the data from the Set node in a new row to the Google Sheet. You will have to enter the Spreadsheet ID and the Range to specify which sheet you want to add the data to.

**Google Sheets1 node:** This node looks for a specific value in the Google Sheet and returns all the rows that contain the value. In this example, we are looking for the value Berlin in our Google Sheet. If you want to look for a different value, enter that value in the ***Lookup Value*** field, and specify the column in the ***Lookup Column*** field.

**Set1 node:** The Set node sets the value of the rent by $100 for the houses in Berlin. We pass this new data to the next nodes in the workflow.

**Google Sheets2 node:** This node will update the rent for the houses in Berlin with the new rent set in the previous node. We are mapping the rows with their ID. Depending on your use-case, you might want to map the values with a different column. To set this enter the column name in the ***Key*** field.

**Google Sheets3 node:** This node returns the information from the Google Sheet. You can specify the columns that should get returned in the ***Range*** field. Currently, the node fetches the data for columns A to D. To fetch the data only for columns A to C set the range to `A:C`.

This workflow can be broken down into different workflows each with its own use case. For example, we can have a workflow that appends new data to a Google Sheet, and another workflow that lookups for a certain value and returns that value.

You can learn to build this workflow on the documentation page of the [Google Sheets](https://docs.n8n.io/nodes/n8n-nodes-base.googleSheets/#google-sheets) node.

## 📊 Basic Information

- **Workflow ID:** 694
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 5265
- **Downloads:** 526
- **Created:** 2020/9/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/694)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×4)
- **set** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
