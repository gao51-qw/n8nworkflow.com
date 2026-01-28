# Convert Typeform data into spreadsheet

> 1. Trigger on new Typeform form submission
1. Get existing spreadsheet-file from NextCloud
1. Read data from file into flow
1. Append a new row to flow-data
1. Convert flow-data to a spreadsheet-file
1. Save updated spreadsheet-file to NextCloud

![workflow-screenshot](fileId:25)

# Assumptions

## Spreadsheet file

Named: Problems.xls in folder "examples".

Columns Names:
 - Name
 - Email
 - Severity
 - Problem

![spreadsheetexamplefile.png](fileId:24)

# Typeform

Typeform formular with questions named exactly like the columns of the Google Sheet.


## 📊 Basic Information

- **Workflow ID:** 179
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1888
- **Downloads:** 188
- **Created:** 2019/11/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/179)

## 👤 Author

- **Name:** Jan Oberhauser
- **Username:** @jan

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **typeformTrigger** 
- **nextCloud** (×2)
- **spreadsheetFile** (×2)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
