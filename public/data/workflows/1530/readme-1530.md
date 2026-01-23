# Create Onfleet tasks from local spreadsheets

> **Summary**

Onfleet is a last-mile delivery software that provides end-to-end route planning, dispatch, communication, and analytics to handle the heavy lifting while you can focus on your customers.

This workflow template loads in a spreadsheet from your **local storage** and **automatically creates Onfleet tasks** on a one-time basis upon workflow trigger. You can use this workflow as a task importer.

**Configurations**

- Update the `Read Binary File` node with the absolute file path to the local spreadsheet of interest
- Update the Onfleet node with your own Onfleet credentials, to register for an **Onfleet API key**, please visit https://onfleet.com/signup to get started
- You can easily change how the Onfleet task is created by mapping to additional data in the spreadsheet
- For import templates, visit [Onfleet Support](https://support.onfleet.com/hc/en-us/articles/360023910131-Task-Overview#h_4667f289-d298-49bc-9faa-00898a922dab) to learn more 👍

## 📊 Basic Information

- **Workflow ID:** 1530
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 764
- **Downloads:** 76
- **Created:** 2022/3/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1530)

## 👤 Author

- **Name:** James Li
- **Username:** @ilsemaj

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **onfleet** 
- **readBinaryFile** 
- **spreadsheetFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
