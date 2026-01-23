# Xml to SQL database import

> This is an example workflow that imports an XML file into an SQL database.
- The ReadBinaryFiles node loads the XML file from the server.
- Then the Code node extracts the file content from the binary buffer.
- Afterwards, an XML node converts the XML string into a JSON structure.
- Finally, in the MySQL node inserts the data records into the SQL table.

In the upper part of the workflow there is another MySQL node that is disabled. This node creates a new table with all the required variables based on the sample SQL database: https://www.mysqltutorial.org/mysql-sample-database.aspx

## 📊 Basic Information

- **Workflow ID:** 1948
- **Complexity:** beginner
- **Node Count:** 0
- **Views:** 2783
- **Downloads:** 278
- **Created:** 2023/9/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1948)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **readBinaryFiles** 
- **itemLists** 
- **code** 
- **xml** 
- **mySql** (×2)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
