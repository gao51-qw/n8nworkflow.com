# Read XML file and store content in Google Sheets

> This workflow shows a low code approach to parsing an XML file and storing its contents in a Google Sheets spreadsheet.

![image.png](fileId:681)

To run the workflow:

* Make sure you are running n8n 0.197 or newer
* Have n8n authenticated with Google Sheets

How it's done:

1. This workflow first downloads an example file using the [HTTP Request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) node and reads this file using the [XML](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.xml/) node.
![image.png](fileId:682)
2. It then runs the [Item Lists](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.itemlists/) node to split out the individual `food` items from the example file.
3. It then splits up the workflow into a separate branch creating a new spreadsheet file using the [Google Sheets](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/) node. To read the column names we're using the [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) method inside a [Set](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.set/) node.
4. Once the spreadsheet is created (the workflow waits for this using the [Merge](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.merge/) node), the data is appended to the newly created sheet (again using the [Google Sheets](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/) node).

## 📊 Basic Information

- **Workflow ID:** 1810
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 6392
- **Downloads:** 639
- **Created:** 2022/10/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1810)

## 👤 Author

- **Name:** Tom
- **Username:** @mutedjam

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** 
- **httpRequest** 
- **xml** 
- **googleSheets** (×3)
- **set** 
- **itemLists** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
