# Create Salesforce accounts based on Google Sheets data

> This workflow shows a no code approach to creating Salesforce accounts and contacts based on data coming from Google Sheets.

![image.png](fileId:667)

To run the workflow:

1. Make sure you have both Google Sheets and Salesforce authenticated with n8n.
2. Have a Google Sheet with contacts and their account names ready, copy the respective sheet ID from the URL:
![image.png](fileId:666)
3. Add the sheet ID to the Google Sheet node of the workflow:
![image.png](fileId:668)
4. Hit **Execute Workflow**

Here is how it works:

The workflow first searches for existing Salesforce accounts by name. It then branches out depending on whether the account already exists in Salesforce or not. If an account does not exist yet, it will be created. The data is then normalised before both branches converge again. Finally the contacts are created or updated as needed in Salesforce.

## 📊 Basic Information

- **Workflow ID:** 1792
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 15562
- **Downloads:** 1556
- **Created:** 2022/9/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1792)

## 👤 Author

- **Name:** Tom
- **Username:** @mutedjam

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** 
- **salesforce** (×3)
- **merge** (×3)
- **if** 
- **itemLists** 
- **renameKeys** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
