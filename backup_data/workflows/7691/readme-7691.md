# Sync Google Sheets contacts to SeaTable with update/insert logic

> # Keep your Google Sheets contacts in sync with SeaTable 
Update or Insert records in SeaTable

## How it works  
- Use a Google Sheet as your central contact list.  
- For each contact in the sheet:
  - Check if the record already exists in **SeaTable** (based on email).  
  - If it exists → update the record.  
  - If it doesn’t → insert the new contact.  

## How to use  
1. Copy the Google Sheet [Template Link](https://docs.google.com/spreadsheets/d/1mFKp3wmbV9qp2tpGGsN72zdiC32y8H1nhjdgP885y-U/edit?usp=sharing).  
   - Get the **Google Sheet ID** (the string between `d/` and `/edit`).  
2. In the workflow, set the Sheet ID in the `settings` node.  
3. In SeaTable, create or update a base with a **Table1** containing these fields:  
   - `email`  
   - `firstname`  
   - `lastname`  
   - `company`  
4. Configure your **Google Sheets** and **SeaTable credentials** in n8n.  
5. Add your own contacts to the Google Sheet & run the workflow 

## Requirements  
- Google credentials (for Sheets access)  
- SeaTable account (Cloud)  
- n8n (tested on version **1.105.2**, Ubuntu)  

## Example use cases  
- Maintain a **central CRM-like database** in SeaTable.  
- Ensure consistent contact data when collecting leads in Google Sheets.  
- Automate **record deduplication** (prevent duplicate entries).  

## Need Help?  
- Join the discussion [here](https://www.linkedin.com/posts/n8n-about_n8n-seatable-airtable-activity-7363129613465571332-Scun/) or contact me directly on [LinkedIn](https://www.linkedin.com/in/stephaneheckel/).  
- Ask the community in the [n8n Forum](https://community.n8n.io/).  

## 📊 Basic Information

- **Workflow ID:** 7691
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 111
- **Downloads:** 11
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7691)

## 👤 Author

- **Name:** Stéphane Heckel
- **Username:** @stephaneheckel

## 🏷️ Categories

- CRM
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **noOp** 
- **if** 
- **seaTable** (×3)
- **httpRequest** (×2)
- **googleSheets** 
- **set** (×3)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
