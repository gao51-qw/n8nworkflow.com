# Write all Linear tickets to Google Sheets

> ## Use Case
Track all Linear tickets in Google sheets. Useful if you want to do some custom analysis but don't want to pay for Linear's Plus features (Linear Insights) or that it does not cover.

![Screenshot 20240229 at 12.20.05.png](fileId:761)

## Setup 
1. Add Linear API header key
2. Add Google sheets creds
3. Update which teams to get tickets from in Graphql Nodes
4. Update which Google Sheets page to write all the tickets to
 **You only need to add one column, id, in the sheet. Google Sheets node in automatic mapping mode will handle adding the rest of the columns.**
5. Set any custom data on each ticket
6. Activate workflow 🚀

## How to adjust this template
Set any custom fields you want to get out of this, that you can quickly do in n8n.


## 📊 Basic Information

- **Workflow ID:** 2148
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1281
- **Downloads:** 128
- **Created:** 2024/2/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2148)

## 👤 Author

- **Name:** Mutasem
- **Username:** @mutasem

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **scheduleTrigger** 
- **graphql** (×2)
- **stickyNote** (×5)
- **if** 
- **set** (×2)
- **splitOut** 
- **googleSheets** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
