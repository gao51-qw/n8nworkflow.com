# Form with dynamic dropdown field

> This workflow creates a customizable form with a dynamic dropdown field that automatically updates its options from an external data source. 

### How it works

- The workflow polls an external data source (Google Sheets in this example) at regular intervals
- New values are processed and formatted for the dropdown
- The form automatically updates with the new dropdown options

### Set up steps

**Configure your data source:**

- Default setup uses Google Sheets 
	- replace with credentials for your sheet
	- set up the update frequency
- Or modify to use any other data source (API, database, etc.)

**Adjust the form configuration:**

- Customize the form title and description
- Add or modify form fields as needed
- The template includes the dropdown field by default

**Connect form submissions:**

- Use the "Execute Workflow" node to process form submissions

This template provides a foundation for creating dynamic forms that stay synchronized with your data sources, making it ideal for situations where dropdown options need to reflect current data.

## 📊 Basic Information

- **Workflow ID:** 2712
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 7249
- **Downloads:** 724
- **Created:** 2025/1/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2712)

## 👤 Author

- **Name:** Obsidi8n
- **Username:** @derruttie

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **n8n** (×2)
- **formTrigger** 
- **googleSheetsTrigger** 
- **executeWorkflow** 
- **stickyNote** (×7)
- **code** 
- **set** (×2)
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
