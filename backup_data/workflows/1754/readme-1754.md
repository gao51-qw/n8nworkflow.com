# Identify new Google Sheets rows

> ![image.png](fileId:652)

This workflow identifies new rows in Google Sheets using a separate column keeping track of already processed rows.

For this approach to work, the sheet needs to meet two requirements:
- A unique identifier for each row is required
- A column used to differentiate new/processed rows is present

Our example sheet looks like this:

![image.png](fileId:649)

So the row identifier is named `ID`, the new/processed column is called `Processed`. Update the workflow accordingly if your columns have different names.

Now if the workflow runs, it discovers all three rows as new. After processing them, it will add a timestamp to the Processed column:

![image.png](fileId:650)

The next time the workflow is executed it will skip the existing rows and only process newly added data:

![image.png](fileId:648)

![image.png](fileId:651)

## 📊 Basic Information

- **Workflow ID:** 1754
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 4683
- **Downloads:** 468
- **Created:** 2022/7/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1754)

## 👤 Author

- **Name:** Tom
- **Username:** @mutedjam

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **if** 
- **noOp** 
- **googleSheets** (×2)
- **set** 
- **interval** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
