# Google Sheets UI for n8n Workflow

> ## Google Sheets UI for Workflow Control

This n8n template provides a practical and efficient way to manage your n8n workflows using Google Sheets as a user-friendly interface. It demonstrates how to leverage a simple spreadsheet to control inputs, capture outputs, and track the processing status of individual data rows, offering a clear and visual overview of your automation tasks.

### Purpose of This Template:

The primary purpose of this template is to illustrate how Google Sheets can serve as a dynamic UI for your n8n automations. It's designed for n8n users who need:

- A structured method to feed specific data into their workflows.
- The ability to selectively trigger workflow execution based on data status.
- A centralized place to view and store workflow outputs alongside original inputs.
- A simple, no-code solution for managing workflow data without building custom applications.

### Setup Instructions:

To use this template, follow these steps:

1. **Create a Google Sheet:** Set up a new Google Sheet ([see the template here](https://docs.google.com/spreadsheets/d/13xu9zKI8yDqs7971qIq9zDCBCnhYzdVq8pdtnQ9vMkI/edit?usp=sharing)) with three columns: `Color`, `Status`, and `Number`. Populate the `Color` column with some sample data (e.g., color names) and set the `Status` for the rows you want to process to `READY`.
2. **Import the n8n Workflow:** Import this n8n template into your n8n instance.
3. **Configure Google Sheets Nodes:**
   - For the first Google Sheets node (Read operation), ensure it's connected to your newly created Google Sheet and configured to read rows where the `Status` column is `READY`. You will need to authenticate your Google Sheets account.
   - For the second Google Sheets node (Update operation), ensure it's also connected to the same Google Sheet. The node should automatically map the `row_number`, `Number`, and `Status` fields from the preceding nodes.
4. **Execute the Workflow:** Run the workflow. Observe how it reads `READY` rows, processes them (calculates string length), and updates the `Number` and `Status` columns in your Google Sheet to `DONE`.
5. **Control Execution:** To process new data, simply add new rows to your Google Sheet and set their `Status` to `READY`. Rerunning the workflow will then only process these new entries.

For more details and context on this approach, you can refer to the related blog post [here](https://n8nplaybook.com/post/2025/06/google-sheets-as-n8n-ui/).

## 📊 Basic Information

- **Workflow ID:** 5102
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 337
- **Downloads:** 33
- **Created:** 2025/6/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5102)

## 👤 Author

- **Name:** Viktor Klepikovskyi
- **Username:** @vklepikovskyi

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** 
- **splitInBatches** 
- **set** 
- **googleSheets** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
