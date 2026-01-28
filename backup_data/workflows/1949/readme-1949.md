# Create 2 XML files: with and without XML attributes

> This workflow demonstrates two ways of exporting data from SQL to XML.

First, several random records are received from the MySQL database.

Then, in the upper part of the workflow, the structure of an XML is defined in the Set node. After that, the ItemLists node combines all items into an array. This allows an XML node to create a simple XML file.

The lower part of the workflow shows how to create an XML with attributes. It is almost identical except that a $ (dollar sign) JSON key is used to define XML attributes.

Finally, both files are saved locally.

## 📊 Basic Information

- **Workflow ID:** 1949
- **Complexity:** beginner
- **Node Count:** 0
- **Views:** 1566
- **Downloads:** 156
- **Created:** 2023/9/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1949)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **manualTrigger** 
- **mySql** 
- **set** (×2)
- **itemLists** (×2)
- **xml** (×2)
- **moveBinaryData** (×2)
- **stickyNote** (×2)
- **writeBinaryFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
