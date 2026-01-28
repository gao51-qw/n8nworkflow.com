# Create Salesforce accounts based on Excel 365 data

> This workflow shows a no code approach to creating Salesforce accounts and contacts based on data coming from Excel 365 (the online version of Microsoft Excel). For a version working with regular Excel files check out [this workflow](https://n8n.io/workflows/1794-create-salesforce-accounts-based-on-excel-file-data/) instead.

![image.png](fileId:672)

To run the workflow:

1. Make sure you have both Excel 365 and Salesforce authenticated with n8n.
2. Have a Microsoft Excel workbook with contacts and their account names ready:
![image.png](fileId:670)
3. Select the workbook and sheet in the Microsoft Excel node of the workflow, then configure the range to read data from:
![image.png](fileId:671)
4. Hit the **Execute Workflow** button at the bottom of the n8n canvas:
![image.png](fileId:669)

Here is how it works:

The workflow first searches for existing Salesforce accounts by name. It then branches out depending on whether the account already exists in Salesforce or not. If an account does not exist yet, it will be created. The data is then normalised before both branches converge again. Finally the contacts are created or updated as needed in Salesforce.

## 📊 Basic Information

- **Workflow ID:** 1793
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 3232
- **Downloads:** 323
- **Created:** 2022/9/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1793)

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
- **microsoftExcel** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
