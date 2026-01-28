# Create Salesforce accounts based on Excel file data

> This workflow shows a no code approach to creating Salesforce accounts and contacts based on data coming from an Excel file. For Excel 365 (the online version of Microsoft Excel) check out [this workflow](https://n8n.io/workflows/1793-create-salesforce-accounts-based-on-excel-365-data/) instead.

![image.png](fileId:674)

To run the workflow:

1. Make sure your Salesforce account is authenticated with n8n.
2. Have a Microsoft Excel workbook with contacts and their account names ready. The workflow uses [this example file](https://static.thomasmartens.eu/n8n/Excel-File-to-Salesforce.xlsx), but you probably want to use your own data instead.
![image.png](fileId:673)
3. Hit the Execute Workflow button at the bottom of the n8n canvas.

Here is how it works:

The workflow first searches for existing Salesforce accounts by name. It then branches out depending on whether the account already exists in Salesforce or not. If an account does not exist yet, it will be created. The data is then normalised before both branches converge again. Finally the contacts are created or updated as needed in Salesforce.





## 📊 Basic Information

- **Workflow ID:** 1794
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 2707
- **Downloads:** 270
- **Created:** 2022/9/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1794)

## 👤 Author

- **Name:** Tom
- **Username:** @mutedjam

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **manualTrigger** 
- **salesforce** (×3)
- **merge** (×3)
- **if** 
- **itemLists** 
- **renameKeys** 
- **set** 
- **stickyNote** 
- **httpRequest** 
- **spreadsheetFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
