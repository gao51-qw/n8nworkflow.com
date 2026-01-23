# Export Zammad objects (users, roles, groups, organizations) to Excel

> This n8n workflow enables you to export data from Zammad, including Users, Roles, Groups, and Organizations, into individual Excel files. It simplifies data handling and reporting by creating structured outputs for further processing or sharing.

## Features
- Export Users with associated details such as `email`, `firstname`, `lastname`, `role_ids`, and `group_ids`.
- Export Roles and Organizations with their respective identifiers and names.
- Convert all data into separate Excel files for easy access and use.

## Usage
1. Import this workflow into your n8n instance.
2. Configure the required Zammad API credentials (`zammad_base_url` and `zammad_api_key`) in the `Basic Variables` node.
3. Run the workflow to generate Excel files containing Zammad data.

## Issues and Suggestions
If you encounter any issues or have suggestions for improvement, please report them on the [GitHub repository](https://github.com/Sirhexalot/n8n-Export-Zammad-Objects-Users-Roles-Groups-and-Organizations-to-Excel).

We appreciate your feedback to help enhance this workflow!

## 📊 Basic Information

- **Workflow ID:** 2596
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 968
- **Downloads:** 96
- **Created:** 2024/12/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2596)

## 👤 Author

- **Name:** Sirhexalot
- **Username:** @sirhexalot

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×5)
- **zammad** (×2)
- **httpRequest** (×2)
- **convertToFile** (×4)
- **if** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
