# Automated content migration from ClickUp Docs to Airtable records

> ## Create Airtable records from new ClickUp Doc pages

This workflow automates the process of turning content from ClickUp Docs into structured data in Airtable. When a new task is created in ClickUp with a link to a ClickUp Doc in its name, this workflow triggers, fetches the entire content of that Doc, parses it into individual records, and then creates a new record for each item in a specified Airtable base and table.

## Who's it for

This template is perfect for content creators, project managers, and operations teams who use ClickUp Docs for drafting or knowledge management and Airtable for tracking and organizing data. It helps bridge the gap between unstructured text and a structured database.

## How it works

1.  **Trigger:** The workflow starts when a new task is created in a specific ClickUp Team.
2.  **Fetch & Parse URL:** It gets the new task's details and extracts the ClickUp Doc URL from the task name.
3.  **Get Doc Content:** It uses the URL to fetch the main Doc and all its sub-pages from the ClickUp API.
4.  **Process Content:** A Code node parses the text from each page. It's designed to split content by `* * *` and separate notes by looking for the "notes:" keyword.
5.  **Find Airtable Destination:** The workflow finds the correct Airtable Base and Table IDs by matching the names you provide.
6.  **Create Records:** It loops through each parsed content piece and creates a new record in your specified Airtable table.

## How to set up

1.  **Configure the `Set` Node:** Open the "Configure Variables" node and set the following values:
    * `clickupTeamId`: Your ClickUp Team ID. Find it in your ClickUp URL (e.g., `app.clickup.com/9014329600/...`).
    * `airtableBaseName`: The exact name of your target Airtable Base.
    * `airtableTableName`: The exact name of your target Airtable Table.
    * `airtableVerticalsTableName`: The name of the table in your base that holds "Vertical" records, which are linked in the main table.
2.  **Set Up Credentials:** Add your ClickUp (OAuth2) and Airtable (Personal Access Token) credentials to the respective nodes.
3.  **Airtable Fields:** Ensure your Airtable table has fields corresponding to the ones in the `Create New Record in Airtable` node (e.g., `Text`, `Status`, `Vertical`, `Notes`). You can customize the mapping in this node.
4.  **Activate Workflow:** Save and activate the workflow.
5.  **Test:** Create a new task in your designated ClickUp team. In the task name, include the full URL of the ClickUp Doc you want to process.

## How to customize the workflow

* **Parsing Logic:** You can change how the content is parsed by modifying the JavaScript in the `Parse Content from Doc Pages` Code node. For example, you could change the delimiter from `* * *` to something else.
* **Field Mapping:** Adjust the `Create New Record in Airtable` node to map data to different fields or add more fields from the source data.
* **Trigger Events:** Modify the `Trigger on New ClickUp Task` node to respond to different events, such as `taskUpdated` or `taskCommentPosted`.

## 📊 Basic Information

- **Workflow ID:** 9135
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 67
- **Downloads:** 6
- **Created:** 2025/10/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9135)

## 👤 Author

- **Name:** Fahmi Fahreza
- **Username:** @fahmiiireza

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **splitInBatches** 
- **airtable** (×4)
- **clickUpTrigger** 
- **clickUp** 
- **code** (×4)
- **httpRequest** (×2)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
