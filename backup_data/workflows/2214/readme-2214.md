# Grist: On row confirmed, create row in other table

> In Grist, when I mark a row as confirmed (via a toggle):
![image.png](fileId:787)

a webhook is set up to notify n8n, and this workflow will create derived records in the destination table.

### Design decisions
#### Confirmation-based
In the source table **there is a boolean column "Confirmed" that will trigger the transfer**.
This way there is a manual check involved & it's a conscious step to trigger the workflow.
#### Runs once
If the destination table already contains an entry, **we will not re-create/update** it (as it might've already been changed manually)


### Setup
1. Create a boolean column `Confirmed` in source table
2. **Add a webhook** in [Grist Settings](https://support.getgrist.com/newsletters/2023-05/#webhooks)
3. Add grist **API credentials** in n8n
4. Set **document ID** & source **table ID/Name** in the '**get existing**' node
3. Set **docID**, the destination **table ID/Name** - and the **columns & values** you want in the **Create Row** node

## 📊 Basic Information

- **Workflow ID:** 2214
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1014
- **Downloads:** 101
- **Created:** 2024/4/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2214)

## 👤 Author

- **Name:** Manu
- **Username:** @tennox

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **webhook** 
- **grist** (×2)
- **if** (×2)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
