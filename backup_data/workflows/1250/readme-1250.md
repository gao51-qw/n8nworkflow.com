# Parse Ycombinator news page

> Extract data from a webpage (Ycombinator news page) and create a nice list using itemList node. It seems that current version in n8n (0.141.1) requires to extract each variable one by one. Hopefully in a futute it will be possible to create the table using just one itemList node.

Another nice feature of the workflow is an automatically generated file name with the resulting table. Check out the "fileName" option of the Spreadsheet File node:
 ```
"Ycombinator_news_{{new Date().toISOString().split('T', 1)[0]}}.{{$parameter[\"fileFormat\"]}}"

```

The resulting table is saved as .xls file and delivered via email

![workflow-screenshot](fileId:543)

## 📊 Basic Information

- **Workflow ID:** 1250
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 3100
- **Downloads:** 310
- **Created:** 2021/10/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1250)

## 👤 Author

- **Name:** Eduard
- **Username:** @eduard

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **htmlExtract** 
- **itemLists** (×2)
- **merge** 
- **spreadsheetFile** 
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
