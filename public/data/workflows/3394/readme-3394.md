# Airtable batch update / insert rows (send faster + save API call requests)

> This workflow allows you to batch update/insert Airtable rows in groups of 10, significantly reducing the number of API calls and increasing performance.

## 🚀 How It Works

1. **Copy the 3 Nodes**  
   Copy the three nodes inside the red note box into your workflow.

2. **Set Your Fields**  
   In the `Set Fields` node, define the fields you want to update.  
   ➤ Only include fields that match column names in your Airtable table.  
   ➤ Make sure the field names are spelled **exactly** as they appear in Airtable.
   ➤ Make sure the field type are correctly set. So numbers columns in Airtable need numbers type set as the field.

3. **Configure the Airtable Batch Node**  
   - Enter your **Airtable Base ID**
     The part with `app...` in the URL:
airtable\.com / **app8pqOLeka1Cglwg** / tblnXZOdy8VtkAAJD/...
   - Enter your **Airtable Table ID**
     The part with `tbl...` in the URL:
airtable\.com / app8pqOLeka1Cglwg / **tblXXZOdy8VtkAAJD** /...
   - **Set Matching Fields** (`fieldsToMergeOn`)  
   Provide a string array that tells Airtable how to match existing rows. Examples:
     - Match by one field (e.g. `TaskID`):  
     `{{["TaskID"]}}`
     - Match by multiple fields (e.g. `firstname` and `lastname`):  
     `{{["firstname", "lastname"]}}`

   - **Choose the Mode** (`mode` field)  
   Available options:
     - `upsert`: Update if a record exists, otherwise insert a new one
     - `insert`: Always insert as new records
     - `update`: Only update existing records (you **must** provide a field named `id`)


## 📊 Basic Information

- **Workflow ID:** 3394
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 469
- **Downloads:** 46
- **Created:** 2025/4/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3394)

## 👤 Author

- **Name:** Simon Mayerhofer
- **Username:** @s3n

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **httpRequest** (×3)
- **debugHelper** 
- **manualTrigger** 
- **splitOut** 
- **splitInBatches** 
- **executeWorkflowTrigger** 
- **switch** 
- **if** (×3)
- **wait** (×4)
- **merge** (×3)
- **stickyNote** (×6)
- **aggregate** (×4)
- **set** (×4)
- **executeWorkflow** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
