# Sync timer entries from Clockify to Syncro

> This workflow will take a timer entry from Clockify and submit it to a matching ticket in Syncro. It saves the time entry ID from Clockify and the time entry ID from Syncro into a Google Sheets. Then, it will check if a match already exists from a previous update and will update the same time entry if the description or time is changed in Clockify. There is a Set node with the name and Syncro IDs of technicians.

If you have multiple technicians with the same name, this won't work for you. Likewise, if the name in Clockify doesn't exactly match what you put in the Set, it won't work. You also need to setup a webhook in Clockify set to trigger on "Time entry updated (anyone)" and pointed at your workflow. Configured this way, you can start and stop time entries at will and it won't do anything until you change the description.

&gt; This workflow is part of an MSP collection, The original can be found here: https://github.com/bionemesis/n8nsyncro

## 📊 Basic Information

- **Workflow ID:** 1488
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1129
- **Downloads:** 112
- **Created:** 2022/2/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1488)

## 👤 Author

- **Name:** Jonathan
- **Username:** @jon-n8n

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **webhook** 
- **googleSheets** (×2)
- **set** (×4)
- **if** (×2)
- **httpRequest** (×2)
- **function** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
